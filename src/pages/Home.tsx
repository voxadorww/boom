import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GalaxyBackground } from '../components/galaxy/GalaxyBackground';
import { FloatingPlanet } from '../components/galaxy/FloatingPlanet';
import { Rocket, Code, Sparkles, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GalaxyBackground />
      
      {/* Floating Planets */}
      <FloatingPlanet size={150} color="purple" duration={25} x="5%" y="10%" />
      <FloatingPlanet size={100} color="blue" duration={20} delay={2} x="85%" y="15%" />
      <FloatingPlanet size={120} color="orange" duration={30} delay={4} x="75%" y="70%" />
      <FloatingPlanet size={80} color="green" duration={18} delay={1} x="15%" y="75%" />

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Title */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-7xl mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Welcome to Nomadly
              </h1>
              <div className="flex items-center justify-center gap-2 text-xl text-gray-400">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span>A Futuristic Hub for Innovation</span>
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Explore cutting-edge projects, learn new skills, and discover interactive
              experiences. From language learning to games and beyond — all in one cosmic
              destination.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center gap-6"
            >
              <Link
                to="/projects"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/50 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/spanish"
                className="px-8 py-4 rounded-xl bg-slate-800/50 border border-purple-500/30 text-purple-400 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                <span>Start Learning Spanish</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Featured Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-32 grid md:grid-cols-3 gap-8"
          >
            <ProjectCard
              title="Spanish Learning Platform"
              description="Adaptive AI-powered platform to master Spanish through progressive stages"
              icon="🇪🇸"
              link="/spanish"
              gradient="from-purple-500/10 to-pink-500/10"
              borderColor="border-purple-500/30"
            />
            <ProjectCard
              title="Roblox Games"
              description="Immersive gaming experiences built on the Roblox platform"
              icon="🎮"
              link="/projects#roblox"
              gradient="from-blue-500/10 to-cyan-500/10"
              borderColor="border-blue-500/30"
            />
            <ProjectCard
              title="More Coming Soon"
              description="Exciting new projects are in development. Stay tuned!"
              icon="✨"
              link="/projects"
              gradient="from-green-500/10 to-emerald-500/10"
              borderColor="border-green-500/30"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  gradient: string;
  borderColor: string;
}

function ProjectCard({ title, description, icon, link, gradient, borderColor }: ProjectCardProps) {
  return (
    <Link to={link}>
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} border ${borderColor} backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all cursor-pointer`}
      >
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </motion.div>
    </Link>
  );
}
