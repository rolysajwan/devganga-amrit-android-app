import React, { useState, useEffect } from 'react';
import { ScreenId } from './types';
import { AndroidShell } from './components/AndroidShell';
import { SplashScreen } from './components/SplashScreen';
import { HomeScreen } from './components/HomeScreen';
import { OurStoryScreen } from './components/OurStoryScreen';
import { DevprayagScreen } from './components/DevprayagScreen';
import { ProductScreen } from './components/ProductScreen';
import { RitualsScreen } from './components/RitualsScreen';
import { ComingSoonScreen } from './components/ComingSoonScreen';
import { FAQScreen } from './components/FAQScreen';
import { ContactScreen } from './components/ContactScreen';
import { AboutScreen } from './components/AboutScreen';
import { BottomNav } from './components/BottomNav';
import { MoreMenuDrawer } from './components/MoreMenuDrawer';
import { NotifyModal } from './components/NotifyModal';
import { ApkGuideModal } from './components/ApkGuideModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('splash');
  const [history, setHistory] = useState<ScreenId[]>([]);
  const [isNotifyOpen, setIsNotifyOpen] = useState<boolean>(false);
  const [isApkGuideOpen, setIsApkGuideOpen] = useState<boolean>(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState<boolean>(false);

  // Navigate to screen and record history for Android Back button
  const navigateTo = (screen: ScreenId) => {
    if (screen === currentScreen) return;
    setHistory((prev) => [...prev, currentScreen]);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Android Back button handler
  const handleAndroidBack = () => {
    if (isNotifyOpen) {
      setIsNotifyOpen(false);
      return;
    }
    if (isApkGuideOpen) {
      setIsApkGuideOpen(false);
      return;
    }
    if (isMoreMenuOpen) {
      setIsMoreMenuOpen(false);
      return;
    }

    if (history.length > 0) {
      const prevScreen = history[history.length - 1];
      setHistory((prev) => prev.slice(0, prev.length - 1));
      setCurrentScreen(prevScreen);
    } else if (currentScreen !== 'home') {
      setCurrentScreen('home');
    }
  };

  const handleSplashComplete = () => {
    setCurrentScreen('home');
  };

  const handleReplaySplash = () => {
    setHistory((prev) => [...prev, currentScreen]);
    setCurrentScreen('splash');
  };

  const canGoBack = currentScreen !== 'splash' && (history.length > 0 || currentScreen !== 'home');

  return (
    <AndroidShell onAndroidBack={handleAndroidBack} canGoBack={canGoBack}>
      {/* Screen Render Switch */}
      <div className="flex-1 w-full flex flex-col">
        {currentScreen === 'splash' && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}

        {currentScreen === 'home' && (
          <HomeScreen 
            onNavigate={navigateTo} 
            onOpenNotify={() => setIsNotifyOpen(true)} 
          />
        )}

        {currentScreen === 'story' && (
          <OurStoryScreen onNavigate={navigateTo} />
        )}

        {currentScreen === 'devprayag' && (
          <DevprayagScreen onNavigate={navigateTo} />
        )}

        {currentScreen === 'product' && (
          <ProductScreen 
            onNavigate={navigateTo} 
            onOpenNotify={() => setIsNotifyOpen(true)} 
          />
        )}

        {currentScreen === 'rituals' && (
          <RitualsScreen 
            onNavigate={navigateTo} 
            onOpenNotify={() => setIsNotifyOpen(true)} 
          />
        )}

        {currentScreen === 'coming_soon' && (
          <ComingSoonScreen 
            onNavigate={navigateTo} 
            onOpenNotify={() => setIsNotifyOpen(true)} 
          />
        )}

        {currentScreen === 'faq' && (
          <FAQScreen 
            onNavigate={navigateTo} 
            onOpenNotify={() => setIsNotifyOpen(true)} 
          />
        )}

        {currentScreen === 'contact' && (
          <ContactScreen onNavigate={navigateTo} />
        )}

        {currentScreen === 'about' && (
          <AboutScreen 
            onNavigate={navigateTo} 
            onOpenNotify={() => setIsNotifyOpen(true)} 
          />
        )}
      </div>

      {/* Bottom Navigation (Displayed on all active screens except Splash) */}
      {currentScreen !== 'splash' && (
        <BottomNav
          currentScreen={currentScreen}
          onNavigate={(screen) => {
            setIsMoreMenuOpen(false);
            navigateTo(screen);
          }}
          onToggleMoreMenu={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
          isMoreMenuOpen={isMoreMenuOpen}
        />
      )}

      {/* More Menu Drawer */}
      <MoreMenuDrawer
        isOpen={isMoreMenuOpen}
        onClose={() => setIsMoreMenuOpen(false)}
        onNavigate={navigateTo}
        onOpenApkGuide={() => setIsApkGuideOpen(true)}
        onReplaySplash={handleReplaySplash}
      />

      {/* Pre-launch Notify Form Modal */}
      <NotifyModal
        isOpen={isNotifyOpen}
        onClose={() => setIsNotifyOpen(false)}
      />

      {/* Android APK Build Guide Modal */}
      <ApkGuideModal
        isOpen={isApkGuideOpen}
        onClose={() => setIsApkGuideOpen(false)}
      />
    </AndroidShell>
  );
}
