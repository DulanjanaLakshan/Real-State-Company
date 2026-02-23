import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1; // Slower progress
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0A1928] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <div className="relative w-64 h-64 mb-12">
        {/* Building Wireframe Animation */}
        <motion.div
          className="absolute inset-0 border-2 border-[#FFD100]/20"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#FFD100]/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
        
        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD100] rounded-full"
            initial={{ 
              x: Math.random() * 256, 
              y: 256, 
              opacity: 0 
            }}
            animate={{ 
              y: Math.random() * 256, 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ 
              duration: 2 + Math.random(), 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-[#FFD100]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="h-6 overflow-hidden text-center">
        <AnimatePresence mode="wait">
          {progress < 30 && (
            <motion.p
              key="indexing"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-[#7F8C8D] text-xs uppercase tracking-widest font-mono"
            >
              Indexing Global Markets...
            </motion.p>
          )}
          {progress >= 30 && progress < 70 && (
            <motion.p
              key="analyzing"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-[#7F8C8D] text-xs uppercase tracking-widest font-mono"
            >
              Analyzing Cap Rates...
            </motion.p>
          )}
          {progress >= 70 && (
            <motion.p
              key="scanning"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-[#7F8C8D] text-xs uppercase tracking-widest font-mono"
            >
              Scanning Development Opportunities...
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <motion.h1
        className="absolute bottom-12 text-white/20 font-display text-[10rem] font-bold tracking-tighter select-none pointer-events-none whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        ATLAS CAPITAL
      </motion.h1>
    </motion.div>
  );
}
