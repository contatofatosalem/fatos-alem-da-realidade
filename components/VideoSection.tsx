import React from 'react';

const VideoSection: React.FC = () => {
  const videoId = 'tJ1jDwto8w8';

  return (
    <section className="max-w-7xl mx-auto my-16 sm:my-24">
      <h2 className="text-3xl font-bold text-cyan-400 border-l-4 border-cyan-400 pl-4 mb-8">Destaque em Vídeo</h2>
      <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl shadow-2xl shadow-cyan-500/10 border border-slate-700">
        <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;