import { GoogleGenAI } from "@google/genai";

// FIX: Switched from `import.meta.env.VITE_API_KEY` to `process.env.API_KEY` to follow coding guidelines and fix the TypeScript error.
const apiKey = process.env.API_KEY;

if (!apiKey) {
  // Este erro será lançado durante o desenvolvimento se a chave não estiver no .env
  // Em produção (Vercel), a ausência da variável fará o build falhar, o que é um bom controle.
  throw new Error("API_KEY não está definida. Verifique seu arquivo .env ou as configurações de ambiente da Vercel.");
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
