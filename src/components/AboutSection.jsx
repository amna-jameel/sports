import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#101010] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Short, Natural Brand Introduction */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
              ABOUT APEX SPORTS HOSIERY
            </h2>
            <p className="text-sm sm:text-base text-[#b0b0b0] leading-relaxed">
              Based in Sialkot, Pakistan, Apex Sports Hosiery is a dedicated sportswear manufacturer specializing in high-performance athletic apparel, sublimated teamwear kits, and custom private-label garments.
            </p>
            <p className="text-sm text-[#888888] leading-relaxed">
              We partner with sports clubs, academies, tournament organizers, and sportswear brands to produce reliable garments crafted with breathable technical textiles and precision stitching.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div>
                <span className="block text-2xl font-bold text-[#C7F464]">100%</span>
                <span className="text-xs uppercase tracking-wider text-[#8E8E93] font-medium">Sublimation Quality</span>
              </div>
              <div className="h-8 w-px bg-[#262626]" />
              <div>
                <span className="block text-2xl font-bold text-[#C7F464]">CUSTOM</span>
                <span className="text-xs uppercase tracking-wider text-[#8E8E93] font-medium">Teamwear & Private Label</span>
              </div>
            </div>
          </div>

          {/* Right Column: Genuine Apex Client Garment Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-[#262626] bg-[#181818] p-4 flex items-center justify-center">
              <img
                src="/assets/products/source_cream_black_polo.png"
                alt="Apex Sports Hosiery Authentic Polos"
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#C7F464]">
                  Apex Sublimation Garments
                </span>
                <span className="text-[#999] text-[11px]">Sialkot, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
