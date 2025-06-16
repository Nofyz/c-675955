
import React from 'react';
import { CopyThiefHero } from '@/components/landing/CopyThiefHero';
import { TrustedBySection } from '@/components/landing/TrustedBySection';
import { EverythingYouNeedSection } from '@/components/landing/EverythingYouNeedSection';
import { TestimonialsNewSection } from '@/components/landing/TestimonialsNewSection';
import { PricingNewSection } from '@/components/landing/PricingNewSection';
import { FooterSection } from '@/components/landing/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <CopyThiefHero />
      <TrustedBySection />
      <EverythingYouNeedSection />
      <TestimonialsNewSection />
      <PricingNewSection />
      <FooterSection />
    </div>
  );
};

export default Index;
