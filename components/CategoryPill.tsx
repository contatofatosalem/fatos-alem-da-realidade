
import React from 'react';

interface CategoryPillProps {
  category: string;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ category }) => {
  return (
    <span className="text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 py-1 px-3 rounded-full">
      {category}
    </span>
  );
};

export default CategoryPill;
