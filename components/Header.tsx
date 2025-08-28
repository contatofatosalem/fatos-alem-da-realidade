import React, { useState } from 'react';
import type { View } from '../types';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (view: View) => {
    const baseClass = "text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold";
    const activeClass = "text-cyan-400";
    
    const isActive = currentView === view || (view === 'categories' && currentView === 'categoryPage');
    
    return isActive ? `${baseClass} ${activeClass}` : baseClass;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: View) => {
    e.preventDefault();
    onNavigate(view);
    setIsMenuOpen(false); // Fecha o menu ao navegar
  };

  const navLinks = [
    { view: 'home' as View, label: 'Início' },
    { view: 'categories' as View, label: 'Categorias' },
    { view: 'about' as View, label: 'Sobre' },
    { view: 'contact' as View, label: 'Contato' },
  ];


  return (
    <header className="py-6 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider z-20">
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')} className="text-white hover:text-cyan-400 transition-colors duration-300">
            Fatos <span className="text-cyan-400">Além da Realidade</span>
          </a>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.view} href="#" onClick={(e) => handleLinkClick(e, link.view)} className={getLinkClass(link.view)}>{link.label}</a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Abrir menu</span>
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`absolute top-0 left-0 w-full bg-slate-900/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible pt-24 pb-8' : 'opacity-0 invisible'}`}
      >
        <nav className="flex flex-col items-center space-y-6">
           {navLinks.map(link => (
             <a 
               key={link.view} 
               href="#" 
               onClick={(e) => handleLinkClick(e, link.view)} 
               className={`${getLinkClass(link.view)} text-xl py-2`}
             >
               {link.label}
             </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;