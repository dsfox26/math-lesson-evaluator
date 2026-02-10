import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { TAG_REFERENCE } from './shared/tagReference.js'

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
