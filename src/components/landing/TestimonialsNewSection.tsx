
import React from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Star } from 'lucide-react';

export const TestimonialsNewSection: React.FC = () => {
  const showContent = useAnimateIn(false, 300);

  const testimonials = [
    {
      rating: 5,
      text: "The Chrome extension works seamlessly across all platforms. I can save ads from TikTok, Facebook, Google - everything is one place.",
      author: "David Johnson",
      role: "Creative Director, Strategists",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 5,
      text: "Our team's collaboration has never been smoother. We can share insights instantly and build on each other's discoveries. The time saved is incredible.",
      author: "Emily Liu",
      role: "Senior Lead, Blue Shark V2",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b25aa552?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 5,
      text: "The performance analytics feature helped us identify trending formats before our competitors. We're always one step ahead in our campaigns.",
      author: "Marcus Rodriguez", 
      role: "Performance Lead, Marketers",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedTransition show={showContent} animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by <span className="text-purple-600">thousands</span> of marketers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the community of successful advertisers who use CopyThief daily to{' '}
              <span className="text-purple-600 font-semibold">find winning ads</span> and{' '}
              <span className="text-blue-600 font-semibold">scale their campaigns</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </AnimatedTransition>
      </div>
    </section>
  );
};
