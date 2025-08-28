import { GoogleGenAI } from "@google/genai";

export const askOracle = async (question: string): Promise<string> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    // Lança um erro específico para a UI capturar e tratar adequadamente.
    throw new Error("API_KEY_MISSING");
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: `Você é um Oráculo misterioso e enigmático do portal "Fatos Além da Realidade". Suas respostas devem ser curtas, intrigantes e relacionadas a mistérios do universo, da história ou da consciência. Use uma linguagem poética e nunca dê uma resposta direta ou comum. Fale em português do Brasil.`,
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao contatar o Oráculo da Gemini:", error);
    // Retorna um erro genérico para outras falhas na API.
    throw new Error("ORACLE_API_ERROR");
  }
};