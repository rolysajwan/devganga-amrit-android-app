import React from 'react';
import { X, BookOpen, Clock, HelpCircle, PhoneCall, Info, Smartphone, RotateCcw, ChevronRight } from 'lucide-react';
import { ScreenId } from '../types';

interface MoreMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: ScreenId) => void;
  onOpenApkGuide: () => void;
  onReplaySplash: () => void;
}

export const MoreMenuDrawer: React.FC<MoreMenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenApkGuide,
  onReplaySplash
}) => {
  if (!isOpen) return null;

  const menuItems = [
    {
      id: 'story' as ScreenId,
      title: 'Our Story',
      subtitle: 'Where the Rivers Meet, Tradition Begins',
      icon: BookOpen
    },
    {
      id: 'coming_soon' as ScreenId,
      title: 'Coming Soon',
      subtitle: 'Something Sacred is on Its Way',
      icon: Clock
    },
    {
      id: 'faq' as ScreenId,
      title: 'FAQ',
      subtitle: 'Questions on DevGanga Amrit & Ritual Use',
      icon: HelpCircle
    },
    {
      id: 'contact' as ScreenId,
      title: 'Contact & Connect',
      subtitle: 'Email, Call, WhatsApp to Devprayag',
      icon: PhoneCall
    },
    {
      id: 'about' as ScreenId,
      title: 'About Brand',
      subtitle: 'Sacred Provenance & Himalayan Ethos',
      icon: Info
    }
  ];

  const handleSelect = (id: ScreenId) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm flex items-end justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-[#0A1326] border-t border-[#C5A059]/40 rounded-t-3xl p-5 pb-8 text-[#FBF9F4] shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle Bar */}
        <div className="w-12 h-1.5 bg-[#C5A059]/40 rounded-full mx-auto mb-4" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C5A059]/20">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-serif-title">
              DEVGANGA AMRIT
            </span>
            <h3 className="text-base font-serif-title font-bold text-[#FFFDF9]">
              Additional Screens &amp; Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#C5A059] hover:text-white rounded-full hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="w-full p-3 rounded-xl bg-[#061022] border border-[#C5A059]/20 hover:border-[#C5A059]/50 hover:bg-[#0E203C] transition-all flex items-center justify-between group text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0A162C] border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif-title font-semibold text-[#FFFDF9] group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-[#8E9FAE]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C5A059]/60 group-hover:text-[#C5A059] group-hover:translate-x-0.5 transition-all" />
              </button>
            );
          })}
        </div>

        {/* Secondary Utility Actions */}
        <div className="mt-4 pt-3 border-t border-[#C5A059]/20 space-y-2">
          {/* APK Build Guide */}
          <button
            onClick={() => {
              onClose();
              onOpenApkGuide();
            }}
            className="w-full py-2.5 px-3 rounded-xl bg-[#0D1D38] border border-[#C5A059]/30 hover:bg-[#12284D] text-xs font-serif-title text-[#F5E6C8] flex items-center justify-center gap-2 transition-colors"
          >
            <Smartphone className="w-4 h-4 text-[#D4AF37]" />
            <span>Android APK Build Guide (Project Ready)</span>
          </button>

          {/* Replay Cinematic Splash */}
          <button
            onClick={() => {
              onClose();
              onReplaySplash();
            }}
            className="w-full py-2 px-3 rounded-xl bg-transparent border border-[#C5A059]/20 hover:bg-white/5 text-[11px] font-serif-title text-[#A5B9CB] flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Cinematic Splash Screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
