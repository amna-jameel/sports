import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function FeaturedProducts({ onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="products" className="py-20 sm:py-24 bg-[#141414] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Naturally grouped heading and supporting description stacked directly underneath */}
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
            OUR GARMENTS
          </h2>
          <p className="text-sm sm:text-base text-[#9c9c9c] font-normal leading-relaxed mt-3">
            Engineered technical sportswear built for high-performance clubs, academies, and private-label wholesale.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#C7F464] text-black font-semibold'
                : 'bg-[#1a1a1a] text-[#a1a1aa] hover:text-white border border-[#2a2a2a]'
            }`}
          >
            All Garments
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#C7F464] text-black font-semibold'
                  : 'bg-[#1a1a1a] text-[#a1a1aa] hover:text-white border border-[#2a2a2a]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
