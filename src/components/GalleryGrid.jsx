import React, { useState } from 'react';
import { ZoomIn, Eye } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/hotelData';
import ImageLightbox from './ImageLightbox';

export default function GalleryGrid({ limit = null, showFilters = true }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

  const displayedImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    setLightboxIndex(prev => (prev === 0 ? displayedImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex(prev => (prev === displayedImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Category Filter Buttons */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0D4F52] text-[#E5C378] shadow-md border border-[#C69A45]'
                  : 'bg-white text-gray-700 hover:bg-[#F8F3E8] border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry / Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedImages.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(idx)}
            className="group relative rounded-2xl overflow-hidden bg-[#07383B] border border-[#E9DFCF] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-64 sm:h-72"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />

            {/* Dark Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07383B]/90 via-[#0D4F52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#E5C378]">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#C69A45] text-[#07383B] flex items-center justify-center shrink-0 shadow-lg">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute top-3 left-3 bg-[#07383B]/80 backdrop-blur-sm border border-[#C69A45]/30 text-[#E5C378] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {item.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxIndex !== null}
        image={lightboxIndex !== null ? displayedImages[lightboxIndex] : null}
        currentIndex={lightboxIndex || 0}
        totalCount={displayedImages.length}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
