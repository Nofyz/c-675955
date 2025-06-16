
import React from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const PricingNewSection: React.FC = () => {
  const showContent = useAnimateIn(false, 300);

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individual marketers and small teams",
      features: [
        "500 swipes per month",
        "AI copywriter (50 generations)",
        "Unlimited boards", 
        "Chrome extension"
      ],
      buttonText: "Get started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro", 
      price: "$79",
      period: "/month",
      description: "Best for growing teams and agencies",
      features: [
        "Unlimited swipes",
        "AI copywriter (unlimited)",
        "Team collaboration",
        "Advanced analytics",
        "Priority support"
      ],
      buttonText: "Get started",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large teams with custom requirements",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Custom integrations", 
        "Dedicated support"
      ],
      buttonText: "Contact sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedTransition show={showContent} animation="slide-up">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold text-lg mb-2">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose the perfect plan for your team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`rounded-3xl p-8 border-2 transition-all duration-300 hover:border-blue-500 ${
                plan.popular 
                  ? 'border-blue-500 bg-gray-800 shadow-xl relative' 
                  : 'border-gray-700 bg-gray-800 hover:bg-gray-750'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  size="lg"
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none'
                      : 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </AnimatedTransition>
      </div>
    </section>
  );
};
