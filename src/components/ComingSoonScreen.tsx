import React from 'react';
import { ArrowLeft, Bell, Sparkles, MapPin, ShieldAlert, Mountain } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { ScreenId } from '../types';

interface ComingSoonScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenNotify: () => void;
}

export const ComingSoonScreen: React.FC<ComingSoonScreenProps> = ({ onNavigate, onOpenNotify }) => {
  return (
    <div className="w-full flex flex-col min-h-full pb-20 text-[#FBF9F4] animate-fadeIn bg-[#050C1B]">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#050C1B]/90 backdrop-blur-md sticky top-0 z-20">
        <button
          id="comingsoon-back-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#C5A059] hover:text-[#FFFDF9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1B3C4] font-serif-title">
          PRE-LAUNCH
        </span>
      </div>

      <div className="px-6 py-10 max-w-lg mx-auto flex flex-col items-center text-center space-y-7 my-auto">
        {/* Divine Seal / Emblem */}
        <div className="relative group cursor-pointer" onClick={onOpenNotify}>
          <div className="w-24 h-24 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.25)]">
            <img 
              src="/assets/devganga_logo.svg" 
              alt="DevGanga Amrit Sacred Emblem" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#0B1830] border border-[#C5A059]/50 text-[9px] font-serif-title text-[#E5D2A8] uppercase tracking-widest whitespace-nowrap">
            Batch 01
          </div>
        </div>

        {/* Large Text from prompt:
            SOMETHING SACRED
            IS ON ITS WAY.

            DEVGANGA AMRIT

            COMING SOON
        */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059] font-serif-title">
            The Confluence of Devprayag
          </p>

          <h1 className="text-2xl md:text-3xl font-serif-title font-bold tracking-[0.14em] text-[#FFFDF9] leading-snug">
            SOMETHING SACRED<br />
            <span className="gold-shimmer-text">IS ON ITS WAY.</span>
          </h1>

          <div className="w-16 h-[1.5px] bg-[#C5A059]/40 mx-auto" />

          <h2 className="text-xl md:text-2xl font-serif-title font-bold tracking-[0.2em] text-[#FFFDF9]">
            {BRAND_INFO.name}
          </h2>

          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0A1A33] border border-[#C5A059]/40 text-xs font-serif-title font-bold tracking-[0.25em] text-[#D4AF37] uppercase shadow-md">
            COMING SOON
          </div>
        </div>

        {/* Product Spec Reminder */}
        <div className="w-full max-w-xs p-3.5 rounded-xl bg-[#09152B] border border-[#C5A059]/20 text-xs text-[#A5B9CB] space-y-1">
          <div className="flex justify-between items-center text-[#E5D2A8] font-serif-title">
            <span>250 ml Sacred Bottle</span>
            <span>Sample ₹{BRAND_INFO.samplePrice}</span>
          </div>
          <p className="text-[11px] text-[#788E9F] text-left">
            Sourced directly from the Alaknanda &amp; Bhagirathi Sangam, Devprayag.
          </p>
        </div>

        {/* Action Button: NOTIFY ME (Opens dialog with Name, Email, Mobile) */}
        <div className="w-full max-w-sm pt-2 space-y-2">
          <button
            id="comingsoon-notify-me-btn"
            onClick={onOpenNotify}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#9C7A2E] via-[#D4AF37] to-[#8C6D28] text-[#061022] font-serif-title font-bold text-sm tracking-[0.18em] uppercase shadow-xl shadow-[#D4AF37]/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
          >
            <Bell className="w-4 h-4 text-[#061022]" />
            <span>NOTIFY ME</span>
          </button>
          
          <p className="text-[10px] text-[#6E8294] italic font-sans-body">
            Opens pre-launch priority registration. No payment required today.
          </p>
        </div>

        {/* Mandatory Religious Notice */}
        <div className="p-3 rounded-lg bg-[#060F1F] border border-[#C5A059]/15 text-[10px] text-[#A1B3C4] flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>Notice: For religious and ritual use only. Not sold for drinking.</span>
        </div>
      </div>
    </div>
  );
};
