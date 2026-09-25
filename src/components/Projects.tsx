import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'system'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filtered = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              {lang === 'az' ? 'Portfel' : 'Selected Works'}
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {lang === 'az' ? 'Seçilmiş Layihələr & Həllər' : 'Featured Projects & Case Studies'}
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-xl">
              {lang === 'az'
                ? 'Biznes tələblərinə uyğunlaşdırılmış, performans və istifadəçi mərkəzli həllər.'
                : 'Engineered web solutions focused on high throughput, responsive design, and delightful ergonomics.'}
            </p>
          </div>

          {/* Interactive filter controls */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg w-fit">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'az' ? 'Hamısı' : 'All Works'}
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'web'
                  ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'az' ? 'Veb Platformalar' : 'Web Platforms'}
            </button>
            <button
              onClick={() => setFilter('system')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'system'
                  ? 'bg-amber-400 text-neutral-950 font-semibold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'az' ? 'Sistemlər & Alətlər' : 'Systems & Tools'}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Image Frame with hover zoom */}
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-950">
                <img
                  src={proj.imageUrl}
                  alt={proj.titleAz}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Corner quick affordance */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-950/80 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-amber-400 group-hover:border-amber-400/50 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Content - Leads with title and quiet text metadata */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-2">
                    <span>{lang === 'az' ? proj.categoryLabelAz : proj.categoryLabelEn}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.year}</span>
                  </div>

                  <h3
                    className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {lang === 'az' ? proj.titleAz : proj.titleEn}
                  </h3>

                  <p className="mt-2.5 text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {lang === 'az' ? proj.summaryAz : proj.summaryEn}
                  </p>
                </div>

                {/* Tech Stack list - unboxed */}
                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-neutral-400">
                    {proj.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-neutral-400">
                        {tech}
                        <span className="last:hidden text-neutral-600 ml-1.5">/</span>
                      </span>
                    ))}
                    {proj.techStack.length > 4 && (
                      <span className="text-neutral-500">+{proj.techStack.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
