
import React from 'react';
import { Zap } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const footerLinks = {
    PRODUCT: [
      'Swipe File',
      'Library',
      'Boards',
      'AI Copywriter',
      'Chrome Extension',
      'Mobile App',
      'API'
    ],
    RESOURCES: [
      'University',
      'Knowledge Base',
      'Blog',
      'Events & Webinars',
      'Explore',
      'Compare'
    ],
    COMPANY: [
      'Pricing',
      'Changelog',
      'Careers',
      'Public Library'
    ],
    COMMUNITY: [
      'Affiliate Program',
      'Wall of Love',
      'Feature Requests',
      'Public Road Map',
      'Merch Store'
    ]
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and counter */}
          <div className="col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-400">AD COUNT</h3>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="text-3xl font-bold text-white mb-2">83,102,199</div>
                <div className="flex justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Live</span>
                  </div>
                  <span>8,887,234</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Removed</span>
                  </div>
                  <span>74,214,965</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-300 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-8 h-8 text-blue-400" />
                <span className="font-bold text-xl">SwipeBuilder</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  ⭐ 4.8/5 <span className="text-xs">100 Reviews</span>
                </span>
                <span className="flex items-center gap-1">
                  🍎 4.9/5 <span className="text-xs">50 Reviews</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© 2025 SwipeBuilder, Inc. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms & Conditions</a>
              </div>
              <div className="flex gap-3">
                <a href="#" className="hover:text-white">📧</a>
                <a href="#" className="hover:text-white">📸</a>
                <a href="#" className="hover:text-white">🐦</a>
                <a href="#" className="hover:text-white">💼</a>
                <a href="#" className="hover:text-white">🔗</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
