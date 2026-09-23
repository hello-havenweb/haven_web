import React, { useState, useEffect } from 'react';
import { TemplateItem } from '../data/templatesData';
import { X, Monitor, Tablet, Smartphone, ArrowUpRight, Check, Shield } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface TemplateDemoModalProps {
  template: TemplateItem | null;
  onClose: () => void;
  onGetTemplate: (templateName: string) => void;
}

export const TemplateDemoModal: React.FC<TemplateDemoModalProps> = ({
  template,
  onClose,
  onGetTemplate,
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    if (template) {
      setActiveTab(template.pages[0] || 'Overview');
    }
  }, [template]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!template) return null;

  const deviceWidthClasses = {
    desktop: 'w-full max-w-5xl h-[78vh]',
    tablet: 'w-[720px] max-w-full h-[75vh]',
    mobile: 'w-[380px] max-w-full h-[75vh]',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07090D]/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-[#111319] border border-white/[0.14] rounded-sm shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 border-b border-white/[0.08] bg-[#0E1016] flex flex-wrap items-center justify-between gap-4">
          {/* Template Info */}
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: template.accentColor }}
            />
            <div>
              <h2 id="demo-modal-title" className="text-sm font-bold font-display text-white flex items-center gap-2">
                <span>{template.name}</span>
                <span className="text-[11px] font-mono text-slate-500 font-normal">
                  / {template.category} Flagship Simulator
                </span>
              </h2>
            </div>
          </div>

          {/* Viewport Toggles */}
          <div className="flex items-center gap-1 bg-[#090A0E] p-1 border border-white/10 rounded-sm">
            <button
              onClick={() => setDevice('desktop')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer ${
                device === 'desktop'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer ${
                device === 'tablet'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`px-2.5 py-1 text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer ${
                device === 'mobile'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <MagneticButton
              strength={0.2}
              maxOffset={4}
              onClick={() => {
                onGetTemplate(template.name);
                onClose();
              }}
              className="btn-editorial inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#090A0E] bg-[var(--accent)] rounded-sm hover:brightness-105 transition-all cursor-pointer"
            >
              <span>Commission Foundation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Browser Simulator Workspace */}
        <div className="flex-1 overflow-y-auto bg-[#090A0E] p-4 sm:p-6 flex justify-center items-start">
          <div
            className={`transition-all duration-300 bg-[#111319] border border-white/[0.12] rounded-sm shadow-2xl flex flex-col overflow-hidden ${deviceWidthClasses[device]}`}
          >
            {/* Address Bar */}
            <div className="px-4 py-2 bg-[#0E1016] border-b border-white/[0.08] flex items-center justify-between text-xs text-slate-400 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>

              <div className="flex items-center gap-2 px-3 py-1 bg-[#090A0E] border border-white/10 text-slate-300 font-mono text-[11px] max-w-sm w-full mx-4 truncate">
                <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>haven://flagships/{template.id}</span>
              </div>

              <div className="text-[10px] font-mono text-slate-500 uppercase">
                {device}
              </div>
            </div>

            {/* Simulated Header */}
            <div className="px-6 py-3.5 bg-[#111319] border-b border-white/[0.08] flex items-center justify-between">
              <div className="font-bold font-display tracking-tight text-white text-base">
                {template.name}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {template.pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setActiveTab(page)}
                    className={`px-2 py-0.5 text-xs font-mono transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === page
                        ? 'text-[var(--accent)] font-semibold border-b border-[var(--accent)]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Body Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-200">
              <div className="border border-white/[0.08] bg-[#0E1016] p-6 sm:p-8 rounded-sm">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-2 text-slate-400">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: template.accentColor }}
                    />
                    <span>{template.tagline}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3 leading-tight">
                    {template.mockContent.heroTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {template.mockContent.heroSubtitle}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 text-xs font-mono text-white bg-[#090A0E]">
                    <span className="text-[var(--accent)] font-bold">Standard Metric:</span>
                    <span>{template.mockContent.keyMetric}</span>
                  </div>
                </div>

                <div className="mt-6 border border-white/[0.08] overflow-hidden">
                  <img
                    src={template.image}
                    alt={`${template.name} Website Screenshot`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover max-h-[380px]"
                  />
                </div>
              </div>

              {/* Core Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
                  Engineered Feature Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {template.mockContent.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#0E1016] border border-white/[0.08] flex items-start gap-2 text-xs text-slate-300"
                    >
                      <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rationale & Tech */}
              <div className="p-5 bg-[#0E1016] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Tech Stack Foundation
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {template.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 bg-[#090A0E] text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <MagneticButton
                  strength={0.2}
                  maxOffset={4}
                  onClick={() => {
                    onGetTemplate(template.name);
                    onClose();
                  }}
                  className="btn-editorial px-5 py-2.5 text-xs font-bold text-[#090A0E] bg-[var(--accent)] rounded-sm hover:brightness-105 transition-all shrink-0 cursor-pointer"
                >
                  Adopt Foundation
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
