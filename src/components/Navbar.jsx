import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, MessageSquare } from 'lucide-react';
import Logo from './Logo';
import { hotelInfo } from '../data/hotelData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#1E1611] border-b border-[#C5A880]/20 py-2 shadow-xl' 
          : isHome 
            ? 'bg-transparent py-3.5' 
            : 'bg-[#1E1611] border-b border-[#C5A880]/20 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo light={true} />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={{ textShadow: '1.5px 1.5px 3.5px rgba(0, 0, 0, 0.85)' }}
                className={({ isActive }) =>
                  `px-4 py-2 text-[14px] sm:text-[15px] font-bold tracking-wide transition-all relative ${
                    isActive
                      ? 'text-[#C5A880]'
                      : 'text-white hover:text-[#C5A880]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C5A880] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Buttons - Single gold action matching Palm Pacific */}
          <div className="hidden lg:flex items-center">
            <a
              href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(hotelInfo.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#C5A880] text-[#1E1611] text-[14px] sm:text-[15px] font-semibold tracking-wide rounded-full hover:bg-white hover:text-[#1E1611] transition-all duration-300 shadow-md flex items-center gap-1.5"
            >
              <span>Book / Enquire Now</span>
              <span className="text-base font-normal">→</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${hotelInfo.phoneRaw}`}
              className="p-2 text-[#C5A880] border border-[#C5A880]/30 rounded-full hover:bg-white/5 active:scale-95 transition-all"
              aria-label="Call Now"
            >
              <Phone className="w-4.5 h-4.5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#C5A880] rounded-full focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-[#C5A880]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 top-[60px] bg-black/75 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="absolute top-0 right-0 w-4/5 max-w-sm h-[calc(100vh-60px)] bg-[#1E1611] border-l border-[#C5A880]/20 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#C5A880]/20 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">Navigation</span>
                <span className="text-[11px] text-white/50">Kharkhadi, Ujjain</span>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-[#2A201A] text-[#C5A880] border-l-4 border-[#C5A880]'
                          : 'text-white/80 hover:bg-white/5 hover:text-[#C5A880]'
                      }`
                    }
                  >
                    {link.name}
                    <span className="text-xs text-[#C5A880]/40">→</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Bottom Quick CTAs */}
            <div className="pt-6 border-t border-[#C5A880]/20 space-y-3 mt-6">
              <a
                href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(hotelInfo.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:bg-[#20ba5a] transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Book on WhatsApp
              </a>

              <a
                href={`tel:${hotelInfo.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#C5A880] text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                Call +91 88712 20554
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
