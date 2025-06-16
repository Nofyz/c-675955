
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, ArrowRight } from 'lucide-react';

export const CopyThiefHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">SwipeBuilder</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <div className="w-5 h-5 border border-gray-400 rounded"></div>
          </button>
          <Button variant="ghost" className="text-white hover:bg-gray-800">
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <Zap className="w-20 h-20 text-white mx-auto mb-8" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
          Welcome to SwipeBuilder
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
          The ultimate swipe file for ads and creative inspiration. Save, organize, and 
          generate copy from the best ads across platforms.
        </p>

        <Button 
          size="lg" 
          className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg"
        >
          <span className="mr-2">+</span>
          Get Started
        </Button>
      </div>
    </section>
  );
};
