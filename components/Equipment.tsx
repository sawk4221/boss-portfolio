
import React, { useEffect } from 'react';

const EQUIPMENT_DATA = [
  {
    category: "Cameras",
    items: [
      "Sony FX6",
      "Sony FX30",
      "Sony A7S3",
      "Sony A7M4"
    ]
  },
  {
    category: "Lenses",
    items: [
      "Sony 24-70 GM II",
      "Sony 70-200 GM II",
      "Dzofilm Catta Zoom 35-70",
      "Dzofilm Catta Zoom 70-135"
    ]
  },
  {
    category: "Camera Accessories",
    items: [
      "DJI Focus Pro All-in-One Combo",
      "DJI RS4 Pro Gimbal",
      "DJI Mic 3",
      "Camera Stand"
    ]
  },
  {
    category: "Lighting",
    items: [
      "Aputure 1200x x2",
      "Aputure P600c x2",
      "Aputure 400x x2",
      "Aputure 80c x3",
      "RGB LED Tube light 8 foot x2",
      "RGB LED Tube light 1 foot x2"
    ]
  },
  {
    category: "Stands",
    items: [
      "Avenger Combo stand x3",
      "Avenger C stand 3.3m x8",
      "Kupo Baby C stand 2m x2"
    ]
  },
  {
    category: "Light Modifiers",
    items: [
      "Fresnel lens x2",
      "Light dome x2",
      "Panel softbox x2",
      "Chimera white cloth x2",
      "4x4 Black Flags x4",
      "4x4 Diffusion filters (Full, 1/2, 1/4, 1/8) x2",
      "4x4 Bounce flags x2"
    ]
  },
  {
    category: "Miscellaneous",
    items: [
      "Haze Machine",
      "Sandbag x10",
      "Various clips/clamps",
      "Black Wrap/Cine Foil"
    ]
  }
];

export const Equipment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="equipment" className="min-h-screen bg-[#0a0a0a] pb-32">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 border-b border-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">Filming Kit List</h1>
            <p className="text-zinc-500 text-sm tracking-widest uppercase">LightBoss | Inventory 2026</p>
          </div>
          <div className="text-zinc-600 text-[10px] tracking-[0.2em] uppercase font-medium">
            Updated: Jan 2026
          </div>
        </div>
      </div>

      {/* Main List Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
          {EQUIPMENT_DATA.map((section, idx) => (
            <div key={idx} className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-300 tracking-tight">
                {section.category}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed hover:text-zinc-300 transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Contact / Info (PDF Style) */}
        <div className="mt-40 pt-16 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-xs tracking-[0.4em] uppercase text-zinc-600 font-bold mb-8">Contact for Inquiry</h3>
                <div className="space-y-2 text-zinc-400 font-light">
                    <p>Email: sawk4221@naver.com</p>
                    <p>Instagram: @lightboss_lighting</p>
                </div>
            </div>
            <div className="md:text-right">
                <h3 className="text-xs tracking-[0.4em] uppercase text-zinc-600 font-bold mb-8">Service Option</h3>
                <div className="space-y-2 text-zinc-400 font-light">
                    <p>Full Lighting Team Support</p>
                    <p>DP System (Small Production)</p>
                    <p>Equipment Rental with Technician</p>
                    <p>Camera & Lens Package</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
