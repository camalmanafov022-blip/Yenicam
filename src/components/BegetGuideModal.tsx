import React, { useEffect } from 'react';
import { X, Server, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface BegetGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BegetGuideModal: React.FC<BegetGuideModalProps> = ({ isOpen, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-6 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800 bg-neutral-950/60">
          <div className="flex items-center gap-2.5">
            <Server className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              {lang === 'az' ? 'Beget Hosting - Ağ Səhifənin Qarşısının Alınması' : 'Beget Hosting Deployment Guide'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[72vh] overflow-y-auto text-xs sm:text-sm leading-relaxed text-neutral-300">
          <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
            <p>
              {lang === 'az'
                ? 'Layihənizdə nisbi yollar (base: "./") və .htaccess yönləndirmə faylı artıq quraşdırıldı. Bu, Beget-də ağ səhifə problemini tam aradan qaldırır.'
                : 'Relative paths (base: "./") and the .htaccess routing rule have been successfully configured for Beget hosting.'}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-sm">
              {lang === 'az' ? 'Beget-ə Yükləmə Addımları:' : 'Steps to Upload to Beget:'}
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-neutral-300">
              <li>
                <span className="font-semibold text-white">Build edin:</span> Kompyuterinizdə və ya AI Studio-da <code className="font-mono text-amber-400 bg-neutral-950 px-1.5 py-0.5 rounded">npm run build</code> əmrini icra edin.
              </li>
              <li>
                <span className="font-semibold text-white">dist Qovluğu:</span> Build prosesi nəticəsində yaranan <code className="font-mono text-amber-400 bg-neutral-950 px-1.5 py-0.5 rounded">dist</code> qovluğunu açın.
              </li>
              <li>
                <span className="font-semibold text-white">Faylları Köçürün:</span> <code className="font-mono text-amber-400 bg-neutral-950 px-1.5 py-0.5 rounded">dist</code> qovluğunun <span className="underline font-bold">içindəki bütün faylları</span> (o cümlədən <code className="font-mono text-amber-400">.htaccess</code> faylını) Beget fayl menecerində domeninizin <code className="font-mono text-amber-400">public_html</code> qovluğuna yükləyin.
              </li>
              <li>
                <span className="font-semibold text-white">Gizli Fayllar:</span> Əgər <code className="font-mono text-amber-400">.htaccess</code> faylı görünmürsə, Beget fayl menecerində "Gizli faylları göstər" (Show hidden files) parametrini aktiv edin.
              </li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
          >
            {lang === 'az' ? 'Aydındır, Təşəkkürlər' : 'Got it, Thanks'}
          </button>
        </div>
      </div>
    </div>
  );
};
