'use client';

import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 text-brand-warmLight font-mono text-xs tracking-wider uppercase mb-2">
            <GraduationCap className="w-4 h-4 text-brand-crimson" />
            <span>05. Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cream tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-warmLight to-brand-crimson">Qualifications</span>
          </h2>
          <p className="text-brand-muted text-sm mt-1.5 max-w-xl">
            Formal education credentials in Computer Science & Engineering and secondary schooling.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-burgundy to-brand-warm rounded-full mt-2" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => {
            const isDegree = item.highlight;
            const IconComp = isDegree ? GraduationCap : School;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`glass-panel glass-panel-hover p-6 rounded-2xl relative flex flex-col justify-between ${
                  isDegree ? 'border-brand-crimson/50' : ''
                }`}
              >
                {isDegree && (
                  <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-brand-burgundy text-brand-cream font-mono font-bold text-[10px] uppercase tracking-wider border border-brand-crimson/50 shadow-sm">
                    Major Degree
                  </span>
                )}

                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-burgundy/30 border border-brand-crimson/40 flex items-center justify-center text-brand-warmLight mb-3.5">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-brand-cream font-mono mb-1">
                    {item.degree}
                  </h3>

                  <p className="text-brand-creamMuted text-xs font-semibold mb-4">
                    {item.institution}
                  </p>
                </div>

                <div className="pt-3 border-t border-[rgba(190,90,70,0.2)] flex items-center justify-between">
                  <span className="text-brand-muted text-xs font-mono">Academic Score</span>
                  <span className="px-3 py-1 rounded-lg bg-[#10090B]/80 border border-brand-crimson/40 text-brand-warmLight font-mono font-bold text-sm">
                    {item.score}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
