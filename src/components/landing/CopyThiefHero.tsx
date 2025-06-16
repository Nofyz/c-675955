
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { WaitlistModal } from '../waitlist/WaitlistModal';
import { Target, Zap, Users } from 'lucide-react';

export const CopyThiefHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-indigo-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-cyan-400 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <AnimatedTransition show={true} animation="slide-up" duration={600}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Save the best ads from{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              anywhere
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            CopyThief helps you collect, organize, and get inspired by the best performing
            ads across <span className="text-blue-400 font-semibold">Facebook</span>, <span className="text-pink-400 font-semibold">TikTok</span>, <span className="text-green-400 font-semibold">Google</span>, and more. <span className="text-cyan-400 font-semibold">Plus get AI-powered copy generation.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial →
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              ▶ Watch Demo
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">One-Click Swipe</h3>
              <p className="text-gray-300 text-sm">
                Save ads instantly with our Chrome extension from Facebook, TikTok, Google, and more.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Copywriter</h3>
              <p className="text-gray-300 text-sm">
                Generate compelling ad copy inspired by your saved ads using advanced AI.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
              <p className="text-gray-300 text-sm">
                Share boards, comment on ads, and collaborate with your team seamlessly.
              </p>
            </div>
          </div>
        </AnimatedTransition>
      </div>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
