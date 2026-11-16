import React from 'react';
import { ArrowLeft, ShieldCheck, Mountain, HeartHandshake, Droplets, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { ScreenId } from '../types';

interface AboutScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenNotify: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenNotify }) => {
  return (
    <div className="w-full flex flex-col min-h-full pb-24 text-[#FBF9F4] animate-fadeIn">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#061022]/90 backdrop-blur-md sticky top-0 z-20">
        <button
          id="about-back-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#C5A059] hover:text-[#FFFDF9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1B3C4] font-serif-title">
          BRAND ETHOS
        </span>
      </div>

      <div className="px-5 py-6 max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#0E1E38] border border-[#C5A059]/30 flex items-center justify-center p-1 shadow-md mb-2">
            <img 
              src="/assets/devganga_logo.svg" 
              alt="DevGanga Amrit Emblem" 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-serif-title">
            About the Sacred Brand
          </p>
          <h1 className="text-2xl md:text-3xl font-serif-title font-bold tracking-[0.14em] text-[#FFFDF9]">
            DEVGANGA <span className="gold-shimmer-text">AMRIT</span>
          </h1>
          <p className="text-xs text-[#9BB1C4] font-sans-body leading-relaxed max-w-md mx-auto">
            Rooted in the timeless spiritual geography of Uttarakhand, bringing authentic Ganga Jal from Devprayag Sangam to sacred altars across India.
          </p>
        </div>

        {/* Pillars of Integrity */}
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-[#09152B] border border-[#C5A059]/25 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#061022] border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-serif-title font-bold text-[#FFFDF9] uppercase tracking-wider">
                Geographic Provenance
              </h3>
              <p className="text-xs text-[#A5B9CB] leading-relaxed font-sans-body mt-1">
                Every drop originates exclusively from the sacred confluence of the Bhagirathi and Alaknanda at Devprayag, Tehri Garhwal (830m elevation).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#09152B] border border-[#C5A059]/25 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#061022] border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-serif-title font-bold text-[#FFFDF9] uppercase tracking-wider">
                Ritual Purity &amp; Integrity
              </h3>
              <p className="text-xs text-[#A5B9CB] leading-relaxed font-sans-body mt-1">
                Dedicated strictly to religious and Vedic rituals. Packed with reverent care and sealed to ensure uncompromised sacredness for your home altar.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#09152B] border border-[#C5A059]/25 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[#061022] border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-serif-title font-bold text-[#FFFDF9] uppercase tracking-wider">
                Reverence for Uttarakhand
              </h3>
              <p className="text-xs text-[#A5B9CB] leading-relaxed font-sans-body mt-1">
                We advocate respectful environmental stewardship of Devbhoomi Uttarakhand and our sacred river ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* Product Notice Recap */}
        <div className="p-4 rounded-xl bg-[#081224] border border-[#C5A059]/30 text-center space-y-1">
          <p className="text-[11px] font-bold text-[#E5D2A8] uppercase font-serif-title">
            Product Notice
          </p>
          <p className="text-xs text-[#F2C078] font-bold uppercase">
            FOR RELIGIOUS &amp; RITUAL USE ONLY • NOT FOR DRINKING
          </p>
          <p className="text-[11px] text-[#8C9FA8]">
            Sample Price: ₹299 (MRP ₹349) • 250 ml Sacred Bottle
          </p>
        </div>

        <button
          id="about-notify-btn"
          onClick={onOpenNotify}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#9C7A2E] via-[#D4AF37] to-[#8C6D28] text-[#061022] font-serif-title font-bold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
        >
          Join Pre-Launch Register
        </button>
      </div>
    </div>
  );
};
