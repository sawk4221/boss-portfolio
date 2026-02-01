
import React from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`absolute w-full z-50 transition-all duration-500 bg-black border-b border-zinc-900 py-4 md:py-5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Top Row: Centered Logo */}
          <div className="transition-all duration-500 mb-3 scale-100">
            <div className="group relative cursor-pointer flex items-center">
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase flex items-center leading-none select-none">
                <span className="relative z-20">LIGHT</span>
                <span className="relative z-10 italic text-zinc-500 transition-all duration-500 ease-out 
                  group-hover:not-italic group-hover:text-white 
                  -ml-[0.18em] group-hover:-ml-[0.02em] 
                  pr-4 bg-gradient-to-b from-zinc-400 to-zinc-600 bg-clip-text text-transparent 
                  group-hover:from-white group-hover:to-zinc-200 
                  group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  BOSS
                </span>
              </h1>
            </div>
          </div>

          {/* Bottom Row: Centered Navigation */}
          <div className="hidden md:flex items-center justify-center w-full space-x-12 border-t border-zinc-900/50 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 hover:text-white transition-all uppercase"
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
          <div className="md:hidden absolute right-6 top-6">
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
        <div className="md:hidden bg-black/98 backdrop-blur-xl h-screen w-full fixed top-0 left-0 z-50 flex flex-col items-center justify-center space-y-10 animate-in fade-in duration-300">
          <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-6 text-zinc-500 hover:text-white"
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <div className="mb-6">
             <span className="text-2xl font-black text-white italic tracking-tighter">LIGHTBOSS</span>
          </div>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-[0.4em] text-white hover:text-zinc-400 transition-colors uppercase"
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
