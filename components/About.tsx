
import React, { useRef, useEffect } from 'react';
import { Camera, Film, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Cinematic Hero Section with Background Video */}
      <section className="relative h-screen w-full overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.2] scale-100 transition-opacity duration-1000"
        >
          <source src="about-bg.mp4" type="video/mp4" />
          <div className="w-full h-full bg-zinc-950"></div>
        </video>

        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-1 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-[9px] tracking-[0.5em] text-white/80 uppercase font-light">Cinematic Lighting Director</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6">
              서 보 윤
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light tracking-[0.4em] uppercase mb-12">
              Seo Bo-yun
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/40">
                <div className="flex flex-col items-center space-y-2">
                    <Camera size={20} strokeWidth={1} />
                    <span className="text-[8px] tracking-widest uppercase font-bold">Cinematography</span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex flex-col items-center space-y-2">
                    <Lightbulb size={20} strokeWidth={1} />
                    <span className="text-[8px] tracking-widest uppercase font-bold">Lighting Design</span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex flex-col items-center space-y-2">
                    <Film size={20} strokeWidth={1} />
                    <span className="text-[8px] tracking-widest uppercase font-bold">Visual Story</span>
                </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 flex flex-col items-center animate-pulse">
            <span className="text-[8px] tracking-[0.5em] text-zinc-600 uppercase mb-4">Discovery</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-20">
               <div className="space-y-6 animate-slide-up">
                 <h4 className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 font-black">Identity</h4>
                 <div className="h-px w-8 bg-zinc-800"></div>
                 <p className="text-zinc-300 text-lg leading-relaxed font-light break-keep">
                   빛의 공학적 설계와<br/>
                   영화적 감수성을 잇는<br/>
                   <span className="text-white font-bold">현장의 비주얼 파트너</span>
                 </p>
               </div>
               
               <div className="pt-12 border-t border-zinc-900 space-y-8 animate-slide-up delay-300">
                 <h4 className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 font-black">Core Areas</h4>
                 <div className="grid grid-cols-1 gap-6">
                    <div className="group border-l border-zinc-900 pl-6 hover:border-white transition-colors py-2">
                        <span className="text-[9px] tracking-widest text-zinc-600 uppercase block mb-1">01</span>
                        <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm">TVCF / Commercial</span>
                    </div>
                    <div className="group border-l border-zinc-900 pl-6 hover:border-white transition-colors py-2">
                        <span className="text-[9px] tracking-widest text-zinc-600 uppercase block mb-1">02</span>
                        <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm">Brand Documentary</span>
                    </div>
                    <div className="group border-l border-zinc-900 pl-6 hover:border-white transition-colors py-2">
                        <span className="text-[9px] tracking-widest text-zinc-600 uppercase block mb-1">03</span>
                        <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm">Music Video Art</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Main Narrative Content */}
            <div className="lg:col-span-8 space-y-24">
              <div className="space-y-10 animate-slide-up">
                <p className="text-zinc-500 text-sm tracking-widest uppercase font-bold">Our Philosophy</p>
                <h3 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] break-keep">
                  카메라가 보는 빛을 <br/>
                  현장에서 가장 먼저 설계합니다.
                </h3>
                <div className="space-y-8">
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light break-keep">
                      촬영감독 출신 조명감독으로서, 렌즈를 통해 들어오는 빛의 데이터를 누구보다 깊게 이해합니다. 
                      우리는 단순히 공간을 밝게 만드는 것을 넘어, 텍스처를 만들고 공기를 설계합니다.
                    </p>
                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light break-keep">
                      조명은 결과물의 완성도를 결정하는 가장 '마지막 단추'이자 '첫 번째 시작'입니다. 
                      현장의 뜨거운 호흡과 치열한 고민을 통해 연출자의 의도를 완벽한 시각 언어로 구현해내는 것, 
                      그것이 LightBoss가 추구하는 본질입니다.
                    </p>
                </div>
              </div>

              {/* Quote Card */}
              <div className="relative p-12 md:p-16 border border-zinc-900 bg-zinc-950/40 rounded-sm overflow-hidden animate-slide-up delay-500">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Film size={120} strokeWidth={0.5} />
                 </div>
                 <div className="relative z-10 space-y-8">
                    <p className="text-2xl md:text-3xl text-white font-light italic leading-snug break-keep">
                        "조명은 기술이 아니라, <br className="md:hidden"/>
                        화면에 감정을 불어넣는 언어입니다."
                    </p>
                    <div className="h-px w-20 bg-white/20"></div>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light max-w-2xl break-keep">
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

      {/* Call to Action */}
      <section className="py-20 border-t border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase mb-4">Ready to illuminate your project?</p>
            <button 
                onClick={() => window.location.hash = 'contact'}
                className="text-white hover:text-zinc-400 transition-colors text-sm font-bold tracking-widest uppercase border-b border-white/10 pb-2"
            >
                Let's talk about light
            </button>
        </div>
      </section>
    </div>
  );
};
