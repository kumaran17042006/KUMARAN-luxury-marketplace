import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
             <div className="col-span-1 md:col-span-2">
                <span className="font-serif font-bold text-2xl tracking-tight block mb-6">KUMARAN</span>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                    The world's premier marketplace for luxury automobiles. Connecting buyers and sellers of the finest cars, real estate, and assets globally.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
                </div>
             </div>
            
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Marketplace</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-black transition-colors">Cars for Sale</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Sell your Car</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Find a Dealer</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Auctions</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Press</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Terms of Use</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
            <span>© 2025 Kumaran Luxury Marketplace. All rights reserved.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
                <span>English (US)</span>
                <span>USD</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;