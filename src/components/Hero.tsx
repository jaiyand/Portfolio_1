'use client';

import { ArrowRight, Download, Linkedin, Github, Mail, MapPin, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-28 md:pb-16 flex items-center overflow-hidden z-20 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl flex flex-col items-start">
          
          {/* Status / Availability Badge */}
          <div
            className="animate-hero-fade-up inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-burgundy/25 border border-brand-crimson/40 mb-3 backdrop-blur-md shadow-md"
            style={{ animationDelay: '0s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-crimson opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson"></span>
            </span>
            <span className="text-xs font-mono font-semibold text-brand-cream uppercase tracking-wider">
              {personal.availability}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="animate-hero-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-cream leading-[1.08] mb-2 drop-shadow-lg"
            style={{ animationDelay: '0.05s' }}
          >
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream via-brand-warmLight to-brand-warm">
              {personal.shortName}
            </span>.
          </h1>

          {/* Role Subtitle: Computer Science Graduate | Software Developer */}
          <h2
            className="animate-hero-fade-up text-lg sm:text-2xl font-mono text-brand-warmLight font-medium mb-4 drop-shadow"
            style={{ animationDelay: '0.1s' }}
          >
            {personal.title} <span className="text-brand-muted/60">|</span> {personal.subTitle}
          </h2>

          {/* Exact Resume Summary */}
          <p
            className="animate-hero-fade-up text-sm sm:text-base text-brand-creamMuted max-w-2xl leading-relaxed mb-5 drop-shadow-md"
            style={{ animationDelay: '0.15s' }}
          >
            {personal.bio}
          </p>

          {/* Quick Metadata Badges */}
          <div
            className="animate-hero-fade-up flex flex-wrap items-center gap-3 mb-6 text-xs font-mono text-brand-muted"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-[rgba(190,90,70,0.25)]">
              <GraduationCap className="w-4 h-4 text-brand-warmLight" />
              <span>{personal.institution}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-[rgba(190,90,70,0.25)]">
              <MapPin className="w-4 h-4 text-brand-warmLight" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Action Buttons & Socials (GitHub Connected) */}
          <div
            className="animate-hero-fade-up flex flex-wrap items-center gap-3 w-full sm:w-auto"
            style={{ animationDelay: '0.25s' }}
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-bold text-brand-cream bg-gradient-to-r from-brand-burgundy to-brand-crimson hover:from-brand-crimson hover:to-brand-burgundy border border-brand-warm/40 rounded-xl transition-all duration-200 shadow-xl shadow-brand-burgundy/40 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={personal.resumePath}
              download="Jaiyand's Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-medium text-brand-cream glass-panel hover:bg-brand-burgundy/30 border border-[rgba(190,90,70,0.35)] rounded-xl transition-all duration-200"
            >
              <Download className="w-4 h-4 text-brand-warmLight" />
              <span>Download Resume</span>
            </a>

            {/* Social Icons: LinkedIn, GitHub, Email */}
            <div className="flex items-center gap-2 pt-1 sm:pt-0 sm:ml-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-brand-creamMuted hover:text-brand-cream hover:border-brand-crimson/50 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-brand-creamMuted hover:text-brand-cream hover:border-brand-crimson/50 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="p-3 rounded-xl glass-panel text-brand-creamMuted hover:text-brand-cream hover:border-brand-crimson/50 transition-colors"
                title="Contact Directly"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
