'use client';

import { motion } from 'framer-motion';
import { User, Code, Database, BarChart3, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const HIGHLIGHTS = [
    {
      title: 'Full-Stack Development',
      description:
        'Hands-on experience developing RESTful APIs and interactive UIs with the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      icon: Code,
    },
    {
      title: 'Data Analytics & Querying',
      description:
        'Practical work analyzing datasets using Python (Pandas, NumPy, Matplotlib), SQL database querying, and Power BI dashboards.',
      icon: BarChart3,
    },
    {
      title: 'CS Fundamentals',
      description:
        'Strong academic foundation from B.E. Computer Science & Engineering coursework and software development principles.',
      icon: Database,
    },
  ];

  return (
    <section id="about" className="py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 text-brand-warmLight font-mono text-xs tracking-wider uppercase mb-2">
            <User className="w-4 h-4 text-brand-crimson" />
            <span>01. Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cream tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-warmLight to-brand-crimson">{personal.shortName}</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-burgundy to-brand-warm rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-4 text-brand-creamMuted leading-relaxed text-base"
          >
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-[rgba(190,90,70,0.22)] space-y-3.5">
              <p>
                I am a <strong className="text-brand-cream font-semibold">Computer Science & Engineering graduate</strong> from SRM TRP Engineering College with a passion for building software applications and extracting insights from data.
              </p>
              <p>
                Through my <strong className="text-brand-cream font-semibold">MERN Stack Developer Internship</strong> at T4TEQ Software Solution, I gained hands-on experience building RESTful APIs, integrating MongoDB databases, and engineering responsive React web applications.
              </p>
              <p>
                Additionally, my <strong className="text-brand-cream font-semibold">Data Analytics Internship</strong> at QSpider Software Institute strengthened my expertise in Python (Pandas, NumPy, Matplotlib), SQL database querying, and creating interactive dashboards with Power BI.
              </p>
              <p className="text-brand-muted text-sm italic border-l-2 border-brand-crimson pl-3.5 pt-1">
                Looking for an entry-level opportunity to apply my skills and grow through real-world experience.
              </p>
            </div>

            {/* Quick Qualification Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-panel text-brand-cream">
                <CheckCircle2 className="w-4 h-4 text-brand-crimson flex-shrink-0" />
                <span>B.E. Computer Science Graduate</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-panel text-brand-cream">
                <CheckCircle2 className="w-4 h-4 text-brand-crimson flex-shrink-0" />
                <span>Dual Internship Experience</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-panel text-brand-cream">
                <CheckCircle2 className="w-4 h-4 text-brand-crimson flex-shrink-0" />
                <span>MERN & Data Certified</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-panel text-brand-cream">
                <CheckCircle2 className="w-4 h-4 text-brand-crimson flex-shrink-0" />
                <span>REST API & SQL Proficient</span>
              </div>
            </div>
          </motion.div>

          {/* Right Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-panel p-6 rounded-2xl shadow-xl h-full flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(190,90,70,0.2)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-burgundy/40 border border-brand-crimson/50 flex items-center justify-center text-brand-cream font-mono font-bold text-base">
                      PA
                    </div>
                    <div>
                      <h3 className="text-brand-cream font-semibold text-base">{personal.name}</h3>
                      <p className="text-xs font-mono text-brand-warmLight">{personal.title}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-brand-burgundy/30 text-brand-cream font-mono text-[10px] uppercase tracking-wider border border-brand-crimson/40">
                    Verified Bio
                  </span>
                </div>

                {/* Key Focus Highlights */}
                <div className="space-y-3">
                  {HIGHLIGHTS.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex gap-3 p-3 rounded-xl bg-[#10090B]/60 border border-[rgba(190,90,70,0.18)]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-burgundy/30 border border-brand-crimson/40 flex items-center justify-center text-brand-warmLight flex-shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-brand-cream font-medium text-xs mb-0.5 font-mono">
                            {item.title}
                          </h4>
                          <p className="text-brand-muted text-xs leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Specs (CGPA removed) */}
              <div className="pt-3 border-t border-[rgba(190,90,70,0.2)] font-mono text-[11px] grid grid-cols-2 gap-2 text-brand-muted">
                <div>
                  <span className="text-brand-muted/70 block">Degree</span>
                  <span className="text-brand-cream">B.E. Computer Science</span>
                </div>
                <div>
                  <span className="text-brand-muted/70 block">Location</span>
                  <span className="text-brand-cream">Trichy, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
