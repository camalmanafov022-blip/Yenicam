import React from 'react';
import { Briefcase, GraduationCap, Quote } from 'lucide-react';
import { Language } from '../types';
import { experienceData, educationData, testimonialsData } from '../data/portfolioData';

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-neutral-900 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            {lang === 'az' ? 'Yol Xəritəsi' : 'Trajectory'}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {lang === 'az' ? 'Peşəkar Təcrübə & Təhsil' : 'Experience & Academic Foundations'}
          </h2>
          <p className="mt-3 text-base text-neutral-400 max-w-xl">
            {lang === 'az'
              ? 'Müxtəlif miqyaslı komandalarda aparıcı və mühəndis rollarında qazanılmış real təcrübə.'
              : 'Chronological timeline of commercial engineering leadership and academic background.'}
          </p>
        </div>

        {/* 2-Column Split: Work Experience vs Education & Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
              <Briefcase className="w-5 h-5 text-amber-400" />
              <span>{lang === 'az' ? 'İş Təcrübəsi' : 'Commercial Experience'}</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 space-y-10">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Subtle Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-amber-400" />

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {lang === 'az' ? exp.roleAz : exp.roleEn}
                      </h4>
                      <span className="text-xs font-mono text-neutral-400">
                        {lang === 'az' ? exp.periodAz : exp.periodEn}
                      </span>
                    </div>

                    <div className="text-xs text-neutral-400 font-medium">
                      <span className="text-amber-400 font-semibold">{exp.company}</span>
                      <span className="mx-2 text-neutral-700">·</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {lang === 'az' ? exp.descriptionAz : exp.descriptionEn}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-1.5 pt-1 text-xs text-neutral-400">
                      {(lang === 'az' ? exp.achievementsAz : exp.achievementsEn).map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">›</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Used - Clean separator format */}
                    <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-neutral-400">
                      {exp.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Testimonials */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education Block */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>{lang === 'az' ? 'Təhsil' : 'Academic Education'}</span>
              </h3>

              {educationData.map((edu) => (
                <div key={edu.id} className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                    <span>{edu.period}</span>
                    <span className="text-amber-400">{lang === 'az' ? 'Bakalavr' : 'B.S. Degree'}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === 'az' ? edu.degreeAz : edu.degreeEn}
                  </h4>
                  <p className="text-xs text-neutral-300 font-medium">
                    {lang === 'az' ? edu.institutionAz : edu.institutionEn}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                    {lang === 'az' ? edu.detailsAz : edu.detailsEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonials / Social Proof */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                <Quote className="w-5 h-5 text-amber-400" />
                <span>{lang === 'az' ? 'Həmkarların Rəyləri' : 'Collaborator Endorsements'}</span>
              </h3>

              <div className="space-y-4">
                {testimonialsData.map((t) => (
                  <div key={t.id} className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                    <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                      "{lang === 'az' ? t.textAz : t.textEn}"
                    </p>
                    <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">{t.author}</div>
                        <div className="text-[11px] text-neutral-400">
                          {lang === 'az' ? t.roleAz : t.roleEn} · <span className="text-amber-400">{t.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
