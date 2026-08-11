import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
  className = ""
}) {
  return (
    <div className={`space-y-3 mb-10 md:mb-14 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest ${
          light
            ? 'bg-white/10 text-[#E5C378] border border-[#C69A45]/30'
            : 'bg-[#0D4F52]/10 text-[#0D4F52] border border-[#0D4F52]/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug ${
        light ? 'text-white' : 'text-[#07383B]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`max-w-2xl text-sm sm:text-base leading-relaxed ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}

      {/* Decorative Gold Accent Bar */}
      <div className={`flex items-center gap-1.5 pt-1 ${center ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#C69A45]" />
        <span className="w-2 h-2 rounded-full bg-[#C69A45]" />
        <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#C69A45]" />
      </div>
    </div>
  );
}
