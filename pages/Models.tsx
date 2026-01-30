import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';

const models = [
  {
    id: '750s',
    name: 'Kumaran 750S',
    tagline: 'The New Benchmark',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop',
    specs: { power: '750 PS', speed: '332 km/h', acc: '2.8s' }
  },
  {
    id: 'artura',
    name: 'Kumaran Artura',
    tagline: 'The Full Force',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop',
    specs: { power: '700 PS', speed: '330 km/h', acc: '3.0s' }
  },
  {
    id: 'gts',
    name: 'Kumaran GTS',
    tagline: 'Supercar Driving. Everyday.',
    image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=2564&auto=format&fit=crop',
    specs: { power: '635 PS', speed: '326 km/h', acc: '3.2s' }
  },
   {
    id: 'solus',
    name: 'Kumaran Solus GT',
    tagline: 'Gaming to Reality',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2647&auto=format&fit=crop',
    specs: { power: '840 PS', speed: '350+ km/h', acc: '2.5s' }
  }
];

const Models: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="py-20 text-center container mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">Our Models</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Discover a range of handcrafted luxury cars, where performance meets artistry.
        </p>
      </div>

      {/* Model List */}
      <div className="space-y-1">
        {models.map((model, index) => (
            <section key={model.id} className={`relative h-[80vh] w-full flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="absolute inset-0">
                    <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div className="relative z-10 w-full md:w-1/2 p-12 md:p-24 text-white">
                    <span className="block text-[#ff6b00] font-bold uppercase tracking-widest text-xs mb-4">{model.tagline}</span>
                    <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">{model.name}</h2>
                    
                    <div className="grid grid-cols-3 gap-8 border-t border-white/30 pt-8 mb-10 max-w-md">
                        <div>
                            <span className="block text-2xl font-serif">{model.specs.power}</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-80">Power</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-serif">{model.specs.acc}</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-80">0-100 km/h</span>
                        </div>
                         <div>
                            <span className="block text-2xl font-serif">{model.specs.speed}</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-80">Max Speed</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                            Explore
                        </button>
                        <button className="border border-white text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                            <Settings size={16} /> Configure
                        </button>
                    </div>
                </div>
            </section>
        ))}
      </div>
    </div>
  );
};

export default Models;