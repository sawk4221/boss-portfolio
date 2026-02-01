
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenProject: (project: any) => void;
}

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Boot Camp | Kia',
    subtitle: 'LATEST PROJECTS (JAN 2026)',
    img: 'https://img.youtube.com/vi/GdrkS9LxNZA/maxresdefault.jpg',
    youtubeId: 'GdrkS9LxNZA',
    details: {
      wrapUp: "기아의 사회공헌 프로젝트 'Boot Camp' 브랜드 필름입니다. 역동적인 움직임과 각 로케이션의 질감을 살린 가변형 라이팅 시스템을 구축했습니다.",
      client: 'KIA',
      production: 'ADV',
      category: 'Commercial',
      role: 'DP',
      youtubeUrl: 'https://www.youtube.com/watch?v=GdrkS9LxNZA'
    }
  },
  {
    id: 2,
    title: 'Kia PV5 | Witty The Kia',
    subtitle: 'LATEST PROJECTS (DEC 2025)',
    img: 'https://img.youtube.com/vi/pXpu5BXNOmU/maxresdefault.jpg',
    youtubeId: 'pXpu5BXNOmU',
    details: {
      wrapUp: '기아의 차세대 PBV PV5 런칭 필름입니다. 차량의 미래지향적 실루엣과 유연성을 하이테크 라이팅 톤으로 시각화했습니다.',
      client: 'KIA',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=pXpu5BXNOmU'
    }
  },
  {
    id: 3,
    title: 'Shinhan Bank | IRP (with 박보검)',
    subtitle: 'LATEST PROJECTS (OCT 2025)',
    img: 'https://img.youtube.com/vi/P7tuDnL4dx0/maxresdefault.jpg',
    youtubeId: 'P7tuDnL4dx0',
    details: {
      wrapUp: '신한은행 IRP 캠페인입니다. 모델 박보검의 신뢰감과 서비스의 안정성을 따뜻하고 정제된 소프트 조명으로 설계했습니다.',
      client: '신한은행',
      category: 'Commercial',
      role: 'Bestboy Jr (Lighting team)',
      youtubeUrl: 'https://www.youtube.com/watch?v=P7tuDnL4dx0'
    }
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = FEATURED_PROJECTS[currentIndex];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div 
      className="relative h-[85vh] flex flex-col items-center justify-center bg-black overflow-hidden cursor-pointer group select-none"
      onClick={() => onOpenProject(currentProject)}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-50">
          <img 
            src={currentProject.img} 
            alt={currentProject.title} 
            className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-[10000ms] ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      <div className="h-[140px]"></div>

      <div className="relative z-10 text-center px-6 w-full max-w-7xl">
        <p className="text-[8px] tracking-[0.5em] uppercase text-zinc-600 mb-6 font-bold animate-fade-in">
          {currentProject.subtitle}
        </p>
        
        <div className="flex items-center justify-between w-full">
          <button className="hidden md:block text-zinc-900 hover:text-zinc-600 transition-all p-4" onClick={handlePrev}>
            <ChevronLeft size={20} strokeWidth={1} />
          </button>
          
          <div className="flex-1 px-4 overflow-hidden text-center">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-[0.5em] uppercase text-white transition-colors duration-500 group-hover:text-zinc-500 whitespace-nowrap overflow-hidden text-ellipsis animate-fade-in">
              {currentProject.title}
            </h2>
          </div>

          <button className="hidden md:block text-zinc-900 hover:text-zinc-600 transition-all p-4" onClick={handleNext}>
            <ChevronRight size={20} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
        {FEATURED_PROJECTS.map((_, idx) => (
          <div 
            key={idx}
            className={`transition-all duration-700 ${currentIndex === idx ? 'w-6 h-[1px] bg-white' : 'w-1.5 h-[1px] bg-zinc-800'}`}
          />
        ))}
      </div>
    </div>
  );
};
