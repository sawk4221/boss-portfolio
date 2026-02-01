
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-32 pb-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-32">
          
          <div className="space-y-8">
            <h2 className="text-xs tracking-[0.5em] uppercase text-zinc-600 font-bold">C O N T A C T</h2>
            <div className="space-y-6">
              {/* Logo Image for Footer */}
              <div className="inline-flex flex-col items-start">
                <img 
                  src="logo.png" 
                  alt="LIGHTBOSS" 
                  className="h-10 md:h-14 w-auto object-contain" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
                  }}
                />
                <h3 className="fallback-logo hidden text-4xl font-black tracking-[-0.05em] uppercase text-white">
                  LIGHTBOSS
                </h3>
              </div>
              <p className="text-zinc-400 font-light max-w-xs text-[13px] leading-relaxed break-keep">
                언제든 편하게 문의 주세요. <br/>
                여러분의 프로젝트에 최적의 빛을 설계합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 lg:gap-32">
            <div className="space-y-4">
              <p className="text-[11px] tracking-[0.2em] text-zinc-600 uppercase font-bold">DIRECTOR</p>
              <div className="space-y-3">
                <p className="text-sm flex items-center gap-2 text-zinc-300">
                  <span className="font-bold text-white text-base">서보윤</span> 
                  <span className="text-zinc-500 font-light ml-1">Seo Bo-yun</span>
                </p>
                <div className="space-y-1.5">
                  <a href="mailto:sawk4221@naver.com" className="text-[13px] flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <Mail size={14} className="text-zinc-700" /> sawk4221@naver.com
                  </a>
                  <p className="text-[13px] flex items-center gap-3 text-zinc-400">
                    <Phone size={14} className="text-zinc-700" /> +82 10-9935-4221
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[11px] tracking-[0.2em] text-zinc-600 uppercase font-bold">OFFICE</p>
              <div className="space-y-3">
                <div className="text-[13px] flex items-start gap-3 text-zinc-400">
                  <MapPin size={14} className="text-zinc-700 mt-0.5 flex-shrink-0" />
                  <span className="break-keep leading-relaxed font-light">
                    서울특별시 송파구 <br/>거마로 20길 27 3층 전체
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
            © 2024 LIGHTBOSS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Vimeo</a>
             <a href="#" className="hover:text-white transition-colors">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
