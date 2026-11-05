import React from 'react';
import { NilavilakkuIcon, LotusIcon } from './TraditionalMotifs';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16 pt-12 pb-10 border-t border-amber-500/20 bg-[#FAF6EE]/80 backdrop-blur-sm text-stone-500 text-xs text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Sacred Decorative Motif */}
        <div className="flex items-center justify-center gap-3 mb-4 text-[#D4AF37]">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <LotusIcon className="w-5 h-5 text-[#8B1E1E]" />
          <NilavilakkuIcon className="w-6 h-8 text-[#D4AF37]" />
          <LotusIcon className="w-5 h-5 text-[#8B1E1E]" />
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Sacred blessing tagline in Malayalam */}
        <p className="font-['Anek_Malayalam'] text-sm font-semibold text-[#8B1E1E] mb-2">
          മംഗളം ഭവതു · സർവ്വ ഐശ്വര്യങ്ങളും നേരുന്നു
        </p>

        {/* Line 1: Exactly as required */}
        <p className="mb-1 text-stone-500 text-xs">
          Crafted with elegance for Rahul &amp; Anjali
        </p>

        {/* Line 2: Exactly as required */}
        <p className="text-stone-500 text-xs">
          Designed by{' '}
          <a
            href="https://wa.me/918606810450"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-500 hover:text-amber-400 underline"
          >
            brandwithfaris
          </a>{' '}
          •{' '}
          <a
            href="https://wa.me/918606810450"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400"
          >
            Get your invite
          </a>
        </p>

        <p className="text-[10px] text-stone-400 mt-4">
          Guruvayur · Kochi, Kerala · Auspicious Muhurtham 2026
        </p>
      </div>
    </footer>
  );
};
