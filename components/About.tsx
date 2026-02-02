
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
                Lighting Director & DoP<br/>
                Founder of LightBoss
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="w-full md:w-2/3 space-y-12">
            <div className="relative">
              <p className="text-xl md:text-2xl leading-snug text-zinc-100 font-light break-keep">
                안녕하세요, <span className="text-white font-bold">촬영감독 출신</span>의 조명감독 서보윤입니다.
              </p>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed text-zinc-400 font-light break-keep">
              현재 <span className="text-white font-medium">LightBoss 조명팀</span>을 이끌며 조명 파트를 전문으로 수행하고 있지만, 촬영감독으로서의 실무 경험과 시각을 바탕으로 <span className="text-white font-medium">중소규모 제작을 위한 'DP 시스템'</span> 운용 및 <span className="text-white font-medium">DoP(Director of Photography)</span> 역할 수행도 가능합니다.
            </p>

            <div className="space-y-6 pt-6 border-t border-zinc-900/50">
              <h4 className="text-white font-bold text-lg tracking-tight">촬영의 메커니즘을 이해하는 라이팅</h4>
              <p className="text-zinc-400 font-light leading-loose text-[15px] md:text-base break-keep">
                빛은 결국 카메라 렌즈를 통해 완성됩니다. 촬영자의 관점에서 빛과 그림자의 조화를 고민하며, 단순히 조명을 설치하는 것을 넘어 영상 전체의 톤앤매너를 함께 설계합니다. 
                <br/><br/>
                대규모 프로덕션의 전문 조명팀 지원은 물론, 효율적인 인원과 장비가 필요한 프로젝트에서도 <span className="text-white font-medium">촬영과 조명을 통합적으로 아우르는 최적의 제작 환경</span>을 제안해 드립니다. 연출팀의 의도를 가장 정확하게 시각화하는 <span className="text-white font-medium">현장 파트너</span>가 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
