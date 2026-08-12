import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

const slides = [
  {
    image: '/images/ekta-08-4k.webp',
    title: 'Comfortable Rooms & Pure Veg Dining',
    subtitle: 'Safe parking and clean accommodation, perfect for families and highway travellers.'
  },
  {
    image: '/images/ekta-23-4k.webp',
    title: 'Convenient Highway Location',
    subtitle: 'Located on N.H.52 Banjari Bypass, offering easy access for Ujjain pilgrims.'
  },
  {
    image: '/images/ekta-06-4k.webp',
    title: '100% Pure Vegetarian Restaurant',
    subtitle: 'Fresh flavours and hygienic kitchen settings in a family-friendly environment.'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen bg-[#1E1611] overflow-hidden flex items-center justify-center">
      
      {/* Slider Images with instant opacity transitions & maximum brightness */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt="EKTA HOTEL & ROOMS Ujjain premises"
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.02]"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            {/* Semi-transparent dark overlay for high text contrast */}
            <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />
            
            {/* Top Vignette (to make transparent navbar text contrast perfectly) */}
            <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black/75 via-black/40 to-transparent z-10 pointer-events-none" />
            
            {/* Bottom Vignette (to make cinematic bottom transition slide smooth) */}
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/75 via-black/40 to-transparent z-10 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Main Content Overlay - Shifted down via pt-16 and drop-shadow */}
      <div 
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center pt-16 sm:pt-20 md:pt-24"
      >
        
        {/* WELCOME TO badge with decorative horizontal lines */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 md:w-12 h-0.5 bg-[#C5A880] shadow-md" />
          <span 
            className="text-[#C5A880] text-xs md:text-sm font-bold tracking-[0.3em] uppercase"
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Welcome To
          </span>
          <span className="w-8 md:w-12 h-0.5 bg-[#C5A880] shadow-md" />
        </div>

        {/* Heading: White serif and Bold Gold italic serif with text shadow */}
        <h1 
          className="font-serif text-4xl sm:text-6xl lg:text-7.5xl font-extrabold tracking-wide leading-tight mb-5"
          style={{ 
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.95), 0 0 25px rgba(0, 0, 0, 0.85), 0 0 45px rgba(197, 168, 128, 0.45)'
          }}
        >
          EKTA <span className="text-[#C5A880] font-bold italic">Hotel & Rooms</span>
        </h1>

        {/* Subtitle with text shadow */}
        <p 
          className="max-w-2xl text-sm sm:text-base lg:text-lg text-white font-semibold tracking-wide leading-relaxed mb-10"
          style={{ 
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.95), 0 0 15px rgba(0, 0, 0, 0.85)'
          }}
        >
          {slides[current].subtitle}
        </p>

        {/* Action Buttons matching Palm Pacific exactly */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-lg mx-auto">
          
          {/* Explore Button (Gold background, Dark text, right arrow) */}
          <a
            href="#explore"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#FAF6F0] text-[#1E1611] font-semibold text-sm sm:text-[15px] tracking-wide shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-[#C5A880] active:scale-98"
          >
            <span>Explore The Hotel</span>
            <span className="text-lg leading-none select-none">→</span>
          </a>

          {/* Book Button (Semi-transparent gray/glassmorphic background, white text, right arrow) */}
          <a
            href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(hotelInfo.whatsappDefaultMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-white/20 hover:bg-[#C5A880] hover:text-[#1E1611] hover:border-[#C5A880] text-white font-semibold text-sm sm:text-[15px] tracking-wide shadow-md transition-all duration-300 border border-white/40 flex items-center justify-center gap-2 active:scale-98 backdrop-blur-md"
          >
            <span>Book Your Stay</span>
            <span className="text-lg leading-none select-none">→</span>
          </a>
        </div>

      </div>

      {/* Slider Controls (Chevron Arrows) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/20 hover:bg-[#C5A880] text-white hover:text-[#1E1611] transition-all flex items-center justify-center z-25 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/20 hover:bg-[#C5A880] text-white hover:text-[#1E1611] transition-all flex items-center justify-center z-25 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-25">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              current === idx ? 'bg-[#C5A880] w-6' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
