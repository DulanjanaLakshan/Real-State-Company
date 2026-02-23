import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Play, Mic, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const INSIGHTS = [
  {
    id: 1,
    title: "The Great Repricing: Opportunities in Dislocation",
    category: "Report",
    date: "Feb 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Industrial Outdoor Storage: The Hidden Gem",
    category: "Report",
    date: "Jan 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Tour of our Paris Development",
    category: "Video",
    date: "Jan 2026",
    duration: "4:32",
    views: "2.4K",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Investing in Data Centers with Sarah Chen",
    category: "Podcast",
    date: "Dec 2025",
    duration: "38 min",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2074&auto=format&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "Weekly Cap Rate Dashboard",
    category: "Market Update",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Life Sciences: The New Core",
    category: "Report",
    date: "Nov 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
    featured: false
  }
];

const FILTERS = ['All', 'Reports', 'Market Updates', 'Webinars', 'Podcasts', 'Videos'];

export default function Insights() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredInsights = activeFilter === 'All' 
    ? INSIGHTS 
    : INSIGHTS.filter(insight => insight.category.includes(activeFilter.slice(0, -1))); // Simple plural handling

  return (
    <Layout>
      <div className="bg-[#0A1928] min-h-screen">
        {/* Header */}
        <div className="bg-[#050C14] py-20 border-b border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Market Intelligence</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Data-driven insights from our global research team.
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search reports, articles, podcasts..." 
                className="w-full bg-[#0A1928] border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-[#FFD100] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Featured Research */}
        <section className="py-16 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] bg-gray-800 relative">
                <img 
                  src={INSIGHTS[0].image} 
                  alt={INSIGHTS[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1928] via-transparent to-transparent opacity-80" />
              </div>
            </div>
            
            <div>
              <span className="text-[#FFD100] text-xs font-bold uppercase tracking-widest mb-4 block">Featured Report</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                {INSIGHTS[0].title}
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our annual outlook on capital markets, sector trends, and top investment themes for the coming year. Discover where the smart money is moving.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-2"><Calendar size={16} /> {INSIGHTS[0].date}</span>
                <span className="flex items-center gap-2"><FileText size={16} /> {INSIGHTS[0].readTime}</span>
              </div>
              
              <div className="flex gap-4">
                <button className="bg-[#FFD100] text-[#0A1928] px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-white transition-colors">
                  Download Report
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A1928] transition-colors">
                  Read Summary
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeFilter === filter 
                    ? 'bg-[#FFD100] text-[#0A1928]' 
                    : 'bg-[#050C14] border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.slice(1).map(insight => (
              <motion.div 
                key={insight.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] bg-gray-800 rounded-xl overflow-hidden mb-6 relative">
                  <img 
                    src={insight.image} 
                    alt={insight.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  
                  {insight.category === 'Video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={20} className="text-white fill-current" />
                      </div>
                    </div>
                  )}
                  
                  {insight.category === 'Podcast' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mic size={20} className="text-white" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[#FFD100] text-xs font-bold uppercase tracking-widest">{insight.category}</span>
                  <span className="text-gray-500 text-xs">{insight.date}</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#FFD100] transition-colors leading-tight">
                  {insight.title}
                </h3>
                
                <div className="flex items-center text-xs text-gray-500 gap-4">
                  {insight.readTime && <span>{insight.readTime}</span>}
                  {insight.duration && <span>{insight.duration}</span>}
                  {insight.views && <span>{insight.views} views</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Subscribe */}
        <section className="py-24 bg-[#050C14] border-t border-white/5">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Stay Ahead of the Curve</h2>
            <p className="text-gray-400 mb-8">
              Join 15,000+ institutional investors who receive our weekly market intelligence.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="flex-grow bg-[#0A1928] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#FFD100] rounded-sm"
              />
              <button className="bg-[#FFD100] text-[#0A1928] px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-sm whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function Calendar({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
