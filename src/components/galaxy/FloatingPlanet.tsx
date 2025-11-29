import { motion } from 'motion/react';

interface FloatingPlanetProps {
  size?: number;
  color?: string;
  duration?: number;
  delay?: number;
  x?: string;
  y?: string;
}

export function FloatingPlanet({
  size = 100,
  color = 'purple',
  duration = 20,
  delay = 0,
  x = '10%',
  y = '20%',
}: FloatingPlanetProps) {
  const gradients = {
    purple: 'from-purple-500/40 to-pink-500/40',
    blue: 'from-blue-500/40 to-cyan-500/40',
    orange: 'from-orange-500/40 to-red-500/40',
    green: 'from-green-500/40 to-emerald-500/40',
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${gradients[color as keyof typeof gradients]} blur-xl`}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
