
import React, { useEffect } from 'react';
import { Camera, Film, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Cinematic Hero Section - Static Version */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden border-b border-zinc-900 bg-[#0a0a0a]">
        {/* Subtle Background Texture/Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-black to-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-1 border border-white/10 rounded-full mb-8 backdrop-blur-sm bg-white/[0.02]">
                <span className="text-[9px] tracking-[0.5em] text-zinc-400 uppercase font-medium">Cinematic Lighting Director</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6">
              서 보 윤
            </h1>
            <p className="text-zinc-500 text-xl md:text-2xl font-light tracking-[0.4em] uppercase mb-16">
              Seo Bo-yun
            </p>
            
            <div className="flex items-center justify-center space-x-8 md:space-x-16 text-zinc-600">
                <div className="flex flex-col items-center space-y-3 group">
                    <Camera size={22} strokeWidth={1} className="group-hover:text-white transition-colors duration-500" />
                    <span className="text-[8px] tracking-[0.3em] uppercase font-bold">Cinematography</span>
                </div>
                <div className="w-px h-10 bg-zinc-900"></div>
                <div className="flex flex-col items-center space-y-3 group">
                    <Lightbulb size={22} strokeWidth={1} className="group-hover:text-white transition-colors duration-500" />
                    <span className="text-[8px] tracking-[0.3em] uppercase font-bold">Lighting Design</span>
                </div>
                <div className="w-px h-10 bg-zinc-900"></div>
                <div className="flex flex-col items-center space-y-3 group">
                    <Film size={22} strokeWidth={1} className="group-hover:text-white transition-colors duration-500" />
                    <span className="text-[8px] tracking-[0.3em] uppercase font-bold">Visual Story</span>
                </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 flex flex-col items-center opacity-30">
            <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Philosophy & Narrative Section */}
      <section className="py-32 md:py-48 px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
            
            {/* Sidebar Identity Info */}
            <div className="lg:col-span-4 space-y-24">
               <div className="space-y-8 animate-slide-up">
                 <h4 className="text-[10px] tracking-[0.6em] uppercase text-zinc-600 font-black flex items-center gap-4">
                   <span className="w-8 h-px bg-zinc-800"></span> Identity
                 </h4>
                 <p className="text-zinc-200 text-xl md:text-2xl leading-relaxed font-light break-keep">
                   빛의 공학적 설계와<br/>
                   영화적 감수성을 잇는<br/>
                   <span className="text-white font-bold border-b border-white/20 pb-1">현장의 비주얼 파트너</span>
                 </p>
               </div>
               
               <div className="pt-16 border-t border-zinc-900 space-y-10 animate-slide-up delay-300">
                 <h4 className="text-[10px] tracking-[0.6em] uppercase text-zinc-600 font-black flex items-center gap-4">
                   <span className="w-8 h-px bg-zinc-800"></span> Core Areas
                 </h4>
                 <div className="grid grid-cols-1 gap-8">
                    <div className="group space-y-2">
                        <span className="text-[10px] tracking-widest text-zinc-700 uppercase font-bold block">01</span>
                        <span className="text-zinc-400 group-hover:text-white transition-colors font-bold uppercase tracking-widest text-sm">TVCF / Commercial</span>
                    </div>
                    <div className="group space-y-2">
                        <span className="text-[10px] tracking-widest text-zinc-700 uppercase font-bold block">02</span>
                        <span className="text-zinc-400 group-hover:text-white transition-colors font-bold uppercase tracking-widest text-sm">Brand Documentary</span>
                    </div>
                    <div className="group space-y-2">
                        <span className="text-[10px] tracking-widest text-zinc-700 uppercase font-bold block">03</span>
                        <span className="text-zinc-400 group-hover:text-white transition-colors font-bold uppercase tracking-widest text-sm">Music Video Art</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Main Content Body */}
            <div className="lg:col-span-8 space-y-32">
              <div className="space-y-12 animate-slide-up">
                <p className="text-zinc-600 text-[11px] tracking-[0.4em] uppercase font-black">Our Philosophy</p>
                <h3 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] break-keep tracking-tight">
                  카메라가 보는 빛을 <br/>
                  현장에서 가장 먼저 설계합니다.
                </h3>
                <div className="space-y-10 max-w-2xl">
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light break-keep">
                      촬영감독 출신 조명감독으로서, 렌즈를 통해 들어오는 빛의 데이터를 누구보다 깊게 이해합니다. 
                      우리는 단순히 공간을 밝게 만드는 것을 넘어, 화면의 텍스처를 만들고 공기를 설계합니다.
                    </p>
                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light break-keep">
                      조명은 결과물의 완성도를 결정하는 가장 '마지막 단추'이자 '첫 번째 시작'입니다. 
                      현장의 뜨거운 호흡과 치열한 고민을 통해 연출자의 의도를 완벽한 시각 언어로 구현해내는 것, 
                      그것이 LightBoss가 추구하는 본질입니다.
                    </p>
                </div>
              </div>

              {/* Cinematic Quote Card */}
              <div className="relative p-12 md:p-20 border border-zinc-900 bg-zinc-950/20 rounded-sm overflow-hidden animate-slide-up delay-500">
                 <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                    <Film size={180} strokeWidth={0.5} />
                 </div>
                 <div className="relative z-10 space-y-10">
                    <p className="text-3xl md:text-4xl text-white font-light italic leading-snug break-keep">
                        "조명은 기술이 아니라, <br className="md:hidden"/>
                        화면에 감정을 불어넣는 언어입니다."
                    </p>
                    <div className="h-px w-24 bg-white/10"></div>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light max-w-xl break-keep">
                        우리는 연출자가 말하고자 하는 메시지를 가장 선명한 시각 언어로 번역합니다. 
                        LightBoss는 그 여정의 가장 든든한 조력자가 되어, 
                        여러분의 시퀀스가 가장 완벽한 빛 아래서 빛날 수 있도록 지원합니다.
                    </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Footer Area */}
      <section className="py-32 border-t border-zinc-900/50 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
            <p className="text-[10px] tracking-[0.6em] text-zinc-600 uppercase font-black">Illuminate Your Vision</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">함께 빛의 지도를 그려나갈 준비가 되셨나요?</h2>
            <div className="pt-8">
                <button 
                    onClick={() => window.location.hash = 'contact'}
                    className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-black font-black text-xs tracking-[0.4em] uppercase hover:bg-zinc-200 transition-all overflow-hidden"
                >
                    <span className="relative z-10">Let's talk about light</span>
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};
