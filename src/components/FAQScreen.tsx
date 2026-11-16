import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';
import { ScreenId, FaqItem } from '../types';

interface FAQScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenNotify: () => void;
}

export const FAQScreen: React.FC<FAQScreenProps> = ({ onNavigate, onOpenNotify }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(4); // Default open "Is it for drinking?" to highlight the clear answer

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col min-h-full pb-24 text-[#FBF9F4] animate-fadeIn">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#061022]/90 backdrop-blur-md sticky top-0 z-20">
        <button
          id="faq-back-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#C5A059] hover:text-[#FFFDF9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1B3C4] font-serif-title">
          KNOWLEDGE &amp; CLARITY
        </span>
      </div>

      <div className="px-5 py-6 max-w-lg mx-auto space-y-5">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="w-10 h-10 mx-auto rounded-full bg-[#0E1E38] border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] mb-2">
            <HelpCircle className="w-5 h-5" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-serif-title">
            Frequently Asked Questions
          </p>
          <h1 className="text-2xl md:text-3xl font-serif-title font-bold tracking-[0.14em] text-[#FFFDF9]">
            QUESTIONS &amp; <span className="gold-shimmer-text">ANSWERS</span>
          </h1>
          <p className="text-xs text-[#9BB1C4] font-sans-body max-w-sm mx-auto leading-relaxed">
            Essential information regarding DevGanga Amrit, the Devprayag origin, bottle size, and intended ceremonial use.
          </p>
        </div>

        {/* Polished Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item: FaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  item.highlight
                    ? 'border-[#C5A059]/60 bg-[#0B152B]'
                    : isOpen
                    ? 'border-[#C5A059]/40 bg-[#09152B]'
                    : 'border-[#C5A059]/20 bg-[#061022]'
                }`}
              >
                <button
                  id={`faq-accordion-toggle-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 flex items-center justify-between text-left gap-3 focus:outline-none"
                >
                  <span className={`text-xs md:text-sm font-serif-title font-semibold tracking-wide ${
                    item.highlight ? 'text-[#F5E6C8]' : 'text-[#FFFDF9]'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#C5A059]/20 text-[#D4AF37]' : 'text-[#8C9FA8]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-[#C5A059]/15 text-xs text-[#C5D5E4] font-sans-body leading-relaxed animate-fadeIn">
                    {item.highlight && (
                      <div className="flex items-center gap-1.5 text-[#F2C078] font-semibold text-[11px] mb-2 uppercase tracking-wide">
                        <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
                        <span>Crucial Regulatory &amp; Ritual Notice</span>
                      </div>
                    )}
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Prompt Specific Clear Reassurance Card */}
        <div className="p-4 rounded-xl bg-[#081224] border border-[#C5A059]/30 text-center space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] font-serif-title">
            Official Intended Purpose
          </p>
          <p className="text-xs text-[#A5B9CB] leading-relaxed font-sans-body">
            DevGanga Amrit is intended for <strong className="text-[#FFFDF9]">religious and ritual use only</strong>. It is not sold as drinking water.
          </p>
        </div>
      </div>
    </div>
  );
};
