
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Dashboard from "./pages/Dashboard";
import SwipesPage from "./pages/SwipesPage";
import BoardsPage from "./pages/BoardsPage";
import AiCopywriterPage from "./pages/AiCopywriterPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { useAuth } from "@/contexts/AuthContext";

const queryClient = new QueryClient();

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="transition-opacity duration-300 animate-fade-in">
      {children}
    </div>
  );
};

// Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PageTransition>
            {isAuthenticated ? <Dashboard /> : <Navigate to="/landing" replace />}
          </PageTransition>
        } 
      />
      <Route 
        path="/landing" 
        element={
          <PageTransition>
            <Dashboard />
          </PageTransition>
        } 
      />
      <Route 
        path="/swipes" 
        element={
          <ProtectedRoute>
            <PageTransition>
              <SwipesPage />
            </PageTransition>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/boards" 
        element={
          <ProtectedRoute>
            <PageTransition>
              <BoardsPage />
            </PageTransition>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/ai-copywriter" 
        element={
          <ProtectedRoute>
            <PageTransition>
              <AiCopywriterPage />
            </PageTransition>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/analytics" 
        element={
          <ProtectedRoute>
            <PageTransition>
              <AnalyticsPage />
            </PageTransition>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/search" 
        element={
          <ProtectedRoute>
            <PageTransition>
              <SearchPage />
            </PageTransition>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <PageTransition>
              <Profile />
            </PageTransition>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <PageTransition>
              <Settings />
            </PageTransition>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="*" 
        element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } 
      />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen">
              <Navbar />
              <AppRoutes />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
