import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Users } from 'lucide-react';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="bg-[#0A1928] min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="lg:w-3/5 p-12 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Let's Talk Real Estate</h1>
            <p className="text-xl text-gray-400 mb-12 max-w-xl">
              Whether you're looking to acquire, dispose, partner, or simply explore opportunities, our team is ready to assist.
            </p>
            
            <form className="space-y-8 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FFD100] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Last Name *</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FFD100] transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email *</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FFD100] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FFD100] transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">I am a</label>
                  <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FFD100] transition-colors appearance-none">
                    <option className="bg-[#0A1928]">Investor</option>
                    <option className="bg-[#0A1928]">Broker</option>
                    <option className="bg-[#0A1928]">Developer</option>
                    <option className="bg-[#0A1928]">Service Provider</option>
                    <option className="bg-[#0A1928]">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Interest</label>
                  <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FFD100] transition-colors appearance-none">
                    <option className="bg-[#0A1928]">Acquisitions</option>
                    <option className="bg-[#0A1928]">Dispositions</option>
                    <option className="bg-[#0A1928]">Partnership</option>
                    <option className="bg-[#0A1928]">Research</option>
                    <option className="bg-[#0A1928]">General Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FFD100] transition-colors resize-none"
                />
              </div>
              
              <div className="flex items-center gap-3">
                <input type="checkbox" id="subscribe" className="accent-[#FFD100] w-4 h-4" />
                <label htmlFor="subscribe" className="text-sm text-gray-400">Subscribe to market insights and weekly briefs</label>
              </div>
              
              <button className="bg-[#FFD100] text-[#0A1928] px-12 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white transition-colors w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Right Side - Info */}
        <div className="lg:w-2/5 bg-[#050C14] border-l border-white/5 p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
          
          <div className="relative z-10 space-y-12">
            <div>
              <h3 className="text-[#FFD100] font-bold uppercase tracking-widest mb-6 text-sm">Global Headquarters</h3>
              <p className="text-2xl font-display font-bold text-white mb-2">New York</p>
              <p className="text-gray-400 leading-relaxed">
                425 Lexington Avenue, 45th Floor<br />
                New York, NY 10017<br />
                United States
              </p>
              <p className="text-white mt-4 font-mono">+1 (212) 555-8900</p>
            </div>
            
            <div>
              <h3 className="text-[#FFD100] font-bold uppercase tracking-widest mb-6 text-sm">Regional Hubs</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-bold mb-1">London</p>
                  <p className="text-gray-500 text-sm">EMEA HQ</p>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Singapore</p>
                  <p className="text-gray-500 text-sm">APAC HQ</p>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Chicago</p>
                  <p className="text-gray-500 text-sm">Americas</p>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Dubai</p>
                  <p className="text-gray-500 text-sm">Middle East</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-[#FFD100] font-bold uppercase tracking-widest mb-6 text-sm">Direct Lines</h3>
              <div className="space-y-4">
                <a href="mailto:press@atlascapital.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Mail size={18} className="text-[#FFD100]" />
                  <span className="group-hover:underline">press@atlascapital.com</span>
                </a>
                <a href="mailto:ir@atlascapital.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Users size={18} className="text-[#FFD100]" />
                  <span className="group-hover:underline">ir@atlascapital.com</span>
                </a>
                <a href="mailto:careers@atlascapital.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Users size={18} className="text-[#FFD100]" />
                  <span className="group-hover:underline">careers@atlascapital.com</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-12 pt-12 border-t border-white/10 flex gap-6">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFD100] hover:text-[#0A1928] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFD100] hover:text-[#0A1928] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FFD100] hover:text-[#0A1928] transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
