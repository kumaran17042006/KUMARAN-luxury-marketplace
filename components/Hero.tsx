import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] w-full bg-gray-900 mt-20">
      {/* Background Media */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop" 
          alt="Luxury Car Lifestyle" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">
          The World's Luxury Marketplace
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 font-light max-w-2xl">
          Discover thousands of the finest cars from trusted dealers around the globe.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white rounded-lg p-2 flex flex-col md:flex-row shadow-2xl">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 px-3">Make or Model</label>
                <input 
                    type="text" 
                    placeholder="e.g. Kumaran 750S" 
                    className="w-full px-3 text-gray-900 placeholder-gray-400 focus:outline-none font-medium"
                />
            </div>
            <div className="flex-1 p-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 px-3">Location</label>
                 <select className="w-full px-3 text-gray-900 focus:outline-none bg-transparent font-medium">
                    <option>Anywhere</option>
                    <option>United States</option>
                    <option>Europe</option>
                    <option>Middle East</option>
                 </select>
            </div>
            <button className="bg-black text-white px-8 py-4 rounded md:rounded-r-lg font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Search size={18} /> Search
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;