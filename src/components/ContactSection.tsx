import React, { useState, useEffect } from 'react';
import { Mail, Clock, ShieldCheck, ArrowUpRight, Check, Copy } from 'lucide-react';
import { TEMPLATES_DATA } from '../data/templatesData';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

interface ContactSectionProps {
  initialSelectedTemplate?: string;
  initialEstimatedScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSelectedTemplate = '',
  initialEstimatedScope = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    websiteType: 'Business Platform',
    selectedTemplate: initialSelectedTemplate,
    budget: '$3,000 – $6,000',
    timeline: 'Within 1 Month',
    projectDetails: '',
  });

  useEffect(() => {
    if (initialSelectedTemplate) {
      setFormData((prev) => ({ ...prev, selectedTemplate: initialSelectedTemplate }));
    }
  }, [initialSelectedTemplate]);

  useEffect(() => {
    if (initialEstimatedScope) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prev.projectDetails
          ? `${prev.projectDetails}\n[Estimated Scope: ${initialEstimatedScope}]`
          : `Estimated Scope: ${initialEstimatedScope}`,
      }));
    }
  }, [initialEstimatedScope]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const websiteTypes = [
    'Enterprise & B2B Flagship',
    'Gastronomy & Hospitality Destination',
    'Creative Studio & Architectural Showcase',
    'Tactical Gaming & Esports Portal',
    'Executive Monograph / Thought Leadership',
    'Bespoke Interactive Commission',
  ];

  const budgetRanges = [
    '< $2,500',
    '$2,500 – $4,500',
    '$4,500 – $8,000',
    '$8,000+',
    'Custom Engagement Scope',
  ];

  const timelines = [
    'Express (< 2 Weeks)',
    'Within 1 Month',
    '1 – 2 Months',
    'Flexible Schedule',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleCopySummary = () => {
    const summary = `HAVEN Studio Project Brief\nName: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nDiscipline: ${formData.websiteType}\nArchetype: ${formData.selectedTemplate || 'Bespoke from Zero'}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nDetails: ${formData.projectDetails}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-section" className="py-28 md:py-36 bg-[#090A0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-white/[0.08] gap-6">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-body uppercase tracking-[0.15em] text-[var(--accent)] font-semibold mb-3">
                <span>INQUIRY & DISCOVERY</span>
                <span aria-hidden="true" className="text-white/20">/</span>
                <span className="text-slate-500">INITIATE COLLABORATION</span>
              </div>
              <h2 className="type-h2 font-bold font-display text-white tracking-tight">
                Initiate a project brief.
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-body">
              Tell us about your brand, commercial ambitions, and launch expectations. We review briefs within 24 business hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left: Studio Direct Communication (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <ScrollReveal direction="up" distance={20} delayMs={80}>
              <div className="p-7 border border-white/[0.10] bg-[#111319] rounded-sm">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block mb-2 font-semibold">
                  STUDIO PROTOCOL
                </span>
                <h3 className="text-xl font-bold font-display text-white mb-4">
                  Direct Senior Review
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Every inquiry is reviewed directly by our lead engineer and design director. No automated sales funnels or third-party call centers.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/[0.08] text-xs">
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Studio Email</div>
                    <a
                      href="mailto:hello.havenweb@gmail.com"
                      className="text-white hover:text-[var(--accent)] font-medium transition-colors"
                    >
                      hello.havenweb@gmail.com
                    </a>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Response SLA</div>
                    <div className="text-slate-300 font-mono">Under 24 Business Hours</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Intellectual Property</div>
                    <div className="text-slate-300 font-mono">100% Client Ownership Guarantee</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Selected Foundation Badge */}
            {formData.selectedTemplate && (
              <ScrollReveal direction="up" distance={15} delayMs={120}>
                <div className="p-5 border border-[var(--accent)]/40 bg-[#111319] rounded-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                      Selected Foundation
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedTemplate: '' })}
                      className="text-[10px] font-mono text-slate-400 hover:text-white uppercase underline cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="text-lg font-bold font-display text-white">
                    {formData.selectedTemplate}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Your brief will incorporate this architectural foundation for bespoke adaptation.
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Right: Architectural Brief Form (8 cols) */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up" distance={20} delayMs={100}>
              {submitted ? (
                <div className="p-8 sm:p-12 border border-[var(--accent)]/40 bg-[#111319] rounded-sm text-center">
                  <div className="w-12 h-12 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center mx-auto mb-5">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                    Project Brief Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have logged your brief for <span className="text-white font-semibold">{formData.business || 'your organization'}</span>. A lead design engineer will review your specifications and reply to <span className="text-white font-semibold">{formData.email}</span> within 24 business hours.
                  </p>

                  <div className="p-4 bg-[#090A0E] border border-white/[0.08] max-w-md mx-auto text-left text-xs font-mono text-slate-400 space-y-1 mb-8">
                    <div className="flex justify-between">
                      <span>Reference:</span>
                      <span className="text-white">HAVEN-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Focus:</span>
                      <span className="text-white">{formData.websiteType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Template:</span>
                      <span className="text-white">{formData.selectedTemplate || 'Bespoke from Zero'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Budget:</span>
                      <span className="text-white">{formData.budget}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-sm transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Summary Copied' : 'Copy Brief Summary'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          business: '',
                          websiteType: 'Enterprise & B2B Flagship',
                          selectedTemplate: '',
                          budget: '$3,000 – $6,000',
                          timeline: 'Within 1 Month',
                          projectDetails: '',
                        });
                      }}
                      className="btn-editorial inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#090A0E] bg-[var(--accent)] rounded-sm cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-10 border border-white/[0.10] bg-[#111319] rounded-sm space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#090A0E] border border-white/[0.12] rounded-sm text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#090A0E] border border-white/[0.12] rounded-sm text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Brand / Organization Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Dynamics"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full px-4 py-3 bg-[#090A0E] border border-white/[0.12] rounded-sm text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Target Discipline
                      </label>
                      <select
                        value={formData.websiteType}
                        onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#090A0E] border border-white/[0.12] rounded-sm text-xs text-white focus:outline-none focus:border-[var(--accent)] transition-colors cursor-pointer"
                      >
                        {websiteTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#090A0E]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Demonstration Foundation
                      </label>
                      <select
                        value={formData.selectedTemplate}
                        onChange={(e) => setFormData({ ...formData, selectedTemplate: e.target.value })}
                        className="w-full px-4 py-3 bg-[#090A0E] border border-white/[0.12] rounded-sm text-xs text-white focus:outline-none focus:border-[var(--accent)] transition-colors cursor-pointer"
                      >
                        <option value="" className="bg-[#090A0E]">None (100% Bespoke Identity)</option>
                        {TEMPLATES_DATA.map((t) => (
                          <option key={t.id} value={t.name} className="bg-[#090A0E]">
                            {t.name} [{t.category}]
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Anticipated Capital Allocation
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#090A0E] border border-white/[0.12] rounded-sm text-xs text-white focus:outline-none focus:border-[var(--accent)] transition-colors cursor-pointer"
                      >
                        {budgetRanges.map((b) => (
                          <option key={b} value={b} className="bg-[#090A0E]">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Target Launch Timetable
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelines.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setFormData({ ...formData, timeline: time })}
                          className={`p-2.5 text-xs font-mono rounded-sm border transition-all cursor-pointer ${
                            formData.timeline === time
                              ? 'bg-[var(--accent)] text-[#090A0E] border-[var(--accent)] font-semibold'
                              : 'bg-[#090A0E] border-white/[0.10] text-slate-400 hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Project Ambitions & Scope Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Detail your brand thesis, key requirements, competitor shortcomings, or specific timelines..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full px-4 py-3 bg-[#090A0E] border border-white/[0.12] rounded-sm text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <MagneticButton
                      strength={0.2}
                      maxOffset={5}
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-editorial w-full py-4 px-6 rounded-sm text-xs font-bold text-[#090A0E] bg-[var(--accent)] hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>Transmit Project Brief</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </MagneticButton>
                  </div>

                  <p className="text-center text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                    Commercial Non-Disclosure & Privacy Standard Enforced
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
