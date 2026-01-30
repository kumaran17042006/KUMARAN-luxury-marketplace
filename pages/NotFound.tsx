import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
            <h1 className="font-serif text-6xl md:text-9xl font-bold text-white mb-4">404</h1>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-300 mb-8">Page Not Found</h2>
            <p className="text-gray-500 max-w-md mb-12">
                The route you are looking for does not exist or has been moved.
                Please return to the showroom.
            </p>
            <Link
                to="/"
                className="flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
                <ArrowLeft size={16} /> Return Home
            </Link>
        </div>
    );
};

export default NotFound;
