import React, { useState } from 'react';
import { ChevronDown, Phone, MessageSquare, Shield, HelpCircle } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import SectionHeading from '../components/SectionHeading';
import RoomCard from '../components/RoomCard';
import FacilityCard from '../components/FacilityCard';
import BookingCTA from '../components/BookingCTA';
import { roomCategories, facilitiesList, roomFaqs, hotelInfo } from '../data/hotelData';

export default function Rooms() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#FAF6F0] pt-[60px] md:pt-[80px]">
      <MetaSEO page="rooms" />

      {/* 1. Rooms Banner */}
      <section className="relative py-24 lg:py-32 bg-[#1E1611] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ekta-27-4k.webp"
            alt="EKTA HOTEL & ROOMS room layout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1611] via-[#1E1611]/90 to-[#1E1611]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-[#2A201A] text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-4 border border-[#C5A880]/30">
            Rooms & Accommodation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comfortable AC Guest Rooms
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl">
            Clean, peaceful air-conditioned rooms designed to offer total comfort and relaxation after a long journey.
          </p>
        </div>
      </section>

      {/* 2. Room Overview & Cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Stay In Comfort"
            title="Relax & Rejuvenate"
            subtitle="Explore our well-maintained rooms offering essential conveniences for pilgrimage visitors, families, and highway travelers."
          />

          <div className="space-y-10 max-w-5xl mx-auto">
            {roomCategories.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Booking Process (Direct reservations info) */}
      <section className="py-20 sm:py-24 bg-white border-y border-[#E9DFCF]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direct Booking Process"
            title="Secure Your Room Instantly"
            subtitle="Simple four-step booking directly with the hotel desk."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E9DFCF] relative">
              <span className="w-9 h-9 rounded-full bg-[#1E1611] text-[#C5A880] font-bold text-sm flex items-center justify-center mb-4 border border-[#C5A880]/40">
                1
              </span>
              <h4 className="font-serif text-base font-bold text-[#1E1611] mb-2">
                Connect Directly
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Call +91 88712 20554 or message us on WhatsApp to inquire about dates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E9DFCF] relative">
              <span className="w-9 h-9 rounded-full bg-[#1E1611] text-[#C5A880] font-bold text-sm flex items-center justify-center mb-4 border border-[#C5A880]/40">
                2
              </span>
              <h4 className="font-serif text-base font-bold text-[#1E1611] mb-2">
                Share Guest Details
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provide check-in date, number of rooms, and number of guests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E9DFCF] relative">
              <span className="w-9 h-9 rounded-full bg-[#1E1611] text-[#C5A880] font-bold text-sm flex items-center justify-center mb-4 border border-[#C5A880]/40">
                3
              </span>
              <h4 className="font-serif text-base font-bold text-[#1E1611] mb-2">
                Receive Quote
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Get instant availability confirmation and the best available rate quotes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E9DFCF] relative">
              <span className="w-9 h-9 rounded-full bg-[#1E1611] text-[#C5A880] font-bold text-sm flex items-center justify-center mb-4 border border-[#C5A880]/40">
                4
              </span>
              <h4 className="font-serif text-base font-bold text-[#1E1611] mb-2">
                Confirm Stay
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Confirm your booking directly and arrive at the hotel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Amenities Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Room Facilities"
            title="Included Comfort Features"
            subtitle="Standard conveniences available for every room reservation."
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

      {/* 5. FAQs Section */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#E9DFCF]/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Enquiries"
            title="Frequently Asked Questions"
            subtitle="Got questions before check-in? Here are answers to common queries."
          />

          <div className="space-y-4">
            {roomFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E9DFCF] bg-[#FAF6F0] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#1E1611] focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#C5A880] transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-[#E9DFCF]/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Booking CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <BookingCTA />
      </div>

    </div>
  );
}
