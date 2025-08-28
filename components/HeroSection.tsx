
import React from 'react';
import type { Article } from '../types';
import CategoryPill from './CategoryPill';

interface HeroSectionProps {
  article: Article;
  onReadMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ article, onReadMore }) => {
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-16">
      <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/10">
        <img src={article.imageUrl} alt={article.title} className="w-full h-96 md:h-[500px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
          <CategoryPill category={article.category} />
          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-shadow-lg">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-slate-300 hidden sm:block">{article.excerpt}</p>
          <div className="mt-6 flex items-center text-sm text-slate-400">
            <span>Por {article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime} min de leitura</span>
          </div>
          <button 
            onClick={onReadMore}
            className="mt-8 bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-md hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            Leia o Artigo Completo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
