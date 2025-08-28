
import React from 'react';

interface PlaceholderPageProps {
  title: string;
  children: React.ReactNode;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, children }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-lg border border-slate-700">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{title}</h1>
        <div className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {children}
        </div>
      </div>
    </main>
  );
};

export default PlaceholderPage;
