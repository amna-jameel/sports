import React from 'react';
import { X, Check, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function ProductModal({ product, onClose, onEnquire }) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Apex Sports Hosiery, I'm interested in ${product.name} (Code: ${product.productCode}). Please share further details and wholesale pricing.`
    );
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#181818] border border-[#2a2a2a] rounded-sm overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/60 hover:bg-black text-white flex items-center justify-center rounded-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Product Visual */}
        <div className="md:w-1/2 bg-[#121212] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#262626]">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Technical Details & Inquiry Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-5">
          <div>
            <div className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium text-[#C7F464] tracking-wider uppercase mb-2 rounded-sm">
              {product.productCode} • {product.categoryLabel}
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase leading-snug">
              {product.name}
            </h2>
            <p className="text-xs text-[#a0a0a0] mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Technical Specs List */}
          {product.specs && (
            <div className="space-y-2 pt-2 border-t border-[#262626]">
              <span className="text-[11px] uppercase tracking-wider text-[#a1a1aa] font-medium block">
                Technical Specifications
              </span>
              <ul className="space-y-1.5 text-xs text-[#d4d4d8]">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C7F464] mt-0.5 flex-shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Color Schemes */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[#262626]">
              <span className="text-[11px] uppercase tracking-wider text-[#a1a1aa] font-medium block">
                Confirmed Colorways
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.colors.map((c, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-[#222222] text-white border border-[#333] rounded-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Wholesale Notice */}
          <div className="p-3 bg-white/5 border border-white/10 rounded-sm flex items-center gap-2.5 text-xs text-[#a1a1aa]">
            <ShieldCheck className="w-4 h-4 text-[#C7F464] flex-shrink-0" />
            <span>Wholesale order quantities & custom club sublimation available.</span>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C7F464] hover:bg-[#b5e64e] text-black font-semibold text-xs uppercase tracking-wider py-3 rounded-sm transition-all duration-200"
            >
              <span>Enquire About This Product</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#222] hover:bg-[#2c2c2c] text-white border border-[#333] text-xs uppercase tracking-wider py-2.5 rounded-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#C7F464]" />
              <span>WhatsApp Direct Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
