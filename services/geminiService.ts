import { GoogleGenAI } from "@google/genai";

// Fix: Per coding guidelines, the API key must be retrieved from process.env.API_KEY. This resolves the TypeScript error with `import.meta.env`.
const apiKey = process.env.API_KEY;

if (!apiKey) {
  // This error message is crucial. If it appears, it means that the API key has not been configured correctly in the hosting platform.
  // The environment variable name must be exactly API_KEY.
  throw new Error("The environment variable API_KEY is not configured. Please add it in your project settings.");
}

const ai = new GoogleGenAI({ apiKey });

export const askOracle = async (question: string): Promise<string> => {
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
    // Lança um erro específico que o componente pode capturar e tratar
    throw new Error("ORACLE_API_ERROR");
  }
};
