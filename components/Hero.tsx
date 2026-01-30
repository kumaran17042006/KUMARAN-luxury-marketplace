import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);

    // Parallax effect on scroll
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 96,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden -mt-24">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Sports Car"
          className={`w-full h-[120%] object-cover transition-all duration-[2000ms] ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
        />
        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      </div>

      {/* Ambient Light Effect */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[100px] transition-opacity duration-[3000ms] ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Brand Badge */}
        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
          <span className="inline-block px-4 py-2 border border-white/30 text-white/80 text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
            Established 1963
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="block">Beyond</span>
          <span className="block italic font-light text-amber-200">Performance</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-white/80 text-lg md:text-xl lg:text-2xl font-light max-w-2xl mb-12 leading-relaxed transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          Where engineering excellence meets artistic vision.
          <span className="hidden md:inline"> Every Kumaran is a masterpiece.</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:bg-amber-100">
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-amber-200 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
          <button className="px-8 py-4 border border-white/50 text-white font-bold uppercase tracking-widest text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300">
            Our Heritage
          </button>
        </div>

        {/* Performance Stats */}
        <div
          className={`absolute bottom-32 left-0 right-0 flex justify-center gap-12 md:gap-20 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-white">830</span>
            <span className="text-xs text-white/60 uppercase tracking-widest">Horsepower</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-white">2.9<span className="text-xl">s</span></span>
            <span className="text-xs text-white/60 uppercase tracking-widest">0-100 km/h</span>
          </div>
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-white">340</span>
            <span className="text-xs text-white/60 uppercase tracking-widest">Top Speed km/h</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-all duration-1000 delay-1300 cursor-pointer ${isLoaded ? 'opacity-100 animate-bounce' : 'opacity-0'
            }`}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Side Branding */}
      <div
        className={`hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
      >
        <span className="text-white/30 text-xs font-bold uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
          Kumaran Automotive
        </span>
      </div>

      {/* Model Badge */}
      <div
        className={`hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-right transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
      >
        <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Featured</span>
        <span className="block text-white font-serif text-xl font-bold">Artura Spider</span>
        <span className="block text-amber-200/80 text-sm">2025 Collection</span>
      </div>
    </section>
  );
};

export default Hero;