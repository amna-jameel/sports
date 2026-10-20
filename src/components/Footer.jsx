import React from 'react';
import { BRAND_CONFIG } from '../data/products';

// Accessible, clean social SVG icons
const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cleanNumber = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <footer className="bg-[#0c0c0c] border-t border-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#222222]">
          {/* Brand Col with Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 px-2 py-1 bg-white rounded-sm flex items-center justify-center">
                <img
                  src="/assets/apex-logo.jpg"
                  alt="Apex Sports Hosiery"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="font-bold text-lg tracking-wider uppercase text-white">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-[#9c9c9c] max-w-sm leading-relaxed">
              Performance-driven sportswear, matchday kits, and custom teamwear engineered with high-density poly fabrics and precision dye sublimation.
            </p>
          </div>

          {/* Quick Navigation Scroll Links with increased readability */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-sm font-semibold tracking-wider text-[#C7F464] uppercase block">
              Quick Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-normal text-[#c4c4c4]">
              <li>
                <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-[#C7F464] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collection" onClick={(e) => scrollTo(e, 'collection')} className="hover:text-[#C7F464] transition-colors">
                  Product Collection
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => scrollTo(e, 'products')} className="hover:text-[#C7F464] transition-colors">
                  Our Garments
                </a>
              </li>
              <li>
                <a href="#details" onClick={(e) => scrollTo(e, 'details')} className="hover:text-[#C7F464] transition-colors">
                  Quality & Craftsmanship
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-[#C7F464] transition-colors">
                  About Brand
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#C7F464] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Official Social Media Channels with clear readable layout */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-sm font-semibold tracking-wider text-[#C7F464] uppercase block">
              Official Channels
            </span>
            <p className="text-sm text-[#9c9c9c] leading-relaxed">
              Connect with Apex Sports Hosiery through our verified business and social platforms.
            </p>
            
            {/* Social Icons Row with enhanced sizes and spacing */}
            <div className="flex items-center gap-3.5 pt-2">
              {/* Facebook */}
              <a
                href={BRAND_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm bg-[#181818] border border-[#2a2a2a] hover:border-[#C7F464] hover:text-[#C7F464] text-[#d4d4d8] flex items-center justify-center transition-colors"
                aria-label="Apex Sports Hosiery on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href={BRAND_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm bg-[#181818] border border-[#2a2a2a] hover:border-[#C7F464] hover:text-[#C7F464] text-[#d4d4d8] flex items-center justify-center transition-colors"
                aria-label="Apex Sports Hosiery on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${cleanNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm bg-[#181818] border border-[#2a2a2a] hover:border-[#25D366] hover:text-[#25D366] text-[#d4d4d8] flex items-center justify-center transition-colors"
                aria-label="Apex Sports Hosiery on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2 text-xs text-[#888888] space-y-1">
              <div>WhatsApp: <span className="text-white font-medium">{BRAND_CONFIG.whatsappDisplay}</span></div>
              <div>Email: <span className="text-white font-medium">{BRAND_CONFIG.email}</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777] gap-4">
          <p>© {new Date().getFullYear()} Apex Sports Hosiery. All rights reserved.</p>
          <p className="text-xs text-[#666]">
            Performance Apparel & Hosiery Manufacturing • Sialkot, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
