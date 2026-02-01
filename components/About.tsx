
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Column: Name & Title */}
          <div className="w-full md:w-1/3 sticky top-32">
            <h2 className="text-xs tracking-[0.5em] uppercase text-zinc-600 mb-6 font-bold">Director</h2>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-white tracking-tight">서보윤</h3>
              <p className="text-zinc-500 text-sm font-light tracking-widest uppercase">Seo Bo-yun</p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-zinc-900">
              <p className="text-[10px] tracking-[0.2em] text-zinc-600 leading-loose uppercase font-medium">
                Lighting Director<br/>
                Founder of LightBoss
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="w-full md:w-2/3 space-y-12">
            <div className="relative">
              <p className="text-xl md:text-2xl leading-snug text-zinc-100 font-light break-keep">
                안녕하세요, <span className="text-white font-bold">LightBoss 조명팀</span>의 조명감독 서보윤입니다.
              </p>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed text-zinc-400 font-light break-keep">
              현장 중심의 조명감독으로 활동 중이며, 프로젝트 규모에 따라 전문 조명팀을 구성해 조명 파트를 총괄 진행하고 있습니다. 합리적인 예산 안에서, 기대 이상의 퀄리티로 완성도 높은 라이팅 환경을 제공합니다.
            </p>

            <div className="space-y-6 pt-6 border-t border-zinc-900/50">
              <h4 className="text-white font-bold text-lg tracking-tight">한 끗 차이의 완성도</h4>
              <p className="text-zinc-400 font-light leading-loose text-[15px] md:text-base break-keep">
                조명은 결국 <span className="text-white font-medium">‘한 끗 차이’</span>에서 완성도가 갈립니다. 그 미묘한 차이를 놓치지 않기 위해, 매 컷마다 디테일을 고민하며 어떻게 하면 더 좋은 화면이 나올지 함께 설계합니다. 단순히 조명을 세팅하는 역할이 아니라, 촬영팀·연출팀과 함께 방향을 맞추고 결과물을 만들어가는 <span className="text-white font-medium">현장 파트너</span>가 되어드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
