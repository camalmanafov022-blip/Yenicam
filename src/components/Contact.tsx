import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Language, ProfileData } from '../types';

interface ContactProps {
  lang: Language;
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ lang, profile }) => {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState<'project' | 'consultation' | 'career' | 'coffee'>('project');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
  };

  const inquiryLabels = {
    project: { az: 'Yeni Layihə', en: 'New Project' },
    consultation: { az: 'Texniki Məsləhət', en: 'Consultation' },
    career: { az: 'İş Təklifi', en: 'Opportunity' },
    coffee: { az: 'Qəhvə & Fikir Mübadiləsi', en: 'Coffee Chat' },
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            {lang === 'az' ? 'Əlaqə & Dialoq' : 'Reach Out'}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {lang === 'az' ? 'Gəlin Birlikdə Dəyər Yaradaq' : 'Let’s Build Something Exceptional'}
          </h2>
          <p className="mt-3 text-base text-neutral-400 max-w-xl">
            {lang === 'az'
              ? 'Yeni layihəniz, texniki ehtiyaclarınız və ya sadəcə salam vermək üçün birbaşa yazın.'
              : 'Have a project in mind, need technical architecture advice, or want to discuss ideas? Get in touch.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {lang === 'az' ? 'Birbaşa E-Poçt' : 'Direct Email'}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {lang === 'az' ? 'Tez Cavab' : 'Fast Response'}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 bg-neutral-950 rounded-xl border border-neutral-800">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-neutral-200 truncate">
                    {profile.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-md transition-colors shrink-0 flex items-center gap-1"
                  title={lang === 'az' ? 'Ünvanı kopyala' : 'Copy email'}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{lang === 'az' ? 'Kopyalandı' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'az' ? 'Kopyala' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'az' ? profile.locationAz : profile.locationEn}</span>
                <span aria-hidden="true">·</span>
                <span>GMT+4</span>
              </div>
            </div>

            {/* Social Networks List */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                {lang === 'az' ? 'Rəqəmsal Kanallar' : 'Social Ecosystem'}
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
                <a
                  href={profile.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>Telegram</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {lang === 'az' ? 'Təşəkkür edirəm!' : 'Thank you!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    {lang === 'az'
                      ? `Hörmətli ${name}, mesajınız qəbul edildi. Tezliklə ${email} ünvanı ilə sizinlə əlaqə saxlayacağam.`
                      : `Dear ${name}, your inquiry has been recorded. I will reply to ${email} as soon as possible.`}
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(
                        inquiryLabels[inquiryType][lang] + ' — ' + name
                      )}&body=${encodeURIComponent(message)}`}
                      className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                    >
                      {lang === 'az' ? 'E-poçt Klientində Aç' : 'Open in Mail Client'}
                    </a>
                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-lg transition-colors"
                    >
                      {lang === 'az' ? 'Yeni Mesaj Yaz' : 'Send Another Message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Inquiry Type Selector (Segmented control) */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      {lang === 'az' ? 'Müraciətin Mövzusu' : 'Inquiry Scope'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['project', 'consultation', 'career', 'coffee'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors truncate ${
                            inquiryType === type
                              ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold shadow-xs'
                              : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                          }`}
                        >
                          {inquiryLabels[type][lang]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        {lang === 'az' ? 'Adınız və Soyadınız' : 'Your Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'az' ? 'Məs: Elvin Əhmədov' : 'e.g. John Doe'}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-hidden focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        {lang === 'az' ? 'E-poçt Ünvanınız' : 'Your Email'}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={lang === 'az' ? 'nümunə@domen.az' : 'you@example.com'}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-hidden focus:border-amber-400 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      {lang === 'az' ? 'Mesajınız' : 'Your Message'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        lang === 'az'
                          ? 'Layihənizin detalları, tələbləriniz və ya suallarınız...'
                          : 'Describe your vision, scope, or questions...'
                      }
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-hidden focus:border-amber-400 transition-colors leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-colors shadow-sm disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {status === 'submitting'
                        ? (lang === 'az' ? 'Göndərilir...' : 'Sending...')
                        : (lang === 'az' ? 'Mesajı Göndər' : 'Send Message')}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
