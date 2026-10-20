import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(85vh+5px)] lg:min-h-[calc(92vh+5px)] w-full flex items-end justify-start overflow-hidden bg-[#101010]"
    >
      {/* Background Visual: Full-Width Cinematic Video occupying 85-92vh */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center scale-100"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-poster.png"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Art-directed cinematic overlay: subtle and restrained to let the video shine */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/40 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/85 via-[#101010]/30 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content anchored cleanly */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-16 sm:pb-24 pt-32 w-full">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] uppercase">
            {BRAND_CONFIG.tagline}
          </h1>

          <p className="text-base sm:text-lg text-[#d1d1d1] max-w-lg font-normal leading-relaxed">
            {BRAND_CONFIG.subTagline}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => scrollTo('collection')}
              className="inline-flex items-center gap-2.5 bg-[#C7F464] hover:bg-[#b5e64e] text-black font-semibold text-xs tracking-wider uppercase px-7 py-3.5 rounded-sm transition-all duration-200 active:scale-95 group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-sm hover:bg-white/10 text-white border border-white/25 hover:border-white font-medium text-xs tracking-wider uppercase px-7 py-3.5 rounded-sm transition-all duration-200 active:scale-95"
            >
              <span>Request a Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Understated Scroll Indicator */}
      <div 
        className="hidden sm:flex absolute bottom-6 right-8 z-10 items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer" 
        onClick={() => scrollTo('collection')}
      >
        <span className="text-xs uppercase tracking-wider font-medium">Scroll down</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
