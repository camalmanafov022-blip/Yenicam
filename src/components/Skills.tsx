import React, { useState } from 'react';
import { Layers, Server, Wrench, Sparkles, Search } from 'lucide-react';
import { Language, SkillItem } from '../types';
import { skillsData } from '../data/portfolioData';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools' | 'soft'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lang === 'az' ? skill.descriptionAz : skill.descriptionEn)
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-neutral-900 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              {lang === 'az' ? 'Texnoloji Baza' : 'Technical Proficiency'}
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {lang === 'az' ? 'Bacarıqlar & Texnologiyalar' : 'Core Stack & Engineering Skills'}
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-xl">
              {lang === 'az'
                ? 'İllər ərzində formalaşmış, real istehsalatda sınaqdan keçmiş müasir mühəndislik alətləri.'
                : 'Production-tested tools and frameworks honed across commercial implementations.'}
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'az' ? 'Texnologiya axtar...' : 'Search stack...'}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-4 py-2 text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-hidden focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg w-fit overflow-x-auto max-w-full mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'az' ? 'Hamısı' : 'All Stack'}
          </button>
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'frontend'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Frontend</span>
          </button>
          <button
            onClick={() => setActiveCategory('backend')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'backend'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Backend & DB</span>
          </button>
          <button
            onClick={() => setActiveCategory('tools')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'tools'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>DevOps & Tools</span>
          </button>
          <button
            onClick={() => setActiveCategory('soft')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeCategory === 'soft'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'az' ? 'Dizayn & Metodologiya' : 'Design & Methods'}</span>
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white font-sans">{skill.name}</h3>
                  <span className="text-xs font-mono text-amber-400 tabular-nums font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === 'az' ? skill.descriptionAz : skill.descriptionEn}
                </p>
              </div>

              {/* Minimalist Progress Meter */}
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-amber-400 h-full rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="py-12 text-center text-neutral-500 text-sm">
            {lang === 'az' ? 'Uyğun bacarıq tapılmadı.' : 'No matching skills found.'}
          </div>
        )}
      </div>
    </section>
  );
};
