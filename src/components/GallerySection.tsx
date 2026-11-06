import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';
import { TempleArchHeader } from './TraditionalMotifs';

interface GalleryPhoto {
  id: number;
  url: string;
  caption: string;
  malayalamCaption: string;
  subtext: string;
  aspect: string;
}

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos: GalleryPhoto[] = [
    {
      id: 1,
      url: '/images/hero_couple.jpg',
      caption: 'Golden Temple Courtyard Blessings',
      malayalamCaption: 'ക്ഷേത്ര തിരുമുറ്റത്തെ പുണ്യ നിമിഷങ്ങൾ',
      subtext: 'Rahul & Anjali during golden hour at the ancient teak pillar shrine with burning Nilavilakku.',
      aspect: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      id: 2,
      url: '/images/bride.jpeg',
      caption: 'Anjali: The Serene Kerala Bride',
      malayalamCaption: 'മംഗല്യപ്പട്ടുടുത്ത് സുസ്മേരവദനയായി അഞ്ജലി',
      subtext: 'Traditional Kasavu saree and temple gold ornaments with fragrant white Mullappoo.',
      aspect: 'col-span-1 row-span-1',
    },
    {
      id: 3,
      url: '/images/groom.jpeg',
      caption: 'Rahul: The Auspicious Groom',
      malayalamCaption: 'പരമ്പരാഗത രാജകീയ വേഷത്തിൽ രാഹുൽ',
      subtext: 'Traditional royal attire with sacred tilak and ornate temple jewelry.',
      aspect: 'col-span-1 row-span-1',
    },
    {
      id: 4,
      url: '/images/ceremony.jpg',
      caption: 'Sacred Floral Pushpavrishti',
      malayalamCaption: 'പുഷ്പവൃഷ്ടിയും താലികെട്ടും',
      subtext: 'Offering sacred lotus and marigold blossoms at the flower-draped wedding mandapam.',
      aspect: 'col-span-1 md:col-span-2 row-span-1',
    },
    {
      id: 5,
      url: '/images/sadhya.jpg',
      caption: 'The Royal Kalyana Sadhya',
      malayalamCaption: 'വിഭവസമൃദ്ധമായ പരമ്പരാഗത സദ്യ',
      subtext: '24 authentic vegetarian delicacies served in royal tradition on fresh banana leaves.',
      aspect: 'col-span-1 md:col-span-2 row-span-1',
    },
  ];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
      if (e.key === 'ArrowLeft') setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  return (
    <section id="gallery" className="py-20 px-4 max-w-6xl mx-auto relative">
      <TempleArchHeader
        title="Auspicious Moments & Memories"
        subtitle="മനോഹര നിമിഷങ്ങൾ · Photo Gallery"
      />

      {/* Polaroid / Bento Style Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhotoIndex(idx)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#D4AF37]/35 shadow-md hover:shadow-2xl transition-all duration-300 ${photo.aspect}`}
          >
            {/* Image */}
            <img
              src={photo.url}
              alt={photo.caption}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (photo.id === 2 && !target.src.includes('752804894000981978')) {
                  target.src = '/assets/aistudio/752804894000981978_738df2c6.jpeg';
                } else if (photo.id === 3 && !target.src.includes('Royal_South_Indian_Groom')) {
                  target.src = '/assets/aistudio/Royal_South_Indian_Groom__Meditative_Traditional_Wedding_Aesthetic_85ee2a8e.jpeg';
                }
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Golden corner flourishes */}
            <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-[#E5C158]" />
            </div>

            {/* Captions */}
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <p className="font-['Anek_Malayalam'] text-xs text-[#E5C158] font-medium mb-1 drop-shadow-sm">
                {photo.malayalamCaption}
              </p>
              <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
                {photo.caption}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-white/80 line-clamp-1">
                {photo.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div 
          role="dialog" 
          aria-modal="true" 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-40"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-40"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <div className="relative max-h-[72vh] rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl">
              <img
                src={photos[selectedPhotoIndex].url}
                alt={photos[selectedPhotoIndex].caption}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  const currentPhoto = photos[selectedPhotoIndex];
                  if (currentPhoto.id === 2 && !target.src.includes('752804894000981978')) {
                    target.src = '/assets/aistudio/752804894000981978_738df2c6.jpeg';
                  } else if (currentPhoto.id === 3 && !target.src.includes('Royal_South_Indian_Groom')) {
                    target.src = '/assets/aistudio/Royal_South_Indian_Groom__Meditative_Traditional_Wedding_Aesthetic_85ee2a8e.jpeg';
                  }
                }}
                className="max-h-[72vh] max-w-full object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl">
              <p className="font-['Anek_Malayalam'] text-sm text-[#E5C158] font-semibold mb-1">
                {photos[selectedPhotoIndex].malayalamCaption}
              </p>
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-white mb-1">
                {photos[selectedPhotoIndex].caption}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-stone-300">
                {photos[selectedPhotoIndex].subtext}
              </p>
              <p className="text-xs text-stone-400 mt-2">
                {selectedPhotoIndex + 1} of {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
