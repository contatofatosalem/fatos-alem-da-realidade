
import React from 'react';

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-lg border border-slate-700">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">Termos de Serviço</h1>
        <p className="text-slate-400 italic mb-8">Última atualização: {lastUpdated}</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>Ao acessar e utilizar o site Fatos Além da Realidade, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com estes termos, por favor, não utilize nosso site.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">1. Uso do Conteúdo</h2>
          <p>Todo o conteúdo publicado neste site, incluindo textos, imagens, gráficos e logotipos, é de propriedade do Fatos Além da Realidade ou de seus parceiros e é protegido por leis de direitos autorais. O conteúdo é fornecido apenas para sua informação pessoal e não comercial.</p>
          <p>Você não pode copiar, reproduzir, distribuir, transmitir, exibir ou vender qualquer conteúdo sem o consentimento prévio por escrito dos proprietários do site.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">2. Conduta do Usuário</h2>
          <p>Ao utilizar nosso site, você concorda em não:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Publicar qualquer material que seja falso, difamatório, ofensivo, ou que viole qualquer lei.</li>
            <li>Tentar obter acesso não autorizado aos nossos sistemas ou redes.</li>
            <li>Interferir no funcionamento adequado do site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">3. Isenção de Responsabilidade</h2>
          <p>O conteúdo do Fatos Além da Realidade é apresentado para fins informativos e de entretenimento. Embora nos esforcemos para garantir a precisão das informações, não oferecemos garantias de qualquer tipo sobre a completude, precisão, confiabilidade ou adequação do conteúdo.</p>
          <p>O uso de qualquer informação obtida através deste site é de sua inteira responsabilidade e risco.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">4. Links para Terceiros</h2>
          <p>Nosso site pode conter links para sites de terceiros que não são de nossa propriedade ou controlados por nós. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros. Você reconhece e concorda que não seremos responsáveis, direta ou indiretamente, por qualquer dano ou perda causada pelo uso de tais conteúdos ou serviços.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">5. Limitação de Responsabilidade</h2>
          <p>Em nenhuma circunstância o Fatos Além da Realidade, seus diretores ou funcionários serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar nosso site.</p>
          
          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">6. Alterações nos Termos</h2>
          <p>Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso exclusivo critério.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">7. Contato</h2>
          <p>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco através da nossa página de Contato.</p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
