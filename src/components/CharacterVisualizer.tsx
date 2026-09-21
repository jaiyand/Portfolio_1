'use client';

import { useEffect, useRef } from 'react';

export default function CharacterVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animation values stored in refs to avoid React re-renders during mouse move
  const targetX = useRef(0);
  const targetY = useRef(0);
  const targetRotateX = useRef(0);
  const targetRotateY = useRef(0);

  const currentX = useRef(0);
  const currentY = useRef(0);
  const currentRotateX = useRef(0);
  const currentRotateY = useRef(0);

  const rafId = useRef<number | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    // Detect mobile touch devices or reduced motion preference
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const updateAnimation = () => {
      const ease = 0.08;

      currentX.current += (targetX.current - currentX.current) * ease;
      currentY.current += (targetY.current - currentY.current) * ease;
      currentRotateX.current += (targetRotateX.current - currentRotateX.current) * ease;
      currentRotateY.current += (targetRotateY.current - currentRotateY.current) * ease;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${currentX.current.toFixed(
          2
        )}px, ${currentY.current.toFixed(2)}px, 0px) rotateX(${currentRotateX.current.toFixed(
          2
        )}deg) rotateY(${currentRotateY.current.toFixed(2)}deg)`;
      }

      // Check if animation has settled close to target
      const dx = Math.abs(targetX.current - currentX.current);
      const dy = Math.abs(targetY.current - currentY.current);
      const drX = Math.abs(targetRotateX.current - currentRotateX.current);
      const drY = Math.abs(targetRotateY.current - currentRotateY.current);

      if (dx < 0.01 && dy < 0.01 && drX < 0.01 && drY < 0.01) {
        isAnimating.current = false;
        rafId.current = null;
      } else {
        rafId.current = requestAnimationFrame(updateAnimation);
      }
    };

    const startAnimationLoop = () => {
      if (!isAnimating.current) {
        isAnimating.current = true;
        rafId.current = requestAnimationFrame(updateAnimation);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.getElementById('hero');
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate normalized mouse coordinates from -1 to +1
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

      // Apply recommended maximum translation and tilt limits
      // Horizontal: ±18px, Vertical: ±10px, RotateY: ±3deg, RotateX: ±2deg
      targetX.current = normX * 18;
      targetY.current = normY * 10;
      targetRotateY.current = normX * 3;
      targetRotateX.current = -normY * 2;

      startAnimationLoop();
    };

    const handleMouseLeave = () => {
      targetX.current = 0;
      targetY.current = 0;
      targetRotateX.current = 0;
      targetRotateY.current = 0;
      startAnimationLoop();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto perspective-1000">
      {/* Ambient glowing backdrop ring */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-teal/20 via-brand-cyan/20 to-brand-teal/20 blur-xl opacity-70 animate-pulse-glow" />

      {/* Interactive Parallax Container */}
      <div
        ref={containerRef}
        style={{
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-2xl bg-dark-card border border-dark-border/80 shadow-2xl overflow-hidden glow-border"
      >
        {/* HTML5 Character Video */}
        <div className="relative w-full aspect-[4/5] bg-dark-bg/60 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="/vedio/Bitemoji.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
            aria-label="Jaiyand P A Animated Developer Character"
          />

          {/* Subtle bottom gradient overlay for smooth visual blending */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent pointer-events-none" />
        </div>

        {/* Character Card Footer Label */}
        <div className="p-3.5 bg-dark-card/90 border-t border-dark-border/60 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200 font-semibold">Jaiyand P A</span>
          </div>
          <span className="text-[10px] text-brand-teal px-2 py-0.5 rounded bg-brand-teal/10 border border-brand-teal/30">
            Interactive Avatar
          </span>
        </div>
      </div>
    </div>
  );
}
