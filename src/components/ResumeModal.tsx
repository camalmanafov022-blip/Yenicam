import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Globe } from 'lucide-react';
import { Language, ProfileData } from '../types';
import { skillsData, experienceData, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  profile: ProfileData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang, profile }) => {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printed) */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-950 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white font-mono">
              {lang === 'az' ? 'Rəsmi CV / Rezüme Baxışı' : 'Curriculum Vitae Preview'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'az' ? 'Çap Et / PDF Yadda Saxla' : 'Print / Export PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800 rounded-md transition-colors"
              aria-label="Bağla"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto bg-neutral-950 text-neutral-100 print:max-h-none print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-neutral-800 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white print:text-black" style={{ fontFamily: 'var(--font-display)' }}>
                  {profile.name}
                </h1>
                <p className="text-amber-400 font-medium text-sm mt-1 print:text-neutral-700">
                  {lang === 'az' ? profile.titleAz : profile.titleEn}
                </p>
              </div>

              <div className="text-xs font-mono text-neutral-400 print:text-neutral-600 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3 h-3 text-amber-400 print:text-neutral-500" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-400 print:text-neutral-500" />
                  <span>{lang === 'az' ? profile.locationAz : profile.locationEn}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Globe className="w-3 h-3 text-amber-400 print:text-neutral-500" />
                  <span>portfolio.camalmanafov.az</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 print:text-neutral-800 font-bold mb-2">
              {lang === 'az' ? '01 // Peşəkar Xülasə' : '01 // Executive Summary'}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-700 leading-relaxed">
              {lang === 'az' ? profile.bioAz : profile.bioEn}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 print:text-neutral-800 font-bold mb-2">
              {lang === 'az' ? '02 // Əsas Bacarıqlar & Texnoloji Baza' : '02 // Core Competencies & Stack'}
            </h2>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {skillsData.map((s) => (
                <span
                  key={s.name}
                  className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 print:bg-neutral-100 print:border-neutral-300 print:text-neutral-900"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 print:text-neutral-800 font-bold mb-3">
              {lang === 'az' ? '03 // İş Təcrübəsi' : '03 // Professional Experience'}
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap justify-between font-bold text-white print:text-black">
                    <span>{lang === 'az' ? exp.roleAz : exp.roleEn}</span>
                    <span className="font-mono text-neutral-400 print:text-neutral-600 font-normal">
                      {lang === 'az' ? exp.periodAz : exp.periodEn}
                    </span>
                  </div>
                  <div className="text-amber-400/90 print:text-neutral-700 text-xs font-medium mb-1">
                    {exp.company} · {exp.location}
                  </div>
                  <p className="text-neutral-300 print:text-neutral-700 text-xs leading-relaxed mb-1.5">
                    {lang === 'az' ? exp.descriptionAz : exp.descriptionEn}
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] sm:text-xs text-neutral-400 print:text-neutral-600">
                    {(lang === 'az' ? exp.achievementsAz : exp.achievementsEn).map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 print:text-neutral-800 font-bold mb-2">
              {lang === 'az' ? '04 // Təhsil' : '04 // Education'}
            </h2>
            {educationData.map((edu) => (
              <div key={edu.id} className="text-xs sm:text-sm">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>{lang === 'az' ? edu.degreeAz : edu.degreeEn}</span>
                  <span className="font-mono text-neutral-400 print:text-neutral-600 font-normal">{edu.period}</span>
                </div>
                <div className="text-neutral-400 print:text-neutral-600 text-xs">
                  {lang === 'az' ? edu.institutionAz : edu.institutionEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
