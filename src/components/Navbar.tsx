import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { PeepalLeafIcon } from './TraditionalMotifs';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#D4AF37]/30 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-[#2A140A] font-['Playfair_Display'] whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <PeepalLeafIcon className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <span>Rahul &amp; Anjali</span>
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#5C3D28]">
          <a href="#couple" className="hover:text-[#8B1E1E] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#D4AF37] decoration-2 underline-offset-4">
            Our Story
          </a>
          <a href="#events" className="hover:text-[#8B1E1E] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#D4AF37] decoration-2 underline-offset-4">
            Muhurtham
          </a>
          <a href="#gallery" className="hover:text-[#8B1E1E] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#D4AF37] decoration-2 underline-offset-4">
            Moments
          </a>
          <a href="#rsvp" className="hover:text-[#8B1E1E] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#D4AF37] decoration-2 underline-offset-4">
            Guestbook
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#rsvp"
            className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-[#FAF6EE] bg-[#8B1E1E] hover:bg-[#701616] rounded-full border border-[#D4AF37]/50 shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-[#E5C158] fill-current" />
            <span>RSVP Now</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#5C3D28] hover:text-[#8B1E1E] hover:bg-[#FAF6EE] border border-[#D4AF37]/30"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-b border-[#D4AF37]/30 px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#4A3222]">
            <a
              href="#couple"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8B1E1E] transition-colors"
            >
              The Couple &amp; Blessings
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8B1E1E] transition-colors"
            >
              Ceremonies &amp; Muhurtham
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8B1E1E] transition-colors"
            >
              Photo Moments
            </a>
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8B1E1E] transition-colors"
            >
              RSVP &amp; Blessings
            </a>
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-2.5 text-center text-xs font-semibold text-white bg-[#8B1E1E] rounded-xl shadow-sm"
            >
              Confirm via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
