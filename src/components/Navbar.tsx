'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import ResumeModal from '@/components/ResumeModal';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const sections = NAV_LINKS.map((link) => link.href.substring(1));

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolledNow = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolledNow ? isScrolledNow : prev));

          const scrollPosition = window.scrollY + 200;
          for (let i = sections.length - 1; i >= 0; i--) {
            const sectionEl = document.getElementById(sections[i]);
            if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
              const active = sections[i];
              setActiveSection((prev) => (prev !== active ? active : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? 'bg-[#10090B]/85 backdrop-blur-md border-[rgba(190,90,70,0.2)] shadow-xl shadow-black/60 py-3.5'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo — Removed J boxed icon as requested */}
            <a href="#hero" className="flex items-center gap-1.5 group focus:outline-none">
              <span className="font-mono text-base font-bold tracking-wider text-brand-cream group-hover:text-brand-warmLight transition-colors">
                {PORTFOLIO_DATA.personal.brandLogo}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson animate-pulse" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-[rgba(190,90,70,0.25)]">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                      isActive
                        ? 'text-brand-cream font-semibold'
                        : 'text-brand-muted hover:text-brand-cream'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-brand-burgundy/40 rounded-full border border-brand-crimson/50"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Resume Preview CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-brand-cream bg-gradient-to-r from-brand-burgundy to-brand-crimson hover:from-brand-crimson hover:to-brand-burgundy border border-brand-warm/30 rounded-lg transition-all duration-200 shadow-lg shadow-brand-burgundy/30 active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-dark-surface border border-[rgba(190,90,70,0.3)] text-brand-cream hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-4 right-4 z-50 p-5 rounded-2xl glass-panel border border-[rgba(190,90,70,0.3)] shadow-2xl md:hidden max-h-[82vh] overflow-y-auto"
              data-lenis-prevent
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-brand-burgundy/40 text-brand-cream font-semibold border border-brand-crimson/50'
                          : 'text-brand-muted hover:bg-dark-surface hover:text-brand-cream'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-brand-warmLight" />}
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-[rgba(190,90,70,0.2)] flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setResumeModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold text-brand-cream bg-gradient-to-r from-brand-burgundy to-brand-crimson rounded-xl shadow-lg shadow-brand-burgundy/30"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Preview Resume</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
