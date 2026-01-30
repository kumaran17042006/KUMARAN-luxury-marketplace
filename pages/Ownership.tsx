import React from 'react';
import { MapPin, Wrench, Shield, Smartphone } from 'lucide-react';

const Ownership: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
       <section className="relative h-[50vh] flex items-center">
        <img 
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2670&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Service" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
             <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">Ownership</h1>
             <p className="text-gray-600 max-w-xl text-lg font-light leading-relaxed">
                Owning a Kumaran is an experience like no other. We are dedicated to ensuring your car performs perfectly for a lifetime.
            </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-start">
                <Wrench size={40} className="text-gray-900 mb-6" />
                <h3 className="font-serif text-xl font-bold mb-3">Service & Maintenance</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Expert care from factory-trained technicians using genuine parts.
                </p>
                <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-colors">Book Service</a>
            </div>
             <div className="flex flex-col items-start">
                <Shield size={40} className="text-gray-900 mb-6" />
                <h3 className="font-serif text-xl font-bold mb-3">Warranty</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Comprehensive coverage options to protect your investment for years to come.
                </p>
                <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-colors">View Plans</a>
            </div>
             <div className="flex flex-col items-start">
                <Smartphone size={40} className="text-gray-900 mb-6" />
                <h3 className="font-serif text-xl font-bold mb-3">Kumaran App</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Control your vehicle, schedule service, and access exclusive content.
                </p>
                <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-colors">Download</a>
            </div>
             <div className="flex flex-col items-start">
                <MapPin size={40} className="text-gray-900 mb-6" />
                <h3 className="font-serif text-xl font-bold mb-3">Find a Retailer</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Locate your nearest authorized Kumaran partner for sales and service.
                </p>
                <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-colors">Search Map</a>
            </div>
        </div>
      </section>

      {/* Accessories Banner */}
      <section className="bg-[#f6f6f6] py-24">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop" alt="Accessories" className="shadow-2xl" />
             </div>
             <div className="md:w-1/2">
                <h2 className="font-serif text-4xl mb-6">Genuine Accessories</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Personalize your Kumaran with our range of genuine accessories, designed and engineered to the same exacting standards as our cars. From carbon fibre styling kits to bespoke luggage sets.
                </p>
                <button className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    View Catalogue
                </button>
             </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;