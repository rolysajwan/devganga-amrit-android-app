import React from 'react';
import { Sparkles, ArrowRight, ShieldAlert, Mountain, Compass, Award } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { ScreenId } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenNotify: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onOpenNotify }) => {
  return (
    <div className="w-full flex flex-col min-h-full pb-20 text-[#FBF9F4] animate-fadeIn">
      {/* Top Header with Brand Logo */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#061022]/90 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C5A059]/40 bg-[#0A162C] flex items-center justify-center p-0.5 shadow-sm">
            <img 
              src="/assets/devganga_logo.svg" 
              alt="DevGanga Amrit Emblem" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-xs font-serif-title font-bold tracking-[0.18em] text-[#FFFDF9] leading-tight">
              DEVGANGA AMRIT
            </h2>
            <p className="text-[9px] uppercase tracking-[0.14em] text-[#C5A059] font-sans-body">
              Devprayag Sangam
            </p>
          </div>
        </div>

        <button 
          id="home-status-badge-btn"
          onClick={onOpenNotify}
          className="px-2.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[10px] font-serif-title tracking-wider text-[#D4AF37] hover:bg-[#C5A059]/25 transition-colors"
        >
          COMING SOON
        </button>
      </div>

      {/* Hero Presentation */}
      <div className="px-5 pt-6 pb-4 flex flex-col items-center text-center">
        {/* Divine Heritage Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E1F3B] border border-[#C5A059]/30 mb-4 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#E5D2A8] font-serif-title">
            The Confluence of Rivers
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl md:text-4xl font-serif-title font-bold tracking-[0.15em] leading-tight text-[#FFFDF9] mb-2">
          DEVGANGA<br />
          <span className="gold-shimmer-text">AMRIT</span>
        </h1>

        <p className="text-sm font-serif-sub italic tracking-wide text-[#D4AF37] mb-3">
          {BRAND_INFO.tagline}
        </p>

        <p className="text-xs font-sans-body text-[#A5B9CB] max-w-md mx-auto leading-relaxed mb-6">
          A premium presentation inspired by the timeless spiritual tradition of Devprayag, created for religious and ritual use.
        </p>

        {/* Prominent Bottle Presentation with Floating Animation */}
        <div className="relative w-full max-w-[280px] h-[340px] flex items-center justify-center my-2 group">
          {/* Subtle Golden Glow behind bottle */}
          <div className="absolute w-48 h-48 rounded-full bg-[#C5A059]/15 blur-3xl" />
          <div className="absolute w-40 h-64 rounded-full bg-[#71AEC8]/10 blur-2xl" />

          {/* Floater Bottle */}
          <div className="relative w-full h-full flex items-center justify-center animate-pulse" style={{ animationDuration: '4s' }}>
            <img 
              src="/assets/devganga_bottle.svg" 
              alt="DevGanga Amrit 250 ml Sacred Bottle" 
              className="h-[310px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] filter hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Quick Floating Specification Pill */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#08152B]/95 border border-[#C5A059]/50 text-[11px] font-serif-title text-[#F5E6C8] shadow-lg flex items-center gap-2 whitespace-nowrap">
            <span>250 ml Sacred Bottle</span>
            <span className="text-[#C5A059]">•</span>
            <span className="text-[#D4AF37] font-bold">₹299</span>
          </div>
        </div>

        {/* Mandatory Product Notice (Prominent as specified) */}
        <div className="w-full max-w-sm mt-5 mb-6 p-3 rounded-xl bg-[#081224] border border-[#C5A059]/30 flex flex-col items-center gap-1 shadow-inner">
          <div className="flex items-center gap-2 text-[#F2C078]">
            <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-[11px] font-bold tracking-[0.08em] uppercase font-sans-body">
              {BRAND_INFO.mandatoryNotice.primary}
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.14em] text-[#E06D53] uppercase font-sans-body">
            {BRAND_INFO.mandatoryNotice.secondary}
          </span>
        </div>

        {/* Primary & Secondary CTAs */}
        <div className="w-full max-w-sm flex flex-col gap-2.5">
          {/* Primary CTA: COMING SOON */}
          <button
            id="home-primary-coming-soon-cta"
            onClick={onOpenNotify}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#9C7A2E] via-[#D4AF37] to-[#8C6D28] text-[#061022] font-serif-title font-bold text-sm tracking-[0.15em] uppercase shadow-lg shadow-[#D4AF37]/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>COMING SOON — NOTIFY ME</span>
            <ArrowRight className="w-4 h-4 text-[#061022]" />
          </button>

          {/* Secondary CTA: DISCOVER OUR STORY */}
          <button
            id="home-secondary-story-cta"
            onClick={() => onNavigate('story')}
            className="w-full py-3 px-6 rounded-xl bg-[#091730] border border-[#C5A059]/40 text-[#F5E6C8] font-serif-title font-semibold text-xs tracking-[0.12em] uppercase hover:bg-[#0E2248] transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>DISCOVER OUR STORY</span>
          </button>
        </div>
      </div>

      {/* Origin & Quality Pillars Section */}
      <div className="px-5 py-6 mt-4 border-t border-[#C5A059]/15 bg-[#050D1E]">
        <div className="max-w-sm mx-auto space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#09152B] border border-[#C5A059]/20">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-serif-title font-semibold text-[#FFFDF9]">Sacred Confluence</h4>
              <p className="text-[11px] text-[#A1B3C4] leading-snug">Where Bhagirathi meets Alaknanda at 830m altitude in Devprayag.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#09152B] border border-[#C5A059]/20">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-serif-title font-semibold text-[#FFFDF9]">Preserved Sanctity</h4>
              <p className="text-[11px] text-[#A1B3C4] leading-snug">Untainted, sealed 250 ml presentation dedicated exclusively to Vedic rituals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
