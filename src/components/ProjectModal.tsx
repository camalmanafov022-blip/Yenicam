import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Language, ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800 bg-neutral-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <span>{lang === 'az' ? project.categoryLabelAz : project.categoryLabelEn}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1" style={{ fontFamily: 'var(--font-display)' }}>
              {lang === 'az' ? project.titleAz : project.titleEn}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label="Bağla"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Showcase Image */}
          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
            <img
              src={project.imageUrl}
              alt={project.titleAz}
              referrerPolicy="no-referrer"
              className="w-full aspect-16/9 object-cover"
            />
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 mb-2">
              {lang === 'az' ? 'Layihə İcmalı' : 'Project Overview'}
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {lang === 'az' ? project.summaryAz : project.summaryEn}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                {lang === 'az' ? 'Problem & Çağırış' : 'The Challenge'}
              </h5>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'az' ? project.challengeAz : project.challengeEn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                {lang === 'az' ? 'Həll Yolu & Arxitektura' : 'Engineering Solution'}
              </h5>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'az' ? project.solutionAz : project.solutionEn}
              </p>
            </div>
          </div>

          {/* Impact Callout */}
          <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/20 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                {lang === 'az' ? 'Nəticə və Təsir' : 'Measurable Impact'}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {lang === 'az' ? project.impactAz : project.impactEn}
              </p>
            </div>
          </div>

          {/* Tech Stack - zero pills, clean inline list */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">
              {lang === 'az' ? 'İstifadə Olunan Texnologiyalar' : 'Technologies & Stack'}
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
              {project.techStack.map((tech, idx) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-950/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <span>{lang === 'az' ? 'Canlı Baxış (Demo)' : 'Live Demo'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{lang === 'az' ? 'Kod Anbarı' : 'Source Code'}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            {lang === 'az' ? 'Bağla' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
