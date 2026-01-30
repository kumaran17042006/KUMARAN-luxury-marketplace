import React from 'react';
import { CarModel } from '../types';
import { MapPin } from 'lucide-react';

interface CarCardProps {
  car: CarModel;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full border border-gray-100">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex gap-4 text-white text-center">
            <div>
              <span className="block text-lg font-bold font-serif">{car.specs.horsepower}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-80">HP</span>
            </div>
            <div className="w-px bg-white/30"></div>
            <div>
              <span className="block text-lg font-bold font-serif">{car.specs.acceleration}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-80">0-100</span>
            </div>
          </div>
        </div>

        {/* Featured Tag */}
        {car.featured && (
          <div className="absolute top-3 left-3 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm backdrop-blur-sm z-10">
            Featured
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
            {car.year} • {car.category}
          </div>
          <h3 className="font-serif font-bold text-xl text-gray-900 mb-2 truncate group-hover:text-gray-600 transition-colors">
            {car.name}
          </h3>
          <div className="text-lg font-bold text-black mb-4">
            {car.price}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
          <div className="flex items-start gap-2 text-gray-500 text-sm">
            <MapPin size={16} className="mt-0.5 flex-shrink-0" />
            <span className="line-clamp-1">{car.location}</span>
          </div>
          <div className="text-xs text-gray-400 font-medium truncate">
            {car.dealer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;