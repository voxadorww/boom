import { Link } from 'react-router-dom';
import { Rocket, BookOpen, FolderKanban, Mail, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase-client';

interface NavigationProps {
  isAuthenticated: boolean;
  onLogout?: () => void;
}

export function Navigation({ isAuthenticated, onLogout }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Rocket className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nomadly.lol
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Rocket className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <FolderKanban className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            <Link
              to="/spanish"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Learn Spanish</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/spanish/dashboard"
                  className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/spanish/auth"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
