import React from 'react';

// Sacred Nilavilakku (Traditional Kerala 5-wick Brass Lamp)
export const NilavilakkuIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Flame glows */}
    <ellipse cx="50" cy="18" rx="8" ry="14" fill="#F59E0B" className="lamp-aura opacity-90" />
    <ellipse cx="50" cy="19" rx="4" ry="9" fill="#FFFBEB" />
    
    {/* Top crown (kireedam) */}
    <path d="M48 30 L52 30 L50 24 Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="0.8" />
    <circle cx="50" cy="33" r="3" fill="#E5C158" stroke="#B8860B" strokeWidth="0.8" />
    
    {/* Upper bowl (thattu) with 5 wick tips */}
    <path d="M26 44 C34 49 66 49 74 44 L70 49 C60 53 40 53 30 49 Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="1" />
    <ellipse cx="50" cy="44" rx="24" ry="4" fill="#E5C158" />
    {/* Little flames for the wicks */}
    <ellipse cx="28" cy="42" rx="2.5" ry="5" fill="#F59E0B" />
    <ellipse cx="38" cy="44" rx="2" ry="4" fill="#F59E0B" />
    <ellipse cx="50" cy="45" rx="2" ry="4" fill="#F59E0B" />
    <ellipse cx="62" cy="44" rx="2" ry="4" fill="#F59E0B" />
    <ellipse cx="72" cy="42" rx="2.5" ry="5" fill="#F59E0B" />
    
    {/* Ornamental neck */}
    <path d="M47 50 L53 50 L52 68 L48 68 Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="0.8" />
    <circle cx="50" cy="68" r="4.5" fill="#E5C158" stroke="#B8860B" strokeWidth="0.8" />
    
    {/* Middle decorative bulb and rings */}
    <path d="M48 72 L52 72 L51 90 L49 90 Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="0.8" />
    <ellipse cx="50" cy="91" rx="8" ry="4" fill="#E5C158" stroke="#B8860B" strokeWidth="0.8" />
    <path d="M48 95 L52 95 L50 120 L50 120 Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="0.8" />
    <circle cx="50" cy="115" r="5" fill="#E5C158" stroke="#B8860B" strokeWidth="0.8" />
    
    {/* Solid Flared Base (Peedam) */}
    <path d="M46 122 L54 122 L62 136 C64 140 68 144 72 148 C58 152 42 152 28 148 C32 144 36 140 38 136 Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="1" />
    <ellipse cx="50" cy="148" rx="24" ry="4" fill="#B8860B" />
    <ellipse cx="50" cy="151" rx="26" ry="3" fill="#E5C158" stroke="#B8860B" strokeWidth="0.8" />
  </svg>
);

// Peepal Leaf Motif (Aalila / ആലില)
export const PeepalLeafIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Sacred Peepal leaf outline with slender tip */}
    <path
      d="M50 10 C32 28 15 50 15 75 C15 95 30 110 50 110 C70 110 85 95 85 75 C85 50 68 28 50 10 C50 6 50 2 50 2"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Central vein */}
    <path d="M50 10 L50 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Lateral veins */}
    <path d="M50 40 C40 35 30 45 25 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 40 C60 35 70 45 75 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 60 C38 58 28 68 22 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 60 C62 58 72 68 78 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 82 C42 80 34 88 28 95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 82 C58 80 66 88 72 95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Auspicious Lotus Motif (താമര)
export const LotusIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Central upright petal */}
    <path d="M50 10 C45 25 40 45 50 65 C60 45 55 25 50 10 Z" fill="#E5C158" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Inner flanking petals */}
    <path d="M50 20 C35 30 30 50 46 65 C38 50 42 30 50 20 Z" fill="#F59E0B" fillOpacity="0.8" stroke="#D4AF37" strokeWidth="1.2" />
    <path d="M50 20 C65 30 70 50 54 65 C62 50 58 30 50 20 Z" fill="#F59E0B" fillOpacity="0.8" stroke="#D4AF37" strokeWidth="1.2" />
    {/* Outer side petals */}
    <path d="M45 35 C20 40 15 60 40 68 C25 55 35 42 45 35 Z" fill="#E5C158" stroke="#D4AF37" strokeWidth="1" />
    <path d="M55 35 C80 40 85 60 60 68 C75 55 65 42 55 35 Z" fill="#E5C158" stroke="#D4AF37" strokeWidth="1" />
    {/* Lotus base calyx */}
    <path d="M28 66 C38 74 62 74 72 66 C65 72 35 72 28 66 Z" fill="#8B1E1E" />
  </svg>
);

// Traditional Kasavu Golden Divider
export const KasavuDivider: React.FC<{ className?: string }> = ({ className = 'my-8' }) => (
  <div className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${className}`}>
    <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#E5C158]" />
    <div className="flex items-center gap-1.5 text-[#D4AF37]">
      <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
      <PeepalLeafIcon className="w-5 h-5 text-[#D4AF37]" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
    </div>
    <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#E5C158]" />
  </div>
);

// Golden Temple Arch Frame (Prabhavali style header ornament)
export const TempleArchHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-10 px-4">
    <div className="flex items-center justify-center gap-2 mb-2 text-[#D4AF37]">
      <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
      <LotusIcon className="w-6 h-6 text-[#D4AF37]" />
      <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
    </div>
    {subtitle && (
      <p className="font-['Anek_Malayalam'] text-sm tracking-widest text-[#8B1E1E] font-semibold uppercase mb-1">
        {subtitle}
      </p>
    )}
    <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#3A1F0D] font-bold tracking-tight">
      {title}
    </h2>
    <div className="mt-3 flex items-center justify-center gap-2">
      <span className="h-[1px] w-12 bg-[#D4AF37]/60" />
      <span className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#FAF6EE]" />
      <span className="h-[1px] w-12 bg-[#D4AF37]/60" />
    </div>
  </div>
);
