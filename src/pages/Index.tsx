
import React from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeatureSection } from '@/components/landing/FeatureSection';
import { DesignSection } from '@/components/landing/DesignSection';
import { ManageSection } from '@/components/landing/ManageSection';
import { DeploySection } from '@/components/landing/DeploySection';
import { SecuritySection } from '@/components/landing/SecuritySection';
import { PricingSection } from '@/components/landing/PricingSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { UseCasesSection } from '@/components/landing/UseCasesSection';
import { StatisticsSection } from '@/components/landing/StatisticsSection';
import { IntegrationShowcase } from '@/components/landing/IntegrationShowcase';
import { BlogSection } from '@/components/landing/BlogSection';
import { CommunitySection } from '@/components/landing/CommunitySection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CallToAction } from '@/components/landing/CallToAction';
import { LoadingScreen } from '@/components/landing/LoadingScreen';

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen">
        <HeroSection showTitle={true} />
        <FeatureSection showFeatures={true} />
        <UseCasesSection />
        <DesignSection show={true} />
        <ManageSection show={true} />
        <StatisticsSection show={true} />
        <IntegrationShowcase show={true} />
        <DeploySection show={true} />
        <SecuritySection show={true} />
        <TestimonialsSection showTestimonials={true} />
        <PricingSection showPricing={true} />
        <BlogSection show={true} />
        <CommunitySection show={true} />
        <FAQSection />
        <CallToAction show={true} />
      </div>
    </>
  );
};

export default Index;
