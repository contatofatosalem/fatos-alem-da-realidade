
import React from 'react';
import type { Article } from '../types';
import CategoryPill from './CategoryPill';

interface ArticleCardProps {
  article: Article;
  onArticleSelect: (id: number) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onArticleSelect }) => {
  return (
    <div 
      onClick={() => onArticleSelect(article.id)}
      className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
    >
      <div className="relative">
        <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4">
          <CategoryPill category={article.category} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{article.title}</h3>
        <p className="text-slate-400 text-sm mb-4">{article.excerpt}</p>
        <div className="flex items-center text-xs text-slate-500">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
