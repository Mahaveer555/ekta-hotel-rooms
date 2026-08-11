import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Navigation, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { hotelInfo, facilitiesList } from '../data/hotelData';

export default function Footer() {
  return (
    <footer className="bg-[#1E1611] text-white border-t border-[#C5A880]/30 pt-16 pb-24 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#C5A880]/15">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo light={true} />
            
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed pt-2">
              EKTA HOTEL & ROOMS is a family-friendly hotel and 100% pure vegetarian restaurant located in Kharkhadi, Ujjain. We provide clean, comfortable AC accommodation and freshly prepared meals for highway travelers and pilgrims.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C5A880]">
              <ShieldCheck className="w-4 h-4" />
              <span>4.1★ Google Rated • Pure Veg Certified</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-[#C5A880] tracking-wider border-b border-[#C5A880]/20 pb-2 inline-block">
              Explore
            </h3>
            
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-white/75 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/75 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-white/75 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" /> Rooms & Stay
                </Link>
              </li>
              <li>
                <Link to="/restaurant" className="text-white/75 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" /> Restaurant
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/75 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" /> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/75 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Facilities */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-[#C5A880] tracking-wider border-b border-[#C5A880]/20 pb-2 inline-block">
              Facilities
            </h3>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              {facilitiesList.map((fac) => (
                <li key={fac.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>{fac.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-[#C5A880] tracking-wider border-b border-[#C5A880]/20 pb-2 inline-block">
              Connect With Us
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{hotelInfo.address}</span>
              </div>

              <div className="flex items-start gap-3 text-white/80">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${hotelInfo.phoneRaw}`} className="hover:text-[#C5A880] transition-colors block">
                    {hotelInfo.phone}
                  </a>
                  {hotelInfo.phone2 && (
                    <a href={`tel:${hotelInfo.phone2Raw}`} className="hover:text-[#C5A880] transition-colors block">
                      {hotelInfo.phone2}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-[#C5A880] transition-colors break-all">
                  {hotelInfo.email}
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={hotelInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-bold rounded-full bg-[#2A201A] text-white border border-[#C5A880]/30 hover:bg-[#C5A880] hover:text-[#1E1611] transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
                Directions
              </a>

              <a
                href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(hotelInfo.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-bold rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 EKTA HOTEL & ROOMS. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-white/50">
            Website Designed & Developed by{' '}
            <a 
              href="https://digiteeworld.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#C5A880] font-semibold hover:underline"
            >
              digiteeworld.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
