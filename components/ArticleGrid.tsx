
import React from 'react';
import type { Article } from '../types';
import ArticleCard from './ArticleCard';
import MonetizationPlaceholder from './MonetizationPlaceholder';

interface ArticleGridProps {
  articles: Article[];
  onArticleSelect: (id: number) => void;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, onArticleSelect }) => {
  const articleItems = articles.map((article) => (
    <ArticleCard key={article.id} article={article} onArticleSelect={onArticleSelect} />
  ));

  // Inserir o placeholder do anúncio na posição 3 (após o terceiro artigo)
  articleItems.splice(3, 0, (
    <div key="ad-in-feed" className="w-full h-full min-h-[300px] flex">
      <MonetizationPlaceholder 
        title="Anúncio 'In-feed'"
        description="Aqui você pode usar um anúncio do AdSense que imita o estilo dos cards de artigo."
      />
    </div>
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articleItems}
    </div>
  );
};

export default ArticleGrid;
