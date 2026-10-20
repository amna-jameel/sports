import React from 'react';
import { Layers, Activity, Award, ShieldCheck } from 'lucide-react';

export default function BrandStory() {
  const highlights = [
    {
      icon: Layers,
      title: "Technical Micro-Polyester",
      desc: "Breathable knit providing active moisture management and athletic airflow."
    },
    {
      icon: Activity,
      title: "Dye Sublimation",
      desc: "Deep ink infusion ensuring vivid colors that resist fading and repeat washing."
    },
    {
      icon: Award,
      title: "Flatlock Stitching",
      desc: "Reinforced seam execution preventing chafing and ensuring garment longevity."
    },
    {
      icon: ShieldCheck,
      title: "Wholesale & Custom Orders",
      desc: "Reliable production for teamwear, athletic clubs, and private-label requests."
    }
  ];

  return (
    <section id="details" className="py-20 sm:py-24 bg-[#141414] border-t border-[#1e1e1e] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image & Concise Editorial Statement */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
              DETAILS MAKE THE DIFFERENCE.
            </h2>
            <p className="text-sm sm:text-base text-[#a8a8a8] leading-relaxed">
              Every garment is manufactured to endure intensive athletic movement, with careful attention to fabric breathability, seam durability, and exact colour prints.
            </p>

            {/* Product & Fabric Craftsmanship Image */}
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-[#2a2a2a] bg-[#1a1a1a]">
              <img
                src="/assets/fabric-quality.jpg"
                alt="Apex Technical Fabric Craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-[#101010]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-medium text-[#C7F464] uppercase border border-white/10 rounded-sm">
                Precision Stitching & Micro-Mesh
              </div>
            </div>
          </div>

          {/* Right Column: Simplified, Concise 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#191919] p-6 border border-[#262626] rounded-sm hover:border-[#383838] transition-colors flex flex-col justify-between space-y-3"
                >
                  <div className="w-9 h-9 bg-[#101010] border border-[#2a2a2a] text-[#C7F464] flex items-center justify-center rounded-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-white uppercase mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#999999] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
