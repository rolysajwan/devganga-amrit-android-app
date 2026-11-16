import React from 'react';
import { ArrowLeft, Mail, Phone, MessageSquare, MapPin, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { ScreenId } from '../types';

interface ContactScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate }) => {
  const handleEmail = () => {
    window.location.href = `mailto:${BRAND_INFO.email}?subject=Inquiry regarding DevGanga Amrit Sacred Ganga Jal`;
  };

  const handleCall = () => {
    window.location.href = `tel:${BRAND_INFO.phoneClean}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Pranam! I would like to know more about DevGanga Amrit Sacred Ganga Jal from Devprayag Sangam.');
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full flex flex-col min-h-full pb-24 text-[#FBF9F4] animate-fadeIn">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#061022]/90 backdrop-blur-md sticky top-0 z-20">
        <button
          id="contact-back-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#C5A059] hover:text-[#FFFDF9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1B3C4] font-serif-title">
          COMMUNICATION &amp; REACH
        </span>
      </div>

      <div className="px-5 py-6 max-w-lg mx-auto space-y-6">
        {/* Brand Information Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#0A162C] border border-[#C5A059]/40 flex items-center justify-center p-1 shadow-md mb-2">
            <img 
              src="/assets/devganga_logo.svg" 
              alt="DevGanga Amrit Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-serif-title font-bold tracking-[0.16em] text-[#FFFDF9]">
            {BRAND_INFO.name}
          </h1>

          {/* Location Details as specified in prompt:
              Devprayag,
              Tehri Garhwal,
              Uttarakhand, India
          */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#C5A059] font-serif-title pt-1">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Devprayag, Tehri Garhwal, Uttarakhand, India</span>
          </div>
          <p className="text-[10px] text-[#7E93A6] uppercase tracking-wider font-sans-body">
            Confluence Elevation: 830 meters • Garhwal Himalayas
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-3">
          {/* Email Info Box */}
          <div className="p-4 rounded-xl bg-[#09152B] border border-[#C5A059]/25 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#061022] border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7E93A6] block font-sans-body">
                  Email Inquiries
                </span>
                <a 
                  href={`mailto:${BRAND_INFO.email}`} 
                  className="text-xs md:text-sm font-medium text-[#FFFDF9] hover:text-[#D4AF37] transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Phone Info Box */}
          <div className="p-4 rounded-xl bg-[#09152B] border border-[#C5A059]/25 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#061022] border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7E93A6] block font-sans-body">
                  Direct Line
                </span>
                <a 
                  href={`tel:${BRAND_INFO.phoneClean}`} 
                  className="text-xs md:text-sm font-medium text-[#FFFDF9] hover:text-[#D4AF37] transition-colors"
                >
                  {BRAND_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Android Action Intent Buttons (as specified in prompt):
            EMAIL US
            CALL US
            WHATSAPP
        */}
        <div className="space-y-2.5 pt-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-serif-title text-center">
            Native Connect Intents
          </p>

          <button
            id="contact-email-intent-btn"
            onClick={handleEmail}
            className="w-full py-3.5 px-5 rounded-xl bg-[#0E1E38] border border-[#C5A059]/40 text-[#F5E6C8] font-serif-title font-semibold text-xs tracking-wider uppercase hover:bg-[#152B52] transition-colors flex items-center justify-center gap-2.5 shadow-md"
          >
            <Mail className="w-4 h-4 text-[#D4AF37]" />
            <span>EMAIL US ({BRAND_INFO.email})</span>
          </button>

          <button
            id="contact-call-intent-btn"
            onClick={handleCall}
            className="w-full py-3.5 px-5 rounded-xl bg-[#0E1E38] border border-[#C5A059]/40 text-[#F5E6C8] font-serif-title font-semibold text-xs tracking-wider uppercase hover:bg-[#152B52] transition-colors flex items-center justify-center gap-2.5 shadow-md"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>CALL US ({BRAND_INFO.phone})</span>
          </button>

          <button
            id="contact-whatsapp-intent-btn"
            onClick={handleWhatsApp}
            className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#1B6E44] to-[#25D366] text-white font-serif-title font-bold text-xs tracking-wider uppercase hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-900/30"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>WHATSAPP US DIRECTLY</span>
          </button>
        </div>

        {/* Brand Information / Reverence Promise */}
        <div className="p-4 rounded-xl bg-[#061022] border border-[#C5A059]/20 text-center space-y-1">
          <p className="text-[11px] font-serif-title text-[#C5A059]">
            DEVGANGA AMRIT • DEVPRAYAG, UTTARAKHAND
          </p>
          <p className="text-[10px] text-[#7E93A6] leading-relaxed">
            Respectfully bottled with devotion to traditional ritual sanctity and eco-conscious stewardship of the sacred Himalayan rivers.
          </p>
        </div>
      </div>
    </div>
  );
};
