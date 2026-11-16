import React from 'react';
import { ArrowLeft, Bell, ShieldAlert, Check, Sparkles, Droplets, PackageCheck, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { ScreenId } from '../types';

interface ProductScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenNotify: () => void;
}

export const ProductScreen: React.FC<ProductScreenProps> = ({ onNavigate, onOpenNotify }) => {
  return (
    <div className="w-full flex flex-col min-h-full pb-24 text-[#FBF9F4] animate-fadeIn">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#061022]/90 backdrop-blur-md sticky top-0 z-20">
        <button
          id="product-back-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#C5A059] hover:text-[#FFFDF9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1B3C4] font-serif-title">
          PRODUCT PRESENTATION
        </span>
      </div>

      <div className="px-5 py-4 max-w-lg mx-auto space-y-5">
        {/* Bottle Display Showcase */}
        <div className="relative w-full h-[320px] rounded-2xl bg-gradient-to-b from-[#091730] to-[#061022] border border-[#C5A059]/30 flex items-center justify-center p-4 overflow-hidden shadow-2xl">
          {/* Subtle Aura Halo */}
          <div className="absolute w-44 h-44 rounded-full bg-[#C5A059]/15 blur-3xl" />
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-[#061022]/80 border border-[#C5A059]/40 text-[10px] font-serif-title tracking-wider text-[#D4AF37]">
            {BRAND_INFO.status}
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#061022]/80 border border-[#72A8BC]/40 text-[10px] text-[#93C5D6] font-sans-body">
            <MapPin className="w-3 h-3 text-[#72A8BC]" />
            <span>Devprayag</span>
          </div>

          <img 
            src="/assets/devganga_bottle.svg" 
            alt="DevGanga Amrit 250 ml Sacred Bottle" 
            className="h-[270px] w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] transition-transform hover:scale-105 duration-300"
          />

          <div className="absolute bottom-3 px-3 py-1 rounded-full bg-[#08152B]/90 border border-[#C5A059]/30 text-[10px] font-serif-title text-[#E5D2A8]">
            Volume: 250 ml Sacred Presentation
          </div>
        </div>

        {/* Product Details & Title */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif-title font-bold tracking-[0.15em] text-[#FFFDF9]">
              {BRAND_INFO.name}
            </h1>
            <span className="px-3 py-1 rounded-lg bg-[#0C1F3D] border border-[#C5A059]/40 text-xs font-serif-title text-[#D4AF37] font-semibold">
              {BRAND_INFO.volume}
            </span>
          </div>

          <p className="text-xs font-serif-sub italic tracking-wider text-[#D4AF37]">
            {BRAND_INFO.tagline}
          </p>

          {/* Pricing & Pre-Order Status */}
          <div className="flex items-baseline gap-3 pt-2">
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-[#A1B3C4]">Sample Price:</span>
              <span className="text-2xl font-serif-title font-bold text-[#FFFDF9]">₹{BRAND_INFO.samplePrice}</span>
            </div>
            <div className="flex items-baseline gap-1 text-[#6E8294]">
              <span className="text-[11px]">MRP:</span>
              <span className="text-sm line-through">₹{BRAND_INFO.sampleMrp}</span>
            </div>
            <span className="text-[10px] font-bold text-[#4ADE80] uppercase tracking-wider px-2 py-0.5 rounded bg-[#4ADE80]/10">
              Pre-Launch Benefit (Save ₹50)
            </span>
          </div>
        </div>

        {/* MANDATORY PRODUCT NOTICE (PROMINENT) */}
        <div className="p-4 rounded-xl bg-[#081224] border-2 border-[#C5A059]/40 shadow-lg text-center space-y-1">
          <div className="flex items-center justify-center gap-2 text-[#F2C078]">
            <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <h3 className="text-xs font-bold tracking-[0.1em] uppercase font-sans-body text-[#F2C078]">
              {BRAND_INFO.mandatoryNotice.primary}
            </h3>
          </div>
          <p className="text-xs font-bold tracking-[0.15em] text-[#EF4444] uppercase font-sans-body">
            {BRAND_INFO.mandatoryNotice.secondary}
          </p>
          <p className="text-[10px] text-[#A1B3C4] pt-1 leading-snug">
            Intended exclusively for ceremonial puja, abhishek, and ancestral sacred rites. Not sold for drinking.
          </p>
        </div>

        {/* Primary Action Button: NOTIFY ME */}
        <div className="pt-2">
          <button
            id="product-notify-me-btn"
            onClick={onOpenNotify}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#9C7A2E] via-[#D4AF37] to-[#8C6D28] text-[#061022] font-serif-title font-bold text-sm tracking-[0.16em] uppercase shadow-xl shadow-[#D4AF37]/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Bell className="w-4 h-4 text-[#061022]" />
            <span>NOTIFY ME ON LAUNCH</span>
          </button>
          <p className="text-[10px] text-[#6E8294] text-center mt-1.5 italic">
            *This is a pre-launch sample application. Payment gateway will activate upon official launch.
          </p>
        </div>

        {/* Product Technical & Ritual Specifications */}
        <div className="p-4 rounded-xl bg-[#08152B] border border-[#C5A059]/20 space-y-3">
          <h4 className="text-xs font-serif-title font-semibold text-[#FFFDF9] uppercase tracking-wider">
            Authenticity &amp; Specifications
          </h4>

          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="p-2.5 rounded-lg bg-[#061022] border border-[#C5A059]/15">
              <span className="text-[10px] text-[#6E8294] block">Confluence Source</span>
              <span className="font-medium text-[#E5D2A8]">Devprayag Sangam</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#061022] border border-[#C5A059]/15">
              <span className="text-[10px] text-[#6E8294] block">Volume</span>
              <span className="font-medium text-[#E5D2A8]">250 ml</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#061022] border border-[#C5A059]/15">
              <span className="text-[10px] text-[#6E8294] block">Packaging</span>
              <span className="font-medium text-[#E5D2A8]">Heritage Sealed Bottle</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#061022] border border-[#C5A059]/15">
              <span className="text-[10px] text-[#6E8294] block">Intended Purpose</span>
              <span className="font-medium text-[#E5D2A8]">Ritual / Religious Only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
