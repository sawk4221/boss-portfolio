
import React, { useEffect, useState } from 'react';
import { Crosshair, Layers, Battery, Package, Zap, ShieldCheck, Cpu } from 'lucide-react';

const GEAR_DATA = [
  {
    category: "LIGHTING SOLUTIONS",
    items: [
      { 
        id: "nova-p600c",
        name: "APUTURE NOVA P600C", 
        spec: "600W RGBWW COLOR SOFT LIGHT PANEL", 
        img: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?auto=format&fit=crop&q=80&w=800",
        desc: "최상급 광량과 정밀한 색표현을 제공하는 하이엔드 소프트 패널. 대형 프로덕션의 메인 라이트로 운용됩니다."
      },
      { 
        id: "storm-400x",
        name: "APUTURE STORM 400X", 
        spec: "400W BI-COLOR POINT SOURCE LED", 
        img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
        desc: "압도적인 출력과 정밀한 색온도 제어를 지원하는 고성능 포인트 소스 조명입니다."
      },
      { 
        id: "storm-80c",
        name: "APUTURE STORM 80C (3 SET)", 
        spec: "80W FULL-COLOR COMPACT LED KIT", 
        img: "https://images.unsplash.com/photo-1543840540-36657c90859a?auto=format&fit=crop&q=80&w=800",
        desc: "기동성이 뛰어난 컴팩트 풀컬러 시스템으로, 특수 로케이션 및 보조광으로 최적화되어 있습니다."
      },
    ]
  },
  {
    category: "GRIP & SUPPORT",
    items: [
      { 
        id: "c-stand",
        name: "AVENGER C-STAND", 
        spec: "CENTURY STAND WITH GRIP HEAD & ARM", 
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        desc: "조명팀의 표준. 어떤 각도에서도 완벽한 고정력과 안전을 보장하는 에이브이엔저 정품 시스템입니다."
      },
      { 
        id: "combo-stand",
        name: "AVENGER COMBO STAND", 
        spec: "TRIPLE RISER HEAVY DUTY STAND", 
        img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
        desc: "고중량 패널과 모디파이어를 안정적으로 지지하는 헤비듀티 전용 스탠드 라인업입니다."
      },
      { 
        id: "apple-box",
        name: "APPLE BOXES SET", 
        spec: "FULL / HALF / QUARTER / PANCAKE", 
        img: "https://images.unsplash.com/photo-1512418490979-92798ccc13b0?auto=format&fit=crop&q=80&w=800",
        desc: "현장의 정교한 높낮이 조절과 안정적 장비 거치를 위한 필수 그립 악세사리 풀세트입니다."
      },
    ]
  },
  {
    category: "MODIFIERS & POWER",
    items: [
      { 
        id: "modifiers",
        name: "LIGHT MODIFIERS", 
        spec: "DOME / LANTERN / CHIMERA", 
        img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
        desc: "빛의 텍스처를 드라마틱하게 변화시키는 다양한 정품 모디파이어 풀세트를 운용합니다."
      },
      { 
        id: "flags",
        name: "AURORA 4X4 FLAGS", 
        spec: "DIFFUSION FILTERS & SCRIMS", 
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
        desc: "불필요한 빛을 차단하고 디퓨전 필터를 통해 최상의 피부 질감을 만들어냅니다."
      },
      { 
        id: "battery",
        name: "V-MOUNT BATTERY SYSTEM", 
        spec: "99WH / 155WH / 212WH LINEUP", 
        img: "https://images.unsplash.com/photo-1580226922929-1601a05cc68e?auto=format&fit=crop&q=80&w=800",
        desc: "전원 공급이 어려운 야외 로케이션에서도 중단 없는 촬영 환경을 제공하는 고용량 배터리 시스템입니다."
      },
    ]
  }
];

const SmartImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative w-full h-full bg-zinc-900 overflow-hidden ${!loaded && 'animate-pulse'}`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } group-hover:scale-105 group-hover:brightness-110`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <Zap size={24} className="text-zinc-800 mb-2" />
          <span className="text-[10px] text-zinc-700 uppercase font-black tracking-widest">{alt}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
    </div>
  );
};

export const Equipment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="equipment" className="min-h-screen bg-[#050505]">
      {/* Header Section */}
      <div className="relative py-32 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-6 font-bold flex items-center gap-2">
            <span className="w-8 h-[1px] bg-zinc-800"></span> INVENTORY VOL. 2024
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
             <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none select-none">
               GEAR<span className="text-zinc-800">LIST</span>
             </h1>
             <div className="max-w-md border-l-2 border-white pl-8">
                <p className="text-zinc-400 text-[13px] tracking-wide font-light uppercase leading-relaxed mb-4">
                  LightBoss는 업계 표준을 선도하는 <br/>최첨단 조명 및 그립 솔루션을 직접 운용합니다.
                </p>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
                      <ShieldCheck size={14} className="text-white" /> Safety First
                   </div>
                   <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
                      <Cpu size={14} className="text-white" /> Tech Driven
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-56">
        {GEAR_DATA.map((section, sIdx) => (
          <div key={sIdx} className="space-y-16">
            <div className="flex items-baseline gap-6">
              <span className="text-zinc-800 font-black text-4xl italic select-none">0{sIdx + 1}</span>
              <h2 className="text-[16px] tracking-[0.4em] uppercase text-white font-black shrink-0">{section.category}</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-900 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {section.items.map((item) => (
                <div 
                  key={item.id} 
                  className="group flex flex-col transition-all duration-500"
                >
                  <div className="aspect-[3/4] overflow-hidden relative border border-zinc-900 group-hover:border-zinc-500 transition-colors duration-700">
                    <SmartImage src={item.img} alt={item.name} />
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <div className="bg-white p-3 shadow-2xl">
                        <Crosshair size={18} className="text-black" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-8 space-y-4">
                     <div>
                        <p className="text-zinc-600 text-[9px] tracking-[0.3em] uppercase mb-2 font-black">{item.spec}</p>
                        <h3 className="text-white text-xl font-bold tracking-tight uppercase group-hover:text-zinc-400 transition-colors">{item.name}</h3>
                     </div>
                     <p className="text-zinc-500 text-[13px] leading-relaxed font-light break-keep pr-4 border-l border-zinc-900 pl-4 group-hover:border-white transition-colors duration-500">
                        {item.desc}
                     </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Technical Footer Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 pt-32 border-t border-zinc-900">
          <div className="space-y-16">
            <div className="space-y-8">
               <h2 className="text-xs tracking-[0.4em] uppercase text-zinc-500 font-black flex items-center gap-4">
                 <Layers size={18} className="text-white" /> Technical Philosophy
               </h2>
               <p className="text-zinc-400 font-light text-[17px] leading-relaxed break-keep">
                 장비는 연출의 의도를 시각화하는 가장 강력한 언어입니다. <br/>
                 우리는 단순히 조명을 켜는 것이 아니라, **Sidus Link** 시스템을 통한 무선 제어와 정밀한 색온도 설계를 통해 영상의 깊이를 더합니다.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="p-8 border border-zinc-900 hover:bg-zinc-950 transition-colors group">
                  <Battery size={24} className="text-zinc-700 group-hover:text-white mb-6 transition-colors" />
                  <h4 className="text-white text-xs font-black tracking-widest uppercase mb-3">Power Management</h4>
                  <p className="text-zinc-500 text-[12px] leading-relaxed">
                     고출력 조명을 위한 최적의 전원 설계와 백업 시스템으로 현장의 지연을 방지합니다.
                  </p>
               </div>
               <div className="p-8 border border-zinc-900 hover:bg-zinc-950 transition-colors group">
                  <Package size={24} className="text-zinc-700 group-hover:text-white mb-6 transition-colors" />
                  <h4 className="text-white text-xs font-black tracking-widest uppercase mb-3">Grip Precision</h4>
                  <p className="text-zinc-500 text-[12px] leading-relaxed">
                     Avenger 시스템을 기반으로 한 정교한 리깅을 통해 창의적인 앵글을 현실로 만듭니다.
                  </p>
               </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900/50 to-black p-16 border border-zinc-900 relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
             <h2 className="text-xs tracking-[0.5em] uppercase text-zinc-600 font-black mb-16">Operational Standards</h2>
             <div className="space-y-14">
               {[
                 { title: "CALIBRATED COLORS", desc: "모든 패널은 촬영 전 정밀 캘리브레이션을 통해 일관된 스킨톤을 보장합니다." },
                 { title: "WIRELESS ECOSYSTEM", desc: "Sidus Link 및 CRMX 무선 제어로 현장 셋업 시간을 40% 이상 단축합니다." },
                 { title: "RIGGING SAFETY", desc: "모든 그립 장비는 주기적인 안전 점검과 하중 테스트를 거칩니다." }
               ].map((item, i) => (
                 <div key={i} className="group/item">
                   <p className="text-white font-black text-[11px] tracking-[0.4em] uppercase italic mb-3 flex items-center gap-3">
                     <span className="w-2 h-2 bg-white rounded-full"></span> {item.title}
                   </p>
                   <p className="text-zinc-500 font-light text-[14px] leading-relaxed break-keep group-hover/item:text-zinc-300 transition-colors">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
