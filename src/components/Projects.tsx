'use client';

import { motion } from 'framer-motion';
import {
  FolderGit2,
  Utensils,
  BrainCircuit,
  Layout,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  const getProjectIcon = (visualType: string) => {
    switch (visualType) {
      case 'food':
        return <Utensils className="w-5 h-5 text-brand-crimson" />;
      case 'skillgap':
        return <BrainCircuit className="w-5 h-5 text-brand-crimson" />;
      default:
        return <Layout className="w-5 h-5 text-brand-crimson" />;
    }
  };

  return (
    <section id="projects" className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 text-brand-warmLight font-mono text-xs tracking-wider uppercase mb-2">
            <FolderGit2 className="w-4 h-4 text-brand-crimson" />
            <span>04. Project Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cream tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-warmLight to-brand-crimson">Projects</span>
          </h2>
          <p className="text-brand-muted text-sm mt-1.5 max-w-xl">
            Key software projects across full-stack web development, data analytics, and interactive web applications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-burgundy to-brand-warm rounded-full mt-2" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group h-full border border-[rgba(190,90,70,0.2)] hover:border-brand-crimson/50 transition-all duration-300"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(190,90,70,0.15)]">
                  <div className="p-2.5 rounded-xl bg-brand-burgundy/30 border border-[rgba(190,90,70,0.25)] flex items-center justify-center">
                    {getProjectIcon(project.visualType)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-brand-burgundy/40 text-brand-cream font-mono text-[10px] uppercase font-bold border border-brand-crimson/30 tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-brand-cream mb-1 group-hover:text-brand-warmLight transition-colors font-mono tracking-tight">
                  {project.title}
                </h3>
                <p className="text-brand-warmLight/90 font-mono text-xs mb-3 font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-brand-creamMuted text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-5 pt-3 border-t border-[rgba(190,90,70,0.15)]">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-brand-creamMuted">
                      <Check className="w-3.5 h-3.5 text-brand-crimson flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(190,90,70,0.15)]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#10090B]/80 border border-[rgba(190,90,70,0.2)] text-[10px] font-mono text-brand-cream"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
