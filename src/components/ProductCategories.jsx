import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function ProductCategories() {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="collection" className="py-20 sm:py-24 bg-[#101010] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Naturally grouped heading and supporting description stacked directly underneath */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
            EXPLORE THE COLLECTION
          </h2>
          <p className="text-sm sm:text-base text-[#9c9c9c] font-normal leading-relaxed mt-3">
            Engineered performance sportswear, teamwear, and athletic essentials manufactured to international standards.
          </p>
        </div>

        {/* Categories Grid: 5 clean responsive tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={scrollToProducts}
              className="group relative bg-[#181818] border border-[#262626] hover:border-[#383838] rounded-sm transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Category Image - Standard 4:5 Portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#141414] border-b border-[#222222]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Category Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div className="space-y-1">
                  <span className="text-[11px] font-medium tracking-wide text-[#888888] uppercase block">
                    {cat.categoryLabel}
                  </span>
                  <h3 className="text-base font-semibold text-white group-hover:text-[#C7F464] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#C7F464] group-hover:translate-x-0.5 transition-transform">
                  <span>View Garments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
