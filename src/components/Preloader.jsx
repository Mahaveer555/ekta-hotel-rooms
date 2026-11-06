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
            
            {/* Circular Official Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-24 h-24 rounded-full bg-white shadow-2xl border-2 border-[#C5A880] p-1 mb-6 relative flex items-center justify-center overflow-hidden"
            >
              <img 
                src="/images/logo.png" 
                alt="EKTA HOTEL & ROOMS" 
                className="w-full h-full object-contain"
                width="96"
                height="96"
              />
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

            {/* Sub-label: TARANA, UJJAIN */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#C5A880] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-8 block"
            >
              Tarana, Ujjain
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
