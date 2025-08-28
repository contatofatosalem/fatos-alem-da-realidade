
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ArticleGrid from './components/ArticleGrid';
import Oracle from './components/Oracle';
import Footer from './components/Footer';
import { mockArticles } from './constants';
import NewsletterCTA from './components/NewsletterCTA';
import type { Article, ContentBlock, View } from './types';
import CategoryPill from './components/CategoryPill';
import MonetizationPlaceholder from './components/MonetizationPlaceholder';
import PlaceholderPage from './components/PlaceholderPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CategoryListPage from './components/CategoryListPage';
import VideoSection from './components/VideoSection';

// Componente para a visualização completa do artigo
interface ArticleViewProps {
  article: Article;
  onBackClick: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBackClick }) => {
  const renderContentBlock = (block: ContentBlock, index: number | string) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index}>{block.text}</p>;
      case 'image':
        return (
          <figure key={index} className="my-8 animate-fade-in">
            <img src={block.src} alt={block.caption} className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg" />
            <figcaption className="text-center text-sm text-slate-400 mt-3 italic">{block.caption}</figcaption>
          </figure>
        );
      case 'video':
        return (
          <figure key={index} className="my-8 animate-fade-in">
            <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${block.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <figcaption className="text-center text-sm text-slate-400 mt-3 italic">{block.caption}</figcaption>
          </figure>
        );
      default:
        return null;
    }
  };
  
  // Dividir o conteúdo para inserir o anúncio no meio
  const midPoint = Math.floor(article.content.length / 2);
  const firstHalf = article.content.slice(0, midPoint);
  const secondHalf = article.content.slice(midPoint);


  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <button 
        onClick={onBackClick}
        className="mb-8 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Voltar
      </button>

      <article>
        <header className="border-b border-slate-700 pb-6 mb-8">
          <div className="mb-4">
            <CategoryPill category={article.category} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-slate-400">
            <span>Por {article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
            <span className="mx-2 hidden sm:inline-block">•</span>
            <span className="mt-2 sm:mt-0 w-full sm:w-auto">{article.readTime} min de leitura</span>
          </div>
        </header>
        
        <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
        
        <div className="text-lg text-slate-300 leading-relaxed space-y-6 font-serif">
          {firstHalf.map(renderContentBlock)}
          
          <div className="my-12">
            <MonetizationPlaceholder
              title="Espaço Publicitário Discreto"
              description="Ideal para um anúncio nativo, que se integra ao fluxo de leitura."
            />
          </div>

          {secondHalf.map((block, index) => renderContentBlock(block, `second-half-${index}`))}
        </div>
      </article>
    </main>
  );
};


const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [previousViewInfo, setPreviousViewInfo] = useState<{view: View, category: string | null}>({view: 'home', category: null});


  const handleArticleSelect = (id: number) => {
    const article = mockArticles.find(a => a.id === id);
    if (article) {
      setPreviousViewInfo({ view: currentView, category: selectedCategory });
      setSelectedArticle(article);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setCurrentView(previousViewInfo.view);
    setSelectedCategory(previousViewInfo.category);
    setSelectedArticle(null);
  };
  
  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setSelectedArticle(null);
    setSelectedCategory(null);
    window.scrollTo(0, 0);
  };
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('categoryPage');
    window.scrollTo(0, 0);
  };


  const featuredArticle = mockArticles[0];
  const otherArticles = mockArticles.slice(1);

  const renderMainContent = () => {
    if (selectedArticle) {
      return <ArticleView article={selectedArticle} onBackClick={handleBack} />;
    }

    switch (currentView) {
      case 'home':
        return (
          <main className="px-4 sm:px-6 lg:px-8">
            <HeroSection article={featuredArticle} onReadMore={() => handleArticleSelect(featuredArticle.id)} />
            
            <div className="max-w-7xl mx-auto my-16">
              <h2 className="text-3xl font-bold text-cyan-400 border-l-4 border-cyan-400 pl-4 mb-8">Últimas Publicações</h2>
              <ArticleGrid articles={otherArticles} onArticleSelect={handleArticleSelect} />
            </div>

            <VideoSection />

            <Oracle />

            <div className="max-w-7xl mx-auto my-16">
              <NewsletterCTA />
            </div>
          </main>
        );
      case 'categories':
        return <CategoryListPage articles={mockArticles} onCategorySelect={handleCategorySelect} />;
      
      case 'categoryPage': {
        const filteredArticles = mockArticles.filter(a => a.category === selectedCategory);
        return (
           <main className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-cyan-400 border-l-4 border-cyan-400 pl-4 mb-8">
                Artigos sobre: <span className="text-white">{selectedCategory}</span>
              </h2>
              <ArticleGrid articles={filteredArticles} onArticleSelect={handleArticleSelect} />
            </main>
        );
      }

      case 'about':
        return (
          <PlaceholderPage title="Sobre Nós">
            <p>Fatos Além da Realidade é um portal dedicado a explorar o inexplicável. Nossa missão é investigar, analisar e apresentar os mistérios que desafiam nossa compreensão do mundo.</p>
          </PlaceholderPage>
        );
      case 'contact':
        return (
          <PlaceholderPage title="Contato">
            <p>Tem uma sugestão de pauta, um relato pessoal ou quer fazer parte da nossa comunidade? Adoraríamos ouvir de você. Entre em contato pelo e-mail:</p>
            <a href="mailto:jefersonfornaroli@gmail.com" className="mt-4 inline-block text-cyan-400 font-bold hover:text-cyan-300 transition-colors duration-300 break-all">
              jefersonfornaroli@gmail.com
            </a>
          </PlaceholderPage>
        );
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfServicePage />;
      case 'faq':
      case 'documentation':
      case 'api-status':
      case 'blog':
      case 'careers':
         return (
          <PlaceholderPage title="Página em Construção">
            <p>Estamos trabalhando para trazer o melhor conteúdo para esta seção. Volte em breve para conferir as novidades!</p>
          </PlaceholderPage>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-5" style={{backgroundImage: "url('https://picsum.photos/seed/space/2000/1200')"}}></div>
      <div className="relative z-10">
        <Header currentView={currentView} onNavigate={handleNavigate} />
        
        {renderMainContent()}
        
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default App;