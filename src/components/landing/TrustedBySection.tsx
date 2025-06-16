
import React from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

export const TrustedBySection: React.FC = () => {
  const showContent = useAnimateIn(false, 300);

  const stats = [
    {
      label: "Ads Saved",
      value: "2.5M+",
      color: "text-purple-400"
    },
    {
      label: "Active Users", 
      value: "24,998+",
      color: "text-blue-400"
    },
    {
      label: "AI Copies Generated",
      value: "499k+",
      color: "text-indigo-400"
    },
    {
      label: "Teams Collaborating",
      value: "1,199+",
      color: "text-pink-400"
    }
  ];

  const badges = [
    { label: "SOC 2 Compliant", icon: "✓" },
    { label: "99.9% Uptime", icon: "⚡" },
    { label: "4.9/5 Rating", icon: "⭐" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedTransition show={showContent} animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-purple-600">thousands</span> of marketers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the community of successful advertisers who use CopyThief daily to{' '}
              <span className="text-purple-600 font-semibold">find winning ads</span> and{' '}
              <span className="text-blue-600 font-semibold">scale their campaigns</span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-gray-500 text-sm font-medium mb-2">{stat.label}</div>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <span className="text-green-500 text-lg">{badge.icon}</span>
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </AnimatedTransition>
      </div>
    </section>
  );
};
