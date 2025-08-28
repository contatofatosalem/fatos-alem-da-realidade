
import React from 'react';

interface MonetizationPlaceholderProps {
  title: string;
  description: string;
  className?: string;
}

const MonetizationPlaceholder: React.FC<MonetizationPlaceholderProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`text-center bg-slate-800 border border-slate-700 rounded-lg p-6 w-full h-full flex flex-col justify-center items-center transition-colors duration-300 hover:border-cyan-500/50 ${className}`}>
      <div className="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M9.401 15c-.519-.598-1.401-1.3-1.401-2 0-.7  .882-1.402 1.401-2M14.599 9c.519.598 1.401 1.3 1.401 2 0 .7-.882 1.402-1.401 2M12 19.5c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z" />
        </svg>
        <div>
           <h4 className="font-semibold text-slate-300 text-sm text-left">{title}</h4>
           <p className="text-slate-500 text-xs text-left mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MonetizationPlaceholder;