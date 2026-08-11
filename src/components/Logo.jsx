import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <RouterLink to="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-1 focus:ring-[#C5A880] rounded-xl p-1 transition-all">
      
      {/* 
        Slimmer Circular Logo: Dark chocolate brown background (#5D2E17) 
        Double gold border outline as seen on business card 
      */}
      <div className="relative w-11 h-11 md:w-12.5 md:h-12.5 rounded-full bg-[#5D2E17] flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-103 shadow-lg border border-[#C5A880]/60 p-0.5 shrink-0">
        
        {/* Inner double border circle */}
        <div className="absolute inset-0.5 rounded-full border border-[#C5A880]/30 pointer-events-none" />
        <div className="absolute inset-1 rounded-full border border-[#C5A880]/70 pointer-events-none" />

        {/* Top Gold Crown/Leaves Motif */}
        <div className="text-[7.5px] md:text-[8px] text-[#C5A880] select-none leading-none mb-0.5 font-bold tracking-widest flex justify-center gap-0.5">
          <span className="transform -rotate-12">✿</span>
          <span className="transform scale-125 -translate-y-0.5">✿</span>
          <span className="transform rotate-12">✿</span>
        </div>

        {/* Brand Name Text: Uppercase Serif Gold */}
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif text-[10px] md:text-[11px] font-extrabold tracking-widest text-[#C5A880] drop-shadow-sm">
            EKTA
          </span>
          <span className="font-serif text-[6.5px] md:text-[7.5px] font-semibold tracking-wider text-[#E2D1B9] mt-0.5 opacity-90">
            HOTEL
          </span>
        </div>

        {/* Bottom Gold Leaves Motif */}
        <div className="text-[6.5px] md:text-[7px] text-[#C5A880] select-none leading-none mt-0.5 opacity-85 transform rotate-180">
          ✿
        </div>

      </div>

      {/* Brand Text beside Logo for premium header feel */}
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

      {/* Underline link overlay on hover */}
      <div className="sr-only">Go to Homepage</div>
    </RouterLink>
  );
}
