
import React from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  currentView: 'home' | 'equipment' | 'inquiry';
  onViewChange: (view: 'home' | 'equipment' | 'inquiry') => void;
}

export const Header: React.FC<HeaderProps> = ({ scrolled, currentView, onViewChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // 사용자가 제공한 실제 구글 폼 링크
  const GOOGLE_FORM_URL = "https://forms.gle/9WMYmoDWF1aG3cHk9";

  const navItems = [
    { name: 'WORK', href: '#work', type: 'home' },
    { name: 'ABOUT', href: '#about', type: 'home' },
    { name: 'EQUIPMENT', href: '#equipment', type: 'equipment' },
    { name: 'CONTACT', href: '#contact', type: 'footer' },
    { name: '제작문의', href: GOOGLE_FORM_URL, type: 'external' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (item.type === 'external') {
      // 외부 링크는 기본 동작(새 창 열기)을 따르도록 하고 메뉴만 닫습니다.
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);
    
    if (item.type === 'equipment') {
      onViewChange('equipment');
    } else if (item.type === 'inquiry') {
      onViewChange('inquiry');
    } else if (item.type === 'home' || item.type === 'footer') {
      if (currentView !== 'home' && item.type === 'home') {
        onViewChange('home');
        setTimeout(() => {
          const el = document.querySelector(item.href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(item.href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full z-[80] transition-all duration-500 bg-black/95 backdrop-blur-xl border-b border-zinc-900 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          <div 
            className="transition-all duration-700 mb-8 group cursor-pointer relative"
            onClick={() => onViewChange('home')}
          >
            <div className="flex flex-col items-center">
              <img 
                src="logo.png" 
                alt="LIGHTBOSS" 
                className="h-10 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
                }}
              />
              <h1 className="fallback-logo hidden text-4xl md:text-5xl font-black tracking-[-0.05em] uppercase leading-none text-white">
                LIGHTBOSS
              </h1>
              <div className="w-full h-[2px] bg-white/20 mt-1 origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-[350ms]"></div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center w-full space-x-12 lg:space-x-16 border-t border-zinc-900/80 pt-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.type === 'external' ? '_blank' : undefined}
                rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-[11px] font-black tracking-[0.4em] transition-all uppercase relative group/nav ${
                  (item.type === currentView) || (item.type === 'home' && currentView === 'home')
                  ? 'text-white' : 'text-zinc-600 hover:text-white'
                } ${item.type === 'external' ? 'text-zinc-400' : ''}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-[350ms] ${
                  (item.type === currentView && item.type !== 'external') ? 'w-full' : 'w-0 group-hover/nav:w-full'
                }`}></span>
              </a>
            ))}
            
            <div className="flex items-center space-x-6 pl-8 border-l border-zinc-900">
               <a href="#" className="text-zinc-600 hover:text-white transition-all hover:-translate-y-1">
                 <Instagram size={18} strokeWidth={1.5} />
               </a>
               <a href="#" className="text-zinc-600 hover:text-white transition-all hover:-translate-y-1">
                 <Youtube size={18} strokeWidth={1.5} />
               </a>
            </div>
          </div>

          <div className="md:hidden absolute right-6 top-10">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-500 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/99 backdrop-blur-2xl h-screen w-full fixed top-0 left-0 z-[100] flex flex-col items-center justify-center space-y-10">
          <button onClick={() => setIsOpen(false)} className="absolute top-10 right-6 text-zinc-500 hover:text-white">
            <X size={36} strokeWidth={1} />
          </button>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.type === 'external' ? '_blank' : undefined}
              rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-2xl font-black tracking-[0.3em] transition-colors uppercase ${
                currentView === item.type ? 'text-white' : 'text-zinc-600'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
