
import React from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Users, Palette, PenTool, Search, Code, Star } from 'lucide-react';

export const EverythingYouNeedSection: React.FC = () => {
  const showContent = useAnimateIn(false, 300);

  const features = [
    {
      icon: Users,
      title: 'Ad Library',
      description: 'Massive collection of high-performing ads from top brands across all platforms.'
    },
    {
      icon: Palette,
      title: 'Visual Inspiration',
      description: 'Save and organize creative visuals, designs, and layouts for instant inspiration.'
    },
    {
      icon: PenTool,
      title: 'AI Copywriter',
      description: 'Generate compelling copy using AI trained on the best-performing advertisements.'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find exactly what you need with advanced filters and AI-powered search capabilities.'
    },
    {
      icon: Code,
      title: 'Team Collaboration',
      description: 'Share insights, collaborate on campaigns, and build together as a team.'
    },
    {
      icon: Star,
      title: 'Performance Analytics',
      description: 'Track which ads perform best and identify winning patterns and trends.'
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedTransition show={showContent} animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything you need to build <span className="text-blue-400">winning ads</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From inspiration to execution - all the tools you need to create high-converting 
              advertisements in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors group">
                  <div className="mb-6">
                    <IconComponent size={48} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedTransition>
      </div>
    </section>
  );
};
