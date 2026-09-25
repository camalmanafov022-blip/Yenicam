import React, { useState } from 'react';
import { User, Target, ShieldCheck, HeartHandshake, Code2, Compass } from 'lucide-react';
import { Language, ProfileData } from '../types';
import { workspaceImg } from '../data/portfolioData';

interface AboutProps {
  lang: Language;
  profile: ProfileData;
}

export const About: React.FC<AboutProps> = ({ lang, profile }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'philosophy' | 'workflow'>('story');

  const principles = [
    {
      icon: Code2,
      num: '01',
      titleAz: 'Təmiz Kod və Miqyaslanabilən Arxitektura',
      titleEn: 'Clean Code & Architectural Integrity',
      descAz: 'Kod təkcə bu gün işləməməli, sabah da asanlıqla oxunmalı, genişləndirilməli və komanda tərəfindən inkişaf etdirilməlidir.',
      descEn: 'Code must not merely execute today; it must remain effortlessly readable, extensible, and maintainable tomorrow.',
    },
    {
      icon: Target,
      num: '02',
      titleAz: 'İstifadəçi Rahatlığı və Yüksək Sürət',
      titleEn: 'User-Centric Empathy & Speed',
      descAz: 'Hər bir animasiya, keçid və düymə məqsədə xidmət etməlidir. Saytın hər saniyəsi istifadəçiyə dəyər və rahatlıq bəxş etməlidir.',
      descEn: 'Every transition, keystroke, and layout shift must serve human intent, respecting visitor time with instantaneous response.',
    },
    {
      icon: Compass,
      num: '03',
      titleAz: 'Davamlı Təkamül və Dəqiqlik',
      titleEn: 'Continuous Mastery & Precision',
      descAz: 'Veb daim dəyişir. Müasir standartları, təhlükəsizlik qaydalarını və ən son alətləri dərindən öyrənərək tətbiq edirəm.',
      descEn: 'The digital frontier is dynamic. I continuously study emerging paradigms, web vitals, and cryptographic security hygiene.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            {lang === 'az' ? 'Tanışlıq' : 'Identity'}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {lang === 'az' ? 'Mən Kiməm? Hekayəm və Dəyərlərim' : 'Who I Am: Journey, Vision & Values'}
          </h2>
          <p className="mt-3 text-base text-neutral-400 max-w-2xl">
            {lang === 'az'
              ? 'Rəqəmsal dünyada zərif və funksional məhsullar quran tərtibatçının pərdəarxası dünyası.'
              : 'A closer look at my professional background, engineering discipline, and personal ethos.'}
          </p>
        </div>

        {/* Dynamic Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900/80 border border-neutral-800 rounded-lg w-fit mb-10">
          <button
            onClick={() => setActiveTab('story')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'story'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'az' ? 'Hekayəm & Bioqrafiya' : 'Story & Bio'}
          </button>
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'philosophy'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'az' ? 'İş Prinsiplərim' : 'Guiding Principles'}
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'workflow'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'az' ? 'İş Mühitim & Alətlər' : 'Workspace & Rituals'}
          </button>
        </div>

        {/* Tab 1: Story & Bio */}
        {activeTab === 'story' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="prose prose-invert max-w-none text-neutral-300 leading-relaxed text-base space-y-4">
                {(lang === 'az' ? profile.fullStoryAz : profile.fullStoryEn)
                  .split('\n\n')
                  .map((para, idx) => (
                    <p key={idx} className="text-neutral-300 leading-relaxed">
                      {para}
                    </p>
                  ))}
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{lang === 'az' ? 'Etibarlılıq və Zəmanət' : 'Reliability Guarantee'}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-normal">
                    {lang === 'az'
                      ? 'Layihələrin vaxtında, yüksək standartlara və texniki tələblərə tam uyğun çatdırılması.'
                      : 'Delivering resilient, thoroughly tested solutions aligned strictly with release timelines.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-1">
                    <HeartHandshake className="w-4 h-4" />
                    <span>{lang === 'az' ? 'Şəffaf Əməkdaşlıq' : 'Transparent Synergy'}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-normal">
                    {lang === 'az'
                      ? 'İş prosesi zamanı aydın ünsiyyət, daimi məlumatlandırma və qarşılıqlı etimad.'
                      : 'Unambiguous roadmaps, regular sprint showcases, and open engineering dialogue.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side card with quick facts */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                  <User className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'az' ? 'Qısa Məlumatlar' : 'Personal Dossier'}</span>
                </h3>

                <div className="divide-y divide-neutral-800 text-sm">
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-neutral-400">{lang === 'az' ? 'Ad və Soyad' : 'Full Name'}</span>
                    <span className="text-white font-medium">{profile.name}</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-neutral-400">{lang === 'az' ? 'Yerləşmə' : 'Location'}</span>
                    <span className="text-white font-medium">{lang === 'az' ? profile.locationAz : profile.locationEn}</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-neutral-400">{lang === 'az' ? 'Əsas Sahə' : 'Discipline'}</span>
                    <span className="text-white font-medium">{lang === 'az' ? 'Veb Mühəndisliyi' : 'Web Engineering'}</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-neutral-400">{lang === 'az' ? 'İş Rejimi' : 'Availability'}</span>
                    <span className="text-emerald-400 font-mono text-xs font-medium">
                      {lang === 'az' ? 'Tam Ştat / Müstəqil Layihələr' : 'Full-time / High-Impact Contracts'}
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-neutral-400">{lang === 'az' ? 'Dillər' : 'Languages'}</span>
                    <span className="text-neutral-200 text-xs font-mono">
                      {lang === 'az' ? 'Azərbaycan (Ana dili) · İngilis (İşgüzar)' : 'Azerbaijani (Native) · English (Proficient)'}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="block text-center w-full py-2.5 px-4 text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                  >
                    {lang === 'az' ? 'Mənimlə Birgə İşləyin' : 'Initiate Collaboration'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Guiding Principles */}
        {activeTab === 'philosophy' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 font-bold">{p.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {lang === 'az' ? p.titleAz : p.titleEn}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {lang === 'az' ? p.descAz : p.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Workspace & Tools */}
        {activeTab === 'workflow' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img
                src={workspaceImg}
                alt="Workspace"
                referrerPolicy="no-referrer"
                className="w-full aspect-16/9 object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                {lang === 'az' ? 'Fokuslanmış və Səliqəli Mühit' : 'Ergonomic, Distraction-Free Rig'}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {lang === 'az'
                  ? 'Keyfiyyətli proqram təminatı səliqəli düşüncə tələb edir. Gündəlik işimdə minimalist fiziki masa quruluşu, mexaniki klaviatura və yüksək dəqiqlikli ekranlardan istifadə edirəm. Kod redaktoru olaraq VS Code və Neovim, brauzer analizində isə Chrome DevTools əsas köməkçilərimdir.'
                  : 'High-caliber software flows from a tranquil environment. My workstation blends ergonomic hardware, tactile mechanical actuation, dual calibrated 4K panels, and Linux-based toolchains for uninterrupted deep work.'}
              </p>
              <div className="space-y-2 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{lang === 'az' ? 'Əsas ƏS: macOS & Linux mühiti' : 'Primary OS: macOS & Linux containers'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{lang === 'az' ? 'Redaktor: VS Code (şəxsi minimalist tema)' : 'Editor: VS Code & Vim keybindings'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{lang === 'az' ? 'Terminal: zsh + tmux + git cli' : 'Terminal: zsh, tmux & strict git hygiene'}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
