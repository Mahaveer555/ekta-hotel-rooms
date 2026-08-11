import React from 'react';
import MetaSEO from '../components/MetaSEO';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import BookingCTA from '../components/BookingCTA';

export default function Gallery() {
  return (
    <div className="bg-[#FAF6F0] pt-[60px] md:pt-[80px]">
      <MetaSEO page="gallery" />

      {/* Hero Banner */}
      <section className="relative py-24 lg:py-32 bg-[#1E1611] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ekta-08-4k.webp"
            alt="EKTA HOTEL & ROOMS night exterior illuminated"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1611] via-[#1E1611]/90 to-[#1E1611]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-[#2A201A] text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-4 border border-[#C5A880]/30">
            Real Photographs
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hotel & Restaurant Photo Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl">
            Browse actual pictures of EKTA HOTEL & ROOMS including exterior daytime & night views, comfortable rooms, pure veg dining area, and reception counter.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Actual Hotel Photos"
            title="Explore Our Premises"
            subtitle="Click on any photograph to open the full-screen interactive lightbox view."
          />

          <GalleryGrid showFilters={true} />
        </div>
      </section>

      {/* Booking CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <BookingCTA />
      </div>

    </div>
  );
}
