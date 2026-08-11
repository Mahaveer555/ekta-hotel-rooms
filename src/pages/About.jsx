import React from 'react';
import { ShieldCheck, HeartHandshake, Utensils, MapPin, Check, Phone, MessageSquare, Compass } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import SectionHeading from '../components/SectionHeading';
import FacilityCard from '../components/FacilityCard';
import BookingCTA from '../components/BookingCTA';
import { hotelInfo, facilitiesList, whyChooseUs } from '../data/hotelData';

export default function About() {
  return (
    <div className="bg-[#FAF6F0] pt-[60px] md:pt-[80px]">
      <MetaSEO page="about" />

      {/* 1. Page Banner */}
      <section className="relative py-24 lg:py-32 bg-[#1E1611] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ekta-25-4k.webp"
            alt="EKTA HOTEL & ROOMS facade view in Kharkhadi Ujjain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1611] via-[#1E1611]/90 to-[#1E1611]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-[#2A201A] text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-4 border border-[#C5A880]/30">
            About Our Establishment
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Hospitality Journey
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl">
            Delivering clean stays, pure vegetarian dining, and warm hospitality to devotees and highway travellers in Ujjain.
          </p>
        </div>
      </section>

      {/* 2. Main About Details */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B89452] font-bold block">
                  Purity & Service
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-[#1E1611] leading-tight">
                  A Safe & Welcoming Stop in Kharkhadi, Ujjain
                </h2>
                <div className="w-16 h-0.5 bg-[#C5A880] mt-3" />
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <strong>EKTA HOTEL & ROOMS</strong> is a welcoming hotel and pure vegetarian restaurant located in Kharkhadi, Ujjain. We focus on providing clean accommodation, convenient facilities, freshly prepared food and helpful service for families, business travellers and highway guests.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Strategically located on A.B. Road NH-52 Banjari Bypass, our property serves as a convenient stopover for travelers looking for secure parking, children's garden space, cozy air-conditioned rooms, and healthy vegetarian meals prepared with local hygiene standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E9DFCF] shadow-sm flex gap-3.5">
                  <Compass className="w-6 h-6 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1E1611]">Highway Connectivity</h4>
                    <p className="text-xs text-gray-600 mt-1">Directly accessible on NH-52 with zero city traffic hassle.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E9DFCF] shadow-sm flex gap-3.5">
                  <Utensils className="w-6 h-6 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1E1611]">Pure Veg Commitment</h4>
                    <p className="text-xs text-gray-600 mt-1">Separate clean kitchen with 100% vegetarian guarantee.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images Stack */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-xl bg-[#1E1611]">
                <img
                  src="/images/ekta-23-4k.webp"
                  alt="Sunset building view"
                  className="w-full h-72 object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-[#C5A880]/30 bg-[#1E1611] h-32 sm:h-40">
                  <img
                    src="/images/ekta-10-4k.webp"
                    alt="Outdoor night balcony seating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#C5A880]/30 bg-[#1E1611] h-32 sm:h-40">
                  <img
                    src="/images/ekta-06-4k.webp"
                    alt="Dining interior tables"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Included Conveniences Grid */}
      <section className="py-20 sm:py-28 bg-white border-y border-[#E9DFCF]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Included Conveniences"
            title="Essential Comfort Facilities"
            subtitle="Thoughtfully chosen accommodations and restaurant amenities for standard highway travelers and family trips."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesList.map((fac, idx) => (
              <FacilityCard
                key={fac.id}
                title={fac.title}
                description={fac.description}
                iconName={fac.iconName}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Guests Choose Us */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The EKTA Value"
            title="Our Hospitality Standards"
            subtitle="Simple, honest services designed to make your journey comfortable and worry-free."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#1E1611] text-[#C5A880] flex items-center justify-center shrink-0 font-bold border border-[#C5A880]/30 shadow-inner">
                  ✓
                </div>
                <span className="font-serif text-base font-bold text-[#1E1611]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Booking CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <BookingCTA />
      </div>

    </div>
  );
}
