
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
        setTimeout(() => {
          const el = document.querySelector(item.href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className={`fixed w-full z-[80] transition-all duration-500 bg-black/95 backdrop-blur-xl border-b border-zinc-900 py-6 md:py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* LOGO SECTION: Removed Skew/Italic, Applied Two-tone Color with Hover Effect */}
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
              <h1 className="fallback-logo hidden text-4xl md:text-5xl font-black tracking-[-0.05em] uppercase leading-none">
                <span className="text-white transition-colors duration-500">LIGHT</span>
                <span className="text-[#8a8a8a] transition-colors duration-500 group-hover:text-white">BOSS</span>
              </h1>
              {/* Underline Animation: Maintained 350ms speed */}
              <div className="w-full h-[2px] bg-white/20 mt-1 origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-[350ms]"></div>
            </div>
          </div>

          {/* NAVIGATION SECTION: Maintained straight and clean style */}
          <div className="hidden md:flex items-center justify-center w-full space-x-16 border-t border-zinc-900/80 pt-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-[11px] font-black tracking-[0.4em] transition-all uppercase relative group/nav ${
                  (item.type === 'equipment' && currentView === 'equipment') || 
                  (item.type === 'home' && currentView === 'home' && false)
                  ? 'text-white' : 'text-zinc-600 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-[350ms] ${
                  (item.type === 'equipment' && currentView === 'equipment') ? 'w-full' : 'w-0 group-hover/nav:w-full'
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

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-6 top-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay: Applied Two-tone Color to Logo as well */}
      {isOpen && (
        <div className="md:hidden bg-black/99 backdrop-blur-2xl h-screen w-full fixed top-0 left-0 z-[100] flex flex-col items-center justify-center space-y-12 animate-in fade-in zoom-in-95 duration-300">
          <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-6 text-zinc-500 hover:text-white"
          >
            <X size={36} strokeWidth={1} />
          </button>
          
          <div className="mb-8 flex flex-col items-center px-6 group" onClick={() => {onViewChange('home'); setIsOpen(false);}}>
             <h1 className="text-3xl font-black tracking-tighter uppercase">
               <span className="text-white">LIGHT</span>
               <span className="text-[#8a8a8a] transition-colors duration-500 group-hover:text-white">BOSS</span>
             </h1>
             <div className="w-full h-[2px] bg-white mt-1"></div>
          </div>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-3xl font-black tracking-[0.3em] transition-colors uppercase ${
                (item.type === 'equipment' && currentView === 'equipment') ? 'text-white' : 'text-zinc-600 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex space-x-12 pt-12 border-t border-zinc-900 w-1/2 justify-center">
             <Instagram size={28} className="text-zinc-600 hover:text-white transition-colors" />
             <Youtube size={28} className="text-zinc-600 hover:text-white transition-colors" />
          </div>
        </div>
      )}
    </nav>
  );
};
