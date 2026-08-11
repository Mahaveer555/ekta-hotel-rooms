import React from 'react';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function BookingCTA({ title = "Planning Your Stay?", subtitle = "Call or message us on WhatsApp to check room availability and receive the best available price." }) {
  return (
    <div className="relative rounded-3xl bg-[#1E1611] text-white p-8 sm:p-12 border border-[#C5A880]/30 shadow-2xl overflow-hidden my-12 text-center max-w-4xl mx-auto">
      
      {/* Background Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#C5A880]/5 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#2A201A] blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        
        <div className="w-14 h-14 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] flex items-center justify-center mx-auto shadow-inner">
          <CalendarCheck className="w-7 h-7" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
          {title}
        </h2>

        <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(hotelInfo.whatsappDefaultMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:scale-103 active:scale-98 transition-all"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-current" />
            WhatsApp Booking
          </a>

          <a
            href={`tel:${hotelInfo.phoneRaw}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 rounded-full border-2 border-[#C5A880] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#C5A880] hover:text-[#1E1611] shadow-lg hover:scale-103 active:scale-98 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-[#C5A880] hover:text-inherit" />
            Call +91 88712 20554
          </a>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#C5A880]/80">
          <span>Direct Hotel Booking</span>
          <span className="hidden sm:inline">•</span>
          <span>Instant Quote Response</span>
          <span className="hidden sm:inline">•</span>
          <span>Zero Commission Fees</span>
        </div>

      </div>
    </div>
  );
}
