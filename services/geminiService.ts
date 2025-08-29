/**
 * A integração com a API Gemini foi temporariamente desativada
 * para permitir que o site funcione corretamente. A verificação da chave de API
 * estava causando um erro fatal que impedia o carregamento de toda a aplicação.
 * 
 * Para reativar o Oráculo:
 * 1. Garanta que a variável de ambiente `API_KEY` esteja configurada no seu provedor de hospedagem.
 * 2. Descomente o código original abaixo e remova a implementação mock.
 */

// import { GoogleGenAI } from "@google/genai";

/*
// CÓDIGO ORIGINAL - Requer API_KEY no ambiente
const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;

if (!apiKey) {
  // This error message is crucial. If it appears, it means that the API key has not been configured correctly in the hosting platform.
  // The environment variable name must be exactly API_KEY.
  throw new Error("The environment variable API_KEY is not configured. Please add it in your project settings.");
}

const ai = new GoogleGenAI({ apiKey });
*/

export const askOracle = async (question: string): Promise<string> => {
  console.log(`Pergunta para o Oráculo (mock): "${question}"`);
  
  // Simula um tempo de resposta da API para uma melhor experiência do usuário
  await new Promise(resolve => setTimeout(resolve, 1200));

  // Resposta mock enquanto a API está desativada para garantir que o site funcione.
  return "O Oráculo está em meditação profunda e temporariamente indisponível. As energias cósmicas serão realinhadas em breve para que as consultas possam ser retomadas.";

  /*
  // CÓDIGO ORIGINAL - Requer API_KEY no ambiente
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
  */
};
