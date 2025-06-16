
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap,
  Calendar,
  Target,
  Eye,
  Heart
} from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

const AnalyticsPage = () => {
  const showContent = useAnimateIn(false, 300);

  // Mock data - will be replaced with real data from API
  const stats = {
    totalSwipes: 247,
    thisMonth: 23,
    lastMonth: 19,
    avgPerDay: 1.2,
    topPlatform: 'TikTok',
    topCategory: 'E-commerce'
  };

  const platformData = [
    { name: 'TikTok', count: 89, percentage: 36, color: '#FF0050' },
    { name: 'Facebook', count: 67, percentage: 27, color: '#1877F2' },
    { name: 'Instagram', count: 45, percentage: 18, color: '#E4405F' },
    { name: 'Google', count: 31, percentage: 13, color: '#4285F4' },
    { name: 'YouTube', count: 15, percentage: 6, color: '#FF0000' }
  ];

  const monthlyData = [
    { month: 'Jan', swipes: 18 },
    { month: 'Feb', swipes: 22 },
    { month: 'Mar', swipes: 19 },
    { month: 'Apr', swipes: 25 },
    { month: 'May', swipes: 31 },
    { month: 'Jun', swipes: 23 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground mt-1">
              Track your swipe file performance and insights
            </p>
          </div>

          {/* Overview Stats */}
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
                  <p className="text-sm text-muted-foreground">Monthly Growth</p>
                  <p className="text-2xl font-bold">
                    +{((stats.thisMonth - stats.lastMonth) / stats.lastMonth * 100).toFixed(0)}%
                  </p>
                </div>
                <TrendingUp className="text-green-500 opacity-20" size={32} />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-muted-foreground">vs last month</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Daily Average</p>
                  <p className="text-2xl font-bold">{stats.avgPerDay}</p>
                </div>
                <Calendar className="text-blue-500 opacity-20" size={32} />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-muted-foreground">swipes per day</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Top Platform</p>
                  <p className="text-2xl font-bold">{stats.topPlatform}</p>
                </div>
                <Target className="text-purple-500 opacity-20" size={32} />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-muted-foreground">most used</span>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Platform Breakdown */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 size={20} />
                Platform Breakdown
              </h3>
              <div className="space-y-4">
                {platformData.map((platform) => (
                  <div key={platform.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: platform.color }}
                        />
                        <span>{platform.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{platform.count}</span>
                        <span className="font-medium">{platform.percentage}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          backgroundColor: platform.color,
                          width: `${platform.percentage}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Monthly Trend */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Monthly Trend
              </h3>
              <div className="space-y-3">
                {monthlyData.map((data, index) => (
                  <div key={data.month} className="flex items-center gap-4">
                    <span className="text-sm font-medium w-8">{data.month}</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${(data.swipes / 35) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">
                      {data.swipes}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Top Performing Swipes */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Star className="text-yellow-500" size={20} />
              Top Performing Swipes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg p-4">
                  <div className="aspect-video bg-muted rounded-lg mb-3" />
                  <h4 className="font-medium mb-2">High-Converting Facebook Ad</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        1.2k
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        89
                      </div>
                    </div>
                    <span>95% score</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Insights */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">📊 Insights & Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">🎯 What's Working</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• TikTok UGC content has 3x higher engagement</li>
                  <li>• Video ads perform 40% better than static images</li>
                  <li>• E-commerce swipes show strongest conversion patterns</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">💡 Opportunities</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Explore more YouTube ad formats</li>
                  <li>• Save more LinkedIn B2B campaigns</li>
                  <li>• Focus on mobile-first creative formats</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default AnalyticsPage;
