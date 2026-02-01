
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-32 pb-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="space-y-6">
            <h2 className="text-xs tracking-[0.5em] uppercase text-gray-500">Contact</h2>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white tracking-tighter">LIGHTBOSS</h3>
              <p className="text-gray-400 font-light max-w-xs">
                언제든 편하게 문의 주세요. <br/>
                여러분의 프로젝트에 최적의 빛을 설계합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <p className="text-xs tracking-widest text-zinc-600 uppercase">Director</p>
              <div className="space-y-2">
                <p className="text-sm flex items-center gap-3 text-zinc-300">
                  <span className="font-semibold text-white">서보윤</span> Seo Bo-yun
                </p>
                <p className="text-sm flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                  <Mail size={14} className="text-zinc-600" /> lightboss.contact@gmail.com
                </p>
                <p className="text-sm flex items-center gap-3 text-zinc-400">
                  <Phone size={14} className="text-zinc-600" /> +82 10-0000-0000
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs tracking-widest text-zinc-600 uppercase">Office</p>
              <div className="space-y-2">
                <p className="text-sm flex items-start gap-3 text-zinc-400">
                  <MapPin size={14} className="text-zinc-600 mt-1" />
                  <span>
                    F2, 60, Sapyeong-daero, Seocho-gu,<br/>
                    Seoul, Republic of Korea
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
            © 2024 LIGHTBOSS. All Rights Reserved.
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
