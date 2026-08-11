import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Navigation, ShieldCheck, MapPin, 
  Sparkles, Utensils, Bed, Car, Star, Check, 
  MessageSquare, ChevronLeft, ChevronRight, Phone, Clock
} from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import FacilityCard from '../components/FacilityCard';
import RoomCard from '../components/RoomCard';
import GalleryGrid from '../components/GalleryGrid';
import BookingCTA from '../components/BookingCTA';
import { hotelInfo, roomCategories, facilitiesList, restaurantHighlights, whyChooseUs, galleryImages } from '../data/hotelData';

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);

  const googleReviews = [
    {
      name: "Clean Environment",
      text: "Extremely clean rooms, fresh bedding, and well-maintained private washrooms. Highly recommended for families."
    },
    {
      name: "Convenient Parking",
      text: "Ample parking space right in front of the hotel. Perfect for travelers with cars and tourist buses."
    },
    {
      name: "Quality Food",
      text: "Authentic 100% pure vegetarian dishes prepared fresh. The noodles and paneer curry are outstanding."
    },
    {
      name: "Helpful Service",
      text: "Warm and courteous hospitality. The staff is always ready to assist and suggest local Ujjain travel routes."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % googleReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FAF6F0] overflow-hidden">
      <MetaSEO page="home" />

      {/* 1. Cinematic Hero Slider */}
      <Hero />

      {/* 2. Quick Highlight Strip */}
      <section className="relative z-20 py-8 bg-[#1E1611] text-white border-y border-[#C5A880]/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-[#C5A880]/20">
            
            <div className="space-y-1">
              <span className="block text-xs uppercase tracking-widest text-[#C5A880] font-bold">Comfortable Stay</span>
              <span className="block font-serif text-lg md:text-xl font-bold text-white">AC Guest Rooms</span>
            </div>

            <div className="space-y-1 pl-2">
              <span className="block text-xs uppercase tracking-widest text-[#C5A880] font-bold">Pure Veg Dining</span>
              <span className="block font-serif text-lg md:text-xl font-bold text-white">Hygienic Restaurant</span>
            </div>

            <div className="space-y-1 pl-2">
              <span className="block text-xs uppercase tracking-widest text-[#C5A880] font-bold">Spacious Area</span>
              <span className="block font-serif text-lg md:text-xl font-bold text-white">Safe Vehicle Parking</span>
            </div>

            <div className="space-y-1 pl-2">
              <span className="block text-xs uppercase tracking-widest text-[#C5A880] font-bold">Guest Rating</span>
              <span className="block font-serif text-lg md:text-xl font-bold text-[#C5A880] flex items-center justify-center gap-1">
                4.1★ <span className="text-white text-xs font-normal">Google Rated</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Welcome Section */}
      <section id="welcome" className="py-20 sm:py-28 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Asymmetrical Editorial Images */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#C5A880]/30 shadow-xl bg-[#1E1611]">
                <img
                  src="/images/ekta-18-4k.webp"
                  alt="EKTA HOTEL & ROOMS daytime facade side angle"
                  className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-103 transition-all duration-700"
                />
              </div>

              {/* Overlapping small dining hall image */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-52 sm:w-64 rounded-xl overflow-hidden border-4 border-[#FAF6F0] shadow-2xl hidden sm:block bg-[#1E1611]">
                <img
                  src="/images/ekta-06-4k.webp"
                  alt="EKTA Restaurant dining area"
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Location Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#1E1611]/90 backdrop-blur-sm border border-[#C5A880]/40 text-[#C5A880] text-[10px] font-bold uppercase tracking-widest">
                Kharkhadi, Ujjain
              </div>
            </div>

            {/* Right: Content Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B89452] font-bold block">
                  Welcome to EKTA
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-[#1E1611] leading-tight">
                  A Comfortable Address for Every Journey
                </h2>
                <div className="w-16 h-0.5 bg-[#C5A880] mt-3" />
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Located in Kharkhadi, Ujjain, <strong>EKTA HOTEL & ROOMS</strong> brings together comfortable accommodation, pure vegetarian dining and warm hospitality. Whether you are travelling with family, visiting for work or taking a break during your journey, we provide a clean and convenient experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Comfortable AC Rooms</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Pure Vegetarian Restaurant</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Spacious Secure Parking</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Convenient Highway Location</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1E1611] hover:bg-[#C5A880] text-white hover:text-[#1E1611] font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-300 border border-[#1E1611] hover:border-[#C5A880]"
                >
                  Discover Our Story
                  <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Rooms Section (Premium Light theme matching Palm Pacific) */}
      <section className="py-20 sm:py-28 bg-[#F8F4EA] text-[#1E1611] border-y border-[#E9DFCF]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89452] font-bold block">
              Stay in Comfort
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-[#1E1611]">
              Rest, Relax & Feel at Home
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
              Clean, comfortable rooms with essential amenities for a peaceful stay.
            </p>
            <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="space-y-10 max-w-5xl mx-auto">
            {roomCategories.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Group Stay CTA Line */}
          <div className="mt-16 pt-8 border-t border-[#E9DFCF] text-center space-y-4 max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Need rooms for your family or group? Contact our reservation desk directly.
            </p>
            <a
              href={`tel:${hotelInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A880] text-[#1E1611] bg-[#C5A880]/10 hover:bg-[#1E1611] hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Enquire for Group Stay
            </a>
          </div>

        </div>
      </section>

      {/* 5. Pure Veg Restaurant Section */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0] text-[#2B231E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Content details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B89452] font-bold block">
                  A Taste to Remember
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-[#1E1611]">
                  Pure Veg Flavours, Prepared with Care
                </h2>
                <div className="w-16 h-0.5 bg-[#C5A880] mt-3" />
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Enjoy freshly prepared pure vegetarian food in a comfortable, clean and family-friendly dining environment.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {restaurantHighlights.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-[#E9DFCF] shadow-sm">
                    <h4 className="font-serif text-base font-bold text-[#1E1611] mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1E1611] hover:bg-[#C5A880] text-white hover:text-[#1E1611] font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-300 border border-[#1E1611] hover:border-[#C5A880]"
                >
                  Explore Our Restaurant
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </Link>
              </div>
            </div>

            {/* Right: Premium Split-Image Composition */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
              {/* Dominant Food image (Paneer/Noodles) */}
              <div className="col-span-8 rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-xl bg-[#1E1611] h-64 sm:h-80">
                <img
                  src="/images/ekta-22-4k.webp"
                  alt="Paneer curry served at EKTA Restaurant"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Side Stack of supporting images */}
              <div className="col-span-4 flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-md bg-[#1E1611] h-28 sm:h-38">
                  <img
                    src="/images/ekta-19-4k.webp"
                    alt="Pure veg Chinese noodles chow mein"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-md bg-[#1E1611] h-28 sm:h-38">
                  <img
                    src="/images/ekta-02-4k.webp"
                    alt="North Indian Thali plate served"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Conveniences Section (Ivory background) */}
      <section className="py-20 sm:py-28 bg-[#F8F4EA] border-y border-[#E9DFCF]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guest Conveniences"
            title="Everything for a Comfortable Stay"
            subtitle="Thoughtfully chosen facilities designed for pilgrimage travelers, highway drivers, and families."
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

      {/* 7. Hotel Experience Section */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89452] font-bold block">
              Welcome Inside
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-[#1E1611]">
              Experience Warm Hospitality
            </h2>
            <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          {/* Central dominant image and 2 side supportive thumbnails */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Feature blocks (Left column) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-5 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm">
                <h4 className="font-serif text-lg font-bold text-[#1E1611] mb-2">Warm Welcome</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Helpful and friendly assistance for every guest, making you feel at home.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm">
                <h4 className="font-serif text-lg font-bold text-[#1E1611] mb-2">Comfortable Environment</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Clean spaces created for peaceful stays, highway breaks, and family dining.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm">
                <h4 className="font-serif text-lg font-bold text-[#1E1611] mb-2">Convenient Experience</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  AC guest rooms, pure veg restaurant, kids garden, and spacious parking.
                </p>
              </div>
            </div>

            {/* Main Central Image View (Right column) */}
            <div className="lg:col-span-8 grid grid-cols-12 gap-4">
              <div className="col-span-12 rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-xl bg-[#1E1611] h-72 sm:h-96">
                <img
                  src="/images/ekta-10-4k.webp"
                  alt="EKTA HOTEL PORCH dining space"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-6 rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-md bg-[#1E1611] h-32 sm:h-44">
                <img
                  src="/images/ekta-16-4k.webp"
                  alt="Hotel Entrance porch night view"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-6 rounded-xl overflow-hidden border border-[#C5A880]/30 shadow-md bg-[#1E1611] h-32 sm:h-44">
                <img
                  src="/images/ekta-17-4k.webp"
                  alt="Building arches night signage view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Why Choose Us Section (Dark background ivory text) */}
      <section className="py-20 sm:py-24 bg-[#1E1611] text-white border-t border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2A201A] border border-[#C5A880]/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold block">
                The EKTA Advantage
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">
                Comfort, Food & Convenience—All in One Place
              </h2>
              <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#C5A880]">Comfortable Rooms</h4>
                  <p className="text-xs text-white/70 mt-1">Well-maintained guest rooms suited for road trip breaks.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#C5A880]">Pure Veg Dining</h4>
                  <p className="text-xs text-white/70 mt-1">100% vegetarian dishes cooked fresh with hygiene check.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#C5A880]">Spacious Parking</h4>
                  <p className="text-xs text-white/70 mt-1">Ample safe parking slots inside the premises for tourist buses.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#C5A880]">Highway Convenience</h4>
                  <p className="text-xs text-white/70 mt-1">Convenient location near toll plaza, perfect for highway halts.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#C5A880]">Direct Booking</h4>
                  <p className="text-xs text-white/70 mt-1">Zero hidden booking broker commissions, direct transparent rates.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#C5A880]">Warm Hospitality</h4>
                  <p className="text-xs text-white/70 mt-1">Madhya Pradesh local welcoming hospitality at your service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Reviews Section (Google Rating & Highlights slider) */}
      <section className="py-20 sm:py-24 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89452] font-bold block">
              Google Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-[#1E1611]">
              Loved by Our Guests
            </h2>
            <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-3" />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[#C5A880] py-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-sm font-bold text-gray-800 ml-2">4.1 / 5 Google Rating</span>
          </div>

          {/* Testimonial slider */}
          <div className="min-h-[140px] flex items-center justify-center relative px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                <p className="font-serif text-lg md:text-xl italic text-gray-800 font-medium">
                  "{googleReviews[activeReview].text}"
                </p>
                <span className="block text-xs uppercase tracking-widest text-[#B89452] font-semibold">
                  — {googleReviews[activeReview].name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2.5 pt-4">
            {googleReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReview(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeReview === idx ? 'bg-[#C5A880] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="pt-6">
            <a
              href={hotelInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#C5A880]/60 rounded-full text-xs font-bold uppercase tracking-wider text-[#1E1611] hover:bg-[#C5A880] hover:text-[#1E1611] transition-all"
            >
              <span>View Google Maps Listing</span>
              <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
            </a>
          </div>

        </div>
      </section>

      {/* 10. Gallery Section */}
      <section className="py-20 sm:py-28 bg-[#F8F4EA] border-t border-[#E9DFCF]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Visual Glimpse"
            title="A Glimpse of EKTA"
            subtitle="Actual 4K photographs showcasing our hotel exterior, rooms, restaurant, and delicious vegetarian food dishes."
          />

          <GalleryGrid limit={6} showFilters={false} />

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1E1611] hover:bg-[#C5A880] text-white hover:text-[#1E1611] font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-300 border border-[#1E1611] hover:border-[#C5A880]"
            >
              View Complete Photo Gallery
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Reservations & Enquiries / Map Grid */}
      <section className="py-20 sm:py-28 bg-[#1E1611] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold block">
                  Reservations & Enquiries
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
                  Your Comfortable Stay Begins Here
                </h2>
                <div className="w-12 h-0.5 bg-[#C5A880] mt-3" />
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Contact our desk to check room availability, receive the best available price quote, or enquire about dining details.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[#C5A880] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-[#C5A880]">Our Address</h5>
                    <p className="text-xs text-white/80 mt-0.5">{hotelInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[#C5A880] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-[#C5A880]">Call Us Direct</h5>
                    <a href={`tel:${hotelInfo.phoneRaw}`} className="text-xs text-white/80 hover:text-[#C5A880] transition-colors mt-0.5 block">
                      {hotelInfo.phone}
                    </a>
                    {hotelInfo.phone2 && (
                      <a href={`tel:${hotelInfo.phone2Raw}`} className="text-xs text-white/80 hover:text-[#C5A880] transition-colors block">
                        {hotelInfo.phone2}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[#C5A880] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-[#C5A880]">Instant WhatsApp</h5>
                    <p className="text-xs text-white/80 mt-0.5">Chat with us for room booking and availability quotes.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4">
                <a
                  href={`tel:${hotelInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#C5A880] text-[#1E1611] font-bold text-xs uppercase tracking-widest shadow-md hover:bg-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(hotelInfo.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:bg-[#20ba5a] transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  WhatsApp Us
                </a>

                <a
                  href={hotelInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full border border-white/35 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#C5A880]" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#C5A880]/30 shadow-2xl h-80 sm:h-[400px]">
              <iframe
                title="EKTA HOTEL & ROOMS Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0906371728283!2d76.19154607593121!3d23.348439503417724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39635b16d536cc11%3A0x5c8e83acf51b5e94!2sEKTA%20HOTEL%20%26%20ROOMS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
