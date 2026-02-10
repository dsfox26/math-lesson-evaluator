// ============================================================
// TAG REFERENCE — Edit this file to add or update exemplars
// ============================================================
//
// HOW TO ADD A NEW EXEMPLAR:
//   1. Scroll down to the EXEMPLARS array
//   2. Copy one of the existing entries
//   3. Paste it at the end (before the closing bracket)
//   4. Change the level, title, and description
//   5. Save the file, commit, and push
//
// Each exemplar needs three things:
//   level: 1, 2, 3, or 4
//   title: A short name for the task
//   description: What the task is and why it's that level
// ============================================================

const EXEMPLARS = [
  // ---- LEVEL 1: MEMORIZATION ----
  {
    level: 1,
    title: "Timed multiplication facts drill",
    description: "Students complete timed multiplication facts (0-12). Reproduce memorized facts under time pressure. No procedure or conceptual understanding needed."
  },
  {
    level: 1,
    title: "Match property names to equations",
    description: "Students match property names (commutative, associative, distributive, identity) to equations that illustrate them. Pure recall of definitions with no application."
  },
  {level: 1,
    title: "Fractions, decimals, and percents",
    description: "What are the decimal and percent equivalents for the fractions 1/2 and 1/4? Involves producing previously learned facts. No procedure is required and no connection is made with underlying concepts. " 
  },
  {level: 1,
    title: "Identifying slope and y-intercepts",
    description: "In the following equations, name the slope and the y-intercept. A: y=8x+15, B: y=-2x+7, C: y=4x-9. This involves producing previously learned rules and facts. There is no ambiguity, and there is no connection to the concepts that underlie the facts."
  },

  // ---- LEVEL 2: PROCEDURES WITHOUT CONNECTIONS ----
  {
    level: 2,
    title: "Draw pattern-block trains and measure perimeter",
    description: "Using dot paper, students draw the first 4 trains of pattern blocks and measure perimeter. Students follow a procedure (draw, measure, record) without connecting to why perimeter changes."
  },
  {
    level: 2,
    title: "Write and solve proportions for percentages",
    description: "Students write and solve proportions for percentage problems (e.g., 'What is 30% of 450?'). Applying cross-multiplication procedure without understanding what percentage means."
  },
  {level: 2,
    title: "Converting fractions to decimals and percents",
    description: "Convert the fraction 3/8 to a decimal and a percent. Show your work. Use of procedure is called for and there is little ambiguity about what needs to be done. "
  },
  {level: 2,
    title: "Finding different values for y in y=mx+b, as x changes",
    description: "If y=8x+15, evaluate y when x = 10, 20, and 30. Explain the procedure you used to find your solution. This task focuses on the explicit use of algorithmic procedures, but does not connect the procedure or outcomes to deeper math concepts."
  },

  // ---- LEVEL 3: PROCEDURES WITH CONNECTIONS ----
  {
    level: 3,
    title: "Find average by leveling off stacks of cubes",
    description: "Students find the average of a data set by 'leveling off' — representing values as stacks of cubes and physically rearranging them until all stacks are equal. Procedure (leveling) is connected to the conceptual meaning of average as 'fair share.'"
  },
  {
    level: 3,
    title: "Compare basketball players' field goal percentages",
    description: "Students compare two basketball players' field goal percentages shown as fractions, then determine if a new game's data changes who is better. Requires connecting fraction comparison to real context; extension requires reasoning about how additional data affects the comparison."
  },
  {level: 3,
    title: "Use a grid to find decimal and percent equivalents",
    description: "Using a 10x10 grid, identify the decimal and percent equivalens of 3/5. This suggests a pathway to follow and is represented using a visual diagram. "
  },
  {level: 3,
    title: "Find proportion of defective lightbulbs",
    description: "Alazar Electric company sells light bulbs to big box stores- the big chain stores that frequently buy large numbers of bulbs in one sale. They sample their bulbs for defects. A sample of 96 light bulbs consisted of 4 defective ones. Assume today's batch of 6,000 light bulbs has the same porportion of defective bulbs as the sample. Set up a proportion and solve it to determine the total number of defective bulbs. The big businesses they sell to accept no larger than 4% rate of defective bulbs. Is today's batch less than 4% defective? Show your work. This is procedures with connections because even though it explicitly states to set up a proportion, there are more ways than one to do that. It also focuses attention on the use of procedures for developing deeper understanding of math concepts and relationships."
  },
  // ---- LEVEL 4: DOING MATHEMATICS ----
  {
    level: 4,
    title: "Arrange students in equal rows (20 vs 49)",
    description: "Students figure out how to seat 20 students in equal rows (multiple solutions exist), then determine if 49 students can be seated in equal rows with no empty seats. Requires exploring factor relationships, testing possibilities, constructing argument for impossibility."
  },
  {
    level: 4,
    title: "Treena's basketball camp budget",
    description: "Treena wants to attend basketball camp costing a given amount. She has saved some money and earns a weekly allowance. Students must determine when she can afford it. Open-ended, requires formulating approach, multiple valid strategies, mathematical argumentation."
  },
  {level: 4,
    title: "Using a diagram to explain equivalent decimal, percent, and fraction",
    description: "Shae 6 og the square in a 6x10 rectangle. Using the diagram, explain how to determine each of the following: the percent of the area that is shaded, the decimal part of the area that is shaded, and the fractional part of the area that is shaded. This problem is also embedded in a real world scenario and requires students to explore and explain the nature of mathematical relationships non-algorithmically."
  },
  {level: 4,
    title: "Creating equations to find t-shirt cost",
    description: "This past summer, you were hired to work at Custom T-Shirts. When a customer places an order for a special design, Custom T-Shirts charges a one-time fee of $15 to set up a t-shirt design, plus $8 for each t-shirt printed. What equation can be used to determine how much to charge a customer for any number of shirts? Explain how you determined your answer. This is a real world problem that is open ended, requires students to access relevant knowledge, and requires explanation."
  },

  // ============================================================
  // ADD NEW EXEMPLARS BELOW THIS LINE
  // Copy an entry above, paste it here, and change the values
  // ============================================================

];

// ============================================================
// EVERYTHING BELOW THIS LINE IS AUTOMATIC — NO NEED TO EDIT
// ============================================================

const TAG_CRITERIA = `TASK ANALYSIS GUIDE (TAG) — COGNITIVE DEMAND LEVELS
Developed by the Institute for Learning, University of Pittsburgh.

LEVEL 1 — MEMORIZATION
- Involve reproducing previously learned facts, rules, formulas, or definitions
- Cannot be solved using procedures because a procedure does not exist or the time frame is too short
- Are not ambiguous — involve exact reproduction of previously seen material
- Have no connection to the concepts or meaning that underlie the facts, rules, formulas, or definitions

LEVEL 2 — PROCEDURES WITHOUT CONNECTIONS
- Are algorithmic — use of the procedure is specifically called for or evident from prior instruction/experience
- Require limited cognitive demand for successful completion; little ambiguity about what needs to be done and how
- Have no connection to the concepts or meaning that underlie the procedure being used
- Are focused on producing correct answers rather than developing mathematical understanding
- Require no explanations, or explanations that focus solely on describing the procedure used

LEVEL 3 — PROCEDURES WITH CONNECTIONS
- Focus attention on the use of procedures for the purpose of developing deeper levels of understanding
- Suggest pathways to follow that are broad general procedures with close connections to underlying conceptual ideas
- Usually are represented in multiple ways (visual diagrams, manipulatives, symbols, problem situations)
- Require some degree of cognitive effort; procedures may be used but not mindlessly — students need to engage with conceptual ideas

LEVEL 4 — DOING MATHEMATICS
- Require complex and non-algorithmic thinking — a predictable, well-rehearsed approach is not explicitly suggested
- Require students to explore and understand the nature of mathematical concepts, processes, or relationships
- Demand self-monitoring or self-regulation of one's own cognitive processes
- Require students to access relevant knowledge and make appropriate use of such knowledge
- Require students to analyze the task and actively examine task constraints
- Require considerable cognitive effort and may involve some level of anxiety due to unpredictable nature`;

function buildTagReference() {
  const levelNames = {
    1: "Level 1",
    2: "Level 2",
    3: "Level 3",
    4: "Level 4",
  };

  const grouped = { 1: [], 2: [], 3: [], 4: [] };
  for (const ex of EXEMPLARS) {
    if (grouped[ex.level]) {
      grouped[ex.level].push(ex);
    }
  }

  let exemplarText = "\nREFERENCE EXEMPLAR TASKS (for classification anchoring):\n";
  for (const level of [1, 2, 3, 4]) {
    if (grouped[level].length === 0) continue;
    exemplarText += `\n${levelNames[level]} Examples:\n`;
    for (const ex of grouped[level]) {
      exemplarText += `- ${ex.title}: ${ex.description}\n`;
    }
  }

  return TAG_CRITERIA + "\n" + exemplarText;
}

export const TAG_REFERENCE = buildTagReference();
