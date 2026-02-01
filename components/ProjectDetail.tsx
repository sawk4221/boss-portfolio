
import React from 'react';
import { X, ArrowLeft, Play, Instagram, Youtube } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    img: string;
    youtubeId?: string;
    details?: {
      wrapUp: string;
      client: string;
      production: string;
      category: string;
      role?: string;
      youtubeUrl?: string; // 이 필드에 인스타그램 링크가 들어와도 처리 가능하게 수정
    };
  };
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const data = project.details || {
    wrapUp: "프로젝트에 대한 설명이 준비 중입니다.",
    client: "Client",
    production: "LightBoss",
    category: "Commercial Film",
    role: "DP",
    youtubeUrl: "#"
  };

  const url = data.youtubeUrl || "";
  
  // 플랫폼 판단 및 ID 추출 로직
  const getMediaInfo = (url: string) => {
    if (!url || url === "#") return { type: null, id: null };

    // YouTube 감지
    const ytMatch = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    if (ytMatch && ytMatch[2].length === 11) {
      return { type: 'youtube' as const, id: ytMatch[2] };
    }

    // Instagram Reels 감지 (reels, p, reel 모두 대응)
    const igMatch = url.match(/(?:instagr\.am|instagram\.com)\/(?:p|reel|reels)\/([^/?#&]+)/);
    if (igMatch) {
      return { type: 'instagram' as const, id: igMatch[1] };
    }

    return { type: null, id: null };
  };

  const media = getMediaInfo(url);
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  // 플랫폼별 임베드 URL 생성
  const getEmbedUrl = () => {
    if (media.type === 'youtube') {
      const params = new URLSearchParams({
        rel: '0',
        modestbranding: '1',
        autoplay: '0',
        enablejsapi: '1',
        origin: origin,
      });
      return `https://www.youtube.com/embed/${media.id}?${params.toString()}`;
    }
    if (media.type === 'instagram') {
      // 인스타그램은 /embed/를 붙여주면 깔끔하게 나옵니다.
      return `https://www.instagram.com/reel/${media.id}/embed/`;
    }
    return null;
  };

  const embedUrl = getEmbedUrl();

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 w-full px-6 py-6 flex justify-between items-center bg-black/90 backdrop-blur-md">
        <button 
          onClick={onClose}
          className="group flex items-center space-x-2 text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span className="text-[9px] tracking-[0.2em] font-bold uppercase">Back to Work</span>
        </button>
        <button 
          onClick={onClose}
          className="text-zinc-600 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Project Video Area */}
            <div className={`relative bg-zinc-900 overflow-hidden shadow-2xl border border-zinc-900 ${media.type === 'instagram' ? 'aspect-[9/11] max-w-md mx-auto' : 'aspect-video'}`}>
              {embedUrl ? (
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-75"
                />
              )}
            </div>

            {/* Title & Description */}
            <div className="space-y-8 pr-4">
              <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-white uppercase leading-tight">
                {project.title.split('|')[0]} <span className="text-zinc-500">|</span> {project.title.split('|')[1] || ''}
              </h2>
              <div className="h-px w-20 bg-zinc-800"></div>
              <p className="text-[14px] text-zinc-400 leading-relaxed font-light whitespace-pre-line break-keep max-w-3xl">
                {data.wrapUp}
              </p>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-4 space-y-12 pt-4">
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black mb-12 border-b border-zinc-900 pb-4">Project Information</h3>
              <div className="space-y-10">
                {[
                  { label: 'Client', value: data.client },
                  { label: 'Role', value: data.role },
                  { label: 'Production', value: data.production },
                  { label: 'Category', value: data.category }
                ].map((item, i) => item.value && (
                  <div key={i}>
                    <p className="text-[8px] tracking-[0.2em] uppercase text-zinc-700 mb-2 font-black">{item.label}</p>
                    <p className="text-[11px] font-bold text-zinc-200 uppercase tracking-[0.2em]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {url !== "#" && (
              <div className="pt-8">
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-4 text-[10px] tracking-[0.4em] uppercase text-zinc-400 hover:text-white transition-all font-black border border-zinc-800 px-8 py-5 hover:bg-white hover:text-black w-full justify-center lg:justify-start"
                >
                    {media.type === 'instagram' ? <Instagram size={14} /> : <Youtube size={14} />}
                    <span>Open in {media.type === 'instagram' ? 'Instagram' : 'YouTube'}</span>
                </a>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};
