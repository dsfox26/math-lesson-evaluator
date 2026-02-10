import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Upload, FileText, AlertCircle, CheckCircle, TrendingUp, BookOpen, Download, Copy, Sparkles, Info } from 'lucide-react';
import './index.css';

// Sample lesson plans for demo mode
const SAMPLE_LESSONS = {
  exemplary: {
    title: "Exploring Area and Perimeter (Exemplary)",
    grade: "4",
    content: `Objective: Students will develop understanding of area and perimeter through exploration and problem-solving.

Launch (10 min):
Present the problem: "The principal wants to build a rectangular garden behind the school. She has 24 meters of fencing. What are all the different rectangular gardens she could make? Which garden would give students the most space to plant?"

Notice and Wonder:
- What do you notice about this problem?
- What do you wonder?
- What information do we have? What do we need to figure out?

Explore (25 min):
Students work in groups with:
- Grid paper
- Rulers
- Connecting cubes (optional)

Teacher circulates asking:
- "How are you thinking about this?"
- "What does the 24 meters represent?"
- "How are you keeping track of different possibilities?"
- "What patterns are you noticing?"

Students are encouraged to:
- Draw different rectangles on grid paper
- Record dimensions and calculate area for each
- Look for patterns in their data
- Make conjectures about which rectangle has the largest area

Share and Discuss (15 min):
Groups share strategies:
- How did you find different rectangles?
- Did you find them all? How do you know?
- What patterns did you notice?
- Which rectangle has the most area? Why does that make sense?

Teacher facilitates connections:
- Between perimeter (going around the outside) and area (space inside)
- Between different representations (drawings, tables, patterns)
- Mathematical vocabulary emerges from student work

Synthesis (10 min):
Class co-constructs understanding:
- What is perimeter? (Students define based on their work)
- What is area? (Students define based on their work)
- What's the relationship between perimeter and area?
- Can two shapes have the same perimeter but different areas?

Extension: "What if the principal had 30 meters of fencing?"`
  },

  strongWithMinorIssues: {
    title: "Solving Systems of Equations (Strong with Minor Issues)",
    grade: "8",
    content: `Objective: Students will solve systems of equations using multiple methods.

Warm-up (5 min):
"Tickets to the school play cost $5 for students and $8 for adults. The drama club sold 142 tickets and collected $950. How many of each type of ticket did they sell?"

Think-Pair-Share: How might you approach this problem?

Launch (10 min):
Teacher presents the system:
x + y = 142
5x + 8y = 950

"Yesterday, some of you mentioned using guess and check. Others talked about making a table. Let's explore different ways to solve this."

Explore (20 min):
Students work in pairs to solve using at least TWO different methods:
- Graphing
- Substitution  
- Elimination
- Tables or guess-and-check

Teacher provides graph paper, asks guiding questions:
- "What does each equation represent?"
- "What does the solution mean in context?"
- "How can you check your answer?"

Share (15 min):
Teacher selects 3 groups to share different methods:
1. Graphing approach
2. Substitution approach  
3. Elimination approach

Class discusses: "How are these methods similar? Different? When might one be more efficient?"

Teacher demonstrates formal elimination steps on board, connecting to student work.

Practice (10 min):
Students solve 2 more systems using method of their choice:
- 2x + y = 10 and x - y = 2
- 3x + 2y = 12 and x + 2y = 8

Issues: Teacher demonstrates elimination before students fully explore it; practice problems are purely symbolic (not contextualized).`
  },

  lowCognitiveDemand: {
    title: "Multiplying Fractions (Low Cognitive Demand)",
    grade: "5",
    content: `Objective: Students will multiply fractions using the standard algorithm.

Instructional Sequence:
1. Teacher reviews fraction multiplication rules on the board
2. Teacher demonstrates: "To multiply fractions, multiply the numerators, then multiply the denominators"
3. Teacher shows example: 2/3 × 1/4 = 2/12 = 1/6
4. Teacher demonstrates three more examples step-by-step
5. Teacher writes the steps on the board:
   Step 1: Multiply top numbers
   Step 2: Multiply bottom numbers  
   Step 3: Simplify if needed
6. Students practice 15 problems following the same procedure
7. Teacher circulates to check for correct answers

Practice Problems:
1/2 × 1/3 = 
2/5 × 3/4 =
3/8 × 2/3 =
(continues with 12 more similar problems)`
  },

  proceduralWithErrors: {
    title: "Finding Slope (Procedural with Errors)",
    grade: "8", 
    content: `Objective: Students will find the slope of a line.

Introduction (10 min):
Teacher writes on board: "Slope is rise over run. It tells you how steep a line is."

Teacher shows formula: m = y2 - y1 / x2 - x1

"To find slope, you subtract the y's on top and the x's on bottom. Let's practice."

Example 1:
Points: (2, 3) and (5, 9)
m = 9 - 3 / 5 - 2 = 6/3 = 2

Teacher: "So the slope is 2. That means for every step you go to the right, you go up 2."

Example 2:
Points: (1, 5) and (4, 2)  
m = 2 - 5 / 4 - 1 = -3/3 = -1

Teacher: "Negative slope means the line goes down."

Guided Practice (15 min):
Find the slope:
1. (0, 0) and (3, 6)
2. (2, 4) and (6, 8)
3. (1, 7) and (3, 1)

Independent Practice (25 min):
Worksheet with 15 problems calculating slope from two points.

Issues: 
- Imprecise language ("how steep")
- Formula written without proper parentheses: should be (y2-y1)/(x2-x1)
- No connection to meaning or context
- No visual representations
- "Rise over run" metaphor used without explanation
- No discussion of what slope represents mathematically`
  },

  richButUnclear: {
    title: "Investigating Triangle Properties (Rich but Unclear)",
    grade: "7",
    content: `Objective: Students will discover properties of triangles.

Launch (10 min):
Teacher: "Today we're going to explore triangles. Get into groups and I want you to investigate triangles and see what you can discover about them."

Exploration (30 min):
Students work in groups with:
- Rulers
- Protractors  
- Paper
- Scissors

Teacher instructions: "Draw some triangles, measure things, cut them out, see what you notice."

Some groups measure angles, others measure sides, others cut triangles and arrange pieces. It's unclear what the mathematical goal is.

Teacher circulates but doesn't provide clear focus: "That's interesting. Keep exploring."

Share (15 min):
Groups share random observations:
- "The angles added to 180"
- "Some triangles are bigger"
- "You can make triangles with different side lengths"
- "Equilateral triangles are cool"

Teacher: "Great observations! Yes, triangles have lots of properties. The angles add to 180 degrees, and there are different types of triangles."

Wrap-up (5 min):
Teacher lists on board:
- Triangles have 3 sides
- Angles sum to 180°
- Types: equilateral, isosceles, scalene

Issues: Exploration lacks clear mathematical focus; students engage in unsystematic exploration; no clear progression toward mathematical understanding; teacher doesn't use student discoveries to build coherent understanding.`
  },

  mixedApproach: {
    title: "Solving Two-Step Equations (Mixed Approach)",
    grade: "7",
    content: `Objective: Students will solve two-step equations.

Warm-up (5 min):
Think-Pair-Share: "If 2x + 5 = 13, what could x be? How did you figure it out?"

Introduction (10 min):
Teacher presents the equation: 3x - 7 = 14
"Let's solve this together. First, we need to isolate the variable."
Teacher demonstrates:
- Add 7 to both sides: 3x - 7 + 7 = 14 + 7
- Simplify: 3x = 21
- Divide both sides by 3: x = 7

Teacher explains: "Remember, whatever you do to one side, do to the other. We're using inverse operations."

Guided Practice (15 min):
Teacher works through 3 more examples on the board, asking students to suggest next steps.

Independent Practice (20 min):
Students complete worksheet with 12 problems using the same procedure:
2x + 8 = 20
5x - 3 = 17
4x + 6 = 22
etc.

Teacher circulates to check work and correct errors.`
  }
};

// Pre-generated evaluations for demo mode
const DEMO_EVALUATIONS = {
  exemplary: {
    tasks: [
      {
        taskName: "Launch Problem - Garden Design",
        taskDescription: "Students determine all possible rectangular gardens with 24m of fencing and which has most area",
        cognitiveLevel: 4,
        analysis: "Doing Mathematics - Complex problem requiring exploration of constraints, pattern recognition, and reasoning about relationship between perimeter and area. Non-algorithmic approach needed."
      },
      {
        taskName: "Group Exploration",
        taskDescription: "Students use grid paper and tools to find different rectangles, calculate areas, look for patterns",
        cognitiveLevel: 4,
        analysis: "Doing Mathematics - Students must self-monitor strategies, analyze constraints (perimeter = 24), test conjectures, and construct mathematical understanding through exploration"
      },
      {
        taskName: "Share and Discuss Strategies",
        taskDescription: "Groups share how they found rectangles, patterns noticed, reasoning about which has largest area",
        cognitiveLevel: 4,
        analysis: "Doing Mathematics - Students construct viable arguments, critique reasoning of others, make connections between representations and patterns"
      },
      {
        taskName: "Co-construct Definitions",
        taskDescription: "Class defines area and perimeter based on their exploration work",
        cognitiveLevel: 4,
        analysis: "Doing Mathematics - Students generalize from examples, build mathematical definitions from experience, establish relationships between concepts"
      }
    ],
    overallMQI: 5,
    overallAssessment: "Exemplary mathematics lesson (MQI 5/5). All tasks at Level 4 cognitive demand. Students engage in authentic problem-solving before formal instruction. Rich mathematical discourse, multiple representations explicitly linked, sustained sense-making. Teacher skillfully facilitates without removing cognitive challenge.",
    mqiDimensions: {
      richnessOfMathematics: {
        overallScore: "High",
        linkingRepresentations: "High - Grid paper drawings explicitly linked to numerical dimensions, tables, and patterns",
        explanations: "High - Students explain WHY certain rectangles have more area, WHY patterns emerge",
        senseMaking: "High - Sustained focus on meaning of perimeter (fencing) and area (planting space)",
        multipleMethods: "High - Multiple strategies for finding rectangles shared and compared",
        mathematicalLanguage: "High - Vocabulary emerges from and connects to student work"
      },
      workingWithStudents: {
        overallScore: "High",
        remediation: "Mid - No major errors to remediate",
        usingStudentIdeas: "High - Student discoveries drive entire lesson"
      },
      errorsAndImprecision: {
        overallScore: "Not Present",
        contentErrors: "None",
        impreciseLanguage: "None",
        lackOfClarity: "None"
      },
      studentPractices: {
        overallScore: "High",
        studentExplanations: "High - Students explain strategies, patterns, reasoning throughout",
        studentReasoning: "High - Students make conjectures, test ideas, draw conclusions",
        taskCognitiveDemand: "High - All tasks require complex thinking",
        contextualizedProblems: "High - Real-world garden problem drives exploration"
      }
    },
    strengths: [
      "Rich, contextualized problem launches exploration",
      "Students explore BEFORE formal instruction",
      "Multiple representations explicitly connected",
      "Teacher facilitates with questions",
      "Sustained high cognitive demand throughout"
    ],
    concerns: [],
    redFlags: [],
    instructionalSequence: "Exemplary problem-based sequence. Students encounter rich problem, explore, discover patterns, share strategies, co-construct definitions. Students DO mathematics throughout.",
    recommendations: [
      "This is exemplary - maintain this approach",
      "Consider written reflection on perimeter-area relationship",
      "Could extend to non-rectangular shapes"
    ],
    revisedApproach: "This lesson already exemplifies best practice."
  },

  strongWithMinorIssues: {
    tasks: [
      {
        taskName: "Warm-up Problem",
        taskDescription: "Students solve ticket sales problem",
        cognitiveLevel: 4,
        analysis: "Doing Mathematics - Contextualized problem requiring sense-making"
      },
      {
        taskName: "Explore Multiple Methods",
        taskDescription: "Pairs solve using different methods",
        cognitiveLevel: 3,
        analysis: "Procedures With Connections - Students connect procedures to meaning"
      },
      {
        taskName: "Teacher Demonstrates",
        taskDescription: "Teacher shows elimination",
        cognitiveLevel: 1,
        analysis: "Memorization - Students watch teacher demonstrate"
      },
      {
        taskName: "Practice Problems",
        taskDescription: "Abstract symbolic problems",
        cognitiveLevel: 2,
        analysis: "Procedures Without Connections - Applying procedures without context"
      }
    ],
    overallMQI: 3,
    overallAssessment: "Good lesson with strengths but missed opportunities (MQI 3/5). Strong launch and exploration but teacher demonstrates before students fully develop understanding.",
    mqiDimensions: {
      richnessOfMathematics: {
        overallScore: "Mid",
        linkingRepresentations: "Mid - Some connections",
        explanations: "Low - Limited WHY explanations",
        senseMaking: "Mid - Good in warm-up, weak in practice",
        multipleMethods: "High - Multiple methods explored",
        mathematicalLanguage: "Mid - Appropriate terminology"
      },
      workingWithStudents: {
        overallScore: "Mid",
        remediation: "Low - No significant remediation",
        usingStudentIdeas: "Mid - Some use of student methods"
      },
      errorsAndImprecision: {
        overallScore: "Not Present",
        contentErrors: "None",
        impreciseLanguage: "None",
        lackOfClarity: "None"
      },
      studentPractices: {
        overallScore: "Mid",
        studentExplanations: "Mid - Some during sharing",
        studentReasoning: "Mid - In warm-up and exploration",
        taskCognitiveDemand: "Mid - Mix of high and low",
        contextualizedProblems: "Low - Only in warm-up"
      }
    },
    strengths: [
      "Excellent contextualized warm-up",
      "Multiple methods explored",
      "Explicit comparison of approaches"
    ],
    concerns: [
      "Teacher demonstrates before students develop understanding",
      "Practice problems decontextualized",
      "Cognitive demand drops in practice"
    ],
    redFlags: [
      "Teacher demonstrates elimination too early",
      "Practice problems purely symbolic"
    ],
    instructionalSequence: "Mixed sequence. Strong start but teacher takes over demonstration.",
    recommendations: [
      "Let students who used elimination share their strategy",
      "Keep practice contextualized",
      "Ask students to explain WHY elimination works"
    ],
    revisedApproach: "Maintain exploration, facilitate student discovery of elimination, keep practice contextualized."
  },

  lowCognitiveDemand: {
    tasks: [
      {
        taskName: "Teacher Demonstration",
        taskDescription: "Teacher demonstrates fraction multiplication",
        cognitiveLevel: 1,
        analysis: "Memorization - Students watch without constructing understanding"
      },
      {
        taskName: "Practice Problems",
        taskDescription: "15 problems using demonstrated procedure",
        cognitiveLevel: 2,
        analysis: "Procedures Without Connections - Rote application"
      }
    ],
    overallMQI: 2,
    overallAssessment: "Low-quality procedural instruction (MQI 2/5). Teacher demonstrates before exploration. No conceptual understanding developed.",
    mqiDimensions: {
      richnessOfMathematics: {
        overallScore: "Low",
        linkingRepresentations: "Not Present",
        explanations: "Not Present",
        senseMaking: "Not Present",
        multipleMethods: "Not Present",
        mathematicalLanguage: "Low"
      },
      workingWithStudents: {
        overallScore: "Low",
        remediation: "Low - Only checks answers",
        usingStudentIdeas: "Not Present"
      },
      errorsAndImprecision: {
        overallScore: "Mid",
        contentErrors: "None",
        impreciseLanguage: "Uses 'reduce' instead of 'simplify'",
        lackOfClarity: "None significant"
      },
      studentPractices: {
        overallScore: "Not Present",
        studentExplanations: "Not Present",
        studentReasoning: "Not Present",
        taskCognitiveDemand: "Low",
        contextualizedProblems: "Not Present"
      }
    },
    strengths: [
      "Clear objective",
      "Structured practice"
    ],
    concerns: [
      "No exploration before procedure",
      "No visual models",
      "Focus on answers not understanding",
      "Students passive recipients"
    ],
    redFlags: [
      "Teacher demonstrates procedure first",
      "Students practice without understanding",
      "Imprecise language: 'reduce fractions'"
    ],
    instructionalSequence: "Traditional I Do, We Do, You Do. No exploration.",
    recommendations: [
      "Start with contextualized problem",
      "Provide visual models",
      "Let students explore patterns",
      "Use precise language"
    ],
    revisedApproach: "Launch with real problem, explore with models, discover pattern, then formalize."
  },

  proceduralWithErrors: {
    tasks: [
      {
        taskName: "Introduction",
        taskDescription: "Teacher states definition and formula",
        cognitiveLevel: 1,
        analysis: "Memorization - Formula notation imprecise"
      },
      {
        taskName: "Examples",
        taskDescription: "Teacher demonstrates calculations",
        cognitiveLevel: 1,
        analysis: "Memorization - No connection to meaning"
      },
      {
        taskName: "Practice",
        taskDescription: "Students calculate slope",
        cognitiveLevel: 2,
        analysis: "Procedures Without Connections"
      }
    ],
    overallMQI: 2,
    overallAssessment: "Low-quality with mathematical errors (MQI 2/5). Imprecise notation, no visual representations, no meaning.",
    mqiDimensions: {
      richnessOfMathematics: {
        overallScore: "Not Present",
        linkingRepresentations: "Not Present",
        explanations: "Not Present",
        senseMaking: "Not Present",
        multipleMethods: "Not Present",
        mathematicalLanguage: "Low - Imprecise"
      },
      workingWithStudents: {
        overallScore: "Not Present",
        remediation: "Not Present",
        usingStudentIdeas: "Not Present"
      },
      errorsAndImprecision: {
        overallScore: "High",
        contentErrors: "None in calculations",
        impreciseLanguage: "Formula missing parentheses, vague 'how steep', unexplained 'rise over run'",
        lackOfClarity: "Unclear what slope represents"
      },
      studentPractices: {
        overallScore: "Not Present",
        studentExplanations: "Not Present",
        studentReasoning: "Not Present",
        taskCognitiveDemand: "Low",
        contextualizedProblems: "Not Present"
      }
    },
    strengths: [],
    concerns: [
      "Formula notation incorrect",
      "No graphs or visuals",
      "No exploration",
      "No real-world context",
      "Imprecise language throughout"
    ],
    redFlags: [
      "m = y2-y1/x2-x1 should be (y2-y1)/(x2-x1)",
      "'Slope is how steep' - vague",
      "No visual representations"
    ],
    instructionalSequence: "Traditional procedural. No exploration.",
    recommendations: [
      "Use graphs showing different slopes",
      "Fix formula notation",
      "Connect to real contexts",
      "Let students explore visually first"
    ],
    revisedApproach: "Start with visual graphs, explore steepness, connect to real contexts, derive formula."
  },

  richButUnclear: {
    tasks: [
      {
        taskName: "Open Exploration",
        taskDescription: "Investigate triangles with no focus",
        cognitiveLevel: 2,
        analysis: "Procedures Without Connections - Unsystematic activity without clear goal"
      }
    ],
    overallMQI: 2,
    overallAssessment: "Unfocused exploration (MQI 2/5). Well-intentioned but lacks clear mathematical progression.",
    mqiDimensions: {
      richnessOfMathematics: {
        overallScore: "Low",
        linkingRepresentations: "Not Present",
        explanations: "Not Present",
        senseMaking: "Low",
        multipleMethods: "Not Present",
        mathematicalLanguage: "Low"
      },
      workingWithStudents: {
        overallScore: "Low",
        remediation: "Not Present",
        usingStudentIdeas: "Low - Not synthesized"
      },
      errorsAndImprecision: {
        overallScore: "Mid",
        contentErrors: "None",
        impreciseLanguage: "None",
        lackOfClarity: "High - Task launch unclear"
      },
      studentPractices: {
        overallScore: "Low",
        studentExplanations: "Low",
        studentReasoning: "Low",
        taskCognitiveDemand: "Low",
        contextualizedProblems: "Not Present"
      }
    },
    strengths: [
      "Hands-on exploration",
      "Some independent discovery"
    ],
    concerns: [
      "No clear mathematical focus",
      "Unsystematic exploration",
      "Discoveries not synthesized",
      "No clear progression"
    ],
    redFlags: [
      "'Investigate triangles' - too vague",
      "'See what you notice' - no structure",
      "Teacher lists facts without connecting to student work"
    ],
    instructionalSequence: "Unfocused exploration without mathematical progression.",
    recommendations: [
      "Provide clear focus: 'What about the angles?'",
      "Give structure for data collection",
      "Facilitate synthesis of discoveries",
      "Build toward generalization"
    ],
    revisedApproach: "Focus on angle sum: students draw various triangles, measure angles, record data, discover pattern, formalize theorem."
  },

  mixedApproach: {
    tasks: [
      {
        taskName: "Warm-up",
        taskDescription: "Students solve and share thinking",
        cognitiveLevel: 3,
        analysis: "Procedures With Connections - Student reasoning"
      },
      {
        taskName: "Teacher Demo",
        taskDescription: "Teacher demonstrates solving",
        cognitiveLevel: 1,
        analysis: "Memorization - Students watch"
      },
      {
        taskName: "Guided Practice",
        taskDescription: "Following teacher procedure",
        cognitiveLevel: 2,
        analysis: "Procedures Without Connections"
      },
      {
        taskName: "Independent Practice",
        taskDescription: "Worksheet problems",
        cognitiveLevel: 2,
        analysis: "Procedures Without Connections"
      }
    ],
    overallMQI: 2,
    overallAssessment: "Mixed quality (MQI 2/5). Good warm-up but shifts to procedural instruction.",
    mqiDimensions: {
      richnessOfMathematics: {
        overallScore: "Low",
        linkingRepresentations: "Not Present",
        explanations: "Low",
        senseMaking: "Low",
        multipleMethods: "Low",
        mathematicalLanguage: "Mid"
      },
      workingWithStudents: {
        overallScore: "Low",
        remediation: "Low",
        usingStudentIdeas: "Low"
      },
      errorsAndImprecision: {
        overallScore: "Not Present",
        contentErrors: "None",
        impreciseLanguage: "None",
        lackOfClarity: "None"
      },
      studentPractices: {
        overallScore: "Low",
        studentExplanations: "Low",
        studentReasoning: "Low",
        taskCognitiveDemand: "Low",
        contextualizedProblems: "Not Present"
      }
    },
    strengths: [
      "Good warm-up structure",
      "Think-Pair-Share",
      "Appropriate terminology"
    ],
    concerns: [
      "Teacher demonstrates too quickly",
      "Student thinking not leveraged",
      "Practice is rote application"
    ],
    redFlags: [
      "Teacher demonstrates before students explore",
      "Student thinking from warm-up abandoned"
    ],
    instructionalSequence: "Mixed - good start, then traditional demonstration.",
    recommendations: [
      "Build on warm-up strategies",
      "Let students solve new problem first",
      "Use visual models",
      "Vary practice problems"
    ],
    revisedApproach: "Extend warm-up, have students solve new problem using similar reasoning, facilitate discussion, formalize method from student strategies."
  }
};

// Sample math tasks for task evaluation mode
const SAMPLE_TASKS = {
  highCognitiveDemand: {
    title: "Pattern Block Fractions (High Cognitive Demand)",
    grade: "3",
    content: `Pattern Block Fractions

If the yellow hexagon equals one whole, use pattern blocks to figure out what fraction each of these shapes represents:
- The red trapezoid
- The blue rhombus
- The green triangle

Then answer:
a) How many green triangles does it take to cover one yellow hexagon? Write the fraction each triangle represents.
b) How many blue rhombuses does it take to cover one yellow hexagon? Write the fraction each rhombus represents.
c) Show two different ways to cover the yellow hexagon using a mix of different pieces. Write an equation for each way that shows the fractions add up to 1.
d) If two hexagons equal one whole, what fraction does one red trapezoid represent now? What about one green triangle?
e) Explain why the fraction for the green triangle changed when you changed what "one whole" means.`
  },

  moderateCognitiveDemand: {
    title: "School Garden Planning (Moderate Cognitive Demand)",
    grade: "5",
    content: `School Garden Planning

The 5th grade class is planting a rectangular school garden. The garden is 12 feet long and 8 feet wide.

They need to:
1. Calculate the area of the garden in square feet.
2. They want to divide the garden into 4 equal sections for different vegetables. Draw a diagram showing two different ways to divide the garden into 4 equal sections. Label the dimensions of each section.
3. Each section needs a border of small stones. If stones cost $2.50 per foot, calculate the total cost of stones needed to border ALL four sections (including the outside border and the dividing borders).
4. If each vegetable plant needs 2 square feet of space, how many plants can fit in each section?`
  },

  lowCognitiveDemand: {
    title: "Fraction Addition Drill (Low Cognitive Demand)",
    grade: "5",
    content: `Fraction Addition Practice

Directions: Add the following fractions. Simplify your answer if possible.

1) 1/4 + 2/4 =
2) 3/8 + 2/8 =
3) 1/3 + 1/3 =
4) 2/5 + 1/5 =
5) 3/10 + 4/10 =
6) 1/6 + 3/6 =
7) 5/12 + 3/12 =
8) 2/7 + 3/7 =
9) 1/8 + 5/8 =
10) 4/9 + 2/9 =

Remember: When the denominators are the same, just add the numerators and keep the denominator the same!`
  }
};

// Pre-generated evaluations for task demo mode
const DEMO_TASK_EVALUATIONS = {
  highCognitiveDemand: {
    cognitiveLevel: 4,
    taskFeatures: {
      complexity: "High - Multi-step task requiring exploration of fractional relationships through physical models, with a conceptual shift when the whole changes",
      representations: "High - Concrete (pattern blocks), visual (diagrams), symbolic (fraction equations), and verbal (written explanation) representations all required",
      reasoning: "High - Students must reason about why fractional values change when the referent whole changes, requiring deep conceptual understanding",
      openEndedness: "High - Part (c) has multiple correct solutions; part (e) requires constructing an original explanation",
      connections: "High - Connects physical models to symbolic fractions, explores the fundamental concept that fractions are relative to the defined whole"
    },
    overallAssessment: "Level 4 (Doing Mathematics) — This task requires genuine mathematical exploration and reasoning. Students must construct understanding of fraction relationships through hands-on investigation, represent their thinking in multiple ways, and grapple with the conceptually challenging idea that a fraction's value depends on the referent whole. The task cannot be solved by applying a memorized procedure.",
    strengths: [
      "Requires multiple representations: concrete, visual, symbolic, and verbal",
      "Part (c) has multiple correct answers, encouraging mathematical creativity",
      "Part (d)-(e) introduce a conceptual shift that deepens understanding of fractions as relative quantities",
      "Builds from accessible entry point (identifying basic fractions) to complex reasoning",
      "Grounded in concrete materials that make abstract concepts tangible"
    ],
    concerns: [
      "Students unfamiliar with pattern blocks may need initial orientation to the materials",
      "The jump from part (c) to part (d) is significant — some students may need scaffolding"
    ],
    redFlags: [],
    cognitiveRisk: "Low risk of cognitive decline. The task's structure — building from concrete exploration to abstract reasoning — naturally maintains high demand. However, if a teacher demonstrates part (c) before students explore, the open-ended nature would be eliminated. Teachers should resist showing solutions and instead ask probing questions.",
    recommendations: [
      "Ensure students have adequate time to explore with physical blocks before moving to symbolic notation",
      "Consider adding a partner discussion step between parts (c) and (d) to prepare for the conceptual shift",
      "Have students share and compare their different solutions for part (c) to highlight that multiple representations are valid"
    ],
    revisedApproach: "The task is already strong. A minor enhancement: after part (e), add a reflection prompt asking students to create their own example of how changing the whole changes the fractional value, using a real-world context (e.g., 'half of a pizza vs. half of a cookie')."
  },

  moderateCognitiveDemand: {
    cognitiveLevel: 3,
    taskFeatures: {
      complexity: "Moderate - Multi-step problem with real-world context, but each step uses a known procedure (area, perimeter, division, cost calculation)",
      representations: "Moderate - Requires diagram drawing and numerical calculations, but the connection between them is straightforward",
      reasoning: "Moderate - Step 3 requires careful geometric reasoning about which borders exist, but other steps are more procedural",
      openEndedness: "Moderate - Step 2 asks for two different ways to divide the garden, allowing some creativity, but the solution space is constrained",
      connections: "Moderate - Connects area and perimeter concepts to a real-world context, links geometry to money calculations"
    },
    overallAssessment: "Level 3 (Procedures With Connections) — This task uses procedures (area, perimeter, division) but connects them meaningfully through a real-world garden context. Students must think about how the procedures relate to each other and to the physical situation. Step 3 is particularly strong because students must reason carefully about which borders to count. However, the task doesn't require students to discover new mathematical relationships or construct novel approaches.",
    strengths: [
      "Engaging real-world context that motivates the mathematics",
      "Multi-step structure requires students to connect different mathematical concepts",
      "Step 2 allows for multiple valid approaches and requires spatial reasoning",
      "Step 3 requires careful geometric thinking about border lengths (not just plug-and-chug)",
      "Accessible entry point with increasing complexity"
    ],
    concerns: [
      "Steps 1 and 4 are fairly procedural on their own — they gain meaning only in the full context",
      "Students might calculate perimeter of only the outer border in Step 3, missing the internal dividing borders",
      "The task could be elevated by asking students to optimize the garden layout or compare designs"
    ],
    redFlags: [],
    cognitiveRisk: "Moderate risk of cognitive decline. If a teacher pre-draws the diagram for Step 2, the spatial reasoning component is lost. If the teacher specifies which borders to count in Step 3, the geometric reasoning is eliminated. The real-world context helps maintain engagement, but the procedural steps (1 and 4) could become rote if taught as isolated calculations.",
    recommendations: [
      "Add a comparison question: 'Which of your two garden designs uses fewer stones for borders? Why?'",
      "Consider asking students to design their OWN garden dimensions given a fixed budget for stones",
      "Have students present their different garden divisions and discuss advantages of each design"
    ],
    revisedApproach: "Keep the existing structure but add a design challenge: 'The class has a budget of $200 for stones. What is the largest garden they can border completely (including 4 equal sections)? Show your reasoning.' This elevates the task toward Level 4 by requiring optimization and mathematical argumentation."
  },

  lowCognitiveDemand: {
    cognitiveLevel: 2,
    taskFeatures: {
      complexity: "Low - Single-step problems all following the identical procedure, no variation in problem type",
      representations: "Low - Purely symbolic; no visual models, number lines, or contextual representations",
      reasoning: "Low - No reasoning required; the rule is explicitly stated at the bottom of the page",
      openEndedness: "None - Every problem has exactly one correct answer with one expected solution path",
      connections: "None - No connection to meaning of fractions, real-world contexts, or other mathematical ideas"
    },
    overallAssessment: "Level 2 (Procedures Without Connections) — This is a routine practice worksheet that asks students to repeatedly apply a stated rule ('add the numerators, keep the denominator'). While procedural fluency has value, this task provides no opportunity for mathematical thinking, reasoning, or understanding of WHY the procedure works. All problems are structurally identical (like denominators), and the answer rule is given directly.",
    strengths: [
      "Clear, unambiguous directions",
      "Appropriate progression within the set (denominators increase gradually)"
    ],
    concerns: [
      "The rule is given explicitly, removing any need for mathematical thinking",
      "All problems are the same type — no variation, no unlike denominators, no mixed numbers",
      "No visual models to build understanding of what fraction addition means",
      "No real-world context to motivate why fraction addition matters",
      "Students can complete the entire worksheet without understanding fractions at all"
    ],
    redFlags: [
      "Rule stated at bottom eliminates any possibility of student reasoning or discovery",
      "Purely procedural — students could follow the rule correctly while having zero conceptual understanding",
      "No connection between symbolic notation and the meaning of combining fractional quantities"
    ],
    cognitiveRisk: "Already at low cognitive demand — no decline possible, but also no opportunity for growth. The explicit rule statement ensures students will not engage in any mathematical thinking. Even students who might naturally reason about fraction addition are directed to a mechanical procedure.",
    recommendations: [
      "Remove the stated rule and instead ask students to figure out HOW to add fractions with the same denominator using visual models (fraction strips, area models)",
      "Include at least some problems with unlike denominators to require actual mathematical reasoning",
      "Add a word problem that requires fraction addition in context",
      "Ask students to EXPLAIN why the procedure works using a model or diagram"
    ],
    revisedApproach: "Replace with: Give students fraction strips. Present a word problem: 'Maria ate 1/4 of a pizza and then 2/4 more. How much did she eat in total? Use your fraction strips to show your answer.' Then have students explore: 'Does this always work? Try other fractions with the same denominator. What pattern do you notice? WHY does this pattern work?' Only after exploration and discussion should the class formalize the procedure."
  }
};

// Main App Component
function MathLessonEvaluator() {
  const [lessonPlan, setLessonPlan] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gradeLevel, setGradeLevel] = useState('');
  const [showAbout, setShowAbout] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [evaluationType, setEvaluationType] = useState('lesson');

  const loadSampleLesson = (sampleKey) => {
    const sample = SAMPLE_LESSONS[sampleKey];
    setLessonPlan(sample.content);
    setGradeLevel(sample.grade);
    setDemoMode(true);
    setError(null);
    setEvaluation(null);
  };

  const loadSampleTask = (sampleKey) => {
    const sample = SAMPLE_TASKS[sampleKey];
    setLessonPlan(sample.content);
    setGradeLevel(sample.grade);
    setDemoMode(true);
    setError(null);
    setEvaluation(null);
  };

  const handleEvaluationTypeChange = (newType) => {
    setEvaluationType(newType);
    setLessonPlan('');
    setEvaluation(null);
    setError(null);
    setDemoMode(false);
  };

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    const name = file.name.toLowerCase();
    let text;

    if (name.endsWith('.pdf')) {
      const { extractTextFromPdf } = await import('./fileParserUtils');
      text = await extractTextFromPdf(file);
    } else if (name.endsWith('.docx')) {
      const { extractTextFromDocx } = await import('./fileParserUtils');
      text = await extractTextFromDocx(file);
    } else if (name.endsWith('.doc')) {
      setError('The legacy .doc format is not supported. Please re-save the file as .docx and try again.');
      e.target.value = '';
      return;
    } else {
      text = await file.text();
    }

    if (!text || !text.trim()) {
      setError('No text could be extracted from this file. If this is a scanned PDF, it may contain only images with no text layer.');
      e.target.value = '';
      return;
    }

    setLessonPlan(text);
    setError(null);
    setDemoMode(false);
  } catch (err) {
    setError('Error reading file. Please try copying and pasting the text directly into the text area.');
  }
  e.target.value = '';
};

  const evaluateLessonPlan = async () => {
  if (!lessonPlan.trim()) {
    setError('Please enter or upload a lesson plan or math task first.');
    return;
  }

  if (demoMode) {
    const samples = evaluationType === 'task' ? SAMPLE_TASKS : SAMPLE_LESSONS;
    const demoEvals = evaluationType === 'task' ? DEMO_TASK_EVALUATIONS : DEMO_EVALUATIONS;
    const sampleKey = Object.keys(samples).find(
      key => samples[key].content === lessonPlan
    );
    if (sampleKey && demoEvals[sampleKey]) {
      setLoading(true);
      setTimeout(() => {
        setEvaluation(demoEvals[sampleKey]);
        setLoading(false);
      }, 1500);
      return;
    }
  }

  setLoading(true);
  setError(null);
  setEvaluation(null);

  try {
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lessonPlan: lessonPlan,
        gradeLevel: gradeLevel,
        evaluationType: evaluationType
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const evaluationData = await response.json();
    setEvaluation(evaluationData);
  } catch (err) {
    console.error('Evaluation error:', err);
    setError(err.message || 'Error evaluating.');
  } finally {
    setLoading(false);
  }
};

  const downloadAsText = () => {
    if (!evaluation) return;

    let text;
    let filename;

    if (evaluationType === 'task') {
      const levelLabels = { 1: 'Memorization', 2: 'Procedures Without Connections', 3: 'Procedures With Connections', 4: 'Doing Mathematics' };
      text = `MATH TASK EVALUATION
${'='.repeat(50)}

COGNITIVE DEMAND LEVEL: ${evaluation.cognitiveLevel}/4 - ${levelLabels[evaluation.cognitiveLevel] || ''}

TASK FEATURES:
${Object.entries(evaluation.taskFeatures || {}).map(([k, v]) => `  ${k}: ${v}`).join('\n')}

OVERALL ASSESSMENT:
${evaluation.overallAssessment}

STRENGTHS:
${(evaluation.strengths || []).map((s, i) => `${i+1}. ${s}`).join('\n')}

CONCERNS:
${(evaluation.concerns || []).map((c, i) => `${i+1}. ${c}`).join('\n')}

COGNITIVE RISK:
${evaluation.cognitiveRisk || ''}

${(evaluation.redFlags || []).length > 0 ? `RED FLAGS:\n${evaluation.redFlags.map((f, i) => `${i+1}. ${f}`).join('\n')}\n` : ''}
RECOMMENDATIONS:
${(evaluation.recommendations || []).map((r, i) => `${i+1}. ${r}`).join('\n')}

REVISED APPROACH:
${evaluation.revisedApproach}
`;
      filename = `task-evaluation-${Date.now()}.txt`;
    } else {
      text = `MATH LESSON PLAN EVALUATION
${'='.repeat(50)}

MQI SCORE: ${evaluation.overallMQI}/5

TASK ANALYSIS:
${(evaluation.tasks || []).map((t, i) => `${i+1}. ${t.taskName} - Level ${t.cognitiveLevel}\n   ${t.analysis}`).join('\n')}

OVERALL ASSESSMENT:
${evaluation.overallAssessment}

STRENGTHS:
${(evaluation.strengths || []).map((s, i) => `${i+1}. ${s}`).join('\n')}

CONCERNS:
${(evaluation.concerns || []).map((c, i) => `${i+1}. ${c}`).join('\n')}

RECOMMENDATIONS:
${(evaluation.recommendations || []).map((r, i) => `${i+1}. ${r}`).join('\n')}

REVISED APPROACH:
${evaluation.revisedApproach}
`;
      filename = `lesson-evaluation-${Date.now()}.txt`;
    }

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    if (!evaluation) return;
    const text = evaluationType === 'task'
      ? `Cognitive Level: ${evaluation.cognitiveLevel}/4\n${evaluation.overallAssessment}`
      : `MQI: ${evaluation.overallMQI}/5\n${evaluation.overallAssessment}`;
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-800">
                {evaluationType === 'task' ? 'Math Task Evaluator' : 'Math Lesson Plan Evaluator'}
              </h1>
            </div>
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
            >
              <Info className="w-4 h-4" />
              About
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            {evaluationType === 'task'
              ? 'Evaluate the cognitive demand of a math task using the Task Analysis Guide framework.'
              : 'Automated evaluation of K-12 math lessons using Task Analysis Guide and MQI frameworks.'}
          </p>

          {showAbout && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-2">About This Tool</h3>
              {evaluationType === 'task' ? (
                <>
                  <p className="text-sm text-gray-700 mb-3">
                    Analyzes a single math task or problem using the Task Analysis Guide (TAG) framework to classify its cognitive demand level (1-4).
                  </p>
                  <p className="text-sm text-gray-700">
                    Provides detailed analysis of task features, strengths, concerns, and recommendations for improvement.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-700 mb-3">
                    Evaluates mathematics lesson plans to ensure high cognitive demand and authentic mathematical thinking.
                  </p>
                  <p className="text-sm text-gray-700">
                    Built on research-based frameworks for effective mathematics instruction.
                  </p>
                </>
              )}
            </div>
          )}

          <div className="mt-4 p-4 bg-amber-50 rounded-md border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold text-gray-800">
                {evaluationType === 'task' ? 'Try a Demo Task' : 'Try a Demo Lesson'}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {evaluationType === 'task'
                ? 'Click a sample task to see the evaluator in action:'
                : 'Click a sample lesson to see the evaluator in action:'}
            </p>
            {evaluationType === 'task' ? (
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => loadSampleTask('highCognitiveDemand')}
                  className="px-3 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors text-sm font-medium text-left"
                >
                  Level 4 — Pattern Block Fractions (Grade 3)
                </button>
                <button
                  onClick={() => loadSampleTask('moderateCognitiveDemand')}
                  className="px-3 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors text-sm font-medium text-left"
                >
                  Level 3 — School Garden Planning (Grade 5)
                </button>
                <button
                  onClick={() => loadSampleTask('lowCognitiveDemand')}
                  className="px-3 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors text-sm font-medium text-left"
                >
                  Level 2 — Fraction Addition Drill (Grade 5)
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => loadSampleLesson('exemplary')}
                  className="px-3 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors text-sm font-medium"
                >
                  ⭐ Exemplary
                </button>
                <button
                  onClick={() => loadSampleLesson('strongWithMinorIssues')}
                  className="px-3 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors text-sm font-medium"
                >
                  ✓ Strong
                </button>
                <button
                  onClick={() => loadSampleLesson('lowCognitiveDemand')}
                  className="px-3 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors text-sm font-medium"
                >
                  ✗ Low Quality
                </button>
                <button
                  onClick={() => loadSampleLesson('proceduralWithErrors')}
                  className="px-3 py-2 bg-orange-100 text-orange-800 rounded-md hover:bg-orange-200 transition-colors text-sm font-medium"
                >
                  ⚠ With Errors
                </button>
                <button
                  onClick={() => loadSampleLesson('richButUnclear')}
                  className="px-3 py-2 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors text-sm font-medium"
                >
                  ? Unfocused
                </button>
                <button
                  onClick={() => loadSampleLesson('mixedApproach')}
                  className="px-3 py-2 bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200 transition-colors text-sm font-medium"
                >
                  ± Mixed
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {evaluationType === 'task' ? 'Math Task Input' : 'Lesson Plan Input'}
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are you evaluating?
              </label>
              <select
                value={evaluationType}
                onChange={(e) => handleEvaluationTypeChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="lesson">Lesson Plan (TAG + MQI)</option>
                <option value="task">Math Task (TAG only)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grade Level (Optional)
              </label>
              <select
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select grade level...</option>
                <option value="K">Kindergarten</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(grade => (
                  <option key={grade} value={grade}>Grade {grade}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {evaluationType === 'task' ? 'Upload Math Task' : 'Upload Lesson Plan'}
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Click to upload</p>
                    <p className="text-xs text-gray-400">TXT, DOCX, or PDF</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".txt,.doc,.docx,.pdf"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {evaluationType === 'task' ? 'Or Paste Math Task Here' : 'Or Paste Lesson Plan Here'}
              </label>
              <textarea
                value={lessonPlan}
                onChange={(e) => {
                  setLessonPlan(e.target.value);
                  setDemoMode(false);
                }}
                placeholder={evaluationType === 'task'
                  ? 'Paste your math task or problem here...'
                  : 'Paste your complete lesson plan here...'}
                className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
              />
            </div>

            <button
              onClick={evaluateLessonPlan}
              disabled={loading || !lessonPlan.trim()}
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <TrendingUp className="w-5 h-5" />
                  {evaluationType === 'task' ? 'Evaluate Task' : 'Evaluate Lesson'}
                </>
              )}
            </button>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Results
              </h2>
              {evaluation && (
                <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                    title="Copy"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={downloadAsText}
                    className="p-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {!evaluation && !loading && (
              <div className="text-center py-12 text-gray-400">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Results will appear here</p>
              </div>
            )}

            {evaluation && (
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
                {/* Lesson mode: Task Analysis cards */}
                {evaluationType === 'lesson' && evaluation.tasks && evaluation.tasks.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Task Analysis</h3>
                    <div className="space-y-3">
                      {evaluation.tasks.map((task, idx) => (
                        <div key={idx} className={`p-3 rounded-md border-l-4 ${
                          task.cognitiveLevel === 4 ? 'bg-green-50 border-green-500' :
                          task.cognitiveLevel === 3 ? 'bg-blue-50 border-blue-500' :
                          task.cognitiveLevel === 2 ? 'bg-yellow-50 border-yellow-500' :
                          'bg-red-50 border-red-500'
                        }`}>
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="font-semibold text-sm text-gray-800">{task.taskName}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              task.cognitiveLevel === 4 ? 'bg-green-200 text-green-900' :
                              task.cognitiveLevel === 3 ? 'bg-blue-200 text-blue-900' :
                              task.cognitiveLevel === 2 ? 'bg-yellow-200 text-yellow-900' :
                              'bg-red-200 text-red-900'
                            }`}>
                              Level {task.cognitiveLevel}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2 italic">{task.taskDescription}</p>
                          <p className="text-xs text-gray-700">{task.analysis}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Task mode: Cognitive Demand Level card */}
                {evaluationType === 'task' && evaluation.cognitiveLevel && (
                  <div className="text-center">
                    <div className={`p-4 rounded-lg ${
                      evaluation.cognitiveLevel === 4 ? 'bg-green-50 border-2 border-green-300' :
                      evaluation.cognitiveLevel === 3 ? 'bg-blue-50 border-2 border-blue-300' :
                      evaluation.cognitiveLevel === 2 ? 'bg-yellow-50 border-2 border-yellow-300' :
                      'bg-red-50 border-2 border-red-300'
                    }`}>
                      <span className={`inline-block px-4 py-2 rounded-full text-lg font-bold mb-2 ${
                        evaluation.cognitiveLevel === 4 ? 'bg-green-200 text-green-900' :
                        evaluation.cognitiveLevel === 3 ? 'bg-blue-200 text-blue-900' :
                        evaluation.cognitiveLevel === 2 ? 'bg-yellow-200 text-yellow-900' :
                        'bg-red-200 text-red-900'
                      }`}>
                        Level {evaluation.cognitiveLevel}/4
                      </span>
                      <p className="text-sm font-semibold text-gray-800">
                        {evaluation.cognitiveLevel === 4 ? 'Doing Mathematics' :
                         evaluation.cognitiveLevel === 3 ? 'Procedures With Connections' :
                         evaluation.cognitiveLevel === 2 ? 'Procedures Without Connections' :
                         'Memorization'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Cognitive Demand Level (Task Analysis Guide)</p>
                    </div>
                  </div>
                )}

                {/* Task mode: Task Features */}
                {evaluationType === 'task' && evaluation.taskFeatures && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Task Features</h3>
                    <div className="space-y-2">
                      {Object.entries(evaluation.taskFeatures).map(([key, value]) => (
                        <div key={key} className="p-2 bg-gray-50 rounded-md">
                          <span className="text-xs font-semibold text-gray-800 capitalize">{key}: </span>
                          <span className="text-xs text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lesson mode: MQI Score */}
                {evaluationType === 'lesson' && evaluation.overallMQI && (
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg font-bold ${
                      evaluation.overallMQI >= 4 ? 'bg-green-100 text-green-800' :
                      evaluation.overallMQI === 3 ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      MQI Score: {evaluation.overallMQI}/5
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Mathematical Quality of Instruction</p>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Overall Assessment</h3>
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                    {evaluation.overallAssessment}
                  </p>
                </div>

                {evaluation.strengths && evaluation.strengths.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">Strengths</h3>
                    <ul className="space-y-1">
                      {evaluation.strengths.map((s, idx) => (
                        <li key={idx} className="text-xs text-gray-700 bg-green-50 p-2 rounded-md">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {evaluation.concerns && evaluation.concerns.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-orange-700 mb-2">Concerns</h3>
                    <ul className="space-y-1">
                      {evaluation.concerns.map((c, idx) => (
                        <li key={idx} className="text-xs text-gray-700 bg-orange-50 p-2 rounded-md">
                          • {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Task mode: Cognitive Risk (after concerns) */}
                {evaluationType === 'task' && evaluation.cognitiveRisk && (
                  <div className="p-3 bg-amber-50 border border-amber-300 rounded-md">
                    <h3 className="font-semibold text-amber-800 mb-1 text-sm">Cognitive Risk</h3>
                    <p className="text-xs text-amber-900">{evaluation.cognitiveRisk}</p>
                  </div>
                )}

                {evaluation.redFlags && evaluation.redFlags.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Red Flags
                    </h3>
                    <ul className="space-y-2">
                      {evaluation.redFlags.map((flag, idx) => (
                        <li key={idx} className="text-xs text-red-700 bg-red-50 p-2 rounded-md border-l-4 border-red-500">
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-indigo-700 mb-2">Recommendations</h3>
                  <ul className="space-y-1">
                    {evaluation.recommendations.map((rec, idx) => (
                      <li key={idx} className="text-xs text-gray-700 bg-indigo-50 p-2 rounded-md">
                        {idx + 1}. {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Revised Approach</h3>
                  <p className="text-xs text-gray-700 bg-purple-50 p-3 rounded-md border-l-4 border-purple-500">
                    {evaluation.revisedApproach}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-3">Frameworks Used</h3>
          <div className="text-sm text-gray-600 space-y-3">
            <div>
              <p className="font-semibold text-gray-800">Task Analysis Guide (Cognitive Demand)</p>
              <p className="text-xs mt-1">Evaluates individual tasks on 4 levels from memorization to doing mathematics. Developed by the Institute for Learning, University of Pittsburgh.</p>
            </div>
            {evaluationType === 'lesson' && (
              <div>
                <p className="font-semibold text-gray-800">Mathematical Quality of Instruction (MQI)</p>
                <p className="text-xs mt-1">© 2014 Learning Mathematics for Teaching/Heather Hill</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MathLessonEvaluator />
  </React.StrictMode>
);