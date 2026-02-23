import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050C14] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <Link to="/" className="text-3xl font-display font-bold tracking-widest text-white mb-6 block">
            ATLAS <span className="text-[#FFD100]">CAPITAL</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Building Tomorrow's Skyline. Global commercial real estate investment, development, and advisory.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#FFD100] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#FFD100] transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#FFD100] transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-[#FFD100] text-xs font-bold uppercase tracking-widest mb-6">Asset Classes</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.assetClasses.map((item) => (
              <li key={item}>
                <Link to="/listings" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFD100] text-xs font-bold uppercase tracking-widest mb-6">Markets</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.markets.map((item) => (
              <li key={item}>
                <Link to="/listings" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFD100] text-xs font-bold uppercase tracking-widest mb-6">Insights</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.insights.map((item) => (
              <li key={item}>
                <Link to="/insights" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFD100] text-xs font-bold uppercase tracking-widest mb-6">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">Receive weekly market briefs and investment opportunities.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD100] transition-colors rounded-sm"
            />
            <button
              type="submit"
              className="bg-[#FFD100] text-[#0A1928] px-4 py-3 text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} ATLAS Capital. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}
