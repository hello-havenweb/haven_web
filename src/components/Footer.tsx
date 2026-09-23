import React from 'react';
import { ArrowUp, Mail, Instagram, Youtube, Pin as PinterestPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0E] text-slate-400 border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/[0.08]">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2.5">
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                HAVEN
              </span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase text-slate-500">
                / STUDIO
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-body">
              An independent digital experience studio. We engineer bespoke websites for ambitious brands, restaurants, gaming organizations, and industry leaders.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <MagneticButton
                strength={0.2}
                maxOffset={4}
                onClick={() => window.open('https://instagram.com', '_blank', 'noopener,noreferrer')}
                className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
                aria-label="HAVEN on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </MagneticButton>

              <MagneticButton
                strength={0.2}
                maxOffset={4}
                onClick={() => window.open('https://youtube.com', '_blank', 'noopener,noreferrer')}
                className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
                aria-label="HAVEN on YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </MagneticButton>

              <MagneticButton
                strength={0.2}
                maxOffset={4}
                onClick={() => window.open('https://pinterest.com', '_blank', 'noopener,noreferrer')}
                className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
                aria-label="HAVEN on Pinterest"
              >
                <PinterestPin className="w-3.5 h-3.5" />
              </MagneticButton>

              <MagneticButton
                strength={0.2}
                maxOffset={4}
                onClick={() => {
                  window.location.href = 'mailto:hello.havenweb@gmail.com';
                }}
                className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
                aria-label="Email HAVEN Studio"
              >
                <Mail className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>

          {/* Navigation Column (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-4">
              Index
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Disciplines
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('templates')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Flagships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Engagements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Back to Top Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-4">
                Governance
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => onOpenLegal('privacy')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Standard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegal('terms')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Terms of Engagement
                  </button>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <MagneticButton
                strength={0.2}
                maxOffset={4}
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[var(--accent)] transition-colors cursor-pointer bg-transparent border-none p-0 group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 HAVEN STUDIO. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Architectural Code</span>
            <span aria-hidden="true">·</span>
            <span>Bespoke Digital Flagships</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
