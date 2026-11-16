import React from 'react';
import { ArrowLeft, Sparkles, Droplets, Flame, Sun, Feather, Calendar } from 'lucide-react';
import { RITUAL_ITEMS } from '../data/content';
import { ScreenId, RitualItem } from '../types';

interface RitualsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenNotify: () => void;
}

export const RitualsScreen: React.FC<RitualsScreenProps> = ({ onNavigate, onOpenNotify }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#72A8BC]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#E08A53]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#D4AF37]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#A1B3C4]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="w-full flex flex-col min-h-full pb-24 text-[#FBF9F4] animate-fadeIn">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#061022]/90 backdrop-blur-md sticky top-0 z-20">
        <button
          id="rituals-back-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#C5A059] hover:text-[#FFFDF9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1B3C4] font-serif-title">
          SACRED APPLICATION
        </span>
      </div>

      <div className="px-5 py-5 max-w-lg mx-auto space-y-5">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-serif-title">
            Vedic Tradition
          </p>
          <h1 className="text-2xl md:text-3xl font-serif-title font-bold tracking-[0.14em] text-[#FFFDF9]">
            RITUAL <span className="gold-shimmer-text">USES</span>
          </h1>
          <p className="text-xs text-[#9BB1C4] font-sans-body max-w-sm mx-auto leading-relaxed">
            Preserving traditional sanctity for daily pujas, ancestral tarpan, and life-cycle consecrations.
          </p>
        </div>

        {/* 6 Premium Ritual Cards as specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {RITUAL_ITEMS.map((ritual: RitualItem) => (
            <div 
              key={ritual.id}
              className="p-4 rounded-xl bg-[#09152B] border border-[#C5A059]/25 hover:border-[#C5A059]/50 transition-all duration-300 shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#061022] border border-[#C5A059]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(ritual.iconName)}
                  </div>
                  <span className="text-xs font-serif-title tracking-wider text-[#C5A059] font-semibold">
                    {ritual.sanskritName}
                  </span>
                </div>

                <h3 className="text-sm font-serif-title font-bold text-[#FFFDF9] tracking-wide mb-1">
                  {ritual.name}
                </h3>

                <p className="text-xs text-[#A5B9CB] font-sans-body leading-relaxed mb-3">
                  {ritual.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#C5A059]/15">
                <p className="text-[11px] text-[#D4AF37] font-serif-sub italic">
                  "{ritual.significance}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Ritual Notice */}
        <div className="p-3.5 rounded-xl bg-[#081224] border border-[#C5A059]/30 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#E5D2A8]">
            For Religious &amp; Ritual Use Only • Not For Drinking
          </p>
          <p className="text-[11px] text-[#8EA3B5] mt-0.5">
            DevGanga Amrit (250 ml) is bottled strictly for ceremony and spiritual sanctification.
          </p>
        </div>

        {/* Action Button */}
        <button
          id="rituals-notify-btn"
          onClick={onOpenNotify}
          className="w-full py-3.5 px-4 rounded-xl bg-[#0E1F3B] border border-[#C5A059]/40 text-[#F5E6C8] font-serif-title font-semibold text-xs tracking-wider uppercase hover:bg-[#152F5A] transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Request Notification for Upcoming Batch</span>
        </button>
      </div>
    </div>
  );
};
