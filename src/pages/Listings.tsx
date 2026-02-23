import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Map, List, Grid, Search, X } from 'lucide-react';
import Layout from '../components/Layout';
import { ASSET_CLASSES, MARKETS } from '../constants';

const PROPERTIES = [
  {
    id: 1,
    name: "One Manhattan West",
    location: "Midtown West, New York, NY",
    price: "$1.95B",
    sqft: "1.2M",
    occupancy: "98%",
    capRate: "4.75%",
    yearBuilt: "2022",
    type: "Office",
    status: "Available",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Tech Square Cambridge",
    location: "Cambridge, MA",
    price: "$850M",
    sqft: "450K",
    occupancy: "100%",
    capRate: "5.1%",
    yearBuilt: "2019",
    type: "Life Sciences",
    status: "Under Offer",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Logistics Park Dallas",
    location: "Dallas, TX",
    price: "$120M",
    sqft: "800K",
    occupancy: "92%",
    capRate: "5.5%",
    yearBuilt: "2023",
    type: "Industrial",
    status: "Available",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "The Kensington",
    location: "London, UK",
    price: "£320M",
    sqft: "120K",
    occupancy: "88%",
    capRate: "4.2%",
    yearBuilt: "1920",
    type: "Hospitality",
    status: "Available",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Silicon Valley HQ",
    location: "San Jose, CA",
    price: "$450M",
    sqft: "300K",
    occupancy: "100%",
    capRate: "4.9%",
    yearBuilt: "2015",
    type: "Office",
    status: "Sold",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Berlin Mixed-Use",
    location: "Berlin, DE",
    price: "€210M",
    sqft: "250K",
    occupancy: "N/A",
    capRate: "N/A",
    yearBuilt: "2026",
    type: "Development",
    status: "Coming Soon",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Listings() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [selectedAssetClasses, setSelectedAssetClasses] = useState<string[]>([]);

  const toggleAssetClass = (cls: string) => {
    setSelectedAssetClasses(prev => 
      prev.includes(cls) ? prev.filter(c => c !== cls) : [...prev, cls]
    );
  };

  const filteredProperties = PROPERTIES.filter(p => 
    selectedAssetClasses.length === 0 || selectedAssetClasses.includes(p.type)
  );

  return (
    <Layout>
      <div className="bg-[#0A1928] min-h-screen">
        {/* Header */}
        <div className="bg-[#050C14] border-b border-white/10 py-8 sticky top-20 z-30">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-white">Active Opportunities</h1>
              <p className="text-gray-400 text-sm">{filteredProperties.length} properties currently available</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-[#0A1928] border border-white/10 rounded-sm px-3 py-2">
                <Search size={18} className="text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search location, asset..." 
                  className="bg-transparent text-white text-sm focus:outline-none w-48"
                />
              </div>
              
              <div className="flex bg-[#0A1928] border border-white/10 rounded-sm p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-sm transition-colors ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-sm transition-colors ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List size={18} />
                </button>
                <button className="p-2 rounded-sm text-gray-400 hover:text-white transition-colors">
                  <Map size={18} />
                </button>
              </div>

              <button 
                onClick={() => setFiltersOpen(!filtersOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm border transition-colors ${filtersOpen ? 'bg-[#FFD100] text-[#0A1928] border-[#FFD100]' : 'border-white/10 text-white hover:bg-white/5'}`}
              >
                <Filter size={18} /> Filters
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 flex gap-8">
          {/* Sidebar Filters */}
          <motion.aside 
            initial={false}
            animate={{ width: filtersOpen ? 280 : 0, opacity: filtersOpen ? 1 : 0 }}
            className="overflow-hidden flex-shrink-0"
          >
            <div className="w-[280px] pr-6 space-y-8">
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Asset Class</h3>
                <div className="space-y-2">
                  {ASSET_CLASSES.map(cls => (
                    <label key={cls} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${selectedAssetClasses.includes(cls) ? 'bg-[#FFD100] border-[#FFD100]' : 'border-gray-600 group-hover:border-white'}`}>
                        {selectedAssetClasses.includes(cls) && <div className="w-2 h-2 bg-[#0A1928]" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedAssetClasses.includes(cls)}
                        onChange={() => toggleAssetClass(cls)}
                      />
                      <span className={`text-sm ${selectedAssetClasses.includes(cls) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{cls}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Markets</h3>
                <div className="space-y-2">
                  {MARKETS.map(market => (
                    <label key={market} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-gray-600 rounded-sm group-hover:border-white" />
                      <span className="text-gray-400 text-sm group-hover:text-white">{market}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Investment Size</h3>
                <input type="range" className="w-full accent-[#FFD100]" />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>$10M</span>
                  <span>$2B+</span>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Grid */}
          <div className="flex-grow">
            {filteredProperties.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                <Search size={48} className="mb-4 opacity-20" />
                <p>No properties match current filters.</p>
                <button 
                  onClick={() => setSelectedAssetClasses([])}
                  className="mt-4 text-[#FFD100] hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" : "space-y-4"}>
                {filteredProperties.map(property => (
                  <motion.div 
                    key={property.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`bg-[#050C14] border border-white/5 rounded-xl overflow-hidden group hover:border-[#FFD100]/50 transition-colors ${viewMode === 'list' ? 'flex' : ''}`}
                  >
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-full' : 'h-64'}`}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${property.image}')` }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          property.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                          property.status === 'Under Offer' ? 'bg-yellow-500/20 text-yellow-400' :
                          property.status === 'Sold' ? 'bg-gray-500/20 text-gray-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {property.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[#FFD100] text-xs font-bold uppercase tracking-wider">{property.type}</span>
                        <span className="text-white font-mono font-bold">{property.price}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-[#FFD100] transition-colors">{property.name}</h3>
                      <p className="text-gray-400 text-sm mb-6 flex items-center gap-1"><Map size={14} /> {property.location}</p>
                      
                      <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                        <div>
                          <p className="text-gray-500 text-xs uppercase">Sq Ft</p>
                          <p className="text-white font-mono text-sm">{property.sqft}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs uppercase">Occupancy</p>
                          <p className="text-white font-mono text-sm">{property.occupancy}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs uppercase">Cap Rate</p>
                          <p className="text-white font-mono text-sm">{property.capRate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs uppercase">Year Built</p>
                          <p className="text-white font-mono text-sm">{property.yearBuilt}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
