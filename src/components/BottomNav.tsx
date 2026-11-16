import React from 'react';
import { Home, Droplet, Mountain, Sparkles, Menu } from 'lucide-react';
import { ScreenId } from '../types';

interface BottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onToggleMoreMenu: () => void;
  isMoreMenuOpen: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  onToggleMoreMenu,
  isMoreMenuOpen
}) => {
  const navItems = [
    {
      id: 'home' as ScreenId,
      label: 'Home',
      icon: Home
    },
    {
      id: 'product' as ScreenId,
      label: 'Ganga Jal',
      icon: Droplet
    },
    {
      id: 'devprayag' as ScreenId,
      label: 'Devprayag',
      icon: Mountain
    },
    {
      id: 'rituals' as ScreenId,
      label: 'Rituals',
      icon: Sparkles
    }
  ];

  const isMoreActive = isMoreMenuOpen || ['story', 'coming_soon', 'faq', 'contact', 'about'].includes(currentScreen);

  return (
    <nav 
      aria-label="Application Navigation"
      className="absolute bottom-0 left-0 right-0 z-30 bg-[#061022]/95 backdrop-blur-lg border-t border-[#C5A059]/20 px-2 py-1.5 flex items-center justify-around"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id && !isMoreMenuOpen;

        return (
          <button
            key={item.id}
            id={`bottom-nav-${item.id}`}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-200 min-w-[58px] ${
              isActive 
                ? 'text-[#D4AF37] scale-105' 
                : 'text-[#8E9FAE] hover:text-[#C5A059]'
            }`}
          >
            <div className="relative">
              <Icon className={`w-5 h-5 stroke-[1.75] ${isActive ? 'text-[#D4AF37]' : 'text-[#8E9FAE]'}`} />
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37]" />
              )}
            </div>
            <span className={`text-[10px] mt-1 font-serif-title tracking-wider ${
              isActive ? 'font-bold text-[#D4AF37]' : 'font-normal text-[#8E9FAE]'
            }`}>
              {item.label}
            </span>
          </button>
        );
      })}

      {/* More Button */}
      <button
        id="bottom-nav-more"
        onClick={onToggleMoreMenu}
        className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-200 min-w-[58px] ${
          isMoreActive 
            ? 'text-[#D4AF37] scale-105' 
            : 'text-[#8E9FAE] hover:text-[#C5A059]'
        }`}
      >
        <div className="relative">
          <Menu className={`w-5 h-5 stroke-[1.75] ${isMoreActive ? 'text-[#D4AF37]' : 'text-[#8E9FAE]'}`} />
          {isMoreActive && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37]" />
          )}
        </div>
        <span className={`text-[10px] mt-1 font-serif-title tracking-wider ${
          isMoreActive ? 'font-bold text-[#D4AF37]' : 'font-normal text-[#8E9FAE]'
        }`}>
          More
        </span>
      </button>
    </nav>
  );
};
