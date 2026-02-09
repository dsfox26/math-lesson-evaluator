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

// Main App Component
function MathLessonEvaluator() {
  const [lessonPlan, setLessonPlan] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gradeLevel, setGradeLevel] = useState('');
  const [showAbout, setShowAbout] = useState(false);
  const [demoMode, setDemoMode] = useState(false);

  const loadSampleLesson = (sampleKey) => {
    const sample = SAMPLE_LESSONS[sampleKey];
    setLessonPlan(sample.content);
    setGradeLevel(sample.grade);
    setDemoMode(true);
    setError(null);
    setEvaluation(null);
  };

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    // Check file type
    if (file.type === 'application/pdf') {
      setError('PDF support coming soon! For now, please copy and paste the text from your PDF into the text area below.');
      return;
    }
    
    // Read text files
    const text = await file.text();
    setLessonPlan(text);
    setError(null);
    setDemoMode(false);
  } catch (err) {
    setError('Error reading file. Please try copying and pasting the text directly into the text area.');
  }
};

  cconst evaluateLessonPlan = async () => {
  if (!lessonPlan.trim()) {
    setError('Please enter or upload a lesson plan first.');
    return;
  }

  if (demoMode) {
    const sampleKey = Object.keys(SAMPLE_LESSONS).find(
      key => SAMPLE_LESSONS[key].content === lessonPlan
    );
    if (sampleKey) {
      setLoading(true);
      setTimeout(() => {
        setEvaluation(DEMO_EVALUATIONS[sampleKey]);
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
        gradeLevel: gradeLevel
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const evaluationData = await response.json();
    setEvaluation(evaluationData);
  } catch (err) {
    console.error('Evaluation error:', err);
    setError(err.message || 'Error evaluating lesson plan.');
  } finally {
    setLoading(false);
  }
};

    if (demoMode) {
      const sampleKey = Object.keys(SAMPLE_LESSONS).find(
        key => SAMPLE_LESSONS[key].content === lessonPlan
      );
      if (sampleKey) {
        setLoading(true);
        setTimeout(() => {
          setEvaluation(DEMO_EVALUATIONS[sampleKey]);
          setLoading(false);
        }, 1500);
        return;
      }
    }

    setLoading(true);
    setError(null);
    setEvaluation(null);

    try {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key not configured. Please add VITE_ANTHROPIC_API_KEY to your .env.local file.');
      }

const response = await fetch('/api/evaluate', {        method: 'POST',
 headers: {
  'Content-Type': 'application/json',
},
        body: JSON.stringify({
  lessonPlan: lessonPlan,
  gradeLevel: gradeLevel
})
FRAMEWORK 1: TASK ANALYSIS GUIDE
Analyze EACH distinct task/activity separately:
Level 1 - Memorization
Level 2 - Procedures Without Connections  
Level 3 - Procedures With Connections
Level 4 - Doing Mathematics

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
}`
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const responseText = data.content
        .map(item => item.type === 'text' ? item.text : '')
        .join('\n')
        .trim();

      const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '').trim();
      const evaluationData = JSON.parse(cleanedResponse);
      
      setEvaluation(evaluationData);
    } catch (err) {
      console.error('Evaluation error:', err);
      setError(err.message || 'Error evaluating lesson plan. Please check your API key configuration.');
    } finally {
      setLoading(false);
    }
  };

  const downloadAsText = () => {
    if (!evaluation) return;
    
    const text = `MATH LESSON PLAN EVALUATION
${'='.repeat(50)}

MQI SCORE: ${evaluation.overallMQI}/5

TASK ANALYSIS:
${evaluation.tasks.map((t, i) => `${i+1}. ${t.taskName} - Level ${t.cognitiveLevel}\n   ${t.analysis}`).join('\n')}

OVERALL ASSESSMENT:
${evaluation.overallAssessment}

STRENGTHS:
${evaluation.strengths.map((s, i) => `${i+1}. ${s}`).join('\n')}

CONCERNS:
${evaluation.concerns.map((c, i) => `${i+1}. ${c}`).join('\n')}

RECOMMENDATIONS:
${evaluation.recommendations.map((r, i) => `${i+1}. ${r}`).join('\n')}

REVISED APPROACH:
${evaluation.revisedApproach}
`;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lesson-evaluation-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    if (!evaluation) return;
    const text = `MQI: ${evaluation.overallMQI}/5\n${evaluation.overallAssessment}`;
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
                Math Lesson Plan Evaluator
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
            Automated evaluation of K-12 math lessons using Task Analysis Guide and MQI frameworks.
          </p>

          {showAbout && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-2">About This Tool</h3>
              <p className="text-sm text-gray-700 mb-3">
                Evaluates mathematics lesson plans to ensure high cognitive demand and authentic mathematical thinking.
              </p>
              <p className="text-sm text-gray-700">
                Built on research-based frameworks for effective mathematics instruction.
              </p>
            </div>
          )}

          <div className="mt-4 p-4 bg-amber-50 rounded-md border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold text-gray-800">Try a Demo Lesson</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Click a sample lesson to see the evaluator in action:
            </p>
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
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Lesson Plan Input
            </h2>

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
                Upload Lesson Plan
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Click to upload</p>
                    <p className="text-xs text-gray-400">TXT or DOC</p>
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
                Or Paste Lesson Plan Here
              </label>
              <textarea
                value={lessonPlan}
                onChange={(e) => {
                  setLessonPlan(e.target.value);
                  setDemoMode(false);
                }}
                placeholder="Paste your complete lesson plan here..."
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
                  Evaluate Lesson
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
                {/* Task Analysis */}
                {evaluation.tasks && evaluation.tasks.length > 0 && (
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

                {/* MQI Score */}
                {evaluation.overallMQI && (
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
              <p className="text-xs mt-1">Evaluates individual tasks on 4 levels from memorization to doing mathematics</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Mathematical Quality of Instruction (MQI)</p>
              <p className="text-xs mt-1">© 2014 Learning Mathematics for Teaching/Heather Hill</p>
            </div>
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