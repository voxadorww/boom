import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GalaxyBackground } from '../../components/galaxy/GalaxyBackground';
import { FloatingPlanet } from '../../components/galaxy/FloatingPlanet';
import { BookOpen, Brain, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export function SpanishLanding() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GalaxyBackground />
      <FloatingPlanet size={140} color="purple" duration={24} x="8%" y="15%" />
      <FloatingPlanet size={110} color="orange" duration={20} delay={2} x="82%" y="65%" />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="text-6xl mb-6">🇪🇸</div>
            <h1 className="text-6xl mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Learn Spanish with AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master Spanish through 5 progressive stages with dictionary-based lessons
              and AI-powered assistance. Adaptive learning that grows with you.
            </p>
            <Link
              to="/spanish/auth"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/50"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            <FeatureCard
              icon={Brain}
              title="AI-Powered"
              description="Get personalized explanations and suggestions from Gemini AI"
            />
            <FeatureCard
              icon={Target}
              title="Structured Path"
              description="10 lessons per stage across 5 progressive learning stages"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Adaptive Learning"
              description="System tracks mistakes and adapts to your learning needs"
            />
            <FeatureCard
              icon={CheckCircle}
              title="Track Progress"
              description="Monitor words learned, accuracy, and quiz performance"
            />
          </motion.div>

          {/* Learning Stages */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-4xl text-center mb-12 text-white">
              Your Learning Journey
            </h2>
            <div className="space-y-4">
              <StageCard
                number={1}
                title="Vocabulary"
                description="Build your foundation with 100+ essential Spanish words"
                gradient="from-purple-500/20 to-pink-500/20"
                border="border-purple-500/30"
              />
              <StageCard
                number={2}
                title="Phrases"
                description="Learn common phrases for everyday conversations"
                gradient="from-blue-500/20 to-cyan-500/20"
                border="border-blue-500/30"
              />
              <StageCard
                number={3}
                title="Sentences"
                description="Master sentence construction and basic grammar"
                gradient="from-green-500/20 to-emerald-500/20"
                border="border-green-500/30"
              />
              <StageCard
                number={4}
                title="Dialogues"
                description="Practice with realistic conversations and scenarios"
                gradient="from-orange-500/20 to-red-500/20"
                border="border-orange-500/30"
              />
              <StageCard
                number={5}
                title="Topics"
                description="Deep dive into specific topics like travel, food, and culture"
                gradient="from-yellow-500/20 to-amber-500/20"
                border="border-yellow-500/30"
              />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="p-10 rounded-2xl bg-gradient-to-br from-slate-800/50 to-orange-900/30 border border-orange-500/30 backdrop-blur-sm">
              <h2 className="text-3xl text-white mb-4">Ready to Begin?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of learners mastering Spanish with our adaptive platform.
                Start with vocabulary and progress to fluent conversations.
              </p>
              <Link
                to="/spanish/auth"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/50"
              >
                <BookOpen className="w-5 h-5" />
                <span>Create Free Account</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/30 backdrop-blur-sm">
      <Icon className="w-10 h-10 text-purple-400 mb-4" />
      <h3 className="text-lg text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

interface StageCardProps {
  number: number;
  title: string;
  description: string;
  gradient: string;
  border: string;
}

function StageCard({ number, title, description, gradient, border }: StageCardProps) {
  return (
    <div className={`p-6 rounded-xl bg-gradient-to-br ${gradient} border ${border} backdrop-blur-sm flex items-start gap-4`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl">
        {number}
      </div>
      <div>
        <h3 className="text-2xl text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
