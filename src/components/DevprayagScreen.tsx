import React, { useState } from 'react';
import { ArrowLeft, Play, RotateCcw, MapPin, Droplets, Info } from 'lucide-react';
import { ScreenId } from '../types';

interface DevprayagScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const DevprayagScreen: React.FC<DevprayagScreenProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(3); // 0 = start, 1 = rivers, 2 = sangam, 3 = unified ganga
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setActiveStep(1);
    setTimeout(() => setActiveStep(2), 1000);
    setTimeout(() => {
      setActiveStep(3);
      setIsAnimating(false);
    }, 2200);
  };

  return (
    <div className="w-full flex flex-col min-h-full pb-20 text-[#FBF9F4] animate-fadeIn">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#061022]/90 backdrop-blur-md sticky top-0 z-20">
        <button
          id="devprayag-back-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#C5A059] hover:text-[#FFFDF9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1B3C4] font-serif-title">
          THE HOLY SANGAM
        </span>
      </div>

      <div className="px-5 py-6 max-w-lg mx-auto space-y-6">
        {/* Heading Section */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[10px] font-serif-title text-[#E5C583] tracking-widest uppercase mb-1">
            <MapPin className="w-3 h-3 text-[#D4AF37]" />
            <span>Tehri Garhwal, Uttarakhand</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#A1B3C4] font-serif-title">
            THE ORIGIN
          </p>
          <h1 className="text-2xl md:text-3xl font-serif-title font-bold tracking-[0.16em] text-[#FFFDF9]">
            DEVPRAYAG<br />
            <span className="gold-shimmer-text">UTTARAKHAND</span>
          </h1>
          <p className="text-xs text-[#9BB1C4] font-sans-body max-w-sm mx-auto leading-relaxed pt-1">
            At Devprayag, the Alaknanda and Bhagirathi meet, forming the river traditionally known as the Ganga.
          </p>
        </div>

        {/* The Simple Visual Diagram (as requested in prompt) */}
        <div className="p-6 rounded-2xl bg-[#09152B] border border-[#C5A059]/30 shadow-xl relative overflow-hidden">
          {/* Subtle Himalayan Peak Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C5A059]/10 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-serif-title font-semibold">
              The Confluence Flow
            </span>
            <button
              id="devprayag-replay-btn"
              onClick={triggerAnimation}
              disabled={isAnimating}
              className="flex items-center gap-1 text-[11px] font-serif-title text-[#C5A059] hover:text-[#FFFDF9] transition-colors disabled:opacity-50"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isAnimating ? 'animate-spin' : ''}`} />
              <span>{isAnimating ? 'Flowing...' : 'Replay Flow'}</span>
            </button>
          </div>

          {/* Interactive Confluence Diagram */}
          <div className="flex flex-col items-center py-4 relative">
            {/* Top Row: Two Tributaries */}
            <div className="w-full flex items-center justify-between px-2 md:px-6">
              {/* Alaknanda Box */}
              <div className={`w-[45%] p-3 rounded-xl border text-center transition-all duration-500 ${
                activeStep >= 1 
                  ? 'bg-[#0E2648] border-[#93C5D6] shadow-[0_0_15px_rgba(147,197,214,0.2)]' 
                  : 'bg-[#081224] border-[#1C3252]'
              }`}>
                <span className="text-[9px] uppercase tracking-wider text-[#93C5D6] font-serif-title block">
                  Glacial Stream
                </span>
                <span className="text-xs md:text-sm font-serif-title font-bold tracking-wider text-[#FFFDF9]">
                  ALAKNANDA
                </span>
                <span className="text-[9px] text-[#A1B3C4] block mt-0.5">Satopanth Origin</span>
              </div>

              {/* Plus Sign */}
              <div className="text-[#C5A059] font-serif-title text-xl font-bold px-2">
                +
              </div>

              {/* Bhagirathi Box */}
              <div className={`w-[45%] p-3 rounded-xl border text-center transition-all duration-500 ${
                activeStep >= 1 
                  ? 'bg-[#0E2648] border-[#72A8BC] shadow-[0_0_15px_rgba(114,168,188,0.2)]' 
                  : 'bg-[#081224] border-[#1C3252]'
              }`}>
                <span className="text-[9px] uppercase tracking-wider text-[#72A8BC] font-serif-title block">
                  Glacial Stream
                </span>
                <span className="text-xs md:text-sm font-serif-title font-bold tracking-wider text-[#FFFDF9]">
                  BHAGIRATHI
                </span>
                <span className="text-[9px] text-[#A1B3C4] block mt-0.5">Gaumukh Origin</span>
              </div>
            </div>

            {/* Downward Stream Convergence Animation */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-[2px] h-8 bg-gradient-to-b from-[#8EBCD4] to-[#C5A059] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-3 bg-white animate-bounce" />
              </div>
              <div className="text-base text-[#C5A059] leading-none">↓</div>
            </div>

            {/* Center Junction: Devprayag Sangam */}
            <div className={`w-full max-w-[240px] p-4 rounded-xl border text-center transition-all duration-500 relative ${
              activeStep >= 2
                ? 'bg-gradient-to-b from-[#0E2648] to-[#0A1A33] border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.3)] scale-105'
                : 'bg-[#081224] border-[#1C3252]'
            }`}>
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#C5A059] text-[#061022] text-[8px] font-bold tracking-wider uppercase font-serif-title">
                The Sacred Confluence
              </div>
              <h3 className="text-sm md:text-base font-serif-title font-bold tracking-[0.15em] text-[#FFFDF9] mt-1">
                DEVPRAYAG
              </h3>
              <p className="text-[10px] text-[#C5A059] font-sans-body">
                Sangam Point • 830m Elevation
              </p>
            </div>

            {/* Second Downward Arrow */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-[3px] h-8 bg-gradient-to-b from-[#C5A059] via-[#E5C583] to-[#D4AF37] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-4 bg-white animate-pulse" />
              </div>
              <div className="text-base text-[#D4AF37] leading-none">↓</div>
            </div>

            {/* Output River: Sacred Ganga */}
            <div className={`w-full max-w-[280px] p-4 rounded-xl border text-center transition-all duration-700 ${
              activeStep >= 3
                ? 'bg-[#0E203C] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.35)]'
                : 'bg-[#081224] border-[#1C3252]'
            }`}>
              <div className="flex items-center justify-center gap-1.5 text-xs font-serif-title text-[#D4AF37] font-semibold tracking-wider">
                <Droplets className="w-4 h-4 text-[#D4AF37]" />
                <span>SACRED RIVER</span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif-title font-bold tracking-[0.2em] text-[#FFFDF9] gold-shimmer-text mt-0.5">
                GANGA
              </h2>
              <p className="text-[10px] tracking-wider text-[#A5B9CB] uppercase font-sans-body mt-1">
                From this point onward, officially known as the Ganga
              </p>
            </div>
          </div>
        </div>

        {/* Geographic & Cultural Note */}
        <div className="p-4 rounded-xl bg-[#061022] border border-[#C5A059]/20 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
          <div className="text-xs text-[#A1B3C4] leading-relaxed font-sans-body">
            <strong className="text-[#FFFDF9]">Panch Prayag Tradition:</strong> Devprayag is the first and topmost Prayag from the plains, and the final confluence where the sacred Ganga begins her journey across the plains of India.
          </div>
        </div>
      </div>
    </div>
  );
};
