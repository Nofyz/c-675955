
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Plus, 
  Users, 
  Lock, 
  Globe,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

const BoardsPage = () => {
  const showContent = useAnimateIn(false, 300);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - will be replaced with real data from API
  const boards = [
    {
      id: '1',
      name: 'Q1 Campaign Ideas',
      description: 'Collection of ads for upcoming quarterly campaigns',
      emoji: '🚀',
      isPublic: false,
      memberCount: 4,
      swipeCount: 23,
      commentCount: 8,
      updatedAt: '2024-01-15',
      coverImage: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'UGC Inspiration',
      description: 'User-generated content examples and best practices',
      emoji: '🎬',
      isPublic: true,
      memberCount: 12,
      swipeCount: 67,
      commentCount: 34,
      updatedAt: '2024-01-14',
      coverImage: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'Client Presentation - Acme Corp',
      description: 'Curated ads for client presentation deck',
      emoji: '💼',
      isPublic: false,
      memberCount: 2,
      swipeCount: 15,
      commentCount: 3,
      updatedAt: '2024-01-13',
      coverImage: '/placeholder.svg'
    }
  ];

  const templates = [
    {
      name: 'Campaign Research',
      description: 'Template for organizing competitive research',
      icon: '🔍'
    },
    {
      name: 'Client Presentation',
      description: 'Professional board for client deliverables',
      icon: '📊'
    },
    {
      name: 'Creative Review',
      description: 'Collaborative space for creative feedback',
      icon: '✨'
    },
    {
      name: 'Trend Analysis',
      description: 'Track and analyze advertising trends',
      icon: '📈'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Boards</h1>
              <p className="text-muted-foreground mt-1">
                Organize and collaborate on your swipe collections
              </p>
            </div>
            <Button className="gap-2">
              <Plus size={18} />
              Create Board
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search boards..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Templates */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Start Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {templates.map((template, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-center">
                    <div className="text-2xl mb-2">{template.icon}</div>
                    <h3 className="font-medium mb-1">{template.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {template.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Boards Grid */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Your Boards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boards.map((board) => (
                <Card key={board.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={board.coverImage} 
                      alt={board.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-2xl">{board.emoji}</span>
                    </div>
                    <div className="absolute top-2 right-2">
                      {board.isPublic ? (
                        <Globe size={16} className="text-white/80" />
                      ) : (
                        <Lock size={16} className="text-white/80" />
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{board.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {board.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          {board.memberCount}
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{board.swipeCount} swipes</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare size={14} />
                          {board.commentCount}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      Updated {new Date(board.updatedAt).toLocaleDateString()}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {boards.length === 0 && (
            <Card className="p-12 text-center">
              <Users className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h3 className="text-xl font-semibold mb-2">No boards yet</h3>
              <p className="text-muted-foreground mb-6">
                Create your first board to organize swipes and collaborate with your team
              </p>
              <Button className="gap-2">
                <Plus size={18} />
                Create First Board
              </Button>
            </Card>
          )}
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default BoardsPage;
