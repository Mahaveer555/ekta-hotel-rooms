import React from 'react';
import { ShieldCheck, Sparkles, Users, Utensils, MessageSquare } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import SectionHeading from '../components/SectionHeading';
import BookingCTA from '../components/BookingCTA';
import { restaurantHighlights, hotelInfo } from '../data/hotelData';

export default function Restaurant() {
  return (
    <div className="bg-[#FAF6F0] pt-[60px] md:pt-[80px]">
      <MetaSEO page="restaurant" />

      {/* 1. Restaurant Hero */}
      <section className="relative py-24 lg:py-32 bg-[#1E1611] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ekta-06-4k.webp"
            alt="EKTA Restaurant dining room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1611] via-[#1E1611]/90 to-[#1E1611]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-[#2A201A] text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-4 border border-[#C5A880]/30">
            100% Pure Vegetarian Restaurant
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Fresh & Wholesome Vegetarian Dining
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl">
            Enjoy fresh flavours, comfortable seating and a welcoming family atmosphere at the pure vegetarian restaurant of EKTA HOTEL & ROOMS.
          </p>
        </div>
      </section>

      {/* 2. Restaurant Ambience & Introduction */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B89452] font-bold block">
                  Delicious Pure Veg Food
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-[#1E1611]">
                  Flavours Cooked with Care & Hygiene
                </h2>
                <div className="w-16 h-0.5 bg-[#C5A880] mt-3" />
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Enjoy freshly prepared pure vegetarian meals in a comfortable and family-friendly dining environment. We serve delicious, traditional North Indian, Chinese and local specialties made to order.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {restaurantHighlights.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-[#E9DFCF] shadow-sm space-y-1">
                    <h4 className="font-serif text-base font-bold text-[#1E1611]">{feat.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(hotelInfo.whatsappRestaurantMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-300"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-current" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Split-Image composition */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4">
              <div className="col-span-7 rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-xl bg-[#1E1611] h-64 sm:h-80">
                <img
                  src="/images/ekta-19-4k.webp"
                  alt="Delicious vegetarian chow mein noodles"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="col-span-5 flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-md bg-[#1E1611] h-28 sm:h-38">
                  <img
                    src="/images/ekta-22-4k.webp"
                    alt="Paneer masala dish served"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-md bg-[#1E1611] h-28 sm:h-38">
                  <img
                    src="/images/ekta-07-4k.webp"
                    alt="Refreshing sweet lassi glasses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Dine With Us */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#E9DFCF]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Culinary Principles"
            title="Why Dine at EKTA Restaurant?"
            subtitle="Spacious seating, clean environment, and delicious vegetarian options suited for travelers and families alike."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E9DFCF] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#1E1611] text-[#C5A880] border border-[#C5A880]/40 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1E1611]">100% Pure Vegetarian</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Strictly vegetarian kitchen with separate utensils and complete purity check.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E9DFCF] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#1E1611] text-[#C5A880] border border-[#C5A880]/40 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1E1611]">Fresh Preparation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Dishes prepared fresh to order using quality ingredients and regional spices.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E9DFCF] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#1E1611] text-[#C5A880] border border-[#C5A880]/40 flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1E1611]">Family-Friendly</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Spacious dining arrangements comfortable for large families and tourist groups.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E9DFCF] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#1E1611] text-[#C5A880] border border-[#C5A880]/40 flex items-center justify-center mx-auto">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1E1611]">Hygienic Kitchen</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Maintained under strict hygiene guidelines for healthy, fresh dining breaks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Table Booking Enquiries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <BookingCTA
          title="Traveling on NH-52 Banjari Bypass?"
          subtitle="Stop by EKTA Pure Veg Restaurant for fresh, delicious, hygienic meals. Call or message us on WhatsApp for menu details."
        />
      </div>

    </div>
  );
}
