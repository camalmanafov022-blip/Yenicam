import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Check } from 'lucide-react';
import { Language, ProfileData } from '../types';
import { initialProfile } from '../data/portfolioData';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
}

export const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  lang,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setFormData(profile);
  }, [profile, isOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    if (window.confirm(lang === 'az' ? 'Məlumatları ilkin vəziyyətinə qaytarmaq istəyirsiniz?' : 'Reset to default data?')) {
      setFormData(initialProfile);
      onSave(initialProfile);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800 bg-neutral-950/60">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              {lang === 'az' ? 'Şəxsi Məlumatları Redaktə Et' : 'Edit Personal Profile'}
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              {lang === 'az'
                ? 'Saytınızda görünən ad, peşə, əlaqə və bioqrafiya məlumatlarını yeniləyin.'
                : 'Modify your display name, designation, email, and biography.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-neutral-300 mb-1">
                {lang === 'az' ? 'Ad və Soyad' : 'Full Name'}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-300 mb-1">
                {lang === 'az' ? 'E-poçt Ünvanı' : 'Email Address'}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white font-mono focus:outline-hidden focus:border-amber-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-neutral-300 mb-1">
                {lang === 'az' ? 'Peşə Başlığı (AZ)' : 'Title (AZ)'}
              </label>
              <input
                type="text"
                value={formData.titleAz}
                onChange={(e) => setFormData({ ...formData, titleAz: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-300 mb-1">
                {lang === 'az' ? 'Peşə Başlığı (EN)' : 'Title (EN)'}
              </label>
              <input
                type="text"
                value={formData.titleEn}
                onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-neutral-300 mb-1">
                {lang === 'az' ? 'Şəhər / Ölkə (AZ)' : 'Location (AZ)'}
              </label>
              <input
                type="text"
                value={formData.locationAz}
                onChange={(e) => setFormData({ ...formData, locationAz: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-300 mb-1">
                {lang === 'az' ? 'Şəhər / Ölkə (EN)' : 'Location (EN)'}
              </label>
              <input
                type="text"
                value={formData.locationEn}
                onChange={(e) => setFormData({ ...formData, locationEn: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-300 mb-1">
              {lang === 'az' ? 'Qısa Bioqrafiya (AZ)' : 'Short Bio (AZ)'}
            </label>
            <textarea
              rows={3}
              value={formData.bioAz}
              onChange={(e) => setFormData({ ...formData, bioAz: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-400 leading-relaxed"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-300 mb-1">
              {lang === 'az' ? 'Qısa Bioqrafiya (EN)' : 'Short Bio (EN)'}
            </label>
            <textarea
              rows={3}
              value={formData.bioEn}
              onChange={(e) => setFormData({ ...formData, bioEn: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-amber-400 leading-relaxed"
            />
          </div>

          {/* Footer Controls */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-rose-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'az' ? 'İlkin Vəziyyətə Qaytar' : 'Reset to Default'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {lang === 'az' ? 'Ləğv Et' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>{lang === 'az' ? 'Yadda Saxlanıldı!' : 'Saved!'}</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>{lang === 'az' ? 'Yadda Saxla' : 'Save Changes'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
