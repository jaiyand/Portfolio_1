'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building2, Code, BarChart3, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 text-brand-warmLight font-mono text-xs tracking-wider uppercase mb-2">
            <Briefcase className="w-4 h-4 text-brand-crimson" />
            <span>03. Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cream tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-warmLight to-brand-crimson">Experience</span>
          </h2>
          <p className="text-brand-muted text-sm mt-1.5 max-w-xl">
            Practical software development and data analytics experience completed through structured industry internships.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-burgundy to-brand-warm rounded-full mt-2" />
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-[rgba(190,90,70,0.3)] space-y-8">
          {experience.map((exp, idx) => {
            const isMern = exp.role.includes('MERN');
            const IconComp = isMern ? Code : BarChart3;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Marker */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#10090B] border-2 border-brand-crimson flex items-center justify-center shadow-lg shadow-brand-burgundy/40 group-hover:scale-125 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-brand-crimson" />
                </div>

                {/* Experience Card */}
                <div className="glass-panel glass-panel-hover p-6 rounded-2xl">
                  
                  {/* Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-[rgba(190,90,70,0.2)]">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-burgundy/30 border border-brand-crimson/40 text-brand-cream font-mono text-xs mb-1.5">
                        <IconComp className="w-3.5 h-3.5 text-brand-warmLight" />
                        <span>{exp.badgeText}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-cream tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-brand-creamMuted font-mono text-sm mt-0.5">
                        <Building2 className="w-4 h-4 text-brand-crimson" />
                        <span className="font-semibold text-brand-warmLight">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2.5 mb-5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-muted mb-1.5">
                      Key Contributions & Accomplishments
                    </h4>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-brand-creamMuted text-sm leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-brand-crimson flex-shrink-0 mt-1" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">
                      Technologies & Tools Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-[#10090B]/70 border border-[rgba(190,90,70,0.25)] text-xs font-mono text-brand-cream"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
