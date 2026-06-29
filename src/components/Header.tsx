import { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, Mail, MapPin } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'training', label: 'Training' },
    { id: 'industries', label: 'Industries Served' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setView(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full relative z-50">
      {/* Top Bar (Contact Info) */}
      <div className="bg-primary-navy text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-300">
              <Phone className="w-3.5 h-3.5 text-orange-accent" />
              <a href="tel:4092720514" className="hover:text-orange-accent transition-colors">(409) 272-0514</a>
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Mail className="w-3.5 h-3.5 text-orange-accent" />
              <a href="mailto:samuelverrett80@gmail.com" className="hover:text-orange-accent transition-colors">samuelverrett80@gmail.com</a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-accent" />
              Mississippi (MS), USA
            </span>
            <span className="text-orange-accent font-semibold px-2 py-0.5 bg-orange-accent/10 rounded">ASNT Level III Services</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav id="navbar" className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 bg-slate-900/95 shadow-lg backdrop-blur-md py-3' : 'bg-slate-900 py-4'} border-b-4 border-orange-accent`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-orange-accent rounded flex items-center justify-center font-bold text-2xl shadow-inner text-white transition-transform group-hover:scale-105 shrink-0">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-xl leading-none uppercase tracking-tight group-hover:text-orange-accent transition-colors">RSDS NDT</span>
              <span className="text-slate-400 text-[10px] tracking-widest uppercase font-medium">Training & Consultants</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 text-sm font-semibold uppercase tracking-wide">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-200 text-xs font-bold tracking-wider uppercase ${
                  currentView === item.id 
                    ? 'text-orange-accent border-b-2 border-orange-accent pb-0.5' 
                    : 'text-gray-300 hover:text-orange-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-white/10 text-right hidden xl:block">
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none">24/7 Support Service</p>
              <p className="text-orange-accent font-extrabold text-sm leading-tight">(409) 272-0514</p>
            </div>
            <button
              id="nav-cta-header"
              onClick={() => handleNavClick('contact')}
              className="ml-4 px-4 py-2 bg-orange-accent text-white font-bold rounded hover:bg-orange-hover shadow-lg shadow-orange-accent/20 transition-all duration-200 cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 shadow-xl overflow-y-auto max-h-[85vh] py-4 px-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  currentView === item.id 
                    ? 'bg-orange-accent text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                id="mobile-nav-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 bg-orange-accent text-white font-medium rounded-lg text-center hover:bg-orange-hover block shadow-md"
              >
                Get a Quote
              </button>
              <div className="flex flex-col gap-2 text-center text-xs text-gray-400 pt-2">
                <span>Phone: (409) 272-0514</span>
                <span>Email: samuelverrett80@gmail.com</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
