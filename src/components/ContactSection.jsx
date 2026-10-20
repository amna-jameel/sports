import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function ContactSection({ preselectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    contactInfo: '', // email or phone number
    message: preselectedProduct ? `Inquiry regarding: ${preselectedProduct.name} (${preselectedProduct.productCode})` : ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate WhatsApp message with all entered inquiry details
  const getWhatsAppMessage = () => {
    const parts = [
      `Hello Apex Sports Hosiery, I would like to submit an inquiry:`
    ];
    if (formData.name) parts.push(`• Name: ${formData.name}`);
    if (formData.brandName) parts.push(`• Brand/Business: ${formData.brandName}`);
    if (formData.contactInfo) parts.push(`• Contact: ${formData.contactInfo}`);
    if (formData.message) parts.push(`• Message: ${formData.message}`);

    if (!formData.name && !formData.brandName && !formData.message) {
      parts.push(`I am interested in your sportswear manufacturing and wholesale services. Please share details and pricing.`);
    }

    return encodeURIComponent(parts.join('\n'));
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const cleanNumber = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const text = getWhatsAppMessage();
    const url = `https://wa.me/${cleanNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#141414] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-14">
        {/* Header */}
        <div className="border-b border-[#242424] pb-8 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-wider text-[#C7F464] uppercase block mb-2">
            Wholesale & Custom Orders
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            LET’S CREATE SOMETHING FOR YOUR BRAND.
          </h2>
          <p className="text-sm sm:text-base text-[#a3a3a3] max-w-2xl mt-4 leading-relaxed font-normal">
            Whether you are an established sportswear label, a growing athletic academy, or a tournament team needing custom apparel, our production team is ready to assist with quotations, samples, and manufacturing timelines.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Direct WhatsApp Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white uppercase">
                Production & Sales Desk
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                Connect directly with our team for bulk orders, private-label manufacturing, custom dye sublimation kits, and export inquiries.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-[#242424]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#181818] border border-[#2a2a2a] rounded-sm flex items-center justify-center flex-shrink-0 text-[#C7F464]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#777] font-medium">Location</span>
                  <span className="text-sm text-white font-medium">{BRAND_CONFIG.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#181818] border border-[#2a2a2a] rounded-sm flex items-center justify-center flex-shrink-0 text-[#C7F464]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#777] font-medium">Email Address</span>
                  <a href={`mailto:${BRAND_CONFIG.email}`} className="text-sm text-white font-medium hover:text-[#C7F464] transition-colors">
                    {BRAND_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#181818] border border-[#2a2a2a] rounded-sm flex items-center justify-center flex-shrink-0 text-[#C7F464]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#777] font-medium">Official WhatsApp</span>
                  <a
                    href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white font-medium hover:text-[#C7F464] transition-colors"
                  >
                    {BRAND_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 bg-[#181818] border border-[#2a2a2a] rounded-sm space-y-3">
              <span className="text-[11px] font-semibold tracking-wider text-[#C7F464] uppercase block">
                Instant Response
              </span>
              <p className="text-xs text-[#a0a0a0] leading-relaxed">
                Need immediate information or fabric swatches? Chat directly with our production manager on WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider py-3.5 rounded-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 bg-[#181818] border border-[#262626] rounded-sm p-8 sm:p-10">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-wider text-[#C7F464] uppercase block mb-1">
                Direct Inquiry Form
              </span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                SUBMIT YOUR REQUIREMENTS
              </h3>
              <p className="text-xs sm:text-sm text-[#9c9c9c] mt-1 font-normal leading-relaxed">
                Fill in your details below. You can send this inquiry directly via WhatsApp or your preferred email channel.
              </p>
            </div>

            <form onSubmit={handleWhatsAppClick} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#a1a1aa] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#C7F464] px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#a1a1aa] mb-1.5">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="Athletic Label / Sports Club"
                    className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#C7F464] px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-[#a1a1aa] mb-1.5">
                  Email or Phone Number *
                </label>
                <input
                  type="text"
                  name="contactInfo"
                  required
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="contact@brand.com or +1 555 0192"
                  className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#C7F464] px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-[#a1a1aa] mb-1.5">
                  Inquiry Message & Specifications
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the garments, quantities, custom branding requirements, or delivery timeline..."
                  className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#C7F464] px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors resize-none rounded-sm"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all duration-200 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                <a
                  href={`mailto:${BRAND_CONFIG.email}?subject=${encodeURIComponent('Wholesale Inquiry - ' + (formData.brandName || formData.name || 'Apex Sports'))}&body=${getWhatsAppMessage()}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#222] hover:bg-[#2c2c2c] text-white border border-[#333] font-medium text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
