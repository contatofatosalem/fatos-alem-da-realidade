import React from 'react';
import type { View } from '../types';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const getLinkClass = (view: View) => {
    const baseClass = "text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold";
    const activeClass = "text-cyan-400";
    
    const isActive = currentView === view || (view === 'categories' && currentView === 'categoryPage');
    
    return isActive ? `${baseClass} ${activeClass}` : baseClass;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: View) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <header className="py-6 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="text-white hover:text-cyan-400 transition-colors duration-300">
            Fatos <span className="text-cyan-400">Além da Realidade</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className={getLinkClass('home')}>Início</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'categories')} className={getLinkClass('categories')}>Categorias</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'about')} className={getLinkClass('about')}>Sobre</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'contact')} className={getLinkClass('contact')}>Contato</a>
        </nav>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;