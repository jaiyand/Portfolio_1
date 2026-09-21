'use client';

import VideoBackground from '@/components/VideoBackground';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#080607] text-brand-cream relative selection:bg-brand-burgundy selection:text-brand-cream">
        {/* Fullscreen Video Background */}
        <VideoBackground />

        {/* Top Scroll Progress Line */}
        <ScrollProgress />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Portfolio Sections */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
