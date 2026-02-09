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
    const { lessonPlan, gradeLevel } = req.body;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.VITE_ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: `You are an expert mathematics education evaluator. Analyze this K-12 math lesson plan using TWO frameworks.

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

    const data = await response.json();
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