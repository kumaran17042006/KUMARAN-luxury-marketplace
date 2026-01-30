import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, MapPin, User, ChevronRight, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the home page for transparent navbar
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  const navLinks = [
    { name: 'Models', href: '/models', hasDropdown: true },
    { name: 'World of Kumaran', href: '/world', hasDropdown: false },
    { name: 'Ownership', href: '/ownership', hasDropdown: false },
    { name: 'Shopping', href: '#', hasDropdown: false },
  ];

  const models = [
    { name: '750S', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600&auto=format&fit=crop' },
    { name: 'Artura', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=600&auto=format&fit=crop' },
    { name: 'GTS', image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=600&auto=format&fit=crop' },
    { name: 'Solus GT', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop' },
  ];

  // Dynamic styling based on scroll position and page
  const isTransparent = isHomePage && !isScrolled && !activeMenu;
  const headerBg = isTransparent ? 'bg-transparent' : 'bg-white shadow-sm';
  const textColor = isTransparent ? 'text-white' : 'text-gray-800';
  const logoColor = isTransparent ? 'text-white' : 'text-black';
  const hoverColor = isTransparent ? 'hover:text-white/70' : 'hover:text-gray-500';
  const borderColor = isTransparent ? 'hover:border-white' : 'hover:border-black';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${headerBg}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <span className={`font-serif font-bold text-2xl tracking-tighter uppercase transition-colors duration-300 ${logoColor}`}>Kumaran</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="h-full flex items-center relative"
                onMouseEnter={() => link.hasDropdown && setActiveMenu('Models')}
              >
                <Link
                  to={link.href}
                  className={`text-xs font-bold transition-colors uppercase tracking-[0.15em] py-8 border-b-2 border-transparent ${textColor} ${hoverColor} ${borderColor}`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Utilities */}
          <div className={`flex items-center gap-8 transition-colors duration-300 ${textColor}`}>
            <Link to="/ownership" className={`hidden lg:flex items-center gap-2 ${hoverColor} transition-colors group`}>
              <MapPin size={18} />
              <span className="text-xs font-bold uppercase tracking-widest group-hover:underline">Find a Retailer</span>
            </Link>
            <button className={`hidden lg:flex ${hoverColor} transition-colors`}>
              <Search size={20} />
            </button>
            {isAuthenticated ? (
              <button onClick={handleLogout} className={`hidden lg:flex items-center gap-2 ${hoverColor} transition-colors`}>
                <LogOut size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Logout</span>
              </button>
            ) : (
              <Link to="/login" className={`hidden lg:flex items-center gap-2 ${hoverColor} transition-colors`}>
                <User size={20} />
              </Link>
            )}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mega Menu - Models */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${activeMenu === 'Models' ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
          onMouseEnter={() => setActiveMenu('Models')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="container mx-auto px-12 py-12">
            <div className="grid grid-cols-4 gap-8">
              {models.map((model) => (
                <Link to="/models" key={model.name} className="group block text-center">
                  <div className="overflow-hidden mb-4 relative aspect-[16/9]">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <span className="font-serif text-xl text-gray-900 group-hover:text-gray-600 transition-colors block mb-2">{model.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-800 flex justify-center items-center gap-1">
                    Discover <ChevronRight size={10} />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center border-t border-gray-100 pt-8">
              <Link to="/models" className="inline-block border border-gray-300 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                View All Models
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100 h-24">
          <span className="font-serif font-bold text-xl text-black uppercase">Kumaran</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col h-full overflow-y-auto pb-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-8 py-6 border-b border-gray-50 flex justify-between items-center group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-serif text-2xl text-gray-900">{link.name}</span>
              <ChevronRight className="text-gray-300 group-hover:text-black" />
            </Link>
          ))}
          <div className="p-8 mt-auto bg-gray-50">
            <Link to="/ownership" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">
              <MapPin size={18} /> Find a Retailer
            </Link>
            {isAuthenticated ? (
              <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-600 w-full text-left">
                <LogOut size={18} /> Logout
              </button>
            ) : (
              <Link to="/login" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                <User size={18} /> Sign In / Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;