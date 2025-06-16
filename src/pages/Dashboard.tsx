
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  FolderOpen, 
  Users, 
  Brain, 
  BarChart3, 
  Plus,
  TrendingUp,
  Clock,
  Star
} from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const showContent = useAnimateIn(false, 300);

  // Mock data - will be replaced with real data from API
  const stats = {
    totalSwipes: 247,
    thisMonth: 23,
    folders: 8,
    boards: 4,
    aiGenerations: 12
  };

  const recentSwipes = [
    {
      id: '1',
      title: 'Facebook Ad - E-commerce Product',
      platform: 'META_FACEBOOK',
      createdAt: '2024-01-15',
      thumbnail: '/placeholder.svg'
    },
    {
      id: '2', 
      title: 'TikTok UGC - Beauty Brand',
      platform: 'TIKTOK_ORGANIC',
      createdAt: '2024-01-14',
      thumbnail: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Google VSL - SaaS Demo',
      platform: 'WISTIA_VSL',
      createdAt: '2024-01-13',
      thumbnail: '/placeholder.svg'
    }
  ];

  const quickActions = [
    {
      title: 'Start Swiping',
      description: 'Use the Chrome extension to save ads',
      icon: <Zap className="text-primary" size={24} />,
      link: '/swipes',
      action: 'Install Extension'
    },
    {
      title: 'Create Board',
      description: 'Organize swipes and collaborate',
      icon: <Users className="text-blue-500" size={24} />,
      link: '/boards',
      action: 'New Board'
    },
    {
      title: 'AI Copywriter',
      description: 'Generate copy from your swipes',
      icon: <Brain className="text-purple-500" size={24} />,
      link: '/ai-copywriter',
      action: 'Write Copy'
    },
    {
      title: 'View Analytics',
      description: 'Track your swipe performance',
      icon: <BarChart3 className="text-green-500" size={24} />,
      link: '/analytics',
      action: 'View Stats'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.firstName || 'there'}! 👋
              </h1>
              <p className="text-muted-foreground mt-2">
                Here's what's happening with your swipe file
              </p>
            </div>
            <Button size="lg" className="gap-2">
              <Plus size={20} />
              Quick Start
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Swipes</p>
                  <p className="text-2xl font-bold">{stats.totalSwipes}</p>
                </div>
                <Zap className="text-primary opacity-20" size={32} />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp size={14} className="text-green-500" />
                <span className="text-sm text-green-500">+{stats.thisMonth} this month</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Folders</p>
                  <p className="text-2xl font-bold">{stats.folders}</p>
                </div>
                <FolderOpen className="text-blue-500 opacity-20" size={32} />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-muted-foreground">Organized content</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Boards</p>
                  <p className="text-2xl font-bold">{stats.boards}</p>
                </div>
                <Users className="text-purple-500 opacity-20" size={32} />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-muted-foreground">Collaborative spaces</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">AI Generations</p>
                  <p className="text-2xl font-bold">{stats.aiGenerations}</p>
                </div>
                <Brain className="text-green-500 opacity-20" size={32} />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-muted-foreground">This month</span>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <Link to={action.link} className="block">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-muted/50">
                        {action.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium">{action.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {action.description}
                        </p>
                        <Button variant="outline" size="sm" className="mt-3">
                          {action.action}
                        </Button>
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Swipes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Swipes</h2>
              <Button variant="outline" asChild>
                <Link to="/swipes">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentSwipes.map((swipe) => (
                <Card key={swipe.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <img 
                      src={swipe.thumbnail} 
                      alt={swipe.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-medium truncate">{swipe.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {swipe.platform.replace('_', ' ')}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} />
                      {new Date(swipe.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Chrome Extension CTA */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
            <div className="text-center max-w-2xl mx-auto">
              <Star className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-2">Ready to Start Swiping?</h3>
              <p className="text-muted-foreground mb-6">
                Install our Chrome extension to save ads from Facebook, TikTok, Google, and more platforms directly to your swipe file.
              </p>
              <Button size="lg" className="gap-2">
                <Plus size={20} />
                Install Chrome Extension
              </Button>
            </div>
          </Card>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default Dashboard;
