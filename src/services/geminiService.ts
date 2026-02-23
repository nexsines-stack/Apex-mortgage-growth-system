import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface QualificationResult {
  score: number;
  qualificationLevel: 'High' | 'Medium' | 'Low';
  reasoning: string;
}

export async function qualifyLead(formData: any): Promise<QualificationResult> {
  const model = "gemini-2.5-flash-latest";
  
  const prompt = `
    Analyze the following mortgage lead application and assign a qualification score from 0 to 100.
    
    Lead Data:
    - Full Name: ${formData.fullName}
    - Company Name: ${formData.companyName}
    - City: ${formData.city}
    - Volume: ${formData.volume}
    - Budget: ${formData.budget}
    - Message: ${formData.message}

    Scoring Criteria:
    - High Volume (6+ deals/mo) and High Budget ($5k+) -> High Score (80-100)
    - Medium Volume (3-5 deals/mo) or Medium Budget ($2k-$5k) -> Medium Score (50-79)
    - Low Volume (0-2 deals/mo) or Low Budget (<$2k) -> Low Score (0-49)
    
    Provide a brief reasoning for the score.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            qualificationLevel: { type: Type.STRING, enum: ["High", "Medium", "Low"] },
            reasoning: { type: Type.STRING },
          },
          required: ["score", "qualificationLevel", "reasoning"],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    return result as QualificationResult;
  } catch (error) {
    console.error("Error qualifying lead:", error);
    // Fallback in case of error
    return {
      score: 0,
      qualificationLevel: 'Low',
      reasoning: "Unable to process qualification at this time.",
    };
  }
}
