import React, { useState } from 'react';
import { SaleBanner } from './components/SaleBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CategoryShowcase } from './components/CategoryShowcase';
import { WhyBuySuppsSection } from './components/WhyBuySuppsSection';
import { PersonalTrainingSection } from './components/PersonalTrainingSection';
import { FAQSection } from './components/FAQSection';
import { InstagramSection } from './components/InstagramSection';
import { ComponentModal } from './components/ComponentModal';
import { ContactModal } from './components/ContactModal';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SupplementComponent } from './types/supplement';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [inspectedComponent, setInspectedComponent] = useState<SupplementComponent | null>(null);

  const scrollToComponents = () => {
    const el = document.getElementById('components');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f5] flex flex-col font-sans selection:bg-red-600/40 selection:text-white">
      
      {/* Flash Sale Banner with Live 6-Hour Countdown Timer */}
      <SaleBanner onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Header (Supplements trigger directly to WhatsApp, navigation, Book Free Call) */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        onExploreComponents={scrollToComponents}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Website Experience */}
      <main className="flex-1">
        {/* 3D Animated Hero Section */}
        <Hero
          onExploreComponents={scrollToComponents}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Trust & Authenticity Assurance Bar */}
        <TrustBar />

        {/* Pure Supplement Components Catalog & Showcase */}
        <CategoryShowcase
          onInspectComponent={(comp) => setInspectedComponent(comp)}
        />

        {/* Why BuySupps / Transparent Standards vs Commercial Brands */}
        <WhyBuySuppsSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 1-on-1 Personal Training & Free Consultation Call Flagship Section */}
        <PersonalTrainingSection
          onOpenBookingModal={() => setIsConsultationOpen(true)}
        />

        {/* Frequently Asked Questions Accordion */}
        <FAQSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Official Instagram Community Focus Section */}
        <InstagramSection />
      </main>

      {/* Complete Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Persistent Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* 3D Component Inspection Modal */}
      <ComponentModal
        component={inspectedComponent}
        onClose={() => setInspectedComponent(null)}
      />

      {/* Book Your Free Consultation Call & Personal Training Modal */}
      <ConsultationBookingModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* General Contact & Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
