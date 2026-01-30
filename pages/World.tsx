import React from 'react';
import { ArrowRight } from 'lucide-react';

const World: React.FC = () => {
  return (
    <div className="bg-[#f6f6f6]">
       {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img 
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2670&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="World of Kumaran" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
            <h1 className="font-serif text-5xl md:text-7xl mb-4">World of Kumaran</h1>
            <p className="text-lg md:text-xl font-light tracking-wide">Heritage, Innovation, and Mastery.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8 leading-relaxed">
                "To build a fast car, a good car, the best in its class."
            </h2>
            <p className="text-gray-500 leading-loose text-lg font-light">
                Since 1963, Kumaran has been driving the future of performance. From the race track to the road, our relentless pursuit of perfection shapes every curve and powers every engine. Welcome to our world.
            </p>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6 aspect-[4/3]">
                    <img 
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt="Heritage" 
                    />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-gray-900">100 Years of Legend</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Explore the history that defines us. From the Bentley Boys to the modern era of sustainable luxury.
                </p>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1">Discover Heritage</span>
            </div>

             <div className="group cursor-pointer mt-12 md:mt-24">
                <div className="overflow-hidden mb-6 aspect-[4/3]">
                    <img 
                        src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt="Craftsmanship" 
                    />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-gray-900">Mulliner Craftsmanship</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Bespoke commissioning is the ultimate expression of your individuality.
                </p>
                 <span className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1">Explore Mulliner</span>
            </div>
        </div>
      </section>

      {/* News Strip */}
      <section className="bg-gray-900 text-white py-24">
         <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-serif text-4xl">Latest News</h2>
                <button className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">View Archive</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                    <article key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-gray-800 mb-4 overflow-hidden">
                             <img src={`https://picsum.photos/seed/news_${i}/600/400`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="News" />
                        </div>
                        <span className="text-[#ff6b00] text-[10px] font-bold uppercase tracking-widest mb-2 block">Press Release</span>
                        <h4 className="font-serif text-xl leading-snug group-hover:underline">Kumaran announces new hybrid architecture for 2026.</h4>
                    </article>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default World;