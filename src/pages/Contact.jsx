import React from 'react';
import { Phone, Mail, MapPin, Navigation, MessageSquare, Clock } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { hotelInfo } from '../data/hotelData';

export default function Contact() {
  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0906371728283!2d76.19154607593121!3d23.348439503417724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39635b16d536cc11%3A0x5c8e83acf51b5e94!2sEKTA%20HOTEL%20%26%20ROOMS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div className="bg-[#FAF6F0] pt-[60px] md:pt-[80px]">
      <MetaSEO page="contact" />

      {/* Hero Banner */}
      <section className="relative py-24 lg:py-32 bg-[#1E1611] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ekta-25-4k.webp"
            alt="EKTA HOTEL & ROOMS location view Ujjain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1611] via-[#1E1611]/90 to-[#1E1611]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-[#2A201A] text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-4 border border-[#C5A880]/30">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Us & Directions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl">
            We are conveniently located on the NH-52 highway at Banjari Bypass, Ujjain. Call, WhatsApp or visit us directly.
          </p>
        </div>
      </section>

      {/* Contact info and Form Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B89452]">Direct Hotel Desk</span>
                <h2 className="font-serif text-3xl font-bold text-[#1E1611] mt-1 mb-3">
                  EKTA HOTEL & ROOMS
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Have questions about room availability, pricing, or restaurant menu details? Our team is available 24/7 to assist you.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1E1611]/5 border border-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1E1611]">Hotel Address</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed">{hotelInfo.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1E1611]/5 border border-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1E1611]">Phone Reservations</h4>
                    <a href={`tel:${hotelInfo.phoneRaw}`} className="text-xs sm:text-sm text-[#1E1611] font-semibold hover:text-[#C5A880] mt-0.5 block">
                      {hotelInfo.phone}
                    </a>
                    {hotelInfo.phone2 && (
                      <a href={`tel:${hotelInfo.phone2Raw}`} className="text-xs sm:text-sm text-[#1E1611] font-semibold hover:text-[#C5A880] block">
                        {hotelInfo.phone2}
                      </a>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1E1611]/5 border border-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1E1611]">Email Contact</h4>
                    <a href={`mailto:${hotelInfo.email}`} className="text-xs sm:text-sm text-[#1E1611] font-semibold hover:text-[#C5A880] mt-0.5 block break-all">
                      {hotelInfo.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-5 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1E1611]/5 border border-[#C5A880]/20 text-[#C5A880] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1E1611]">Operating Hours</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Hotel Desk: Open 24/7 • Pure Veg Restaurant: 7:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <a
                  href={`tel:${hotelInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#1E1611] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:bg-[#C5A880] hover:text-[#1E1611] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(hotelInfo.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:bg-[#20ba5a] transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  WhatsApp
                </a>

                <a
                  href={hotelInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-full border border-[#1E1611] text-[#1E1611] font-bold text-xs uppercase tracking-widest hover:bg-[#1E1611] hover:text-white transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#C5A880]" />
                  Directions
                </a>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-20 bg-white border-t border-[#E9DFCF]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Interactive Location Map"
            title="Find Us on Google Maps"
            subtitle="Located on A.B. Road N.H.52, Banjari Bypass, 2 K.m. from Rojawas Toll Plaza, Opp. TATA Workshop, Dist. Ujjain (M.P.) - 456770."
          />

          <div className="rounded-3xl overflow-hidden border-4 border-[#E9DFCF] shadow-xl bg-gray-100 h-96 sm:h-[450px] relative">
            <iframe
              title="EKTA HOTEL Google Maps Location"
              src={mapEmbedSrc}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href={hotelInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1E1611] text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-[#C5A880] hover:text-[#1E1611] transition-all duration-300 border border-[#1E1611] hover:border-[#C5A880]"
            >
              <Navigation className="w-5 h-5 text-[#C5A880]" />
              Open Direct Location in Google Maps App
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
