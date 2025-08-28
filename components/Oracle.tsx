import React, { useState } from 'react';
import { askOracle } from '../services/geminiService';

const Oracle: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Fix: Removed API key check from UI. As per guidelines, the API key is assumed to be configured and valid externally.

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    setAnswer(null);
    setError(null);
    try {
      const oracleResponse = await askOracle(question);
      setAnswer(oracleResponse);
    } catch (err: any) {
        setError('O cosmos está em silêncio... O Oráculo não pôde ser contatado. Tente novamente quando as estrelas se alinharem.');
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto my-16 sm:my-24 p-8 bg-slate-800/50 rounded-xl shadow-2xl shadow-purple-500/10 border border-slate-700">
      <h2 className="text-3xl font-bold text-center text-purple-400">Consulte o Oráculo Cósmico</h2>
      <p className="text-center text-slate-400 mt-2 mb-6">Faça uma pergunta sobre os grandes mistérios e receba uma resposta enigmática.</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ex: Qual o segredo das estrelas?"
          className="flex-grow bg-slate-900 border border-slate-700 rounded-md py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all disabled:opacity-50"
          disabled={isLoading}
          aria-label="Pergunta para o Oráculo"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-purple-600 text-white font-bold py-3 px-6 rounded-md hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Consultando...
            </>
          ) : (
            'Perguntar'
          )}
        </button>
      </form>

      {error && (
        <div className="mt-8 p-6 bg-slate-900/70 border-l-4 border-red-500 rounded-r-lg">
          <p className="text-red-400 italic whitespace-pre-wrap font-serif text-lg">{error}</p>
        </div>
      )}

      {answer && (
        <div className="mt-8 p-6 bg-slate-900/70 border-l-4 border-purple-500 rounded-r-lg">
          <p className="text-slate-300 italic whitespace-pre-wrap font-serif text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Oracle;
