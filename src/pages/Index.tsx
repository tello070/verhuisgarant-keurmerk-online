
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FeaturedCompaniesSection from '@/components/home/FeaturedCompaniesSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FeaturedCompaniesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
