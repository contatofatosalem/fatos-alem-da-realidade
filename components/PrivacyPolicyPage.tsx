
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-lg border border-slate-700">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">Política de Privacidade</h1>
        <p className="text-slate-400 italic mb-8">Última atualização: {lastUpdated}</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>Bem-vindo ao Fatos Além da Realidade. Sua privacidade é de extrema importância para nós. Esta Política de Privacidade visa esclarecer como coletamos, usamos, protegemos e tratamos seus dados pessoais ao navegar em nosso site.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">1. Informações que Coletamos</h2>
          <p>Coletamos informações de duas formas principais:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Informações fornecidas por você:</strong> Ao se inscrever em nossa newsletter, você nos fornece voluntariamente seu endereço de e-mail.</li>
            <li><strong>Informações coletadas automaticamente:</strong> Ao visitar nosso site, podemos coletar dados de navegação, como seu endereço IP, tipo de navegador, sistema operacional, páginas visitadas e tempo de permanência, através de cookies e tecnologias similares (por exemplo, Google Analytics).</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">2. Como Usamos Suas Informações</h2>
          <p>Utilizamos as informações coletadas para as seguintes finalidades:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Melhorar nosso conteúdo:</strong> Analisar dados de navegação nos ajuda a entender quais tópicos são mais populares e como podemos melhorar a experiência do usuário.</li>
            <li><strong>Comunicação:</strong> Usamos seu e-mail para enviar nossa newsletter com novas publicações e conteúdos exclusivos, caso você tenha optado por recebê-la.</li>
            <li><strong>Monetização:</strong> Dados anônimos e agregados podem ser utilizados para exibir publicidade relevante através de parceiros como o Google AdSense.</li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">3. Cookies e Tecnologias de Rastreamento</h2>
          <p>Utilizamos cookies para aprimorar sua experiência. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a lembrar de suas preferências e a coletar dados de análise. Você pode gerenciar ou desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade de algumas partes do site.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">4. Compartilhamento de Informações</h2>
          <p>Nós não vendemos, trocamos ou transferimos suas informações de identificação pessoal para terceiros sem o seu consentimento, exceto para parceiros de confiança que nos auxiliam na operação do site (como provedores de e-mail marketing e plataformas de análise), desde que concordem em manter essas informações confidenciais.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">5. Segurança dos Dados</h2>
          <p>Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. No entanto, nenhum método de transmissão pela Internet ou de armazenamento eletrônico é 100% seguro.</p>
          
          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">6. Seus Direitos</h2>
          <p>Você tem o direito de solicitar o acesso, a correção ou a exclusão de seus dados pessoais. Para se descadastrar da nossa newsletter, basta clicar no link "cancelar inscrição" presente em todos os e-mails.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">7. Alterações a Esta Política</h2>
          <p>Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova política nesta página. Recomendamos que você revise esta página periodicamente para quaisquer alterações.</p>

          <h2 className="text-2xl font-bold text-cyan-400 pt-6 border-t border-slate-700">8. Contato</h2>
          <p>Se tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através da nossa página de Contato.</p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
