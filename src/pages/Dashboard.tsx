
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Plus, 
  TrendingUp, 
  Users, 
  Brain,
  BarChart3,
  FolderOpen,
  Star,
  Calendar,
  Download
} from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const showContent = useAnimateIn(false, 300);
  const { isAuthenticated } = useAuth();

  // Mock data for dashboard
  const stats = [
    {
      title: 'Total Swipes',
      value: '2,847',
      change: '+12.5%',
      trend: 'up' as const,
      icon: <Zap className="h-4 w-4" />
    },
    {
      title: 'AI Generations',
      value: '1,234',
      change: '+8.2%',
      trend: 'up' as const,
      icon: <Brain className="h-4 w-4" />
    },
    {
      title: 'Active Boards',
      value: '45',
      change: '+25.0%',
      trend: 'up' as const,
      icon: <Users className="h-4 w-4" />
    },
    {
      title: 'Team Members',
      value: '12',
      change: '+3.1%',
      trend: 'up' as const,
      icon: <Users className="h-4 w-4" />
    }
  ];

  const recentSwipes = [
    {
      id: '1',
      title: 'Fitness App Video Ad',
      platform: 'TikTok Creative Center',
      thumbnail: '/placeholder.svg',
      createdAt: '2 hours ago',
      tags: ['fitness', 'video', 'ugc']
    },
    {
      id: '2',
      title: 'E-commerce Product Carousel',
      platform: 'Facebook Ad Library',
      thumbnail: '/placeholder.svg',
      createdAt: '4 hours ago',
      tags: ['ecommerce', 'carousel']
    },
    {
      id: '3',
      title: 'SaaS Landing Page Copy',
      platform: 'Google Ads',
      thumbnail: '/placeholder.svg',
      createdAt: '1 day ago',
      tags: ['saas', 'copy']
    }
  ];

  const quickActions = [
    {
      title: 'Swipe New Ad',
      description: 'Find and save ads from platforms',
      icon: <Zap className="h-5 w-5" />,
      href: '/swipes',
      color: 'bg-blue-500'
    },
    {
      title: 'Generate AI Copy',
      description: 'Create copy with AI assistance',
      icon: <Brain className="h-5 w-5" />,
      href: '/ai-copywriter',
      color: 'bg-purple-500'
    },
    {
      title: 'Create Board',
      description: 'Organize swipes into collections',
      icon: <FolderOpen className="h-5 w-5" />,
      href: '/boards',
      color: 'bg-green-500'
    },
    {
      title: 'View Analytics',
      description: 'Track performance and insights',
      icon: <BarChart3 className="h-5 w-5" />,
      href: '/analytics',
      color: 'bg-orange-500'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <AnimatedTransition show={showContent} animation="slide-up">
          <div className="text-center py-20">
            <Zap className="mx-auto mb-8 text-primary" size={64} />
            <h1 className="text-4xl font-bold mb-4">Welcome to SwipeBuilder</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The ultimate swipe file for ads and creative inspiration. Save, organize, and generate copy from the best ads across platforms.
            </p>
            <Button size="lg" className="gap-2">
              <Plus size={20} />
              Get Started
            </Button>
          </div>
        </AnimatedTransition>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your swipe file.
              </p>
            </div>
            <Button className="gap-2">
              <Plus size={18} />
              New Swipe
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-green-500">{stat.change}</span>
                    from last month
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Jump into your workflow</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickActions.map((action) => (
                    <a
                      key={action.title}
                      href={action.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className={`p-2 rounded-lg text-white ${action.color}`}>
                        {action.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{action.title}</h4>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Recent Swipes */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Swipes</CardTitle>
                  <CardDescription>Your latest saved ads and creatives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentSwipes.map((swipe) => (
                    <div key={swipe.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="w-16 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={swipe.thumbnail} 
                          alt={swipe.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{swipe.title}</h4>
                        <p className="text-sm text-muted-foreground">{swipe.platform}</p>
                        <div className="flex items-center gap-2 mt-2">
                          {swipe.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {swipe.createdAt}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default Dashboard;
