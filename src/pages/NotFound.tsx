import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Compass, Search, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1928] flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(#1B4D3E 1px, transparent 1px), linear-gradient(90deg, #1B4D3E 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="relative z-10 text-center max-w-2xl px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative inline-block"
        >
          <h1 className="text-9xl font-display font-bold text-white opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass size={120} className="text-[#FFD100] animate-spin-slow" />
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-display font-bold text-white mb-4"
        >
          Address Not Found
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg mb-12"
        >
          The building you're looking for isn't in our portfolio. But we have 83 others that might interest you.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-6"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search available properties..." 
              className="w-full bg-[#050C14] border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-[#FFD100] transition-colors"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link 
              to="/" 
              className="bg-[#FFD100] text-[#0A1928] px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Return Home
            </Link>
            <Link 
              to="/listings" 
              className="border border-white/20 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A1928] transition-colors flex items-center justify-center gap-2"
            >
              Explore Portfolio <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10 text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Metaverse Preview</p>
            <div className="inline-block p-4 bg-white rounded-xl">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://atlas-capital.com/ar-experience" 
                alt="AR Experience QR Code" 
                className="w-24 h-24 opacity-80"
              />
            </div>
            <p className="text-gray-500 text-xs mt-4">Scan to visualize potential development</p>
          </div>
        </motion.div>
      </div>
      
      {/* Crane Animation (Simplified) */}
      <motion.div 
        className="absolute top-20 right-20 hidden lg:block opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1 h-32 bg-white/20 mx-auto" />
        <div className="w-32 h-1 bg-white/20" />
        <div className="w-1 h-16 bg-white/20 absolute right-0 top-0" />
      </motion.div>
    </div>
  );
}
