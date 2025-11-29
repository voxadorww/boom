import { motion } from 'motion/react';
import { GalaxyBackground } from '../components/galaxy/GalaxyBackground';
import { FloatingPlanet } from '../components/galaxy/FloatingPlanet';
import { ExternalLink, Star, Users, Gamepad2 } from 'lucide-react';

export function Projects() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GalaxyBackground />
      <FloatingPlanet size={120} color="blue" duration={22} x="10%" y="20%" />
      <FloatingPlanet size={90} color="purple" duration={18} delay={2} x="80%" y="60%" />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-400">
              A showcase of everything I've built — games, apps, and learning tools
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {/* Spanish Learning Platform */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <ProjectShowcase
                title="Spanish Learning Platform"
                description="An adaptive, AI-powered Spanish learning platform featuring 5 progressive stages: Vocabulary, Phrases, Sentences, Dialogues, and Topic-based lessons. Built with React, Supabase, and Google Gemini AI."
                features={[
                  'Dictionary-based lessons with AI assistance',
                  'Adaptive quiz system with 75% pass requirement',
                  'Progress tracking and mistake analysis',
                  'User authentication and profiles',
                  '10 lessons per stage for comprehensive learning',
                ]}
                tech={['React', 'TypeScript', 'Supabase', 'Gemini AI', 'Tailwind CSS']}
                link="/spanish"
                isInternal
                status="Live"
              />
            </motion.div>

            {/* Roblox Games */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              id="roblox"
            >
              <ProjectShowcase
                title="Roblox Games"
                description="Immersive multiplayer experiences built on Roblox. Creating engaging gameplay mechanics and interactive worlds for thousands of players."
                features={[
                  'Multiplayer game mechanics',
                  'Custom scripting and systems',
                  'Engaging player experiences',
                  'Regular updates and improvements',
                ]}
                tech={['Lua', 'Roblox Studio', 'Game Design']}
                stats={[
                  { label: 'Players', value: '10K+', icon: Users },
                  { label: 'Rating', value: '4.8/5', icon: Star },
                ]}
                status="Live"
              />
            </motion.div>

            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="w-8 h-8 text-purple-400" />
                  <h2 className="text-3xl text-white">More Projects Coming Soon...</h2>
                </div>
                <p className="text-gray-400">
                  Currently working on new exciting projects including web apps, tools, and more games.
                  Check back soon for updates!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectShowcaseProps {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  link?: string;
  isInternal?: boolean;
  stats?: { label: string; value: string; icon: any }[];
  status: string;
}

function ProjectShowcase({
  title,
  description,
  features,
  tech,
  link,
  isInternal = false,
  stats,
  status,
}: ProjectShowcaseProps) {
  const ProjectWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return isInternal ? (
        <a href={link} className="block">
          {children}
        </a>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          {children}
        </a>
      );
    }
    return <div>{children}</div>;
  };

  return (
    <ProjectWrapper>
      <motion.div
        whileHover={link ? { scale: 1.02 } : {}}
        className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/50 transition-all"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl text-white">{title}</h2>
              <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                {status}
              </span>
            </div>
            <p className="text-gray-300">{description}</p>
          </div>
          {link && (
            <ExternalLink className="w-6 h-6 text-purple-400 flex-shrink-0 ml-4" />
          )}
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="flex gap-6 mb-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <stat.icon className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-xl text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-lg text-purple-400 mb-3">Key Features</h3>
          <ul className="grid md:grid-cols-2 gap-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <span className="text-purple-400 mt-1">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-lg text-purple-400 mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </ProjectWrapper>
  );
}
