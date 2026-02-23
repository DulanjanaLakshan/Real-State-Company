import { motion } from 'motion/react';
import { Users, Globe, Shield, Compass, Leaf, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const LEADERSHIP = [
  {
    name: "Elena Rodriguez",
    title: "Chief Executive Officer",
    bio: "25 years of global real estate experience. Previously at Blackstone and Carlyle.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    name: "James Sterling",
    title: "Chief Investment Officer",
    bio: "Led over $15B in transactions across Europe and Asia.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    title: "Head of Asia Pacific",
    bio: "Expert in cross-border capital flows and development.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    name: "David Okafor",
    title: "Head of Sustainability",
    bio: "Pioneering green building standards for the portfolio.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop"
  }
];

const MILESTONES = [
  { year: "1986", title: "Founded in Chicago", desc: "Started as a boutique advisory firm." },
  { year: "1995", title: "London Office Opens", desc: "First international expansion." },
  { year: "2003", title: "Separate Accounts", desc: "Launched platform for institutional investors." },
  { year: "2012", title: "Asia Expansion", desc: "Opened Singapore regional HQ." },
  { year: "2020", title: "Net Zero Commitment", desc: "Pledged to be carbon neutral by 2040." },
  { year: "2026", title: "$50B AUM", desc: "Reached significant milestone in assets." }
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[#0A1928]/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Building on 40 Years of Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            ATLAS Capital is a global real estate investment firm with $47 billion in assets under management across 22 countries.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#050C14]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">Our History</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />
            
            <div className="space-y-12 md:space-y-24">
              {MILESTONES.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`md:flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                      <span className="text-[#FFD100] font-display font-bold text-6xl opacity-20 mb-2 block">{milestone.year}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-[#FFD100] rounded-full relative z-10 shadow-[0_0_20px_rgba(255,209,0,0.5)] hidden md:block" />
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[#0A1928]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1928] via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-[#FFD100] text-xs uppercase tracking-widest mb-3">{leader.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-[#1B4D3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="text-[#FFD100]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Expertise</h3>
              <p className="text-white/70 leading-relaxed">
                On-the-ground teams in 14 major markets, providing deep local knowledge and access to off-market opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-[#FFD100]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Institutional Rigor</h3>
              <p className="text-white/70 leading-relaxed">
                Disciplined underwriting, robust risk management, and best-in-class reporting for our global investor base.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-[#FFD100]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainable Value</h3>
              <p className="text-white/70 leading-relaxed">
                ESG integration across the entire investment lifecycle, from acquisition to disposition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24 bg-[#0A1928]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            We're looking for curious, collaborative, and driven professionals to help us build the future of real estate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {['Investment Associate - London', 'Asset Manager - New York', 'Data Scientist - Singapore'].map((job, index) => (
              <div key={index} className="bg-[#050C14] p-6 rounded-xl border border-white/5 hover:border-[#FFD100] transition-colors cursor-pointer group text-left">
                <h4 className="text-white font-bold mb-2 group-hover:text-[#FFD100] transition-colors">{job}</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest flex items-center gap-2">
                  Apply Now <ArrowRight size={12} />
                </p>
              </div>
            ))}
          </div>
          
          <button className="bg-transparent border border-[#FFD100] text-[#FFD100] px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-[#FFD100] hover:text-[#0A1928] transition-colors">
            View All Openings
          </button>
        </div>
      </section>
    </Layout>
  );
}
