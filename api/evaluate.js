import { TAG_REFERENCE } from '../shared/tagReference.js';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.VITE_ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured. Set VITE_ANTHROPIC_API_KEY in Vercel environment variables.' });
    }

    const { lessonPlan, gradeLevel, evaluationType = 'lesson' } = req.body;

    let prompt;
    if (evaluationType === 'task') {
      prompt = `You are an expert mathematics education evaluator specializing in task analysis.
Analyze this math task using the Task Analysis Guide framework for cognitive demand.

${TAG_REFERENCE}

GRADE: ${gradeLevel || 'Not specified'}

TASK:
${lessonPlan}

Classify this task's cognitive demand level (1-4) based on the TAG criteria above. Use the exemplar tasks as anchors for your classification.

Respond ONLY with valid JSON (no markdown):
{
  "cognitiveLevel": 1-4,
  "taskFeatures": {
    "complexity": "...",
    "representations": "...",
    "reasoning": "...",
    "openEndedness": "...",
    "connections": "..."
  },
  "overallAssessment": "...",
  "strengths": [...],
  "concerns": [...],
  "redFlags": [...],
  "cognitiveRisk": "...",
  "recommendations": [...],
  "revisedApproach": "..."
}`;
    } else {
      prompt = `You are an expert mathematics education evaluator. Analyze this K-12 math lesson plan using TWO frameworks.

FRAMEWORK 1: TASK ANALYSIS GUIDE
Analyze EACH distinct task/activity separately using the TAG criteria below.

${TAG_REFERENCE}

FRAMEWORK 2: MQI (Mathematical Quality of Instruction)
Rate overall lesson 1-5 across dimensions: Richness, Working with Students, Errors, Student Practices

GRADE: ${gradeLevel || 'Not specified'}

LESSON:
${lessonPlan}

Respond ONLY with valid JSON (no markdown):
{
  "tasks": [{"taskName": "...", "taskDescription": "...", "cognitiveLevel": 1-4, "analysis": "..."}],
  "overallMQI": 1-5,
  "overallAssessment": "...",
  "mqiDimensions": {...},
  "strengths": [...],
  "concerns": [...],
  "redFlags": [...],
  "instructionalSequence": "...",
  "recommendations": [...],
  "revisedApproach": "..."
}`;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 8192,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic API error:', data);
      return res.status(502).json({ error: data.error?.message || 'Anthropic API error' });
    }

    const responseText = data.content
      .map(item => item.type === 'text' ? item.text : '')
      .join('\n')
      .trim();

    const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '').trim();
    const evaluationData = JSON.parse(cleanedResponse);

    return res.status(200).json(evaluationData);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
