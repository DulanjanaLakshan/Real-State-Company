import { motion } from 'motion/react';
import { ArrowRight, Play, TrendingUp, Building2, Globe, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const TICKER_ITEMS = [
  "US 10-Year Treasury: 4.32%",
  "NCREIF Property Index: +2.1%",
  "Vacancy Rates: Office 18.2% | Industrial 4.5%",
  "REIT Index: 1,245.67 ▲",
  "Global AUM: $47.2B",
  "Assets Under Management: 184 Properties",
  "Markets: 22 Countries",
  "Average Cap Rate: 5.8%"
];

const FEATURED_ASSETS = [
  {
    id: 1,
    name: "The Shard",
    location: "London",
    price: "£1.2B",
    occupancy: "95%",
    type: "Trophy Asset",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-2 row-span-2"
  },
  {
    id: 2,
    name: "Berlin Tech Hub",
    location: "Berlin",
    price: "€450M",
    occupancy: "Q4 2026 Delivery",
    type: "Development",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 row-span-1"
  },
  {
    id: 3,
    name: "Miami Deco Hotel",
    location: "Miami",
    price: "$275M",
    occupancy: "12% Target IRR",
    type: "Opportunistic",
    image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1935&auto=format&fit=crop",
    colSpan: "col-span-1 row-span-1"
  }
];

const THESES = [
  { title: "Life Sciences", desc: "Lab space demand outstripping supply in key clusters.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop" },
  { title: "Last-Mile Logistics", desc: "Urban infill warehouses for rapid delivery.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" },
  { title: "Data Centers", desc: "Infrastructure powering the AI revolution.", image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2074&auto=format&fit=crop" },
  { title: "Affordable Housing", desc: "Addressing the global housing crisis with sustainable solutions.", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop" },
  { title: "Climate-Adaptive", desc: "Resilient developments for a changing world.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop')" }}
        >
          {/* Parallax effect could go here */}
        </div>
        
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight"
          >
            WHERE CAPITAL <br />
            MEETS <span className="text-[#FFD100]">CONCRETE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 font-light"
          >
            Global commercial real estate investment, development, and advisory for the modern era.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <Link 
              to="/listings" 
              className="bg-[#FFD100] text-[#0A1928] px-8 py-4 rounded-sm font-display font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Explore Portfolio <ArrowRight size={20} />
            </Link>
            <button className="border border-white text-white px-8 py-4 rounded-sm font-display font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-[#0A1928] transition-colors flex items-center justify-center gap-2 group">
              <Play size={20} className="fill-current group-hover:text-[#0A1928]" /> Watch Presentation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-[#0A1928] border-y border-white/10 py-4 overflow-hidden whitespace-nowrap">
        <motion.div 
          className="inline-block"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {TICKER_ITEMS.map((item, index) => (
            <span key={index} className="text-[#FFD100] font-mono text-sm mx-8 uppercase tracking-widest">
              {item}
            </span>
          ))}
          {TICKER_ITEMS.map((item, index) => (
            <span key={`dup-${index}`} className="text-[#FFD100] font-mono text-sm mx-8 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Featured Assets */}
      <section className="py-24 bg-[#0A1928]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Featured Assets</h2>
              <p className="text-gray-400 max-w-xl">Curated selection of our most prestigious properties and developments.</p>
            </div>
            <Link to="/listings" className="text-[#FFD100] uppercase tracking-widest text-sm font-bold hover:underline flex items-center gap-2">
              View All Properties <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[800px]">
            {FEATURED_ASSETS.map((asset) => (
              <motion.div 
                key={asset.id}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer ${asset.colSpan}`}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${asset.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1928] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-[#FFD100] text-[#0A1928] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {asset.type}
                    </span>
                    <span className="text-white font-mono text-sm">{asset.price}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-1">{asset.name}</h3>
                  <p className="text-gray-300 mb-4 flex items-center gap-2"><Globe size={14} /> {asset.location}</p>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-4 mt-4 border-t border-white/20 pt-4">
                      <div>
                        <p className="text-gray-400 text-xs uppercase">Occupancy</p>
                        <p className="text-white font-mono">{asset.occupancy}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase">Status</p>
                        <p className="text-[#FFD100] font-mono">Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="py-24 bg-[#050C14] border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-8">Market Intelligence</h2>
            <div className="bg-[#0A1928] p-8 rounded-2xl border border-white/5 h-[400px] relative overflow-hidden group">
              {/* Simulated Heatmap */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,209,0,0.4),_transparent_50%)]" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_70%,_rgba(27,77,62,0.4),_transparent_50%)]" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">US Investment Volumes</h3>
                  <TrendingUp className="text-[#FFD100]" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">New York</span>
                    <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFD100] w-[85%]" />
                    </div>
                    <span className="text-white font-mono">$12.4B</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Los Angeles</span>
                    <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFD100] w-[65%]" />
                    </div>
                    <span className="text-white font-mono">$8.2B</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Austin</span>
                    <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#B87333] w-[45%]" />
                    </div>
                    <span className="text-white font-mono">$4.1B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0A1928] p-6 rounded-xl border border-white/5">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Global AUM</p>
                <p className="text-3xl font-display font-bold text-white">$47.2B</p>
              </div>
              <div className="bg-[#0A1928] p-6 rounded-xl border border-white/5">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Properties</p>
                <p className="text-3xl font-display font-bold text-white">184</p>
              </div>
              <div className="bg-[#0A1928] p-6 rounded-xl border border-white/5">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Markets</p>
                <p className="text-3xl font-display font-bold text-white">22</p>
              </div>
              <div className="bg-[#0A1928] p-6 rounded-xl border border-white/5">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Avg Cap Rate</p>
                <p className="text-3xl font-display font-bold text-[#FFD100]">5.8%</p>
              </div>
            </div>
            <Link to="/insights" className="text-white border-b border-[#FFD100] pb-1 self-start hover:text-[#FFD100] transition-colors">
              Access Full Research Portal
            </Link>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-24 bg-[#1B4D3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <Leaf className="text-[#FFD100] w-12 h-12" />
              <h2 className="text-4xl font-display font-bold text-white">Sustainable Future</h2>
            </div>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              We are committed to Net Zero Carbon by 2040. 100% of our new developments target LEED Platinum certification.
            </p>
            <button className="bg-white text-[#1B4D3E] px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-[#FFD100] transition-colors">
              View Sustainability Report
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Abstract 3D Green Building Representation */}
              <motion.div 
                className="absolute inset-0 border-4 border-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-8 border-4 border-[#FFD100]/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 className="text-white w-24 h-24 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Theses */}
      <section className="py-24 bg-[#0A1928]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-white mb-12">Investment Theses</h2>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x">
            {THESES.map((thesis, index) => (
              <div 
                key={index} 
                className="min-w-[300px] md:min-w-[400px] h-[500px] relative rounded-xl overflow-hidden snap-center group cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${thesis.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1928] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{thesis.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{thesis.desc}</p>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#FFD100] group-hover:border-[#FFD100] transition-colors">
                    <ArrowRight className="text-white group-hover:text-[#0A1928]" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
