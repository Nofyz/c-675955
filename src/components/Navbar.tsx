
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
            "relative flex items-center justify-center px-3 py-3 rounded-lg transition-all duration-300 whitespace-nowrap",
            "hover:bg-primary/10 hover:text-primary",
            "overflow-hidden mx-1",
            active ? "bg-primary/10 text-primary" : "text-foreground/80"
          )}
          onClick={(e) => {
            handleRipple(e);
            onClick();
          }}
        >
          <span className={cn(
            "transition-all duration-300 flex items-center gap-2",
            active ? "text-primary" : "text-foreground/60"
          )}>
            {icon}
            {active && (
              <span className="font-medium text-sm">{label}</span>
            )}
          </span>
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
    { to: '/', icon: <Home size={18} />, label: 'Dashboard', id: 'dashboard' },
    { to: '/swipes', icon: <Zap size={18} />, label: 'Swipes', id: 'swipes' },
    { to: '/boards', icon: <Users size={18} />, label: 'Boards', id: 'boards' },
    { to: '/ai-copywriter', icon: <Brain size={18} />, label: 'AI Copy', id: 'ai' },
    { to: '/analytics', icon: <BarChart3 size={18} />, label: 'Analytics', id: 'analytics' },
    { to: '/search', icon: <Search size={18} />, label: 'Search', id: 'search' },
  ];

  const userItems = [
    { to: '/profile', icon: <User size={18} />, label: 'Profile', id: 'profile' },
    { to: '/settings', icon: <Settings size={18} />, label: 'Settings', id: 'settings' },
  ];

  return (
    <>
      <TooltipProvider>
        <header className="glass-panel fixed top-6 left-1/2 transform -translate-x-1/2 z-40 rounded-lg px-2 py-1">
          <nav className="flex items-center">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2 px-3 mr-3">
              <Zap className="text-primary" size={24} />
              <span className="font-bold text-lg whitespace-nowrap">SwipeBuilder</span>
            </div>
            
            {/* Main Navigation - Only show if authenticated */}
            {isAuthenticated && (
              <>
                <div className="flex items-center">
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
                </div>
                
                <div className="mx-3 h-6 w-px bg-border/50" />
                
                <div className="flex items-center">
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
                </div>
              </>
            )}
            
            <div className="flex items-center ml-3 gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    onClick={toggleTheme}
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
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
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
                      onClick={logout}
                    >
                      <LogOut size={18} />
                      <span className="font-medium text-sm">Logout</span>
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
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
                      onClick={handleOpenAuthModal}
                    >
                      <LogIn size={18} />
                      <span className="font-medium text-sm">Login</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Login</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </nav>
        </header>
      </TooltipProvider>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
    </>
  );
};

export default Navbar;
