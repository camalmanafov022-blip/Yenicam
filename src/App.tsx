import React, { useState, useEffect } from 'react';
import { Language, ProfileData } from './types';
import { initialProfile } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProfileEditModal } from './components/ProfileEditModal';
import { BegetGuideModal } from './components/BegetGuideModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('camal_lang');
    return (saved === 'en' || saved === 'az') ? saved : 'az';
  });

  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('camal_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure image reference stays intact
        return { ...initialProfile, ...parsed, portraitImage: initialProfile.portraitImage };
      } catch (e) {
        console.error('Failed to parse saved profile', e);
      }
    }
    return initialProfile;
  });

  const [resumeOpen, setResumeOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [begetGuideOpen, setBegetGuideOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('camal_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'az' ? 'en' : 'az'));
  };

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    localStorage.setItem('camal_profile', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        profile={profile}
        onOpenResume={() => setResumeOpen(true)}
        onOpenEdit={() => setEditOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          profile={profile}
          onOpenResume={() => setResumeOpen(true)}
        />

        <About
          lang={lang}
          profile={profile}
        />

        <Skills
          lang={lang}
        />

        <Projects
          lang={lang}
        />

        <Experience
          lang={lang}
        />

        <Articles
          lang={lang}
        />

        <Contact
          lang={lang}
          profile={profile}
        />
      </main>

      {/* Clean Footer */}
      <Footer
        lang={lang}
        profile={profile}
        onOpenBegetGuide={() => setBegetGuideOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        lang={lang}
        profile={profile}
      />

      <ProfileEditModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        lang={lang}
        profile={profile}
        onSave={handleSaveProfile}
      />

      <BegetGuideModal
        isOpen={begetGuideOpen}
        onClose={() => setBegetGuideOpen(false)}
        lang={lang}
      />
    </div>
  );
}
