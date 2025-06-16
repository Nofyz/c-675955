
import React, { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { useCases } from './UserCasesData';
import { UseCaseProps } from './UseCasesTypes';
import { Users, Palette, PenTool, Search, Code, Star } from 'lucide-react';

const iconMap = {
  Users: Users,
  Palette: Palette,
  PenTool: PenTool,
  Search: Search,
  Code: Code,
  Star: Star
};

const UseCaseCard: React.FC<UseCaseProps> = ({ useCase, isActive, onClick }) => {
  const IconComponent = iconMap[useCase.iconName as keyof typeof iconMap] || Star;
  
  return (
    <div 
      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-primary/10 border-primary' : 'bg-card hover:bg-card/80'
      } border`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-3">
        <IconComponent size={24} className="text-primary" />
        <h3 className="font-semibold">{useCase.title}</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
      <div className="space-y-2">
        {useCase.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export const UseCasesSection: React.FC = () => {
  const showContent = useAnimateIn(false, 300);
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedTransition show={showContent} animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Every Creator</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're building ads, writing copy, or managing campaigns - SwipeBuilder adapts to your workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                useCase={{...useCase, icon: null}}
                isActive={activeCase === index}
                onClick={() => setActiveCase(index)}
              />
            ))}
          </div>
        </AnimatedTransition>
      </div>
    </section>
  );
};

export default UseCasesSection;
