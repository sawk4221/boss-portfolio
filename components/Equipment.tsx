
import React, { useEffect } from 'react';
import { Crosshair, Layers, Battery, Package } from 'lucide-react';

const GEAR_DATA = [
  {
    category: "LIGHTING SOLUTIONS",
    items: [
      { 
        name: "APUTURE NOVA P600C", 
        spec: "600W RGBWW COLOR SOFT LIGHT PANEL", 
        img: "p600c.jpg", // 제공해주신 화이트 아치형 스튜디오 현장 사진
        desc: "최상급 광량과 정밀한 색표현을 제공하는 하이엔드 소프트 패널 (현장 운용 실사)"
      },
      { 
        name: "APUTURE STORM 400X", 
        spec: "400W BI-COLOR POINT SOURCE LED", 
        img: "storm400x.jpg", // 제공해주신 레드 라벨 클로즈업 사진
        desc: "강력한 출력과 내구성을 갖춘 고성능 포인트 소스 조명"
      },
      { 
        name: "APUTURE STORM 80C (3 SET)", 
        spec: "80W FULL-COLOR COMPACT LED KIT", 
        img: "storm80c.jpg", // 제공해주신 야외 숲속 현장 사진
        desc: "야외 및 특수 로케이션에서 빛을 발하는 컴팩트 RGBWW 시스템"
      },
    ]
  },
  {
    category: "GRIP & SUPPORT",
    items: [
      { 
        name: "AVENGER C-STAND", 
        spec: "CENTURY STAND WITH GRIP HEAD & ARM", 
        img: "cstand.jpg", // 제공해주신 C-Stand 단독 사진
        desc: "정교한 라이팅 설계를 위한 업계 표준 C-Stand 시스템"
      },
      { 
        name: "AVENGER COMBO STAND", 
        spec: "TRIPLE RISER HEAVY DUTY STAND", 
        img: "combostand.jpg", // 제공해주신 실버 스탠드 단독 사진
        desc: "중량 조명 장비를 안전하게 지지하는 고하중 전용 스탠드"
      },
      { 
        name: "APPLE BOXES SET", 
        spec: "FULL / HALF / QUARTER / PANCAKE", 
        img: "applebox.jpg", // 제공해주신 검은색 애플박스 사진
        desc: "현장 높낮이 조절 및 안정적 지지를 위한 전문 애플박스 셋"
      },
    ]
  },
  {
    category: "MODIFIERS & POWER",
    items: [
      { 
        name: "LIGHT MODIFIERS", 
        spec: "DOME / LANTERN / CHIMERA", 
        img: "https://images.unsplash.com/photo-1543840540-36657c90859a?auto=format&fit=crop&q=80&w=800",
        desc: "빛의 확산과 질감을 제어하는 돔, 랜턴, 키메라 풀세트"
      },
      { 
        name: "AURORA 4X4 FLAGS", 
        spec: "DIFFUSION FILTERS & SCRIMS", 
        img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
        desc: "대형 4x4 프레임과 다양한 디퓨전 필터 시스템"
      },
      { 
        name: "V-MOUNT BATTERY SYSTEM", 
        spec: "99WH / 155WH / 212WH LINEUP", 
        img: "https://images.unsplash.com/photo-1580226922929-1601a05cc68e?auto=format&fit=crop&q=80&w=800",
        desc: "야외 촬영을 위한 고용량 전원 솔루션 (99wh ~ 212wh)"
      },
    ]
  }
];

export const Equipment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="equipment" className="min-h-screen bg-black">
      {/* Page Header */}
      <div className="py-20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 mb-4 font-bold">Inventory & Technical Specs</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
             <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white uppercase italic leading-none">EQUIPMENT</h1>
             <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-zinc-800"></div>
                <p className="text-zinc-500 text-[11px] tracking-[0.2em] font-light max-w-sm uppercase leading-relaxed">
                  현장에서 검증된 Aputure STORM 시리즈와 <br/>Avenger 프로페셔널 그립 시스템을 운용합니다.
                </p>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-40">
        
        {/* Gear Sections */}
        {GEAR_DATA.map((section, sIdx) => (
          <div key={sIdx} className="space-y-12">
            <div className="flex items-center justify-between">
              <h2 className="text-[12px] tracking-[0.6em] uppercase text-white font-black">{section.category}</h2>
              <div className="hidden sm:block h-px flex-1 mx-10 bg-zinc-900"></div>
              <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest italic">Inventory Vol.01</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
              {section.items.map((item, iIdx) => (
                <div 
                  key={iIdx} 
                  className="group relative flex flex-col bg-black transition-all duration-500 hover:bg-zinc-950"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-all duration-1000 grayscale brightness-[0.5] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                      onError={(e) => {
                        // 실제 이미지 경로가 없을 경우를 대비해 placeholder 이미지로 대체 (제공된 이미지를 브라우저가 찾을 수 있도록 함)
                        e.currentTarget.src = `https://source.unsplash.com/featured/?cinematography,lighting,${item.name.split(' ')[0]}`;
                      }}
                    />
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Crosshair size={18} className="text-white drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                     <div>
                        <p className="text-zinc-500 text-[9px] tracking-[0.3em] uppercase mb-1 font-bold">{item.spec}</p>
                        <h3 className="text-white text-lg font-black tracking-tight uppercase group-hover:text-zinc-300 transition-colors">{item.name}</h3>
                     </div>
                     <p className="text-zinc-500 text-[12px] leading-relaxed font-light break-keep h-10 overflow-hidden">
                        {item.desc}
                     </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Technical Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 pt-16 border-t border-zinc-900">
          <div className="space-y-16">
            <div className="space-y-6">
               <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-black flex items-center gap-3">
                 <Layers size={16} /> Modified Lighting System
               </h2>
               <p className="text-zinc-400 font-light text-[15px] leading-relaxed break-keep">
                 단순한 조명을 넘어, **Light Dome, Lantern, Chimera** 등 다양한 모디파이어와 **Aurora 4x4 Flags**를 통해 빛의 부드러움과 날카로움을 자유자재로 조율합니다.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                     <Battery size={20} className="text-zinc-600" />
                     <span className="text-xs font-black tracking-widest uppercase italic">Power Stability</span>
                  </div>
                  <p className="text-zinc-500 text-[13px] font-light leading-relaxed break-keep">
                     99wh부터 212wh까지 대용량 V-mount 시스템으로 안정적인 촬영 환경을 유지합니다.
                  </p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                     <Package size={20} className="text-zinc-600" />
                     <span className="text-xs font-black tracking-widest uppercase italic">Grip Standard</span>
                  </div>
                  <p className="text-zinc-500 text-[13px] font-light leading-relaxed break-keep">
                     Avenger 전문 그립 시스템을 운용하여 현장의 안전과 정교함을 보장합니다.
                  </p>
               </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-12 border border-zinc-900 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
             <h2 className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-black mb-12">Technical Stance</h2>
             <div className="space-y-12">
               {[
                 { title: "PRECISION", desc: "고출력 Bi-Color 및 RGBWW 제어를 통한 정밀한 색온도 매칭" },
                 { title: "EFFICIENCY", desc: "무선 제어 시스템과 배터리 솔루션을 활용한 빠른 현장 기동성" },
                 { title: "VERSATILITY", desc: "광고부터 패션 필름까지 모든 톤앤매너를 수용하는 광범위한 리소스" }
               ].map((item, i) => (
                 <div key={i} className="space-y-2">
                   <p className="text-white font-black text-[11px] tracking-[0.3em] uppercase italic">{item.title}</p>
                   <p className="text-zinc-500 font-light text-[14px] break-keep">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
