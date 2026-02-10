import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const TAG_REFERENCE = `TASK ANALYSIS GUIDE (TAG) — COGNITIVE DEMAND LEVELS

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
- Require considerable cognitive effort and may involve some level of anxiety due to unpredictable nature

REFERENCE EXEMPLAR TASKS (for classification anchoring):

Level 1 Examples:
- Task 1: Students complete timed multiplication facts drill (0-12). Reproduce memorized facts under time pressure. No procedure or conceptual understanding needed.
- Task 2: Students match property names (commutative, associative, distributive, identity) to equations that illustrate them. Pure recall of definitions with no application.

Level 2 Examples:
- Task 3: Using dot paper, students draw the first 4 "trains" of pattern blocks and measure perimeter. Students follow a procedure (draw, measure, record) without connecting to why perimeter changes.
- Task 4: Students write and solve proportions for percentage problems (e.g., "What is 30% of 450?"). Applying cross-multiplication procedure without understanding what percentage means.

Level 3 Examples:
- Task 5: Students find the average of a data set by "leveling off" — representing values as stacks of cubes and physically rearranging them until all stacks are equal. Procedure (leveling) is connected to the conceptual meaning of average as "fair share."
- Task 6: Students compare two basketball players' field goal percentages shown as fractions, then determine if a new game's data changes who is better. Requires connecting fraction comparison to real context; extension requires reasoning about how additional data affects the comparison.

Level 4 Examples:
- Task 7: Students figure out how to seat 20 students in equal rows (multiple solutions exist), then determine if 49 students can be seated in equal rows with no empty seats. Requires exploring factor relationships, testing possibilities, constructing argument for impossibility.
- Task 8: Treena wants to attend basketball camp costing a given amount. She has saved some money and earns a weekly allowance. Students must determine when she can afford it. Open-ended, requires formulating approach, multiple valid strategies, mathematical argumentation.`;

function localApiPlugin() {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use('/api/evaluate', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          });
          return res.end();
        }

        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Method not allowed' }));
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          try {
            const { lessonPlan, gradeLevel, evaluationType = 'lesson' } = JSON.parse(body);
            const apiKey = process.env.VITE_ANTHROPIC_API_KEY;

            if (!apiKey) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              return res.end(JSON.stringify({ error: 'VITE_ANTHROPIC_API_KEY not set in .env.local' }));
            }

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

            const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
              },
              body: JSON.stringify({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: 8192,
                messages: [{
                  role: 'user',
                  content: prompt
                }],
              }),
            });

            const data = await apiResponse.json();

            if (!apiResponse.ok) {
              res.writeHead(apiResponse.status, { 'Content-Type': 'application/json' });
              return res.end(JSON.stringify({ error: data.error?.message || 'Anthropic API error' }));
            }

            const responseText = data.content
              .map(item => item.type === 'text' ? item.text : '')
              .join('\n')
              .trim();

            const cleanedResponse = responseText.replace(/```json\n?|\n?```/g, '').trim();
            const evaluationData = JSON.parse(cleanedResponse);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(evaluationData));
          } catch (error) {
            console.error('API Error:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [react(), localApiPlugin()],
    optimizeDeps: {
      include: ['pdfjs-dist'],
    },
  };
})
