
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Plus, 
  Grid3X3, 
  List, 
  FolderPlus,
  Zap,
  Download
} from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

const SwipesPage = () => {
  const showContent = useAnimateIn(false, 300);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - will be replaced with real data from API
  const swipes = [
    {
      id: '1',
      title: 'Facebook Video Ad - Fitness App',
      platform: 'META_FACEBOOK',
      adType: 'VIDEO',
      thumbnail: '/placeholder.svg',
      duration: 30,
      createdAt: '2024-01-15',
      tags: ['fitness', 'mobile-app', 'ugc']
    },
    {
      id: '2',
      title: 'TikTok UGC - Beauty Product',
      platform: 'TIKTOK_ORGANIC',
      adType: 'UGC_VIDEO',
      thumbnail: '/placeholder.svg',
      duration: 15,
      createdAt: '2024-01-14',
      tags: ['beauty', 'ugc', 'skincare']
    },
    {
      id: '3',
      title: 'Google VSL - SaaS Demo',
      platform: 'WISTIA_VSL',
      adType: 'VSL',
      thumbnail: '/placeholder.svg',
      duration: 120,
      createdAt: '2024-01-13',
      tags: ['saas', 'demo', 'b2b']
    }
  ];

  const folders = [
    { id: '1', name: 'E-commerce Ads', count: 45, color: '#3B82F6' },
    { id: '2', name: 'SaaS & Tech', count: 23, color: '#10B981' },
    { id: '3', name: 'Health & Fitness', count: 31, color: '#F59E0B' },
    { id: '4', name: 'UGC Content', count: 67, color: '#EF4444' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Swipe File</h1>
              <p className="text-muted-foreground mt-1">
                Your collection of saved ads and creative inspiration
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download size={18} />
                Export
              </Button>
              <Button className="gap-2">
                <Zap size={18} />
                Start Swiping
              </Button>
            </div>
          </div>

          {/* Folders */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Folders</h2>
              <Button variant="outline" size="sm" className="gap-2">
                <FolderPlus size={16} />
                New Folder
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {folders.map((folder) => (
                <Card key={folder.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: folder.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{folder.name}</h3>
                      <p className="text-sm text-muted-foreground">{folder.count} swipes</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="Search swipes..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter size={18} />
                Filter
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 size={18} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List size={18} />
              </Button>
            </div>
          </div>

          {/* Swipes Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {swipes.map((swipe) => (
                <Card key={swipe.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={swipe.thumbnail} 
                      alt={swipe.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-xs px-2 py-1 bg-black/80 text-white rounded">
                        {swipe.platform.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <span className="text-xs px-2 py-1 bg-black/80 text-white rounded">
                        {swipe.duration}s
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2 line-clamp-2">{swipe.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {swipe.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-full">
                          {tag}
                        </span>
                      ))}
                      {swipe.tags.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-muted rounded-full">
                          +{swipe.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {new Date(swipe.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {swipes.map((swipe) => (
                <Card key={swipe.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={swipe.thumbnail} 
                        alt={swipe.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium mb-1">{swipe.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{swipe.platform.replace('_', ' ')}</span>
                        <span>{swipe.adType}</span>
                        <span>{swipe.duration}s</span>
                        <span>{new Date(swipe.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {swipe.tags.map((tag) => (
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
          )}

          {/* Empty State */}
          {swipes.length === 0 && (
            <Card className="p-12 text-center">
              <Zap className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h3 className="text-xl font-semibold mb-2">No swipes yet</h3>
              <p className="text-muted-foreground mb-6">
                Install the Chrome extension and start saving ads from your favorite platforms
              </p>
              <Button className="gap-2">
                <Plus size={18} />
                Install Extension
              </Button>
            </Card>
          )}
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default SwipesPage;
