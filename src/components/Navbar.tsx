
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Zap, 
  LogIn, 
  User, 
  Settings, 
  LogOut, 
  Moon, 
  Sun, 
  Home,
  FolderOpen,
  Users,
  Brain,
  BarChart3,
  Search
} from 'lucide-react';
import { useRippleEffect } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import AuthModal from '@/components/AuthModal';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({ to, icon, label, active, onClick }: NavItemProps) => {
  const handleRipple = useRippleEffect();
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link 
          to={to} 
          className={cn(
            "relative flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300",
            "hover:bg-primary/10 hover:text-primary",
            "overflow-hidden",
            active ? "bg-primary/10 text-primary" : "text-foreground/80"
          )}
          onClick={(e) => {
            handleRipple(e);
            onClick();
          }}
        >
          <span className={cn(
            "transition-all duration-300",
            active ? "text-primary" : "text-foreground/60"
          )}>
            {icon}
          </span>
          {active && (
            <span className="ml-2 font-medium">{label}</span>
          )}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export const Navbar = () => {
  const location = useLocation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  
  const getActiveRoute = () => {
    const path = location.pathname;
    if (path === '/') return 'dashboard';
    if (path.startsWith('/swipes')) return 'swipes';
    if (path.startsWith('/boards')) return 'boards';
    if (path.startsWith('/ai-copywriter')) return 'ai';
    if (path.startsWith('/analytics')) return 'analytics';
    if (path.startsWith('/search')) return 'search';
    if (path.startsWith('/profile')) return 'profile';
    if (path.startsWith('/settings')) return 'settings';
    return 'dashboard';
  };

  const activeRoute = getActiveRoute();

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const navItems = [
    { to: '/', icon: <Home size={20} />, label: 'Dashboard', id: 'dashboard' },
    { to: '/swipes', icon: <Zap size={20} />, label: 'Swipes', id: 'swipes' },
    { to: '/boards', icon: <Users size={20} />, label: 'Boards', id: 'boards' },
    { to: '/ai-copywriter', icon: <Brain size={20} />, label: 'AI Copy', id: 'ai' },
    { to: '/analytics', icon: <BarChart3 size={20} />, label: 'Analytics', id: 'analytics' },
    { to: '/search', icon: <Search size={20} />, label: 'Search', id: 'search' },
  ];

  const userItems = [
    { to: '/profile', icon: <User size={20} />, label: 'Profile', id: 'profile' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings', id: 'settings' },
  ];

  return (
    <>
      <TooltipProvider>
        <header className="glass-panel fixed top-6 left-1/2 transform -translate-x-1/2 z-40 rounded-lg px-1 py-1">
          <nav className="flex items-center">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2 px-3 mr-2">
              <Zap className="text-primary" size={24} />
              <span className="font-bold text-lg">SwipeBuilder</span>
            </div>
            
            {/* Main Navigation - Only show if authenticated */}
            {isAuthenticated && (
              <>
                {navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    active={activeRoute === item.id}
                    onClick={() => {}}
                  />
                ))}
                
                <div className="mx-2 h-6 w-px bg-border/50" />
                
                {userItems.map((item) => (
                  <NavItem
                    key={item.id}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    active={activeRoute === item.id}
                    onClick={() => {}}
                  />
                ))}
              </>
            )}
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg ml-1"
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle {theme === 'dark' ? 'light' : 'dark'} mode</p>
              </TooltipContent>
            </Tooltip>
            
            {isAuthenticated ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground"
                    onClick={logout}
                  >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Logout</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground"
                    onClick={handleOpenAuthModal}
                  >
                    <LogIn size={20} />
                    <span className="font-medium">Login</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Login</p>
                </TooltipContent>
              </Tooltip>
            )}
          </nav>
        </header>
      </TooltipProvider>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
    </>
  );
};

export default Navbar;
