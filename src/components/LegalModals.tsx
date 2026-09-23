import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#111319] border border-white/[0.12] rounded-sm p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-slate-300 shadow-2xl">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-4 h-4 text-[var(--accent)]" />
            ) : (
              <FileText className="w-4 h-4 text-[var(--accent)]" />
            )}
            <h3 className="text-lg font-bold font-display text-white">
              {type === 'privacy' ? 'HAVEN Privacy Standard' : 'HAVEN Terms of Engagement'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
            <p className="text-slate-500 font-mono text-[11px]">Last verified: September 2026</p>
            <h4 className="text-white font-semibold font-display">1. Information Governance</h4>
            <p>
              HAVEN collects information provided directly by clients during project inquiries, including contact details, project scope, and brand assets. We do not sell, rent, or distribute client intelligence under any circumstances.
            </p>
            <h4 className="text-white font-semibold font-display">2. Client Data Security</h4>
            <p>
              All project correspondence, credentials, and staging repositories are secured with industry-standard encryption protocols.
            </p>
            <h4 className="text-white font-semibold font-display">3. Infrastructure Deployment</h4>
            <p>
              We deploy client infrastructure exclusively to verified cloud providers (Cloudflare, AWS, Supabase, Vercel) selected in mutual consultation with each client.
            </p>
            <h4 className="text-white font-semibold font-display">4. Direct Inquiry</h4>
            <p>
              For privacy governance queries, contact our lead engineer directly at{' '}
              <a href="mailto:hello.havenweb@gmail.com" className="text-[var(--accent)] underline">
                hello.havenweb@gmail.com
              </a>.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
            <p className="text-slate-500 font-mono text-[11px]">Last verified: September 2026</p>
            <h4 className="text-white font-semibold font-display">1. Studio Engagement</h4>
            <p>
              HAVEN provides custom web engineering and art direction services under explicit, written statements of work agreed upon prior to project kickoff.
            </p>
            <h4 className="text-white font-semibold font-display">2. Intellectual Property & Code Sovereignty</h4>
            <p>
              Upon final settlement of project fees, the client owns 100% of custom design assets and handwritten frontend codebase generated specifically for their engagement.
            </p>
            <h4 className="text-white font-semibold font-display">3. Project Milestones</h4>
            <p>
              Projects follow our 4-step methodology (Choose, Discuss, Build, Launch). Revisions within the agreed scope of work are included without penalty.
            </p>
            <h4 className="text-white font-semibold font-display">4. Post-Launch Warranty</h4>
            <p>
              All bespoke builds come with 30 days of post-launch technical warranty covering defect repairs and performance adherence.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="btn-editorial px-5 py-2 text-xs font-bold text-[#090A0E] bg-[var(--accent)] rounded-sm hover:brightness-105 transition-all cursor-pointer"
          >
            Acknowledge Standard
          </button>
        </div>
      </div>
    </div>
  );
};
