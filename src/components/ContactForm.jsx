import React, { useState } from 'react';
import { Send, MessageSquare, Phone, User, Mail, HelpCircle } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'Room Booking',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello EKTA HOTEL & ROOMS, I have an enquiry:

👤 *Name:* ${formData.fullName}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'Not provided'}
📌 *Enquiry Type:* ${formData.enquiryType}
💬 *Message:* ${formData.message || 'No additional message'}

Please get back to me.`;

    const whatsappUrl = `https://wa.me/${hotelInfo.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9DFCF] shadow-xl space-y-6">
      
      <div className="border-b border-[#E9DFCF]/50 pb-4">
        <h3 className="font-serif text-2xl font-bold text-[#1E1611]">
          Send an Enquiry
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          Fill out the details below to submit your reservation query directly via WhatsApp.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1E1611] mb-2 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-[#C5A880]" /> Full Name *
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Rahul Sharma"
          className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#C5A880] focus:border-[#C5A880] outline-none transition-all"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1E1611] mb-2 flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" /> Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#C5A880] focus:border-[#C5A880] outline-none transition-all"
        />
      </div>

      {/* Email Address */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1E1611] mb-2 flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-[#C5A880]" /> Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@example.com (optional)"
          className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#C5A880] focus:border-[#C5A880] outline-none transition-all"
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1E1611] mb-2 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#C5A880]" /> Enquiry Type *
        </label>
        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#C5A880] focus:border-[#C5A880] outline-none transition-all bg-white"
        >
          <option value="Room Booking">Room Booking</option>
          <option value="Restaurant Enquiry">Restaurant Enquiry</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#1E1611] mb-2">
          Your Message
        </label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share travel dates, number of guests, or dish enquiries..."
          className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#C5A880] focus:border-[#C5A880] outline-none transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl active:scale-98 transition-all"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        Send Enquiry via WhatsApp
      </button>

      <p className="text-[10px] text-gray-500 text-center">
        * Submitting will open WhatsApp with your pre-filled inquiry.
      </p>

    </form>
  );
}
