'use client';

import { motion } from 'framer-motion';
import { Award, Clock, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 text-brand-warmLight font-mono text-xs tracking-wider uppercase mb-2">
            <Award className="w-4 h-4 text-brand-crimson" />
            <span>06. Certified Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cream tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-warmLight to-brand-crimson">Certifications</span>
          </h2>
          <p className="text-brand-muted text-sm mt-1.5 max-w-xl">
            Specialized training programs completed to strengthen full-stack and analytical capabilities.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-burgundy to-brand-warm rounded-full mt-2" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-burgundy/30 border border-brand-crimson/40 flex items-center justify-center text-brand-warmLight group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#10090B]/80 border border-[rgba(190,90,70,0.25)] text-brand-cream font-mono text-xs">
                    {cert.mode} Program
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-cream font-mono mb-1.5 group-hover:text-brand-warmLight transition-colors">
                  {cert.title}
                </h3>

                <p className="text-brand-warmLight text-sm font-semibold mb-5">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(190,90,70,0.2)] grid grid-cols-2 gap-3 text-xs font-mono text-brand-creamMuted">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-crimson" />
                  <span>Duration: {cert.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-crimson" />
                  <span>Location: {cert.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
