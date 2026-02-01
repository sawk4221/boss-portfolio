
import React from 'react';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Director</h2>
            <h3 className="text-3xl font-bold text-white mb-2">서보윤</h3>
            <p className="text-gray-400 text-sm font-light">Seo Bo-yun</p>
            <div className="mt-8 pt-8 border-t border-zinc-800">
                <p className="text-xs tracking-[0.1em] text-zinc-500 leading-relaxed uppercase">
                    Lighting Director<br/>
                    Founder of LightBoss
                </p>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-8">
            <div className="relative">
              <Quote className="absolute -top-4 -left-8 text-zinc-800" size={64} />
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-200 font-light italic">
                안녕하세요, <span className="text-white font-medium">LightBoss 조명팀</span>의 조명감독 서보윤입니다.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed text-zinc-400 font-light">
              현장 중심의 조명감독으로 활동 중이며, 프로젝트 규모에 따라 전문 조명팀을 구성해 조명 파트를 총괄 진행하고 있습니다. 합리적인 예산 안에서, 기대 이상의 퀄리티로 완성도 높은 라이팅 환경을 제공합니다.
            </p>

            <div className="space-y-4 pt-4">
              <h4 className="text-white font-bold text-lg">“한 끗 차이의 완성도”</h4>
              <p className="text-zinc-400 font-light leading-loose">
                조명은 결국 <span className="text-white">‘한 끗 차이’</span>에서 완성도가 갈립니다. 그 미묘한 차이를 놓치지 않기 위해, 매 컷마다 디테일을 고민하며 어떻게 하면 더 좋은 화면이 나올지 함께 설계합니다. 단순히 조명을 세팅하는 역할이 아니라, 촬영팀·연출팀과 함께 방향을 맞추고 결과물을 만들어가는 <span className="text-white">현장 파트너</span>가 되어드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
