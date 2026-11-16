import React, { useState } from 'react';
import { X, Bell, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { WaitlistFormData } from '../types';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    purpose: 'Daily Puja'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', city: '', purpose: 'Daily Puja' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-[#0A1326] border border-[#C5A059]/40 rounded-2xl p-6 md:p-8 text-[#FBF9F4] shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-notify-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#C5A059] hover:text-[#FFFDF9] transition-colors rounded-full hover:bg-white/5"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C5A059] font-serif-title">Pre-Launch Priority</p>
                <h3 className="text-xl font-serif-title font-semibold text-[#FFFDF9]">Notify Me</h3>
              </div>
            </div>

            <p className="text-xs text-[#A1B3C4] mb-5 leading-relaxed font-sans-body">
              Be the first to know when the inaugural batch of <span className="text-[#C5A059] font-medium">{BRAND_INFO.name}</span> 250 ml sacred Ganga Jal from Devprayag Sangam is bottled.
            </p>

            {/* Mandatory Notice Strip */}
            <div className="flex items-center gap-2 p-2.5 mb-5 rounded-lg bg-[#060D1A] border border-[#C5A059]/20 text-[11px] text-[#E5D7B7]">
              <ShieldAlert className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>For religious & ritual use only. Not sold for drinking.</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A1B3C4] mb-1">
                  Full Name <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  id="notify-input-name"
                  type="text"
                  required
                  placeholder="e.g. Rolinder Sajwan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060D1A] border border-[#C5A059]/30 text-sm text-[#FBF9F4] placeholder-[#5C7083] focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A1B3C4] mb-1">
                  Email Address <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  id="notify-input-email"
                  type="email"
                  required
                  placeholder="e.g. devotee@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060D1A] border border-[#C5A059]/30 text-sm text-[#FBF9F4] placeholder-[#5C7083] focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A1B3C4] mb-1">
                  Mobile Number <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  id="notify-input-phone"
                  type="tel"
                  required
                  placeholder="e.g. +91 96433 45474"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060D1A] border border-[#C5A059]/30 text-sm text-[#FBF9F4] placeholder-[#5C7083] focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A1B3C4] mb-1">
                  Intended Ritual Use
                </label>
                <select
                  id="notify-select-purpose"
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#060D1A] border border-[#C5A059]/30 text-sm text-[#FBF9F4] focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  <option value="Daily Puja">Daily Puja & Altar Sanctification</option>
                  <option value="Shiva Abhishek">Shiva Abhishek</option>
                  <option value="Havan">Havan & Yajna</option>
                  <option value="Tarpan / Shraddh">Tarpan / Shraddh Ancestral Rites</option>
                  <option value="House Blessing">Griha Pravesh & House Blessing</option>
                  <option value="Festivals">Upcoming Festivals (Diwali/Navratri/Shivratri)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  id="notify-submit-btn"
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#B08938] via-[#D4AF37] to-[#997426] text-[#061022] font-serif-title font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  Register for Pre-Launch Notice
                </button>
              </div>

              <p className="text-[10px] text-[#6E8294] text-center italic mt-2">
                *Demo registration preview for DevGanga Amrit launch notification.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#D4AF37] animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-serif-title font-semibold text-[#FFFDF9]">
              Har Har Gange!
            </h3>

            <p className="text-sm text-[#C8D6E2] font-sans-body">
              Thank you, <span className="text-[#C5A059] font-medium">{formData.name}</span>. Your interest in <span className="text-[#C5A059]">{BRAND_INFO.name}</span> (250 ml) has been recorded.
            </p>

            <div className="p-3 bg-[#060D1A] rounded-xl border border-[#C5A059]/20 text-xs text-[#A1B3C4] space-y-1 text-left">
              <p><strong className="text-[#C5A059]">Mobile:</strong> {formData.phone}</p>
              <p><strong className="text-[#C5A059]">Email:</strong> {formData.email}</p>
              <p><strong className="text-[#C5A059]">Sanctified Origin:</strong> Devprayag Sangam, Uttarakhand</p>
            </div>

            <button
              id="notify-dismiss-btn"
              onClick={handleReset}
              className="w-full py-2.5 rounded-xl border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 font-serif-title text-xs tracking-widest uppercase transition-colors"
            >
              Return to DevGanga Amrit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
