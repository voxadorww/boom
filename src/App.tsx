import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { SpanishLanding } from './pages/spanish/SpanishLanding';
import { AuthPage } from './components/AuthPage';
import { OnboardingPage } from './components/OnboardingPage';
import { Dashboard } from './components/Dashboard';
import { LessonPlayer } from './components/LessonPlayer';
import { ProgressPage } from './components/ProgressPage';
import { supabase } from './utils/supabase-client';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session?.access_token) {
      setAccessToken(data.session.access_token);
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAccessToken('');
    setIsAuthenticated(false);
  };

  const handleAuthSuccess = (token: string) => {
    setAccessToken(token);
    setIsAuthenticated(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-purple-400 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navigation isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          {/* Main Portfolio Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Spanish Learning Platform Routes */}
          <Route path="/spanish" element={<SpanishLanding />} />
          <Route
            path="/spanish/auth"
            element={
              isAuthenticated ? (
                <Navigate to="/spanish/dashboard" replace />
              ) : (
                <AuthPage onAuthSuccess={handleAuthSuccess} />
              )
            }
          />
          <Route
            path="/spanish/onboarding"
            element={
              isAuthenticated ? (
                <OnboardingPageWrapper accessToken={accessToken} />
              ) : (
                <Navigate to="/spanish/auth" replace />
              )
            }
          />
          <Route
            path="/spanish/dashboard"
            element={
              isAuthenticated ? (
                <DashboardWrapper accessToken={accessToken} onLogout={handleLogout} />
              ) : (
                <Navigate to="/spanish/auth" replace />
              )
            }
          />
          <Route
            path="/spanish/lesson"
            element={
              isAuthenticated ? (
                <LessonPlayerWrapper accessToken={accessToken} />
              ) : (
                <Navigate to="/spanish/auth" replace />
              )
            }
          />
          <Route
            path="/spanish/progress"
            element={
              isAuthenticated ? (
                <ProgressPageWrapper accessToken={accessToken} />
              ) : (
                <Navigate to="/spanish/auth" replace />
              )
            }
          />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Wrapper components to handle navigation
function OnboardingPageWrapper({ accessToken }: { accessToken: string }) {
  return <OnboardingPage accessToken={accessToken} onComplete={() => window.location.href = '/spanish/dashboard'} />;
}

function DashboardWrapper({ accessToken, onLogout }: { accessToken: string; onLogout: () => void }) {
  return (
    <Dashboard
      accessToken={accessToken}
      onStartLesson={() => window.location.href = '/spanish/lesson'}
      onViewProgress={() => window.location.href = '/spanish/progress'}
      onLogout={onLogout}
    />
  );
}

function LessonPlayerWrapper({ accessToken }: { accessToken: string }) {
  return (
    <LessonPlayer
      accessToken={accessToken}
      onComplete={() => window.location.href = '/spanish/dashboard'}
      onBack={() => window.location.href = '/spanish/dashboard'}
    />
  );
}

function ProgressPageWrapper({ accessToken }: { accessToken: string }) {
  return <ProgressPage accessToken={accessToken} onBack={() => window.location.href = '/spanish/dashboard'} />;
}
