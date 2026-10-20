import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'collection', 'products', 'details', 'about', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Collection', href: '#collection', id: 'collection' },
    { label: 'Our Garments', href: '#products', id: 'products' },
    { label: 'Quality', href: '#details', id: 'details' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101010]/95 backdrop-blur-md border-b border-[#222222] py-3'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo Using Provided Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-3 group text-left"
          aria-label="Apex Sports Hosiery Home"
        >
          <div className="h-9 sm:h-10 px-2 py-1 bg-white rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src="/assets/apex-logo.jpg"
              alt="Apex Sports Hosiery"
              className="h-full w-auto object-contain"
            />
          </div>
          <div>
            <span className="block font-bold text-base sm:text-lg tracking-wider text-white leading-none">
              APEX
            </span>
            <span className="block text-[10px] tracking-wider text-[#9E9E9E] uppercase mt-0.5">
              Sports Hosiery
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${
                activeSection === link.id
                  ? 'text-[#C7F464]'
                  : 'text-[#d4d4d8] hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7F464]" />
              )}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group inline-flex items-center gap-2 bg-[#C7F464] hover:bg-[#b5e64e] text-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition-all duration-200 active:scale-95"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101010] border-b border-[#222222] px-6 py-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block w-full text-left text-base font-medium py-2 ${
                activeSection === link.id ? 'text-[#C7F464]' : 'text-[#a1a1aa]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#262626]">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full inline-flex justify-center items-center gap-2 bg-[#C7F464] text-black font-semibold text-sm tracking-wider uppercase py-3 rounded-sm"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
