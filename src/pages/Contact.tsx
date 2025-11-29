import { motion } from 'motion/react';
import { GalaxyBackground } from '../components/galaxy/GalaxyBackground';
import { FloatingPlanet } from '../components/galaxy/FloatingPlanet';
import { Mail, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@nomadly.lol');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GalaxyBackground />
      <FloatingPlanet size={130} color="purple" duration={20} x="15%" y="10%" />
      <FloatingPlanet size={100} color="blue" duration={25} delay={3} x="75%" y="70%" />

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400">
              Have a question or want to collaborate? Reach out!
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-10 rounded-2xl bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/30 backdrop-blur-sm"
          >
            {/* Email Section */}
            <div className="text-center mb-12">
              <Mail className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl text-white mb-4">Email Me</h2>
              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 hover:border-purple-500/60 transition-all"
              >
                <span className="text-2xl text-purple-300 group-hover:text-purple-200 transition-colors">
                  contact@nomadly.lol
                </span>
                <Send className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </button>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-400"
                >
                  ✓ Email copied to clipboard!
                </motion.div>
              )}
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-purple-500/20">
              <InfoCard
                icon={MapPin}
                title="Location"
                description="Working remotely from anywhere"
              />
              <InfoCard
                icon={Clock}
                title="Response Time"
                description="Usually within 24-48 hours"
              />
            </div>
          </motion.div>

          {/* Social Links (Optional - you can add these later) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-6">Or connect with me on</p>
            <div className="flex items-center justify-center gap-6">
              {/* Add your social links here when ready */}
              <SocialLink name="GitHub" href="#" />
              <SocialLink name="LinkedIn" href="#" />
              <SocialLink name="Twitter" href="#" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: any;
  title: string;
  description: string;
}

function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
      <Icon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
      <div>
        <h3 className="text-lg text-white mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  name: string;
  href: string;
}

function SocialLink({ name, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="px-6 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20 text-purple-300 hover:bg-slate-800/70 hover:border-purple-500/40 transition-all"
    >
      {name}
    </a>
  );
}
