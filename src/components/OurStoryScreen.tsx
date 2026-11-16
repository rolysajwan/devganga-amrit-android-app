import React from 'react';
import { ArrowLeft, Mountain, Compass, MapPin } from 'lucide-react';
import { ScreenId } from '../types';

interface OurStoryScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const OurStoryScreen: React.FC<OurStoryScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col min-h-full pb-20 text-[#FBF9F4] animate-fadeIn">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#C5A059]/15 bg-[#061022]/90 backdrop-blur-md sticky top-0 z-20">
        <button
          id="story-back-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#C5A059] hover:text-[#FFFDF9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK</span>
        </button>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1B3C4] font-serif-title">
          HERITAGE &amp; PROVENANCE
        </span>
      </div>

      <div className="px-5 py-6 max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#0E1E38] border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37] mb-3">
            <Mountain className="w-6 h-6" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-serif-title">
            The Confluence of Devprayag
          </p>
          <h1 className="text-2xl md:text-3xl font-serif-title font-bold tracking-[0.12em] leading-tight text-[#FFFDF9]">
            WHERE THE RIVERS MEET,<br />
            <span className="gold-shimmer-text">TRADITION BEGINS.</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto mt-3" />
        </div>

        {/* Story Section 1: The Confluence */}
        <div className="p-5 rounded-2xl bg-[#09152B] border border-[#C5A059]/25 space-y-3 shadow-md">
          <div className="flex items-center gap-2 text-xs font-serif-title text-[#D4AF37]">
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            <span>Devprayag, Tehri Garhwal, Uttarakhand</span>
          </div>
          <p className="text-xs text-[#C5D5E4] font-sans-body leading-relaxed">
            Perched in the Garhwal Himalayas at an elevation of over 830 meters, the historic town of Devprayag marks one of the most revered geographical junctions in the Indian subcontinent. It is here that two mighty glacial rivers converge: the swift, vibrant <strong className="text-[#FFFDF9]">Bhagirathi</strong>, descending from the Gaumukh glacier, meets the deep, serene waters of the <strong className="text-[#FFFDF9]">Alaknanda</strong>, flowing from Satopanth.
          </p>
          <p className="text-xs text-[#C5D5E4] font-sans-body leading-relaxed">
            From this precise confluence, the combined river is traditionally and historically recognized by the name <strong className="text-[#D4AF37]">Ganga</strong>.
          </p>
        </div>

        {/* River Characteristics (Factual & Respectful) */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-[#071328] border border-[#72A8BC]/30 space-y-1.5">
            <span className="text-[9px] uppercase tracking-widest text-[#72A8BC] font-serif-title font-semibold">
              The Bhagirathi
            </span>
            <h3 className="text-sm font-serif-title font-bold text-[#FFFDF9]">Dynamic &amp; Turquoise</h3>
            <p className="text-[11px] text-[#A5B9CB] font-sans-body leading-snug">
              Originating at Gaumukh (3,892 m), revered as the source stream that carved through high Himalayan granite.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#071328] border border-[#93C5D6]/30 space-y-1.5">
            <span className="text-[9px] uppercase tracking-widest text-[#93C5D6] font-serif-title font-semibold">
              The Alaknanda
            </span>
            <h3 className="text-sm font-serif-title font-bold text-[#FFFDF9]">Deep &amp; Serene</h3>
            <p className="text-[11px] text-[#A5B9CB] font-sans-body leading-snug">
              Originating from Satopanth and Bhagirath Kharak glaciers, bringing waters from Badrinath and Panch Prayag.
            </p>
          </div>
        </div>

        {/* Story Section 2: Respectful Dedication */}
        <div className="p-5 rounded-2xl bg-[#09152B] border border-[#C5A059]/25 space-y-3 shadow-md">
          <h3 className="text-sm font-serif-title font-semibold text-[#FFFDF9]">
            A Commitment to Sacred Authenticity
          </h3>
          <p className="text-xs text-[#C5D5E4] font-sans-body leading-relaxed">
            For generations, families across India have sought authentic Ganga Jal from the Himalayan heights to conduct their most sacred household ceremonies—from dawn puja to ancestral tarpan and life-cycle rites.
          </p>
          <p className="text-xs text-[#C5D5E4] font-sans-body leading-relaxed">
            <strong className="text-[#C5A059]">DevGanga Amrit</strong> was envisioned to honor this spiritual bond through a dignified, untainted, and responsibly packaged 250 ml presentation. We treat the waters of Devprayag with the highest degree of respect, ensuring every seal preserves its pristine ritual readiness.
          </p>
        </div>

        {/* Call to Action to view Devprayag Screen */}
        <div className="pt-2">
          <button
            id="story-to-origin-btn"
            onClick={() => onNavigate('devprayag')}
            className="w-full py-3 px-4 rounded-xl bg-[#0E1F3B] border border-[#C5A059]/40 text-[#F5E6C8] font-serif-title font-semibold text-xs tracking-wider uppercase hover:bg-[#142B52] transition-colors flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>View The Origin: Devprayag Confluence Visualizer</span>
          </button>
        </div>
      </div>
    </div>
  );
};
