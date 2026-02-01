
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { PortfolioGrid } from './components/PortfolioGrid.tsx';
import { About } from './components/About.tsx';
import { Equipment } from './components/Equipment.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectDetail } from './components/ProjectDetail.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentView, setCurrentView] = useState<'home' | 'equipment'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedProject]);

  // 페이지 전환 시 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <Header 
        scrolled={scrolled} 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      <main className="pt-32 md:pt-40">
        {currentView === 'home' ? (
          <>
            <Hero onOpenProject={setSelectedProject} />
            <section id="work" className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500 font-bold">Selected Projects</h2>
              </div>
              <PortfolioGrid onSelectProject={setSelectedProject} />
            </section>
            <About />
          </>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Equipment />
          </div>
        )}
      </main>
      
      <Footer />

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
