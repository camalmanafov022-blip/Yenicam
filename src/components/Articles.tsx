import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Language, ArticleItem } from '../types';
import { articlesData } from '../data/portfolioData';
import { ArticleModal } from './ArticleModal';

interface ArticlesProps {
  lang: Language;
}

export const Articles: React.FC<ArticlesProps> = ({ lang }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="articles" className="py-20 md:py-28 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            {lang === 'az' ? 'Yazılar və Düşüncələr' : 'Perspectives & Writing'}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {lang === 'az' ? 'Məqalələr & Mühəndislik Fəlsəfəsi' : 'Articles & Technical Insights'}
          </h2>
          <p className="mt-3 text-base text-neutral-400 max-w-xl">
            {lang === 'az'
              ? 'Təmiz kod, arxitektura, veb performansı və minimalist dizayn barədə şəxsi qeydlərim.'
              : 'Reflections on modern web architecture, frontend craftsmanship, and design minimalism.'}
          </p>
        </div>

        {/* 3-in-a-row Editorial Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group cursor-pointer p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                {/* Metadata - unboxed */}
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                  <span className="text-amber-400 font-semibold">{lang === 'az' ? art.categoryAz : art.categoryEn}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {lang === 'az' ? art.readTimeAz : art.readTimeEn}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {lang === 'az' ? art.titleAz : art.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {lang === 'az' ? art.excerptAz : art.excerptEn}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors">
                <span>{lang === 'az' ? 'Məqaləni Oxu' : 'Read Full Article'}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
      />
    </section>
  );
};
