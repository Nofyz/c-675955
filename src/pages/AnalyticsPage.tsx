
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap, 
  Calendar,
  Download,
  Filter,
  Star,
  Eye,
  Heart,
  Share2,
  MessageCircle
} from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

const AnalyticsPage = () => {
  const showContent = useAnimateIn(false, 300);
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  // Mock analytics data
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
      icon: <BarChart3 className="h-4 w-4" />
    },
    {
      title: 'Boards Created',
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

  const platformData = [
    { platform: 'Facebook/Meta', swipes: 1247, percentage: 44 },
    { platform: 'TikTok', swipes: 892, percentage: 31 },
    { platform: 'Google/YouTube', swipes: 456, percentage: 16 },
    { platform: 'Other', swipes: 252, percentage: 9 }
  ];

  const topPerforming = [
    {
      id: '1',
      title: 'Fitness App Video Ad',
      platform: 'TikTok',
      views: '2.3M',
      engagement: '12.4%',
      saves: 847,
      rating: 4.9
    },
    {
      id: '2',
      title: 'E-commerce Product Carousel',
      platform: 'Facebook',
      views: '890K',
      engagement: '8.7%',
      saves: 542,
      rating: 4.7
    },
    {
      id: '3',
      title: 'SaaS Demo VSL',
      platform: 'YouTube',
      views: '156K',
      engagement: '15.2%',
      saves: 324,
      rating: 4.8
    }
  ];

  const recentActivity = [
    { action: 'Swiped Facebook ad', time: '2 hours ago', user: 'You' },
    { action: 'Generated AI copy', time: '4 hours ago', user: 'You' },
    { action: 'Created new board', time: '1 day ago', user: 'Team Member' },
    { action: 'Shared board publicly', time: '2 days ago', user: 'You' },
    { action: 'Added 15 swipes', time: '3 days ago', user: 'Team Member' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                Track your swipe file performance and team activity
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter size={18} />
                Filter
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={18} />
                Export
              </Button>
            </div>
          </div>

          {/* Period Selector */}
          <div className="flex gap-2">
            {['7d', '30d', '90d', '1y'].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
              >
                {period === '7d' ? '7 Days' : 
                 period === '30d' ? '30 Days' : 
                 period === '90d' ? '90 Days' : '1 Year'}
              </Button>
            ))}
          </div>

          {/* Stats Cards */}
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
                    from last period
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Platform Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Swipes by Platform</CardTitle>
                <CardDescription>Distribution of your saved swipes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {platformData.map((item) => (
                  <div key={item.platform} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.platform}</span>
                      <span>{item.swipes} swipes</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Performing Swipes */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Swipes</CardTitle>
                <CardDescription>Your most successful saved ads</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPerforming.map((swipe, index) => (
                  <div key={swipe.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{swipe.title}</h4>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                        <Badge variant="secondary">{swipe.platform}</Badge>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {swipe.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          {swipe.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions from you and your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time} • {activity.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default AnalyticsPage;
