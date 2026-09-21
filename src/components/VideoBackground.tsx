'use client';

import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const parallaxContainerRef = useRef<HTMLDivElement>(null);

  // Track playback trigger in a ref to eliminate re-render delays
  const hasStartedPlayback = useRef(false);

  // Parallax animation state in refs
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef<number | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Playback function triggered on cursor or pointer event
    const startPlayback = () => {
      if (!hasStartedPlayback.current) {
        hasStartedPlayback.current = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Browser autoplay fallback handling
          });
        }
      }
    };

    // Freeze video on the final frame when ended
    const handleVideoEnded = () => {
      video.pause();
    };

    video.addEventListener('ended', handleVideoEnded);

    // Attach listeners for instant play response on any mouse or pointer activity
    window.addEventListener('mousemove', startPlayback, { passive: true });
    window.addEventListener('pointermove', startPlayback, { passive: true });
    window.addEventListener('touchstart', startPlayback, { passive: true });

    // Subtle background parallax tracking
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isTouch && !prefersReducedMotion) {
      const updateParallax = () => {
        const ease = 0.08;
        currentX.current += (targetX.current - currentX.current) * ease;
        currentY.current += (targetY.current - currentY.current) * ease;

        if (parallaxContainerRef.current) {
          parallaxContainerRef.current.style.transform = `translate3d(${currentX.current.toFixed(
            2
          )}px, ${currentY.current.toFixed(2)}px, 0px)`;
        }

        const dx = Math.abs(targetX.current - currentX.current);
        const dy = Math.abs(targetY.current - currentY.current);

        if (dx < 0.01 && dy < 0.01) {
          isAnimating.current = false;
          rafId.current = null;
        } else {
          rafId.current = requestAnimationFrame(updateParallax);
        }
      };

      const startParallaxLoop = () => {
        if (!isAnimating.current) {
          isAnimating.current = true;
          rafId.current = requestAnimationFrame(updateParallax);
        }
      };

      const handleParallaxMouseMove = (e: MouseEvent) => {
        startPlayback();

        const normX = (e.clientX / window.innerWidth - 0.5) * 2;
        const normY = (e.clientY / window.innerHeight - 0.5) * 2;

        targetX.current = normX * 8;
        targetY.current = normY * 5;

        startParallaxLoop();
      };

      const handleMouseLeave = () => {
        targetX.current = 0;
        targetY.current = 0;
        startParallaxLoop();
      };

      window.addEventListener('mousemove', handleParallaxMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        video.removeEventListener('ended', handleVideoEnded);
        window.removeEventListener('mousemove', startPlayback);
        window.removeEventListener('pointermove', startPlayback);
        window.removeEventListener('touchstart', startPlayback);
        window.removeEventListener('mousemove', handleParallaxMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        if (rafId.current) cancelAnimationFrame(rafId.current);
      };
    }

    return () => {
      video.removeEventListener('ended', handleVideoEnded);
      window.removeEventListener('mousemove', startPlayback);
      window.removeEventListener('pointermove', startPlayback);
      window.removeEventListener('touchstart', startPlayback);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none flex items-center justify-center">
      {/* Parallax Container */}
      <div
        ref={parallaxContainerRef}
        style={{
          willChange: 'transform',
        }}
        className="relative w-full h-full scale-[1.02] flex items-center justify-center"
      >
        {/* Fullscreen Video Element — Symmetrically Centered & Fully Responsive to Browser Zoom */}
        <video
          ref={videoRef}
          src="/vedio/Bitemoji.mp4"
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center brightness-[1.02] contrast-[1.01] opacity-90 transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      {/* Cinematic Overlays for Optimal Video Contrast & Seamless Site Blending */}
      <div className="absolute inset-0 bg-cinematic-overlay pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-36 bg-cinematic-top-gradient pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-cinematic-bottom-gradient pointer-events-none z-10" />
    </div>
  );
}
