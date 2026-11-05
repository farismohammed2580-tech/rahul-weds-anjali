import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { TempleArchHeader, PeepalLeafIcon, LotusIcon } from './TraditionalMotifs';

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="py-20 px-4 max-w-6xl mx-auto relative">
      <TempleArchHeader
        title="The Auspicious Union"
        subtitle="വരനും വധുവും · Groom & Bride"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-4xl mx-auto items-center">
        {/* The Groom Card */}
        <div className="relative group p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-[#D4AF37]/35 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Traditional Kasavu top ribbon */}
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Arch Framed Portrait */}
          <div className="relative mx-auto w-48 sm:w-56 h-64 sm:h-72 mb-6">
            {/* Outer Gold Arch Border */}
            <div className="absolute -inset-2 rounded-t-[120px] rounded-b-2xl border-2 border-[#D4AF37] opacity-80 group-hover:scale-[1.02] transition-transform duration-300" />
            <div className="absolute -inset-1 rounded-t-[115px] rounded-b-xl border border-[#E5C158]/50" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-t-[110px] rounded-b-xl overflow-hidden shadow-inner bg-[#FAF6EE]">
              <img
                src="/src/assets/images/kerala_groom_portrait_1793882733813.jpg"
                alt="Kerala Hindu Groom Rahul in traditional Kasavu mundu"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Bottom corner decorative lotus pin */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-[#FAF6EE] border border-[#D4AF37] shadow-sm">
              <LotusIcon className="w-5 h-5 text-[#8B1E1E]" />
            </div>
          </div>

          {/* Details */}
          <div className="text-center pt-2">
            <span className="font-['Anek_Malayalam'] text-xs font-semibold text-[#8B1E1E] uppercase tracking-wider block mb-1">
              വരൻ · The Groom
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#2A140A] mb-1">
              Rahul Narayanan
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-stone-500 mb-3">
              Son of Sri. P. Narayanan Nair &amp; Smt. Girija Narayanan
              <br />
              <span className="text-[#8B1E1E] font-medium">Ernakulam, Kerala</span>
            </p>

            <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto my-3" />

            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#5C3D28] leading-relaxed">
              "A software architect with a deep love for Carnatic melodies and Kerala heritage. Blessed and overjoyed to begin this sacred lifelong journey of dharma, love, and togetherness."
            </p>
          </div>
        </div>

        {/* The Bride Card */}
        <div className="relative group p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-[#D4AF37]/35 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Traditional Kasavu top ribbon */}
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Arch Framed Portrait */}
          <div className="relative mx-auto w-48 sm:w-56 h-64 sm:h-72 mb-6">
            {/* Outer Gold Arch Border */}
            <div className="absolute -inset-2 rounded-t-[120px] rounded-b-2xl border-2 border-[#D4AF37] opacity-80 group-hover:scale-[1.02] transition-transform duration-300" />
            <div className="absolute -inset-1 rounded-t-[115px] rounded-b-xl border border-[#E5C158]/50" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-t-[110px] rounded-b-xl overflow-hidden shadow-inner bg-[#FAF6EE]">
              <img
                src="/src/assets/images/kerala_bride_portrait_1793882732796.jpg"
                alt="Kerala Hindu Bride Anjali in traditional Kasavu saree with temple jewelry"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Bottom corner decorative lotus pin */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-[#FAF6EE] border border-[#D4AF37] shadow-sm">
              <LotusIcon className="w-5 h-5 text-[#8B1E1E]" />
            </div>
          </div>

          {/* Details */}
          <div className="text-center pt-2">
            <span className="font-['Anek_Malayalam'] text-xs font-semibold text-[#8B1E1E] uppercase tracking-wider block mb-1">
              വധു · The Bride
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#2A140A] mb-1">
              Anjali Radhakrishnan
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-stone-500 mb-3">
              Daughter of Sri. K. Radhakrishnan &amp; Smt. Shobhana Radhakrishnan
              <br />
              <span className="text-[#8B1E1E] font-medium">Thrissur, Kerala</span>
            </p>

            <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto my-3" />

            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#5C3D28] leading-relaxed">
              "Classical dancer, educator, and nature lover. Embracing the sacred Mangalyam with devotion, joy, and the blessings of all our elders and ancestors."
            </p>
          </div>
        </div>
      </div>

      {/* Auspicious Mangalyam Verse Box */}
      <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF6EE] via-[#FFFDF9] to-[#FAF6EE] border border-[#D4AF37]/40 shadow-sm text-center">
        <div className="flex items-center justify-center gap-2 mb-3 text-[#B8860B]">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-['Anek_Malayalam'] text-xs uppercase tracking-widest font-semibold text-[#8B1E1E]">
            ഗുരുവായൂരപ്പന്റെ അനുഗ്രഹത്തോടെ · WITH THE BLESSINGS OF GURUVAYURAPPAN
          </span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </div>
        <p className="font-['Playfair_Display'] text-lg sm:text-xl text-[#3A1F0D] italic mb-3">
          "As the sacred Thali is tied and seven auspicious steps are taken around the holy fire, two souls unite to share one life, one dharma, and endless happiness."
        </p>
        <p className="font-['Plus_Jakarta_Sans'] text-xs text-stone-500">
          We warmly invite you to shower your pious blessings upon us.
        </p>
      </div>
    </section>
  );
};
