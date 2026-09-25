import React, { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, Tag } from 'lucide-react';
import { Language, ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  lang: Language;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800 bg-neutral-950/60">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
            <span className="text-amber-400 font-semibold">{lang === 'az' ? article.categoryAz : article.categoryEn}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {lang === 'az' ? article.dateAz : article.dateEn}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {lang === 'az' ? article.readTimeAz : article.readTimeEn}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label="Bağla"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <h1
            className="text-2xl sm:text-3xl font-extrabold text-white leading-tight [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {lang === 'az' ? article.titleAz : article.titleEn}
          </h1>

          <p className="text-sm font-medium text-amber-300/90 border-l-2 border-amber-400 pl-4 py-1 italic leading-relaxed">
            {lang === 'az' ? article.excerptAz : article.excerptEn}
          </p>

          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
            {(lang === 'az' ? article.contentAz : article.contentEn).map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-neutral-500" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-950/60 flex items-center justify-between">
          <div className="text-xs text-neutral-500">
            {lang === 'az' ? 'Müəllif: Camal Manafov' : 'Author: Camal Manafov'}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
          >
            {lang === 'az' ? 'Oxunuşu Bitir' : 'Done Reading'}
          </button>
        </div>
      </div>
    </div>
  );
};
