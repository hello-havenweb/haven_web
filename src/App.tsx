import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ServicesSection } from './components/ServicesSection';
import { TemplatesSection } from './components/TemplatesSection';
import { TemplateDemoModal } from './components/TemplateDemoModal';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { BrandMoment } from './components/BrandMoment';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { CustomCursor } from './components/CustomCursor';
import { PageIntroLoader } from './components/PageIntroLoader';
import { TemplateItem } from './data/templatesData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentTheme, setCurrentTheme] = useState<string>('bronze');
  const [selectedTemplateForContact, setSelectedTemplateForContact] = useState<string>('');
  const [estimatedScopeForContact, setEstimatedScopeForContact] = useState<string>('');
  const [activeDemoTemplate, setActiveDemoTemplate] = useState<TemplateItem | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [introFinished, setIntroFinished] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === 'bronze') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', currentTheme);
    }
  }, [currentTheme]);

  // Handle hash changes for direct linking & GitHub Pages friendliness
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'services', 'templates', 'pricing', 'about', 'contact'].includes(hash)) {
        setCurrentView(hash);
        const element = document.getElementById(`${hash}-section`);
        if (element) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(element, { offset: -60, duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.location.hash = view;

    if (view === 'home') {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(`${view}-section`);
      if (element) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(element, { offset: -60, duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleGetWebsite = (templateName: string) => {
    setSelectedTemplateForContact(templateName);
    handleNavigate('contact');
  };

  const handleRequestQuote = (packageTitle: string, estimatedPrice?: string) => {
    setEstimatedScopeForContact(
      estimatedPrice ? `${packageTitle} — ${estimatedPrice}` : packageTitle
    );
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F3F5F7] flex flex-col selection:bg-[var(--accent)]/20 selection:text-[var(--accent)]">
      {/* 1. Page Intro Loader (runs for ~1.2s max on initial open) */}
      <PageIntroLoader onComplete={() => setIntroFinished(true)} />

      {/* 2. Premium Custom Context Cursor */}
      <CustomCursor />

      {/* 3. 1-Row 3-Zone Sticky Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />

      {/* 4. Main Narrative Structure */}
      <main className="flex-1">
        {/* 01 — Hero Experience & Architectural Ledger */}
        <Hero
          onExploreTemplates={() => handleNavigate('templates')}
          onStartProject={() => handleNavigate('contact')}
        />

        {/* 02 — HAVEN Introduction & Manifesto */}
        <Introduction />

        {/* 03 — What We Build (Editorial Services) */}
        <ServicesSection
          onSelectServiceForProject={(serviceTitle) => {
            setEstimatedScopeForContact(`Service: ${serviceTitle}`);
            handleNavigate('contact');
          }}
        />

        {/* 04 — Featured Templates Experience */}
        <TemplatesSection
          onViewWebsite={(template) => setActiveDemoTemplate(template)}
          onGetWebsite={handleGetWebsite}
        />

        {/* 05 — Interactive Process: Choose, Discuss, Build, Launch */}
        <ProcessSection />

        {/* 06 — Professional Pricing & Scope Estimator */}
        <PricingSection onRequestQuote={handleRequestQuote} />

        {/* 07 — About HAVEN Studio & Craft Philosophy */}
        <AboutSection />

        {/* 08 — Cinematic Brand Moment */}
        <BrandMoment onStartProject={() => handleNavigate('contact')} />

        {/* 09 — Project Enquiry / Contact Experience */}
        <ContactSection
          initialSelectedTemplate={selectedTemplateForContact}
          initialEstimatedScope={estimatedScopeForContact}
        />
      </main>

      {/* 10 — Sophisticated Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setActiveLegalModal(type)}
      />

      {/* Interactive Website Demo Simulator Modal */}
      <TemplateDemoModal
        template={activeDemoTemplate}
        onClose={() => setActiveDemoTemplate(null)}
        onGetTemplate={handleGetWebsite}
      />

      {/* Privacy Policy & Terms of Service Modals */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
