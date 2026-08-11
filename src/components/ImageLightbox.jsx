import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({
  isOpen,
  image,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wider bg-black/40 px-3 py-1 rounded-full border border-white/10">
          {currentIndex + 1} / {totalCount} • {image.category}
        </span>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-[#E5C378] transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div 
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
        />

        <div className="mt-4 text-center">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#E5C378]">
            {image.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl mx-auto">
            {image.alt}
          </p>
        </div>
      </div>

      {/* Left Prev Arrow */}
      {totalCount > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-[#C69A45] hover:text-[#07383B] transition-all border border-white/10"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Right Next Arrow */}
      {totalCount > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-[#C69A45] hover:text-[#07383B] transition-all border border-white/10"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
