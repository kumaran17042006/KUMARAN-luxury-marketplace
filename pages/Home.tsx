import React from 'react';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import FadeInSection from '../components/FadeInSection';
import { CarModel } from '../types';
import { ArrowRight } from 'lucide-react';

// Mock Data - Marketplace Style
const listings: CarModel[] = [
  {
    id: '1',
    name: 'Kumaran Artura Spider',
    year: '2025',
    price: '$285,000',
    imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop',
    category: 'Convertible',
    location: 'Beverly Hills, California, USA',
    dealer: 'Kumaran Beverly Hills',
    specs: { engine: 'V6 Hybrid', horsepower: 700, acceleration: '3.0' },
    featured: true
  },
  {
    id: '2',
    name: 'Kumaran 750S Coupe',
    year: '2024',
    price: '$345,500',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop',
    category: 'Coupe',
    location: 'Miami, Florida, USA',
    dealer: 'Prestige Imports',
    specs: { engine: 'V8 Twin Turbo', horsepower: 750, acceleration: '2.8' },
    featured: true
  },
  {
    id: '3',
    name: 'Kumaran GTS',
    year: '2025',
    price: 'Price on Request',
    imageUrl: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=2564&auto=format&fit=crop',
    category: 'Grand Tourer',
    location: 'London, United Kingdom',
    dealer: 'Kumaran London',
    specs: { engine: 'V8 Twin Turbo', horsepower: 635, acceleration: '3.2' },
    featured: false
  },
  {
    id: '4',
    name: 'Kumaran Solus GT',
    year: '2023',
    price: '$3,500,000',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2647&auto=format&fit=crop',
    category: 'Hypercar',
    location: 'Dubai, UAE',
    dealer: 'VIP Motors',
    specs: { engine: 'V10 NA', horsepower: 840, acceleration: '2.5' },
    featured: true
  },
  {
    id: '5',
    name: 'Kumaran P1',
    year: '2015',
    price: '$1,800,000',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2670&auto=format&fit=crop',
    category: 'Hypercar',
    location: 'Tokyo, Japan',
    dealer: 'Bingoports',
    specs: { engine: 'V8 Hybrid', horsepower: 903, acceleration: '2.8' },
    featured: true
  },
  {
    id: '6',
    name: 'Kumaran 720S Spider',
    year: '2021',
    price: '$240,000',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop',
    category: 'Convertible',
    location: 'Monaco',
    dealer: 'Monaco Luxury Group',
    specs: { engine: 'V8 Twin Turbo', horsepower: 720, acceleration: '2.9' },
    featured: false
  }
];

const categories = [
  { name: 'Convertibles', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80' },
  { name: 'Coupes', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=500&q=80' },
  { name: 'SUVs', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=80' },
  { name: 'Classic Cars', image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=500&q=80' },
];

const Home: React.FC = () => {
  return (
    <div className="bg-black">
      <Hero />

      {/* Categories Row */}
      <section className="bg-[#f6f6f6] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeInSection direction="up">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Browse by Category</h2>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, index) => (
              <FadeInSection key={cat.name} delay={index * 100} direction="up">
                <div className="relative group cursor-pointer overflow-hidden rounded-sm h-32 md:h-40">
                  <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="text-white font-serif font-bold text-lg transform transition-transform duration-300 group-hover:scale-110">{cat.name}</span>
                  </div>
                  <div className="absolute inset-4 border border-white/0 group-hover:border-white/50 transition-colors duration-500"></div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-[#f6f6f6] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeInSection direction="up">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Trending Listings</h2>
                <p className="text-gray-500 text-sm">The most viewed cars on Kumaran today.</p>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
                View All <ArrowRight size={16} />
              </button>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((car, index) => (
              <FadeInSection key={car.id} delay={index * 50} direction="up">
                <CarCard car={car} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial / Stories */}
      <section className="bg-white py-20 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeInSection direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Kumaran Stories</h2>
              <p className="text-gray-500 text-lg font-light">
                Inside the world of luxury, performance, and craftsmanship.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeInSection direction="right" delay={200}>
                <article className="group cursor-pointer">
                  <div className="overflow-hidden rounded-sm mb-4">
                    <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2670&auto=format&fit=crop" loading="lazy" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" alt="Story 1" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Market Analysis</span>
                  <h3 className="font-serif text-2xl font-bold mt-2 text-gray-900 transition-colors">
                    <span className="bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                      The Rise of the Hybrid Supercar: Investment Value in 2025
                    </span>
                  </h3>
                </article>
              </FadeInSection>
              <FadeInSection direction="right" delay={300}>
                <article className="group cursor-pointer">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Lifestyle</span>
                  <h3 className="font-serif text-2xl font-bold mt-2 text-gray-900 transition-colors">
                    <span className="bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                      Top 5 Coastal Drives in the Mediterranean
                    </span>
                  </h3>
                </article>
              </FadeInSection>
            </div>
            <FadeInSection direction="left" delay={400} className="h-full">
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-sm group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2670&auto=format&fit=crop" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main Story" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">Editor's Pick</span>
                  <h3 className="font-serif text-3xl font-bold text-white mb-2">
                    Design Legacy: 60 Years of Kumaran
                  </h3>
                  <p className="text-white/90 line-clamp-2 mb-6 transition-all duration-300 group-hover:mb-2">
                    A deep dive into the archives to see how racing DNA shaped the modern hypercar.
                  </p>
                  <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
                    <span className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1">
                      Read Story <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Aspirational CTA */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img
            src="https://images.unsplash.com/photo-1627453308117-91f868c68832?q=80&w=2574&auto=format&fit=crop"
            alt="Background"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <FadeInSection direction="up">
            <h2 className="font-serif text-5xl md:text-7xl text-white font-bold mb-8 tracking-tight">
              Your Legacy Awaits
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
              Experience the pinnacle of automotive engineering. Configure your Kumaran today.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Configure Yours
              </button>
              <button className="border border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Locate Retailer
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Dealer/Brand Strip */}
      <section className="py-16 bg-[#f6f6f6]">
        <div className="container mx-auto px-6 text-center">
          <FadeInSection direction="up">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by World's Best Dealers</h4>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-serif font-bold text-gray-800">Miller Motorcars</span>
              <span className="text-2xl font-serif font-bold text-gray-800">O'Gara Coach</span>
              <span className="text-2xl font-serif font-bold text-gray-800">H.R. Owen</span>
              <span className="text-2xl font-serif font-bold text-gray-800">Al Tayer</span>
              <span className="text-2xl font-serif font-bold text-gray-800">Bingoports</span>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Home;