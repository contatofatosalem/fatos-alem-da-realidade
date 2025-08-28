
import React from 'react';

const NewsletterCTA: React.FC = () => {
  const mailchimpUrl = "https://gmail.us16.list-manage.com/subscribe/post?u=227c0ea390018b38aaa2d40bd&id=7ac84d6cc1&f_id=00461ee1f0";

  // O atributo `noValidate` no formulário desativa a validação padrão do navegador,
  // permitindo que o Mailchimp lide com a validação quando o formulário for submetido.
  return (
    <div className="text-center p-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-slate-700">
      <h3 className="text-2xl font-bold text-white">Monetize Sua Curiosidade</h3>
      <p className="mt-2 text-slate-400">Inscreva-se para receber conteúdo exclusivo, acesso antecipado e ofertas especiais diretamente no seu e-mail. Construa sua audiência e abra portas para a monetização.</p>
      <form 
        action={mailchimpUrl} 
        method="post" 
        target="_blank"
        noValidate
        className="mt-6 max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
      >
        <input 
          type="email"
          name="EMAIL" // Este 'name' é obrigatório para o Mailchimp
          placeholder="seu.email@dominio.com" 
          className="flex-grow bg-slate-800 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
          aria-label="Endereço de e-mail para inscrição"
          required
        />
        {/* Este campo oculto é uma medida de segurança do Mailchimp para evitar bots */}
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_227c0ea390018b38aaa2d40bd_7ac84d6cc1" tabIndex={-1} defaultValue="" />
        </div>
        <button 
          type="submit"
          className="bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-md hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
        >
          Inscrever-se
        </button>
      </form>
      <p className="text-xs text-slate-500 mt-4">Respeitamos sua privacidade. Cancele a qualquer momento.</p>
    </div>
  );
};

export default NewsletterCTA;
