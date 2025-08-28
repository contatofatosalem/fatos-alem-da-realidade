import React from 'react';
import type { Article } from '../types';

interface CategoryListPageProps {
  articles: Article[];
  onCategorySelect: (category: string) => void;
}

const CategoryListPage: React.FC<CategoryListPageProps> = ({ articles, onCategorySelect }) => {
  const categories = [...new Set(articles.map(a => a.category))].sort();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Nossas Categorias</h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Explore nossos artigos organizados por temas fascinantes. Clique em uma categoria para começar sua jornada pelo inexplicável.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 group text-left"
          >
            <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{category}</h2>
            <p className="text-slate-400 mt-2">
              Ver todos os artigos sobre {category.toLowerCase()}.
            </p>
          </button>
        ))}
      </div>
    </main>
  );
};

export default CategoryListPage;