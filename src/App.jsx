import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [preselectedInquiryProduct, setPreselectedInquiryProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleEnquireFromModal = (product) => {
    setSelectedProduct(null);
    setPreselectedInquiryProduct(product);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = () => {
    setPreselectedInquiryProduct(null);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#101010] text-white flex flex-col font-sans selection:bg-[#C7F464] selection:text-black">
      {/* Global Navigation Bar with Anchor Links */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Single-Page Landing Content */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <Hero />

        {/* Section 2: Explore the Collection */}
        <ProductCategories />

        {/* Section 3: Products That Move With You — Our Garments */}
        <FeaturedProducts onSelectProduct={handleSelectProduct} />

        {/* Section 4: Details Make the Difference */}
        <BrandStory />

        {/* Section 5: About Apex Sports Hosiery */}
        <AboutSection />

        {/* Section 6: Contact Section — "Let's Create Something for Your Brand" */}
        <ContactSection preselectedProduct={preselectedInquiryProduct} />
      </main>

      {/* Product Details Modal Dialog */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEnquire={handleEnquireFromModal}
        />
      )}

      {/* Global Footer with Social Channels & Quick Nav */}
      <Footer />
    </div>
  );
}
