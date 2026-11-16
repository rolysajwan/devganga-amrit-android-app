import React, { useEffect, useState } from 'react';
import { BRAND_INFO } from '../data/content';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className="relative flex flex-col items-center justify-between w-full h-full min-h-[580px] bg-[#061022] text-[#FBF9F4] p-8 overflow-hidden select-none"
      onClick={onComplete}
      role="button"
      tabIndex={0}
      title="Tap to proceed"
    >
      {/* Background Sacred Geometric Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[420px] h-[420px] rounded-full bg-[#C5A059]/5 blur-3xl animate-pulse" />
        <div className="w-[280px] h-[280px] rounded-full border border-[#C5A059]/10 animate-spin" style={{ animationDuration: '30s' }} />
      </div>

      {/* Top Himalayan Tag */}
      <div className="pt-8 text-center z-10 opacity-80">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-serif-title">
          HIMALAYAN HERITAGE • SANGAM
        </p>
      </div>

      {/* Centerpiece: Logo & Brand Typography */}
      <div className="flex flex-col items-center text-center z-10 my-auto animate-fadeIn">
        {/* Logo Container */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 mb-6 group cursor-pointer">
          <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-xl animate-pulse" />
          <img 
            src="/assets/devganga_logo.svg" 
            alt="DevGanga Amrit Sacred Logo" 
            className="w-full h-full object-contain relative drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-2xl md:text-3xl font-serif-title font-bold tracking-[0.18em] text-[#FFFDF9] mb-2 gold-shimmer-text">
          {BRAND_INFO.name}
        </h1>

        {/* Small Inscription */}
        <p className="text-[11px] md:text-xs font-serif-title uppercase tracking-[0.25em] text-[#C5A059] font-medium max-w-[280px]">
          SACRED GANGA JAL FROM DEVPRAYAG
        </p>

        {/* Origin Inscription */}
        <p className="text-[10px] tracking-[0.15em] text-[#7E93A6] mt-2 font-sans-body">
          Tehri Garhwal • Uttarakhand
        </p>
      </div>

      {/* Bottom Subtle Shimmer Progress Bar */}
      <div className="w-full max-w-[220px] pb-6 flex flex-col items-center gap-3 z-10">
        <div className="w-full h-[2px] bg-[#162744] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#8C6D28] via-[#D4AF37] to-[#F7EAC4] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] tracking-[0.2em] text-[#A1B3C4]/70 uppercase font-sans-body">
          Entering Sanctum
        </p>
      </div>
    </div>
  );
};
