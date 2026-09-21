'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Database, LineChart, Globe, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Web Technologies':
        return Globe;
      case 'Frontend & Backend':
        return Layers;
      case 'Database Management':
        return Database;
      case 'Programming & Data Analytics':
        return LineChart;
      default:
        return Code;
    }
  };

  return (
    <section id="skills" className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 text-brand-warmLight font-mono text-xs tracking-wider uppercase mb-2">
            <Cpu className="w-4 h-4 text-brand-crimson" />
            <span>02. Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cream tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-warmLight to-brand-crimson">Technologies</span>
          </h2>
          <p className="text-brand-muted text-sm mt-1.5 max-w-xl">
            Practical web development and data tools acquired through computer science coursework and professional internship projects.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-burgundy to-brand-warm rounded-full mt-2" />
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((group, idx) => {
            const IconComponent = getCategoryIcon(group.category);
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-burgundy/30 border border-brand-crimson/40 flex items-center justify-center text-brand-warmLight group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-cream font-mono group-hover:text-brand-warmLight transition-colors">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-brand-muted">
                        {group.items.length} Tech Items
                      </span>
                    </div>
                  </div>

                  <p className="text-brand-muted text-xs mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#10090B]/70 border border-[rgba(190,90,70,0.25)] text-xs font-mono text-brand-cream hover:border-brand-crimson/50 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-brand-crimson/30 to-transparent mt-5" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
