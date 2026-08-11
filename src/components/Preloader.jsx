import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#FAF6F0] flex flex-col items-center justify-center select-none"
        >
          <div className="flex flex-col items-center text-center max-w-sm px-4">
            
            {/* Circular Gold-Bordered Logo (Exactly like Business Card Logo) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-20 h-20 rounded-full bg-[#5D2E17] flex flex-col items-center justify-center shadow-2xl border border-[#C5A880]/60 p-1 mb-6 relative"
            >
              {/* Inner double borders */}
              <div className="absolute inset-0.5 rounded-full border border-[#C5A880]/30 pointer-events-none" />
              <div className="absolute inset-1.5 rounded-full border border-[#C5A880]/70 pointer-events-none" />

              {/* Top Leaves Motif */}
              <div className="text-[11px] text-[#C5A880] select-none leading-none mb-1 font-bold tracking-widest flex gap-0.5">
                <span className="transform -rotate-12">✿</span>
                <span className="transform scale-125 -translate-y-0.5">✿</span>
                <span className="transform rotate-12">✿</span>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center leading-none">
                <span className="font-serif text-base font-extrabold tracking-widest text-[#C5A880]">
                  EKTA
                </span>
                <span className="font-serif text-[9px] font-semibold tracking-wider text-[#E2D1B9] mt-0.5">
                  HOTEL
                </span>
              </div>

              {/* Bottom Leaves Motif */}
              <div className="text-[10px] text-[#C5A880] select-none leading-none mt-1 transform rotate-180">
                ✿
              </div>
            </motion.div>

            {/* Sub-label: HOTEL */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#C5A880] text-xs font-bold tracking-[0.4em] uppercase mb-2 block"
            >
              Hotel
            </motion.span>

            {/* Brand Title: EKTA */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl font-extrabold tracking-widest text-[#1E1611] mb-2"
            >
              EKTA
            </motion.h2>

            {/* Sub-label: KHARKHADI, UJJAIN */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#C5A880] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-8 block"
            >
              Kharkhadi, Ujjain
            </motion.span>

            {/* Premium Progress Divider Line with Center Diamond Motif */}
            <div className="relative w-64 h-0.5 bg-[#C5A880]/20 overflow-hidden flex items-center justify-center">
              {/* Gold Progress bar animation */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
                className="absolute h-full bg-gradient-to-r from-transparent via-[#C5A880] to-transparent"
              />

              {/* Center Diamond Icon */}
              <motion.div 
                initial={{ scale: 0, rotate: 45 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute w-2 h-2 bg-[#C5A880] border border-[#FAF6F0]"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
