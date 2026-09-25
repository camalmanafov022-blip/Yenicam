import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language, ProfileData } from '../types';

interface HeroProps {
  lang: Language;
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, profile, onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-neutral-900">
      {/* Subtle radial ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Impact */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status indicator - clean inline text */}
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === 'az' ? profile.statusAz : profile.statusEn}</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <div className="space-y-3">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {lang === 'az' ? (
                  <>
                    Zərif kod, yüksək performans və <span className="text-amber-400">müasir veb</span> həlləri.
                  </>
                ) : (
                  <>
                    Refined code, peak performance and <span className="text-amber-400">modern web</span> architecture.
                  </>
                )}
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 font-medium max-w-2xl leading-relaxed">
                {lang === 'az' ? profile.titleAz : profile.titleEn}
              </p>
            </div>

            {/* Unboxed Metadata Line with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'az' ? profile.locationAz : profile.locationEn}
              </span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="font-mono text-neutral-300">{profile.email}</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-300">
                {lang === 'az' ? `${profile.yearsExperience}+ il mühəndislik təcrübəsi` : `${profile.yearsExperience}+ years engineering exp`}
              </span>
            </div>

            {/* Bio brief */}
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              {lang === 'az' ? profile.bioAz : profile.bioEn}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors shadow-sm"
              >
                <span>{lang === 'az' ? 'Layihələrimə Bax' : 'Explore Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>{lang === 'az' ? 'CV Yüklə / Rezüme' : 'Download CV'}</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'az' ? 'Əlaqə Saxla' : 'Get in Touch'}</span>
              </a>
            </div>

            {/* Adjacent Proof Metrics (Tabular Numbers & Rigor) */}
            <div className="pt-6 border-t border-neutral-900 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  {profile.yearsExperience}+
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                  {lang === 'az' ? 'İl Təcrübə' : 'Years Experience'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  {profile.completedProjects}+
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                  {lang === 'az' ? 'Layihə' : 'Completed Works'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 tabular-nums">
                  {profile.clientSatisfaction}
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                  {lang === 'az' ? 'Məmnuniyyət' : 'Satisfaction'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Visual Container / Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer structural frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
                <img
                  src={profile.portraitImage}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 sm:aspect-4/3 object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />

                {/* Measured Scrim for Media Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Overlaid caption badge / nameplate */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        {profile.name}
                      </h2>
                      <p className="text-xs text-neutral-400 font-mono">
                        {lang === 'az' ? 'Bakı · Rəqəmsal Mühəndis' : 'Baku · Digital Engineer'}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative subtle corner accents */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-amber-400/40 rounded-tr-lg pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-neutral-700 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
