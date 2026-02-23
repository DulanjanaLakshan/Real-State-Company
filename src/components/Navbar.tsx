import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { NAV_LINKS, ASSET_CLASSES, MARKETS } from '../constants';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5',
        scrolled ? 'bg-[#0A1928]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-widest text-white z-50">
          ATLAS <span className="text-[#FFD100]">CAPITAL</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#FFD100] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-white hover:text-[#FFD100]">
            <Search size={20} />
          </button>
          <button className="text-white hover:text-[#FFD100] flex items-center gap-2 text-xs uppercase tracking-widest">
            <Globe size={16} />
            <span>EN</span>
          </button>
          <Link
            to="/contact"
            className="bg-[#FFD100] text-[#0A1928] px-6 py-2 rounded-sm font-display font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
          >
            Invest With Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0A1928] z-40 flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-3xl font-display font-bold text-white hover:text-[#FFD100]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#FFD100] text-xs uppercase tracking-widest mb-4">Asset Classes</h4>
                <ul className="space-y-2">
                  {ASSET_CLASSES.slice(0, 5).map(item => (
                    <li key={item} className="text-gray-400 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#FFD100] text-xs uppercase tracking-widest mb-4">Markets</h4>
                <ul className="space-y-2">
                  {MARKETS.map(item => (
                    <li key={item} className="text-gray-400 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
