import React, { useState, useEffect } from 'react';
import { FileText, Globe, Menu, X, Settings2 } from 'lucide-react';
import { Language, ProfileData } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  profile: ProfileData;
  onOpenResume: () => void;
  onOpenEdit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  profile,
  onOpenResume,
  onOpenEdit,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['about', 'skills', 'projects', 'experience', 'articles', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', labelAz: 'Haqqımda', labelEn: 'About', id: 'about' },
    { href: '#skills', labelAz: 'Bacarıqlar', labelEn: 'Skills', id: 'skills' },
    { href: '#projects', labelAz: 'Layihələr', labelEn: 'Projects', id: 'projects' },
    { href: '#experience', labelAz: 'Təcrübə', labelEn: 'Experience', id: 'experience' },
    { href: '#articles', labelAz: 'Məqalələr', labelEn: 'Insights', id: 'articles' },
    { href: '#contact', labelAz: 'Əlaqə', labelEn: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-neutral-800/80 shadow-md'
          : 'bg-neutral-950/40 backdrop-blur-xs border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-neutral-100 hover:text-amber-400 transition-colors shrink-0"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {profile.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`transition-colors relative py-1 hover:text-neutral-100 ${
                activeSection === item.id ? 'text-amber-400 font-semibold' : 'text-neutral-300'
              }`}
            >
              {lang === 'az' ? item.labelAz : item.labelEn}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
            title={lang === 'az' ? 'Switch to English' : 'Azərbaycan dilinə keç'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase font-mono">{lang}</span>
          </button>

          {/* Quick Edit Profile Button */}
          <button
            onClick={onOpenEdit}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-200 bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
            title={lang === 'az' ? 'Profili Redaktə Et' : 'Edit Profile'}
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>{lang === 'az' ? 'Redaktə' : 'Edit'}</span>
          </button>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-colors shadow-xs whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'az' ? 'Rezüme / CV' : 'Resume'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-md hover:bg-neutral-900"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-5 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium border-b border-neutral-900 transition-colors ${
                  activeSection === item.id ? 'text-amber-400' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {lang === 'az' ? item.labelAz : item.labelEn}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEdit();
              }}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white"
            >
              <Settings2 className="w-4 h-4" />
              <span>{lang === 'az' ? 'Məlumatları Redaktə Et' : 'Edit Profile Info'}</span>
            </button>
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 text-xs text-amber-400"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'az' ? 'English version' : 'Azərbaycan dili'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
