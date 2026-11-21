import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RealityCheck } from './components/RealityCheck';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { ContentWall } from './components/ContentWall';
import { Faq } from './components/Faq';
import { GrowthAuditForm } from './components/GrowthAuditForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToServices = useCallback(() => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToPlans = useCallback(() => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectPlan = useCallback((planName: string) => {
    setSelectedPlan(planName);
    scrollToContact();
  }, [scrollToContact]);

  const handleClearPlan = useCallback(() => {
    setSelectedPlan('');
  }, []);

  return (
    <div className="relative min-h-screen bg-surface text-on-surface antialiased selection:bg-primary selection:text-on-primary noise-overlay overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar onAuditClick={scrollToContact} />

      {/* Main Content Area */}
      <main id="top">
        {/* Hero Section */}
        <Hero
          onAuditClick={scrollToContact}
          onViewPlansClick={scrollToPlans}
        />

        {/* Problem & Reality Check Section */}
        <RealityCheck onSeeHowClick={scrollToServices} />

        {/* Services Section */}
        <Services />

        {/* Process Section */}
        <Process />

        {/* Monthly Pricing Plans */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Content Wall & Reels Showcase */}
        <ContentWall />

        {/* FAQ Accordion */}
        <Faq />

        {/* Contact / Free Growth Audit Form Section */}
        <GrowthAuditForm
          selectedPlan={selectedPlan}
          onClearPlan={handleClearPlan}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
