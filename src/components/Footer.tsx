import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language, ProfileData } from '../types';

interface FooterProps {
  lang: Language;
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ lang, profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand mark */}
          <div className="text-center md:text-left">
            <span
              className="text-lg font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {profile.name}
            </span>
            <p className="text-xs text-neutral-400 mt-1">
              {lang === 'az' ? profile.subtitleAz : profile.subtitleEn}
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">
              {lang === 'az' ? 'Haqqımda' : 'About'}
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              {lang === 'az' ? 'Bacarıqlar' : 'Skills'}
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              {lang === 'az' ? 'Layihələr' : 'Projects'}
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              {lang === 'az' ? 'Təcrübə' : 'Experience'}
            </a>
            <a href="#articles" className="hover:text-white transition-colors">
              {lang === 'az' ? 'Məqalələr' : 'Articles'}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {lang === 'az' ? 'Əlaqə' : 'Contact'}
            </a>
          </nav>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <span>
              © 2026 {profile.name}. {lang === 'az' ? 'Bütün hüquqlar qorunur.' : 'All rights reserved.'}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-neutral-800"
              aria-label={lang === 'az' ? 'Yuxarı qayıt' : 'Back to top'}
              title={lang === 'az' ? 'Yuxarı qayıt' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
