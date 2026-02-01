
import React from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  currentView: 'home' | 'equipment';
  onViewChange: (view: 'home' | 'equipment') => void;
}

export const Header: React.FC<HeaderProps> = ({ scrolled, currentView, onViewChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'WORK', href: '#work', type: 'home' },
    { name: 'ABOUT', href: '#about', type: 'home' },
    { name: 'EQUIPMENT', href: '#equipment', type: 'equipment' },
    { name: 'CONTACT', href: '#contact', type: 'footer' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    setIsOpen(false);
    
    if (item.type === 'equipment') {
      e.preventDefault();
      onViewChange('equipment');
    } else if (item.type === 'home' || item.type === 'footer') {
      if (currentView !== 'home' && item.type === 'home') {
        onViewChange('home');
        // 홈으로 이동 후 스크롤을 위해 약간의 지연을 줌
        setTimeout(() => {
          const el = document.querySelector(item.href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className={`fixed w-full z-[80] transition-all duration-500 bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4 md:py-6`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Top Row: Logo Image */}
          <div 
            className="transition-all duration-500 mb-6 scale-100 group cursor-pointer relative"
            onClick={() => onViewChange('home')}
          >
            <div className="flex flex-col items-center">
              <img 
                src="logo.png" 
                alt="LIGHTBOSS" 
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
                }}
              />
              <h1 className="fallback-logo hidden text-3xl md:text-4xl font-black tracking-[-0.05em] uppercase text-white">
                LIGHTBOSS
              </h1>
            </div>
          </div>

          {/* Bottom Row: Centered Navigation */}
          <div className="hidden md:flex items-center justify-center w-full space-x-12 border-t border-zinc-900/50 pt-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-[10px] font-bold tracking-[0.3em] transition-all uppercase ${
                  (item.type === 'equipment' && currentView === 'equipment') || 
                  (item.type === 'home' && currentView === 'home' && false /* active state logic could be added here */)
                  ? 'text-white' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-5 pl-4 border-l border-zinc-800">
               <a href="#" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
                 <Instagram size={16} strokeWidth={1.5} />
               </a>
               <a href="#" className="text-zinc-500 hover:text-white transition-all hover:scale-110">
                 <Youtube size={16} strokeWidth={1.5} />
               </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-6 top-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-xl h-screen w-full fixed top-0 left-0 z-[100] flex flex-col items-center justify-center space-y-10 animate-in fade-in duration-300">
          <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-6 text-zinc-500 hover:text-white"
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <div className="mb-6 flex flex-col items-center px-6" onClick={() => {onViewChange('home'); setIsOpen(false);}}>
             <img src="logo.png" alt="LIGHTBOSS" className="h-8 w-auto mb-2" />
          </div>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-2xl font-light tracking-[0.4em] transition-colors uppercase ${
                (item.type === 'equipment' && currentView === 'equipment') ? 'text-white' : 'text-zinc-400'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex space-x-10 pt-10 border-t border-zinc-800 w-1/2 justify-center">
             <Instagram size={24} className="text-zinc-500 hover:text-white transition-colors" />
             <Youtube size={24} className="text-zinc-500 hover:text-white transition-colors" />
          </div>
        </div>
      )}
    </nav>
  );
};
