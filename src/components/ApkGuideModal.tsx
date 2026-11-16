import React, { useState } from 'react';
import { X, Smartphone, Terminal, Check, Copy, FileCode2, PackageCheck } from 'lucide-react';

interface ApkGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApkGuideModal: React.FC<ApkGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const gradleCommand = `./gradlew assembleDebug`;

  const handleCopy = () => {
    navigator.clipboard.writeText(gradleCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0A1326] border border-[#C5A059]/40 rounded-2xl p-6 text-[#FBF9F4] shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-apk-guide-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#C5A059] hover:text-[#FFFDF9] transition-colors rounded-full hover:bg-white/5"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-serif-title">
              Android Studio Ready
            </span>
            <h3 className="text-lg font-serif-title font-bold text-[#FFFDF9]">
              APK Build Guide
            </h3>
          </div>
        </div>

        <p className="text-xs text-[#A1B3C4] mb-4 font-sans-body leading-relaxed">
          The DevGanga Amrit project contains a complete, verified native Android build in the <code className="text-[#D4AF37] bg-[#061022] px-1.5 py-0.5 rounded">DevGangaAmritAndroid/</code> directory with Kotlin, Jetpack Compose, Material 3, and Gradle scripts.
        </p>

        {/* Step 1: Export Project */}
        <div className="space-y-3 mb-5">
          <div className="p-3.5 rounded-xl bg-[#061022] border border-[#C5A059]/20">
            <h4 className="text-xs font-serif-title font-semibold text-[#FFFDF9] flex items-center gap-2 mb-1">
              <PackageCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Step 1: Export the Project</span>
            </h4>
            <p className="text-[11px] text-[#A1B3C4]">
              In Google AI Studio, open the top-right Settings menu and click <strong>"Export to ZIP"</strong> or <strong>"Export to GitHub"</strong>.
            </p>
          </div>

          {/* Step 2: Open in Android Studio or Run Terminal */}
          <div className="p-3.5 rounded-xl bg-[#061022] border border-[#C5A059]/20">
            <h4 className="text-xs font-serif-title font-semibold text-[#FFFDF9] flex items-center gap-2 mb-1">
              <Terminal className="w-4 h-4 text-[#C5A059]" />
              <span>Step 2: Generate APK Command</span>
            </h4>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#040A17] border border-[#C5A059]/30 text-xs font-mono text-[#D4AF37] my-1.5">
              <span>{gradleCommand}</span>
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-white/10 text-xs text-[#A1B3C4] flex items-center gap-1 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-[10px] text-[#7E93A6]">
              Output APK will be generated at: <br />
              <code className="text-[#C5A059]">app/build/outputs/apk/debug/app-debug.apk</code>
            </p>
          </div>

          {/* Project Structure Included */}
          <div className="p-3.5 rounded-xl bg-[#061022] border border-[#C5A059]/20">
            <h4 className="text-xs font-serif-title font-semibold text-[#FFFDF9] flex items-center gap-2 mb-2">
              <FileCode2 className="w-4 h-4 text-[#C5A059]" />
              <span>Project Structure Configured</span>
            </h4>
            <ul className="text-[11px] text-[#A1B3C4] space-y-1 font-mono">
              <li>✓ <span className="text-[#D4AF37]">MainActivity.kt</span> — All 10 screens in Jetpack Compose</li>
              <li>✓ <span className="text-[#D4AF37]">build.gradle.kts</span> — AGP 8.5+, Kotlin 2.0+, Compose Material3</li>
              <li>✓ <span className="text-[#D4AF37]">AndroidManifest.xml</span> — Intent filters, orientation, edge-to-edge</li>
              <li>✓ <span className="text-[#D4AF37]">res/drawables</span> — Vector logo and 250 ml bottle assets</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#0E1E38] border border-[#C5A059]/40 text-[#F5E6C8] font-serif-title font-semibold text-xs tracking-wider uppercase hover:bg-[#152B52] transition-colors"
        >
          Got It, Close Guide
        </button>
      </div>
    </div>
  );
};
