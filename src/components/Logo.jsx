import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <RouterLink 
      to="/" 
      className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-1 focus:ring-[#C5A880] rounded-xl p-1 transition-all"
    >
      {/* Official Circular Logo */}
      <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 shadow-lg border border-[#C5A880]/60 group-hover:scale-105 group-hover:border-[#C5A880] transition-all duration-300 bg-white">
        <img 
          src="/images/logo.png" 
          alt="HOTEL EKTA & ROOMS Logo" 
          className="w-full h-full object-contain p-0.5"
          width="48"
          height="48"
          loading="eager"
        />
      </div>

      {/* Brand Text beside Logo */}
      <div className="flex flex-col">
        <span 
          className="font-serif text-sm md:text-base font-extrabold tracking-wider leading-none text-white"
          style={{ textShadow: '1px 1.5px 3px rgba(0, 0, 0, 0.8)' }}
        >
          EKTA
        </span>
        <span 
          className="text-[8px] md:text-[9px] tracking-[0.18em] font-bold text-[#C5A880] uppercase mt-0.5 leading-none"
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
        >
          HOTEL & ROOMS
        </span>
      </div>

      <span className="sr-only">Go to Homepage</span>
    </RouterLink>
  );
}
