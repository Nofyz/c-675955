
import React from 'react';

export const TrustedBySection: React.FC = () => {
  const stats = [
    {
      label: "Ads Saved",
      value: "2.5M+",
      color: "text-blue-400"
    },
    {
      label: "Active Users", 
      value: "24,998+",
      color: "text-purple-400"
    },
    {
      label: "AI Copies Generated",
      value: "499k+",
      color: "text-indigo-400"
    },
    {
      label: "Teams Collaborating",
      value: "1,199+",
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-blue-400">thousands</span> of marketers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the community of successful advertisers who use SwipeBuilder daily to{' '}
            <span className="text-blue-400 font-semibold">find winning ads</span> and{' '}
            <span className="text-purple-400 font-semibold">scale their campaigns</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="text-gray-400 text-sm font-medium mb-2">{stat.label}</div>
              <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
