import React from 'react';

export default function ProductCard({ product, onSelectProduct }) {
  return (
    <div 
      onClick={() => onSelectProduct && onSelectProduct(product)}
      className="group bg-[#181818] border border-[#262626] hover:border-[#383838] rounded-sm transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/5] w-full bg-[#131313] overflow-hidden flex items-center justify-center p-4 border-b border-[#222222]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Minimal Category Tag */}
        <div className="absolute top-3 left-3 bg-[#101010]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-medium text-[#C7F464] tracking-wider uppercase border border-white/5 rounded-sm">
          {product.categoryLabel}
        </div>
      </div>

      {/* Product Name Area - Clean, Focused, No extra action buttons */}
      <div className="p-5">
        <h3 className="text-white font-heading font-semibold text-base group-hover:text-[#C7F464] transition-colors leading-snug line-clamp-2">
          {product.name}
        </h3>
      </div>
    </div>
  );
}
