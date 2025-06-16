
import React from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Zap, Star, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const EverythingYouNeedSection: React.FC = () => {
  const showContent = useAnimateIn(false, 300);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Lightning Fast Collection",
      description: "Our Chrome extension works seamlessly across all major platforms. One click and the ad is saved with all metadata, creative assets, and landing page screenshots.",
      bgColor: "from-purple-600 to-purple-700",
      platforms: ["10+ platforms"],
      badge: "Instant"
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "AI-Powered Insights", 
      description: "Get automatic transcriptions, copy analysis, and AI-generated variations based on your saved ads. Turn inspiration into action instantly.",
      bgColor: "from-blue-600 to-blue-700",
      platforms: ["GPT-4 & Claude Powered"],
      badge: "Smart"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Team Collaboration",
      description: "Create shared boards, leave comments, and collaborate with your team. Perfect for agencies and in-house marketing teams.",
      bgColor: "from-indigo-600 to-indigo-700", 
      platforms: ["Real-time sync"],
      badge: "Team"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Performance Analytics",
      description: "Track engagement metrics, see what's working in your niche, and discover trending formats before your competitors.",
      bgColor: "from-pink-600 to-pink-700",
      platforms: ["Live insights"],
      badge: "Pro"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-indigo-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <AnimatedTransition show={showContent} animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                steal like a pro
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From discovery to creation, we've got every step of your creative process 
              covered with cutting-edge tools and AI-powered insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white">
                    {feature.badge}
                  </span>
                </div>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {feature.platforms[0]}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Stealing Like a Pro →
            </Button>
          </div>
        </AnimatedTransition>
      </div>
    </section>
  );
};
