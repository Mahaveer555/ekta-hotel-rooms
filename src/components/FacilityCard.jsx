import React from 'react';
import {
  Wind,
  Wifi,
  Car,
  Bell,
  UtensilsCrossed,
  ShowerHead,
  Bed,
  Utensils,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Sparkle
} from 'lucide-react';

const iconMap = {
  Wind,
  Wifi,
  Car,
  Bell,
  UtensilsCrossed,
  ShowerHead,
  Bed,
  Utensils,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Sparkle
};

export default function FacilityCard({ title, description, iconName = 'Sparkles', index = 0 }) {
  const IconComponent = iconMap[iconName] || Sparkles;

  return (
    <div 
      className="group relative p-6 rounded-2xl bg-white border border-[#E9DFCF] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top accent border hover effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D4F52] via-[#C69A45] to-[#07383B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="w-12 h-12 rounded-xl bg-[#0D4F52]/10 text-[#0D4F52] flex items-center justify-center mb-5 group-hover:bg-[#0D4F52] group-hover:text-[#E5C378] transition-colors duration-300 shadow-inner">
          <IconComponent className="w-6 h-6 stroke-[1.8]" />
        </div>

        <h3 className="font-serif text-lg font-bold text-[#07383B] group-hover:text-[#0D4F52] transition-colors mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#C69A45] font-semibold">
        <span>Verified Facility</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] group-hover:scale-150 transition-transform" />
      </div>
    </div>
  );
}
