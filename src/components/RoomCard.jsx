import React from 'react';
import { Check, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function RoomCard({ room }) {
  const { title, subtitle, description, priceText, image, amenities } = room;

  const whatsappMsg = `Hello EKTA HOTEL & ROOMS, I want to book ${title}. Please share availability and best price.`;

  return (
    <div className="group rounded-3xl bg-white border border-[#E9DFCF] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col lg:flex-row max-w-4xl mx-auto">
      
      {/* Left Image Column */}
      <div className="lg:w-[45%] relative overflow-hidden bg-[#1E1611] min-h-[260px] lg:min-h-full">
        <img
          src={image}
          alt={`EKTA HOTEL ${title}`}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Lighter Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

        {/* Guarantee Badge */}
        <div className="absolute top-4 left-4 bg-[#1E1611]/90 backdrop-blur-sm border border-[#C5A880]/40 text-[#C5A880] text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md z-10">
          Direct Rate Guarantee
        </div>
      </div>

      {/* Right Content Column */}
      <div className="lg:w-[55%] p-6 sm:p-8 flex flex-col justify-between space-y-6 text-[#1E1611]">
        
        <div className="space-y-4">
          
          {/* Title & Price Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E9DFCF] pb-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1E1611] group-hover:text-[#B89452] transition-colors">
                {title}
              </h3>
              <p className="text-[10px] text-[#B89452] font-bold uppercase tracking-widest mt-1">
                {subtitle}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF6F0] border border-[#E9DFCF] text-xs font-bold text-[#B89452] shrink-0">
              <ShieldCheck className="w-4.5 h-4.5" />
              <span>{priceText}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {description}
          </p>

          {/* Amenities Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#B89452]">
              Included Amenities & Features
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#B89452] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-[#E9DFCF] flex flex-col sm:flex-row gap-3">
          
          <a
            href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Check Availability
          </a>

          <a
            href={`tel:${hotelInfo.phoneRaw}`}
            className="flex-grow flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-[#C5A880] text-[#B89452] hover:bg-[#C5A880] hover:text-[#1E1611] font-bold text-xs uppercase tracking-widest transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Reservation Desk
          </a>

        </div>

      </div>

    </div>
  );
}
