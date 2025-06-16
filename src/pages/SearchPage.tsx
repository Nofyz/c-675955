
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Zap } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

const SearchPage = () => {
  const showContent = useAnimateIn(false, 300);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock search results
  const searchResults = [
    {
      id: '1',
      title: 'Facebook Video Ad - Fitness App',
      platform: 'META_FACEBOOK',
      thumbnail: '/placeholder.svg',
      snippet: 'Transform your body in just 30 days with our revolutionary fitness app...',
      tags: ['fitness', 'app', 'transformation']
    },
    {
      id: '2',
      title: 'TikTok UGC - Skincare Brand',
      platform: 'TIKTOK_ORGANIC',
      thumbnail: '/placeholder.svg',
      snippet: 'Get glowing skin with this simple 3-step routine that took TikTok by storm...',
      tags: ['skincare', 'ugc', 'beauty']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Search Swipes</h1>
            <p className="text-muted-foreground">
              Find specific ads and creative inspiration from your swipe file
            </p>
          </div>

          {/* Search Bar */}
          <Card className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="Search by keywords, platform, brand..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter size={18} />
                Filters
              </Button>
              <Button className="gap-2">
                <Search size={18} />
                Search
              </Button>
            </div>
          </Card>

          {/* Search Results */}
          {searchQuery ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Found {searchResults.length} results for "{searchQuery}"
              </p>
              {searchResults.map((result) => (
                <Card key={result.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-24 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={result.thumbnail} 
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium mb-1">{result.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {result.snippet}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {result.platform.replace('_', ' ')}
                        </span>
                        {result.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Search className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h3 className="text-xl font-semibold mb-2">Search Your Swipe File</h3>
              <p className="text-muted-foreground mb-6">
                Enter keywords to find specific ads, brands, or creative concepts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
                <Button variant="outline" size="sm">fitness ads</Button>
                <Button variant="outline" size="sm">e-commerce</Button>
                <Button variant="outline" size="sm">UGC videos</Button>
              </div>
            </Card>
          )}
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default SearchPage;
