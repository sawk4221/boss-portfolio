
import React from 'react';
import { Tv, Film, Play, Camera, Star, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const areas = [
    { icon: <Tv size={20} />, title: "TVCF / 대형 광고" },
    { icon: <Film size={20} />, title: "브랜드 필름" },
    { icon: <Play size={20} />, title: "숏폼 / 바이럴" },
    { icon: <Star size={20} />, title: "패션 / 뷰티" },
    { icon: <Camera size={20} />, title: "스케치 / 행사" },
  ];

  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left: Capability */}
          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-12">Service Capability</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800/50 border border-zinc-800/50">
              {areas.map((area, idx) => (
                <div key={idx} className="bg-black p-8 flex items-center space-x-4">
                  <span className="text-zinc-500">{area.icon}</span>
                  <span className="text-sm tracking-widest text-zinc-300">{area.title}</span>
                </div>
              ))}
              <div className="bg-black p-8 flex items-center space-x-4 sm:col-span-1">
                 <span className="text-xs text-zinc-600 italic">And more...</span>
              </div>
            </div>

            <div className="mt-12 space-y-6">
               <h3 className="text-white font-semibold text-lg">진행 방식</h3>
               <ul className="space-y-4 text-zinc-400 font-light text-sm">
                 <li className="flex items-start space-x-2">
                   <span className="text-white mt-1">•</span>
                   <span>예산에 맞춘 현실적인 조명 설계</span>
                 </li>
                 <li className="flex items-start space-x-2">
                   <span className="text-white mt-1">•</span>
                   <span>소규모 촬영: 내부 장비 + 최소 인력으로 효율 극대화</span>
                 </li>
                 <li className="flex items-start space-x-2">
                   <span className="text-white mt-1">•</span>
                   <span>대규모 촬영: 올인원 조명 구성 (리깅, 발전기, 테크니컬 서포트 등)</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Right: Philosophy */}
          <div className="bg-zinc-950 p-12 border border-zinc-800/50 flex flex-col justify-between">
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">Work Philosophy</h2>
              <ul className="space-y-8">
                {[
                  "투명한 커뮤니케이션과 명확한 견적",
                  "작은 디테일까지 놓치지 않는 집중력",
                  "‘한 끗 차이’로 화면의 완성도를 끌어올리는 라이팅",
                  "단순 외주가 아닌, 함께 고민하는 현장 파트너십"
                ].map((text, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <CheckCircle2 className="text-white flex-shrink-0" size={18} />
                    <span className="text-zinc-300 font-light tracking-wide">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16 pt-12 border-t border-zinc-800">
              <h4 className="text-xs tracking-[0.2em] text-white uppercase mb-4">Recommended For</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                장기적으로 함께할 조명 파트너를 찾는 브랜드, 퀄리티를 확실히 가져가고 싶은 제작팀, 그리고 예산이 제한적임에도 완성도를 포기하고 싶지 않은 모든 프로젝트에 추천합니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
