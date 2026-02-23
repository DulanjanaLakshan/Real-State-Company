import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Download, Calendar, Ruler, Users, Car, CheckCircle, Play } from 'lucide-react';
import Layout from '../components/Layout';

const PROPERTY = {
  id: 1,
  name: "One Manhattan West",
  address: "425 Park Avenue, New York, NY 10022",
  price: "$1.95 Billion",
  type: "Office",
  status: "Available",
  capRate: "5.2% (Pro-forma)",
  sqft: "890,000",
  rentableSqft: "845,000",
  floors: 47,
  yearBuilt: "2022",
  occupancy: "92%",
  avgRent: "$145/sq ft",
  parking: "240 spaces",
  zoning: "C5-5",
  description: "A defining structure in the Manhattan skyline, One Manhattan West offers 67 stories of state-of-the-art office space. Designed by Skidmore, Owings & Merrill, this trophy asset features column-free floor plates, floor-to-ceiling glass, and unparalleled views of the city.",
  images: [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
  ],
  tenants: [
    { name: "Goldman Sachs", sqft: "245,000", leaseEnd: "2032" },
    { name: "Kirkland & Ellis", sqft: "180,000", leaseEnd: "2033" },
    { name: "Blackstone", sqft: "120,000", leaseEnd: "2030" }
  ]
};

export default function PropertyDetail() {
  const { id } = useParams();
  // In a real app, fetch property by ID. For now, use static data.

  return (
    <Layout>
      {/* Hero Carousel */}
      <div className="relative h-[60vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${PROPERTY.images[0]}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1928] via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="flex gap-4 mb-4">
                <span className="bg-[#FFD100] text-[#0A1928] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  {PROPERTY.type}
                </span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-green-500/20">
                  {PROPERTY.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">{PROPERTY.name}</h1>
              <p className="text-xl text-gray-300 flex items-center gap-2">
                <MapPin size={20} className="text-[#FFD100]" /> {PROPERTY.address}
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Guide Price</p>
              <p className="text-4xl md:text-5xl font-mono font-bold text-white">{PROPERTY.price}</p>
              <p className="text-[#FFD100] font-mono mt-2">{PROPERTY.capRate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A1928] min-h-screen py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#050C14] p-8 rounded-2xl border border-white/5">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Total Sq Ft</p>
                <p className="text-white font-mono text-lg">{PROPERTY.sqft}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Occupancy</p>
                <p className="text-white font-mono text-lg">{PROPERTY.occupancy}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Floors</p>
                <p className="text-white font-mono text-lg">{PROPERTY.floors}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Year Built</p>
                <p className="text-white font-mono text-lg">{PROPERTY.yearBuilt}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Investment Highlights</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                {PROPERTY.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FFD100]/10 p-3 rounded-full text-[#FFD100]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Prime Location</h4>
                    <p className="text-gray-400 text-sm">Park Avenue corridor, between 55th and 56th Streets.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#FFD100]/10 p-3 rounded-full text-[#FFD100]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Blue Chip Tenants</h4>
                    <p className="text-gray-400 text-sm">Top 5 tenants represent 45% of rent roll (all investment grade).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#FFD100]/10 p-3 rounded-full text-[#FFD100]">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">ESG Certified</h4>
                    <p className="text-gray-400 text-sm">LEED Platinum certified, 40% energy reduction vs. baseline.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#FFD100]/10 p-3 rounded-full text-[#FFD100]">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Recent Upgrades</h4>
                    <p className="text-gray-400 text-sm">Lobby renovation 2023, new HVAC systems, smart building sensors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Floor Plan Viewer Placeholder */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6">Interactive Floor Plan</h2>
              <div className="aspect-video bg-[#050C14] rounded-2xl border border-white/10 relative overflow-hidden group cursor-pointer flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-[#FFD100] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0A1928] shadow-lg shadow-[#FFD100]/20 group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                  <p className="text-white font-bold uppercase tracking-widest">Launch 3D Viewer</p>
                </div>
              </div>
            </div>

            {/* Rent Roll Table */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6">Major Tenants</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 px-4 text-gray-500 text-xs uppercase tracking-widest font-normal">Tenant</th>
                      <th className="py-4 px-4 text-gray-500 text-xs uppercase tracking-widest font-normal">Sq Ft</th>
                      <th className="py-4 px-4 text-gray-500 text-xs uppercase tracking-widest font-normal">Lease End</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROPERTY.tenants.map((tenant, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 text-white font-bold">{tenant.name}</td>
                        <td className="py-4 px-4 text-gray-300 font-mono">{tenant.sqft}</td>
                        <td className="py-4 px-4 text-gray-300 font-mono">{tenant.leaseEnd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-[#050C14] p-8 rounded-2xl border border-white/5 sticky top-24">
              <h3 className="text-xl font-display font-bold text-white mb-6">Interested in this property?</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Broker" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold">James Sterling</p>
                  <p className="text-gray-400 text-xs uppercase">Senior Managing Director</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-[#FFD100] text-[#0A1928] py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white transition-colors">
                  Schedule a Tour
                </button>
                <button className="w-full border border-white/20 text-white py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A1928] transition-colors">
                  Contact Broker
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-bold text-sm mb-4">Documents</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#FFD100] transition-colors group">
                      <Download size={16} />
                      <span className="text-sm group-hover:underline">Offering Memorandum</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#FFD100] transition-colors group">
                      <Download size={16} />
                      <span className="text-sm group-hover:underline">Floor Plans (PDF)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#FFD100] transition-colors group">
                      <Download size={16} />
                      <span className="text-sm group-hover:underline">Financials (XLS)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
