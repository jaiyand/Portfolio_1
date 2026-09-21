'use client';

import { ArrowUp, Linkedin, Github, Mail, MapPin, Phone, FileDown, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 pt-8 pb-5 bg-[#10090B]/65 backdrop-blur-md border-t border-[rgba(190,90,70,0.2)] shadow-xl shadow-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-[rgba(190,90,70,0.15)]">
          
          {/* Column 1: Brand, Status & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-lg font-bold text-brand-cream tracking-tight">
                {personal.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </span>
            </div>

            <p className="text-brand-creamMuted text-xs leading-relaxed max-w-md">
              Software Developer specializing in Full-Stack Web Applications (MERN), RESTful API design, and Data Analytics. Focused on building scalable, performant software solutions.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-brand-muted pt-0.5">
              <span className="flex items-center gap-1.5 text-brand-creamMuted">
                <MapPin className="w-3.5 h-3.5 text-brand-crimson" />
                {personal.location}
              </span>
              <span className="text-brand-muted">•</span>
              <span className="flex items-center gap-1.5 text-brand-creamMuted">
                <Sparkles className="w-3.5 h-3.5 text-brand-warmLight" />
                CS Graduate
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 font-mono text-xs">
            <h4 className="text-brand-cream font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson" />
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-brand-muted">
              <a href="#about" className="hover:text-brand-warmLight transition-colors flex items-center gap-1">
                <span className="text-brand-crimson">01.</span> About
              </a>
              <a href="#skills" className="hover:text-brand-warmLight transition-colors flex items-center gap-1">
                <span className="text-brand-crimson">02.</span> Skills
              </a>
              <a href="#experience" className="hover:text-brand-warmLight transition-colors flex items-center gap-1">
                <span className="text-brand-crimson">03.</span> Work
              </a>
              <a href="#projects" className="hover:text-brand-warmLight transition-colors flex items-center gap-1">
                <span className="text-brand-crimson">04.</span> Projects
              </a>
              <a href="#education" className="hover:text-brand-warmLight transition-colors flex items-center gap-1">
                <span className="text-brand-crimson">05.</span> Education
              </a>
              <a href="#contact" className="hover:text-brand-warmLight transition-colors flex items-center gap-1">
                <span className="text-brand-crimson">06.</span> Contact
              </a>
            </div>
          </div>

          {/* Column 3: Contact & Direct Actions (4 cols) */}
          <div className="md:col-span-4 space-y-2.5 font-mono text-xs">
            <h4 className="text-brand-cream font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson" />
              Connect & Resume
            </h4>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-brand-creamMuted text-xs">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-brand-cream transition-colors p-2 rounded-lg glass-panel flex-1 truncate"
              >
                <Mail className="w-3.5 h-3.5 text-brand-crimson shrink-0" />
                <span className="truncate">{personal.email}</span>
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-brand-cream transition-colors p-2 rounded-lg glass-panel shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-brand-warmLight shrink-0" />
                <span>{personal.phone}</span>
              </a>
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl glass-panel text-brand-muted hover:text-brand-cream hover:border-brand-crimson/50 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl glass-panel text-brand-muted hover:text-brand-cream hover:border-brand-crimson/50 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.resumePath}
                  download="Jaiyand_PA_Resume.pdf"
                  className="p-2 rounded-xl glass-panel text-brand-muted hover:text-brand-cream hover:border-brand-crimson/50 transition-all"
                  title="Download Resume"
                >
                  <FileDown className="w-4 h-4 text-brand-warmLight" />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl glass-panel text-brand-creamMuted hover:text-brand-cream text-xs font-mono transition-all group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-brand-crimson group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-brand-muted font-mono text-[11px] gap-2">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-2.5 text-[11px] text-brand-muted">
            <span>Built with Next.js 15 & Tailwind CSS</span>
            <span>•</span>
            <span className="text-brand-creamMuted">{personal.location}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
