
import React from 'react';
import { SocialIcon } from './icons/SocialIcon';
import MonetizationPlaceholder from './MonetizationPlaceholder';
import type { View } from '../types';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: View) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="bg-slate-900/70 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Suporte</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'faq')} className="text-base text-slate-400 hover:text-white">FAQ</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'documentation')} className="text-base text-slate-400 hover:text-white">Documentação</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'api-status')} className="text-base text-slate-400 hover:text-white">Status da API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'about')} className="text-base text-slate-400 hover:text-white">Sobre</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'blog')} className="text-base text-slate-400 hover:text-white">Blog</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'careers')} className="text-base text-slate-400 hover:text-white">Carreiras</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'privacy')} className="text-base text-slate-400 hover:text-white">Privacidade</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'terms')} className="text-base text-slate-400 hover:text-white">Termos</a></li>
            </ul>
          </div>
        </div>
        <div className="my-12">
            <MonetizationPlaceholder 
              title="Anúncio de Rodapé"
              description="Um local discreto para um banner (ex: 728x90)."
            />
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-slate-500 text-center md:text-left">&copy; {new Date().getFullYear()} Fatos Além da Realidade. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <SocialIcon platform="twitter" />
            <SocialIcon platform="instagram" />
            <SocialIcon platform="youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
