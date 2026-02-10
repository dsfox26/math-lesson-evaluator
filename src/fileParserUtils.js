import JSZip from 'jszip';

// --- DOCX extraction with OMML math support ---

const WORD_NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
const MATH_NS = 'http://schemas.openxmlformats.org/officeDocument/2006/math';

function extractMathText(mathEl) {
  // Convert an OMML math element to plain text
  let result = '';
  for (const child of mathEl.childNodes) {
    if (child.nodeType !== 1) continue; // element nodes only
    const local = child.localName;

    if (local === 'f') {
      // Fraction: m:f contains m:num and m:den
      const num = child.getElementsByTagNameNS(MATH_NS, 'num')[0];
      const den = child.getElementsByTagNameNS(MATH_NS, 'den')[0];
      const numText = num ? extractMathText(num) : '';
      const denText = den ? extractMathText(den) : '';
      result += numText + '/' + denText;
    } else if (local === 'r') {
      // Math run: m:r contains m:t (math text)
      const ts = child.getElementsByTagNameNS(MATH_NS, 't');
      for (const t of ts) {
        result += t.textContent || '';
      }
    } else if (local === 'sSup') {
      // Superscript: base^sup
      const base = child.getElementsByTagNameNS(MATH_NS, 'e')[0];
      const sup = child.getElementsByTagNameNS(MATH_NS, 'sup')[0];
      result += (base ? extractMathText(base) : '') + '^' + (sup ? extractMathText(sup) : '');
    } else if (local === 'sSub') {
      // Subscript: base_sub
      const base = child.getElementsByTagNameNS(MATH_NS, 'e')[0];
      const sub = child.getElementsByTagNameNS(MATH_NS, 'sub')[0];
      result += (base ? extractMathText(base) : '') + '_' + (sub ? extractMathText(sub) : '');
    } else if (local === 'rad') {
      // Radical (square root)
      const deg = child.getElementsByTagNameNS(MATH_NS, 'deg')[0];
      const e = child.getElementsByTagNameNS(MATH_NS, 'e')[0];
      const degText = deg ? extractMathText(deg).trim() : '';
      const eText = e ? extractMathText(e) : '';
      if (degText && degText !== '2') {
        result += degText + '-root(' + eText + ')';
      } else {
        result += 'sqrt(' + eText + ')';
      }
    } else if (local === 'd') {
      // Delimiter (parentheses, brackets)
      const e = child.getElementsByTagNameNS(MATH_NS, 'e');
      const parts = [];
      for (const el of e) parts.push(extractMathText(el));
      result += '(' + parts.join(', ') + ')';
    } else {
      // For any other math element, recurse
      result += extractMathText(child);
    }
  }
  return result;
}

function extractParagraphText(paraEl) {
  // Walk through a w:p element and extract text + math in order
  let text = '';
  for (const child of paraEl.childNodes) {
    if (child.nodeType !== 1) continue;
    const ns = child.namespaceURI;
    const local = child.localName;

    if (ns === MATH_NS && (local === 'oMath' || local === 'oMathPara')) {
      text += extractMathText(child);
    } else if (ns === WORD_NS && local === 'r') {
      // Regular text run
      const ts = child.getElementsByTagNameNS(WORD_NS, 't');
      for (const t of ts) {
        text += t.textContent || '';
      }
      // Check for tabs and breaks
      if (child.getElementsByTagNameNS(WORD_NS, 'tab').length > 0) {
        text += '\t';
      }
      if (child.getElementsByTagNameNS(WORD_NS, 'br').length > 0) {
        text += '\n';
      }
    } else if (ns === WORD_NS && local === 'hyperlink') {
      // Hyperlink — extract inner runs
      const runs = child.getElementsByTagNameNS(WORD_NS, 'r');
      for (const r of runs) {
        const ts = r.getElementsByTagNameNS(WORD_NS, 't');
        for (const t of ts) {
          text += t.textContent || '';
        }
      }
    }
  }
  return text;
}

export async function extractTextFromDocx(file) {
  const arrayBuffer = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(arrayBuffer);

  const docXml = await zip.file('word/document.xml')?.async('string');
  if (!docXml) {
    // Fallback to mammoth if document.xml not found
    const mammoth = await import('mammoth');
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(docXml, 'application/xml');

  // Get all paragraphs in the document body
  const body = doc.getElementsByTagNameNS(WORD_NS, 'body')[0];
  if (!body) return '';

  const paragraphs = body.getElementsByTagNameNS(WORD_NS, 'p');
  const lines = [];
  for (const para of paragraphs) {
    lines.push(extractParagraphText(para));
  }

  return lines.join('\n');
}


// --- PDF extraction with fraction detection ---

export async function extractTextFromPdf(file) {
  const pdfjsLib = await import('pdfjs-dist');
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.mjs',
    import.meta.url
  ).toString();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  const pageTexts = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    // Build positioned items with coordinates
    const items = content.items
      .filter(item => item.str && item.str.trim() !== '')
      .map(item => ({
        str: item.str,
        x: item.transform[4],
        y: item.transform[5],
        width: item.width,
        fontSize: Math.abs(item.transform[0]) || Math.sqrt(item.transform[2] ** 2 + item.transform[3] ** 2),
        height: item.height,
      }));

    if (items.length === 0) {
      pageTexts.push('');
      continue;
    }

    // Detect fractions: look for vertically stacked short numeric items at similar x
    const fractionPairs = detectFractions(items);
    const usedIndices = new Set();
    for (const pair of fractionPairs) {
      usedIndices.add(pair.numIdx);
      usedIndices.add(pair.denIdx);
    }

    // Group remaining items into lines by y-position
    const lineThreshold = 3; // items within 3 units of y are on the same line
    const lineGroups = [];

    // Combine fraction pairs into single items and add to list
    const processedItems = [];
    for (let j = 0; j < items.length; j++) {
      if (usedIndices.has(j)) continue;
      processedItems.push({ ...items[j], originalIdx: j });
    }
    // Insert fraction items at the position of the numerator
    for (const pair of fractionPairs) {
      const numItem = items[pair.numIdx];
      processedItems.push({
        str: pair.numStr + '/' + pair.denStr,
        x: numItem.x,
        y: Math.max(items[pair.numIdx].y, items[pair.denIdx].y),
        width: numItem.width,
        fontSize: numItem.fontSize,
        height: numItem.height,
      });
    }

    // Sort by y descending (top of page first), then x ascending
    processedItems.sort((a, b) => b.y - a.y || a.x - b.x);

    // Group into lines
    let currentLine = [processedItems[0]];
    for (let j = 1; j < processedItems.length; j++) {
      const prev = currentLine[0];
      const curr = processedItems[j];
      if (Math.abs(prev.y - curr.y) <= lineThreshold) {
        currentLine.push(curr);
      } else {
        lineGroups.push(currentLine);
        currentLine = [curr];
      }
    }
    if (currentLine.length > 0) lineGroups.push(currentLine);

    // Build text from lines
    const lineTexts = lineGroups.map(line => {
      line.sort((a, b) => a.x - b.x);
      let text = '';
      for (let k = 0; k < line.length; k++) {
        if (k > 0) {
          const gap = line[k].x - (line[k - 1].x + line[k - 1].width);
          // Add space only if there's a meaningful gap
          if (gap > line[k].fontSize * 0.15) {
            text += ' ';
          }
        }
        text += line[k].str;
      }
      return text;
    });

    pageTexts.push(lineTexts.join('\n'));
  }

  return pageTexts.join('\n\n');
}

function detectFractions(items) {
  // Look for vertically stacked items that form fractions
  // A fraction has: similar x position, different y, both items are short (likely numbers)
  const pairs = [];
  const used = new Set();

  for (let i = 0; i < items.length; i++) {
    if (used.has(i)) continue;
    const a = items[i];
    // Only consider short items (likely numerator/denominator)
    if (a.str.trim().length > 6) continue;

    for (let j = i + 1; j < items.length; j++) {
      if (used.has(j)) continue;
      const b = items[j];
      if (b.str.trim().length > 6) continue;

      // Check x overlap: items should be horizontally close
      const xCenter_a = a.x + a.width / 2;
      const xCenter_b = b.x + b.width / 2;
      const xDist = Math.abs(xCenter_a - xCenter_b);
      const maxWidth = Math.max(a.width, b.width);

      // Check y gap: items should be vertically stacked but close
      const yDist = Math.abs(a.y - b.y);

      // Fraction criteria: horizontally aligned, vertically close, both look numeric
      if (xDist < maxWidth * 0.8 && yDist > 2 && yDist < a.fontSize * 2.5) {
        const aIsNum = /^[\d\s.]+$/.test(a.str.trim());
        const bIsNum = /^[\d\s.]+$/.test(b.str.trim());
        if (aIsNum && bIsNum) {
          // Higher y = higher on page (top = numerator)
          const [numIdx, denIdx] = a.y > b.y ? [i, j] : [j, i];
          pairs.push({
            numIdx,
            denIdx,
            numStr: items[numIdx].str.trim(),
            denStr: items[denIdx].str.trim(),
          });
          used.add(i);
          used.add(j);
          break;
        }
      }
    }
  }

  return pairs;
}
