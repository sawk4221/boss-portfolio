
import React, { useEffect } from 'react';
import { ShieldCheck, Crosshair, Zap, Package, Layers, Battery } from 'lucide-react';

const GEAR_DATA = [
  {
    category: "LIGHTING SOLUTIONS",
    items: [
      { 
        name: "Aputure Nova P600c", 
        spec: "600W RGBWW Color Soft Light Panel", 
        img: "https://images.unsplash.com/photo-1590483734724-383b6530280c?auto=format&fit=crop&q=80&w=800",
        desc: "최상급 광량과 정밀한 색표현을 제공하는 하이엔드 소프트 패널"
      },
      { 
        name: "Aputure STORM 400x", 
        spec: "400W Bi-Color Point Source LED", 
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
        desc: "강력한 출력과 컴팩트함을 동시에 갖춘 주력 포인트 소스"
      },
      { 
        name: "Aputure STORM 80c (3 Set)", 
        spec: "80W Full-Color Compact LED Kit", 
        img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=800",
        desc: "기동성이 뛰어난 RGBWW 조명, 3세트 운용으로 유연한 포인트 라이팅 가능"
      },
    ]
  },
  {
    category: "GRIP & SUPPORT",
    items: [
      { 
        name: "Avenger C-Stand", 
        spec: "Century Stand with Grip Head & Arm", 
        img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
        desc: "업계 표준의 견고한 고정력, 다양한 조명 각도 세팅 필수품"
      },
      { 
        name: "Avenger Combo Stand", 
        spec: "Triple Riser Heavy Duty Stand", 
        img: "https://images.unsplash.com/photo-1542204172-108390740924?auto=format&fit=crop&q=80&w=800",
        desc: "대형 패널 및 중량 장비 지지를 위한 안정적인 서포트"
      },
      { 
        name: "Apple Boxes Set", 
        spec: "Full / Half / Quarter / Pancake", 
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
        desc: "블랙 마감 Apple Box, 높낮이 조절 및 다양한 현장 보조 도구"
      },
    ]
  },
  {
    category: "MODIFIERS & POWER",
    items: [
      { 
        name: "Light Modifiers", 
        spec: "Dome / Lantern / Chimera", 
        img: "https://images.unsplash.com/photo-1543840540-36657c90859a?auto=format&fit=crop&q=80&w=800",
        desc: "부드러운 빛 확산을 위한 라이트 돔, 360도 랜턴, 소프트박스 풀셋"
      },
      { 
        name: "Aurora 4x4 Flags", 
        spec: "Diffusion Filters & Scrims", 
        img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
        desc: "빛의 방향과 질감을 제어하는 전문 디퓨전 필터 및 플래그 시스템"
      },
      { 
        name: "V-Mount Battery System", 
        spec: "99wh / 155wh / 212wh Lineup", 
        img: "https://images.unsplash.com/photo-1580226922929-1601a05cc68e?auto=format&fit=crop&q=80&w=800",
        desc: "전력 공급이 제한적인 현장을 위한 고용량 전용 배터리 솔루션"
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
          <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 mb-4 font-bold">Professional Inventory</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
             <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white uppercase italic leading-none">EQUIPMENT</h1>
             <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-zinc-800"></div>
                <p className="text-zinc-500 text-[11px] tracking-[0.2em] font-light max-w-sm uppercase leading-relaxed">
                  Aputure, Avenger, Aurora 등 <br/>검증된 하이엔드 기어만을 운용합니다.
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
              <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest italic">Professional Grade</p>
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
                 단순한 조명을 넘어, **Light Dome, Lantern, Chimera** 등 다양한 모디파이어와 **Aurora 4x4 Flags**를 통해 빛의 부드러움과 날카로움을 자유자재로 조율합니다. 연출 의도에 가장 근접한 빛의 텍스처를 만들어냅니다.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                     <Battery size={20} className="text-zinc-600" />
                     <span className="text-xs font-black tracking-widest uppercase italic">Power Stability</span>
                  </div>
                  <p className="text-zinc-500 text-[13px] font-light leading-relaxed break-keep">
                     99wh부터 212wh까지 대용량 V-mount 시스템으로 전력 공급이 까다로운 로케이션에서도 안정적인 촬영 환경을 유지합니다.
                  </p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                     <Package size={20} className="text-zinc-600" />
                     <span className="text-xs font-black tracking-widest uppercase italic">Grip Standard</span>
                  </div>
                  <p className="text-zinc-500 text-[13px] font-light leading-relaxed break-keep">
                     Avenger의 C-stand 및 Combo stand, 그리고 블랙 Apple Box 풀셋을 운용하여 현장의 안전과 정교한 라이팅 설계를 보장합니다.
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
             
             <div className="mt-20 pt-10 border-t border-zinc-900">
                <p className="text-zinc-600 text-[11px] leading-relaxed italic break-keep font-light">
                  "우리의 장비는 감독의 아이디어를 현실로 옮기는 가장 강력한 언어입니다. 모든 기어는 현장에서의 즉각적인 신뢰를 위해 최고의 컨디션으로 관리됩니다."
                </p>
             </div>
          </div>
        </div>

        {/* Footer Contact */}
        <div className="text-center py-24 border-t border-zinc-900">
          <p className="text-[10px] tracking-[0.5em] text-zinc-700 uppercase mb-8">
            Complete Gear List & Technical Rider Available Upon Request
          </p>
          <button className="text-[11px] font-black tracking-[0.3em] text-white border border-zinc-800 px-12 py-5 hover:bg-white hover:text-black transition-all uppercase italic">
            장비 대여 및 운용 문의
          </button>
        </div>
      </div>
    </div>
  );
};
