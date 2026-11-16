import React, { useState, useEffect } from 'react';
import { Wifi, BatteryMedium, Signal, Smartphone, Maximize2, Minimize2, ArrowLeft } from 'lucide-react';

interface AndroidShellProps {
  children: React.ReactNode;
  onAndroidBack?: () => void;
  canGoBack?: boolean;
}

export const AndroidShell: React.FC<AndroidShellProps> = ({
  children,
  onAndroidBack,
  canGoBack = false
}) => {
  const [timeStr, setTimeStr] = useState('10:08');
  const [isPhoneFrame, setIsPhoneFrame] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#030814] flex flex-col items-center justify-start p-0 md:py-6 md:px-4 text-[#FBF9F4]">
      {/* Top AI Studio Preview Bar with Mode Toggle */}
      <header className="w-full max-w-md hidden md:flex items-center justify-between py-2 px-3 mb-2 text-xs text-[#8E9FAE] border-b border-[#C5A059]/20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-serif-title font-medium text-[#D4AF37]">DevGanga Amrit</span>
          <span className="text-[10px] text-[#5C7083]">• Android 15 Preview</span>
        </div>

        <button
          onClick={() => setIsPhoneFrame(!isPhoneFrame)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0A162C] border border-[#C5A059]/30 text-[#E5D2A8] hover:text-white text-[11px] transition-colors"
          title="Toggle phone frame vs expanded view"
        >
          {isPhoneFrame ? (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Width</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>Phone Frame</span>
            </>
          )}
        </button>
      </header>

      {/* Main Container: Either Phone Frame or Fluid View */}
      <main 
        className={`relative w-full overflow-hidden transition-all duration-300 ${
          isPhoneFrame
            ? 'max-w-[430px] md:min-h-[860px] md:h-[90vh] md:rounded-[42px] md:border-[6px] md:border-[#1A263B] md:shadow-[0_25px_60px_rgba(0,0,0,0.95)]'
            : 'max-w-3xl min-h-screen md:min-h-[860px] md:rounded-2xl md:border border-[#C5A059]/30'
        } bg-[#061022] flex flex-col`}
      >
        {/* Android 15 Status Bar */}
        <div className="w-full h-8 px-6 flex items-center justify-between text-[11px] text-[#A1B3C4] bg-[#061022] z-30 select-none border-b border-white/[0.03]">
          {/* Status Time */}
          <span className="font-semibold tracking-tight text-[#E2EDF5]">{timeStr}</span>

          {/* Center Punch-Hole Camera (Visible in phone frame) */}
          {isPhoneFrame && (
            <div className="w-4 h-4 rounded-full bg-[#030814] border border-[#142033] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0A1528]" />
            </div>
          )}

          {/* Status Icons: Cellular, Wifi, Battery */}
          <div className="flex items-center gap-2">
            <Signal className="w-3.5 h-3.5 text-[#C5A059]" />
            <Wifi className="w-3.5 h-3.5 text-[#C5A059]" />
            <div className="flex items-center gap-0.5">
              <span className="text-[9px]">98%</span>
              <BatteryMedium className="w-3.5 h-3.5 text-[#C5A059]" />
            </div>
          </div>
        </div>

        {/* Dynamic Screen Viewport Area */}
        <div className="relative flex-1 w-full overflow-y-auto overflow-x-hidden flex flex-col">
          {children}
        </div>

        {/* Android 15 Gesture Navigation Bar with Back Button */}
        <div className="w-full h-7 bg-[#061022]/95 backdrop-blur-md flex items-center justify-between px-8 z-30 select-none border-t border-white/[0.03]">
          {canGoBack ? (
            <button
              id="android-hardware-back-btn"
              onClick={onAndroidBack}
              className="p-1 text-[#C5A059] hover:text-[#FFFDF9] transition-colors flex items-center gap-1 text-[10px]"
              title="Android System Back"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="font-mono text-[9px]">BACK</span>
            </button>
          ) : (
            <div className="w-8" />
          )}

          {/* Center Gesture Navigation Pill */}
          <div className="w-28 h-1 bg-[#C5A059]/40 rounded-full mx-auto" />

          <div className="w-8" />
        </div>
      </main>
    </div>
  );
};
