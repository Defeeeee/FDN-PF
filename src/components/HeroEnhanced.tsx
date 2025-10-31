import { motion } from 'motion/react';
import Hero from '../imports/Hero';

export function HeroEnhanced() {
  return (
    <div className="relative size-full">
      {/* Subtle animated background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(ellipse at 25% 50%, rgba(35, 175, 209, 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Main Hero content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="relative size-full"
      >
        <Hero />
      </motion.div>

      {/* Floating accent particles */}
      <motion.div
        className="absolute top-[35%] left-[15%] w-[500px] h-[500px] pointer-events-none"
        animate={{ 
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(35, 175, 209, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        className="absolute top-[20%] right-[15%] w-[400px] h-[400px] pointer-events-none"
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.15, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          background: 'radial-gradient(circle, rgba(177, 229, 242, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}
