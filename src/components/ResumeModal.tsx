'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Check, MapPin, Mail, Phone, Code2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { personal, skills, experience, projects, education, certifications } = PORTFOLIO_DATA;
  const [viewMode, setViewMode] = useState<'pdf' | 'styled'>('pdf');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl max-h-[92vh] glass-panel border border-[rgba(190,90,70,0.35)] rounded-2xl flex flex-col shadow-2xl z-10 overflow-hidden"
            data-lenis-prevent
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[rgba(190,90,70,0.2)] flex flex-wrap items-center justify-between gap-4 bg-[#10090B]/90">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-burgundy/40 border border-brand-crimson/40">
                  <FileText className="w-5 h-5 text-brand-warmLight" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-brand-cream font-mono">
                      {personal.name} — Resume
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-brand-burgundy/40 text-brand-cream border border-brand-crimson/30 text-[10px] font-mono font-semibold">
                      PDF Preview
                    </span>
                  </div>
                  <p className="text-brand-muted text-xs font-mono">
                    Software Developer Resume Overview
                  </p>
                </div>
              </div>

              {/* View Switcher & Single Header Action Button */}
              <div className="flex items-center gap-2.5">
                {/* View Mode Toggle */}
                <div className="flex items-center p-1 rounded-xl bg-[#080607] border border-[rgba(190,90,70,0.2)] text-xs font-mono">
                  <button
                    onClick={() => setViewMode('styled')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      viewMode === 'styled'
                        ? 'bg-brand-burgundy text-brand-cream font-bold shadow-md'
                        : 'text-brand-muted hover:text-brand-cream'
                    }`}
                  >
                    Portfolio View
                  </button>
                  <button
                    onClick={() => setViewMode('pdf')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      viewMode === 'pdf'
                        ? 'bg-brand-burgundy text-brand-cream font-bold shadow-md'
                        : 'text-brand-muted hover:text-brand-cream'
                    }`}
                  >
                    PDF Document
                  </button>
                </div>

                {/* Single Primary Download Button */}
                <a
                  href={personal.resumePath}
                  download="Jaiyand's Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-brand-cream bg-gradient-to-r from-brand-burgundy to-brand-crimson hover:from-brand-crimson hover:to-brand-burgundy border border-brand-warm/40 rounded-xl transition-all shadow-lg active:scale-95"
                  title="Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>

                {/* Close Modal Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-[#080607] text-brand-muted hover:text-brand-cream border border-[rgba(190,90,70,0.2)] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5" data-lenis-prevent>
              {viewMode === 'pdf' ? (
                /* PDF Document iFrame Viewer */
                <div className="w-full h-[58vh] sm:h-[620px] md:h-[650px] min-h-[380px] rounded-xl overflow-hidden border border-[rgba(190,90,70,0.25)] bg-[#080607]">
                  <iframe
                    src={`${personal.resumePath}#toolbar=0`}
                    className="w-full h-full border-none"
                    title="Jaiyand's Resume PDF Preview"
                  />
                </div>
              ) : (
                /* Portfolio Styled View */
                <div className="space-y-6">
                  
                  {/* Header / Contact Overview */}
                  <div className="p-5 rounded-2xl bg-[#080607]/80 border border-[rgba(190,90,70,0.2)] flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-brand-cream font-mono">
                        {personal.name}
                      </h2>
                      <p className="text-brand-warmLight font-mono text-sm">
                        {personal.title} | {personal.subTitle}
                      </p>
                      <p className="text-brand-creamMuted text-xs mt-2 max-w-2xl leading-relaxed">
                        {personal.bio}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs font-mono text-brand-muted border-t md:border-t-0 md:border-l border-[rgba(190,90,70,0.2)] pt-3 md:pt-0 md:pl-5 shrink-0">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-brand-crimson" />
                        <span>{personal.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-brand-crimson" />
                        <a href={`mailto:${personal.email}`} className="hover:text-brand-cream">{personal.email}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-brand-warmLight" />
                        <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="hover:text-brand-cream">{personal.phone}</a>
                      </div>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cream font-bold flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-brand-crimson" />
                      Technical Skills
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skills.map((skillCat) => (
                        <div key={skillCat.category} className="p-3.5 rounded-xl bg-[#080607]/60 border border-[rgba(190,90,70,0.2)]">
                          <h5 className="text-xs font-bold text-brand-warmLight font-mono mb-1">
                            {skillCat.category}
                          </h5>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {skillCat.items.map((item) => (
                              <span key={item} className="px-2 py-0.5 rounded bg-brand-burgundy/30 text-brand-cream text-[10px] font-mono border border-brand-crimson/30">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cream font-bold flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-brand-crimson" />
                      Work Experience
                    </h4>
                    <div className="space-y-3">
                      {experience.map((exp) => (
                        <div key={exp.id} className="p-4 rounded-xl bg-[#080607]/60 border border-[rgba(190,90,70,0.2)] space-y-2">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-bold text-brand-cream font-mono">{exp.role}</h5>
                            <span className="text-[10px] font-mono text-brand-warmLight px-2 py-0.5 rounded bg-brand-burgundy/30 border border-brand-crimson/30">
                              {exp.company}
                            </span>
                          </div>
                          <div className="space-y-1">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-2 text-xs text-brand-creamMuted">
                                <Check className="w-3.5 h-3.5 text-brand-crimson flex-shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects Overview */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cream font-bold flex items-center gap-2">
                      <FileText className="w-4 h-4 text-brand-crimson" />
                      Key Projects
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {projects.map((proj) => (
                        <div key={proj.id} className="p-3.5 rounded-xl bg-[#080607]/60 border border-[rgba(190,90,70,0.2)] flex flex-col justify-between">
                          <div>
                            <span className="text-[9px] font-mono uppercase text-brand-crimson font-bold">{proj.category}</span>
                            <h5 className="text-xs font-bold text-brand-cream font-mono mt-0.5">{proj.title}</h5>
                            <p className="text-brand-creamMuted text-[11px] leading-relaxed mt-1 line-clamp-3">
                              {proj.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {proj.tags.slice(0, 3).map((t) => (
                              <span key={t} className="text-[9px] font-mono text-brand-muted px-1.5 py-0.5 rounded bg-black/50">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Certifications */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Education */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cream font-bold flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-brand-crimson" />
                        Education
                      </h4>
                      <div className="space-y-2">
                        {education.map((edu) => (
                          <div key={edu.id} className="p-3 rounded-xl bg-[#080607]/60 border border-[rgba(190,90,70,0.2)]">
                            <h5 className="text-xs font-bold text-brand-cream font-mono">{edu.degree}</h5>
                            <p className="text-[11px] text-brand-creamMuted font-mono">{edu.institution}</p>
                            <span className="text-[10px] text-brand-warmLight font-mono">{edu.scoreLabel}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cream font-bold flex items-center gap-2">
                        <Award className="w-4 h-4 text-brand-crimson" />
                        Certifications
                      </h4>
                      <div className="space-y-2">
                        {certifications.map((cert) => (
                          <div key={cert.id} className="p-3 rounded-xl bg-[#080607]/60 border border-[rgba(190,90,70,0.2)]">
                            <h5 className="text-xs font-bold text-brand-cream font-mono">{cert.title}</h5>
                            <p className="text-[11px] text-brand-creamMuted font-mono">{cert.issuer} • {cert.duration}</p>
                            <span className="text-[10px] text-brand-warmLight font-mono">{cert.location}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
