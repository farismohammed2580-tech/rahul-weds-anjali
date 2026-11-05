import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Heart, Download } from 'lucide-react';
import { NilavilakkuIcon, PeepalLeafIcon, LotusIcon } from './TraditionalMotifs';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroSection: React.FC = () => {
  // Target Auspicious Wedding Muhurtham: Sunday, Nov 29, 2026 at 09:15:00 IST
  const targetDate = new Date('2026-11-29T09:15:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Post event or today
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleDownloadCalendar = () => {
    // Generate .ics calendar invite for the wedding
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Rahul and Anjali Kerala Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Rahul & Anjali Traditional Kerala Mangalyam Wedding',
      'DESCRIPTION:Sacred Thalikettu Muhurtham & Kalyana Sadhya celebrations at Sree Krishna Temple Auditorium, Guruvayur.',
      'LOCATION:Sree Krishna Temple Auditorium, Guruvayur, Thrissur, Kerala',
      'DTSTART:20261129T034500Z',
      'DTEND:20261129T093000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Rahul_Anjali_Kerala_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Decorative Traditional Kerala Kasavu top header accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#FFFBEB] via-[#E5C158] to-[#D4AF37] opacity-80" />

      {/* Radiant golden central glow aura behind the sacred motif */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[340px] md:h-[600px] rounded-full bg-gradient-to-r from-[#F59E0B]/15 via-[#E5C158]/25 to-[#8B1E1E]/10 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-4xl mx-auto text-center z-10">
        {/* Sacred Malayalam Mantra & Floral Crown */}
        <div className="inline-flex flex-col items-center mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <NilavilakkuIcon className="w-10 h-14 text-[#D4AF37]" />
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <div className="px-5 py-2 rounded-full bg-[#FAF6EE]/90 border border-[#D4AF37]/40 shadow-sm backdrop-blur-sm">
            <p className="font-['Anek_Malayalam'] text-sm md:text-base font-semibold text-[#8B1E1E] tracking-wide">
              ॥ മംഗല്യം തന്തുനാനേന മമ ജീവന ഹേതുനാ ॥
            </p>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#B8860B] tracking-widest uppercase mt-2 font-medium">
            Shubha Vivaham · Sacred Matrimony
          </p>
        </div>

        {/* Family Greeting */}
        <p className="font-['Playfair_Display'] italic text-base md:text-lg text-[#5C3D28] mb-2 tracking-wide">
          Together with their families
        </p>

        {/* The Couple's Grand Names */}
        <div className="py-2 my-2">
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#2A140A] drop-shadow-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5">
            <span className="bg-gradient-to-b from-[#3A1700] via-[#5C2300] to-[#2A140A] bg-clip-text text-transparent">
              Rahul
            </span>
            <span className="font-['Cinzel_Decorative'] text-2xl md:text-3xl text-[#D4AF37] my-1 md:my-0 flex items-center justify-center">
              <span className="w-6 h-[1.5px] bg-[#D4AF37] mx-2 hidden md:inline-block" />
              &amp;
              <span className="w-6 h-[1.5px] bg-[#D4AF37] mx-2 hidden md:inline-block" />
            </span>
            <span className="bg-gradient-to-b from-[#3A1700] via-[#5C2300] to-[#2A140A] bg-clip-text text-transparent">
              Anjali
            </span>
          </h1>

          {/* Malayalam Script Script for Couple */}
          <p className="font-['Anek_Malayalam'] text-base md:text-lg text-[#8B1E1E] font-semibold mt-2 tracking-wide">
            രാഹുൽ &amp; അഞ്ജലി
          </p>
        </div>

        <p className="max-w-xl mx-auto font-['Plus_Jakarta_Sans'] text-sm md:text-base text-[#614533] mt-3 mb-8 leading-relaxed font-normal">
          Request the honour of your auspicious presence and heartfelt blessings as we step into holy matrimony and eternal companionship.
        </p>

        {/* Auspicious Muhurtham & Date Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mb-10 text-left">
          {/* Card 1: Date */}
          <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#D4AF37]/35 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FAF6EE] text-[#8B1E1E] border border-[#D4AF37]/30">
                <Calendar className="w-5 h-5 text-[#8B1E1E]" />
              </div>
              <div>
                <p className="text-xs text-[#8B1E1E] font-medium tracking-wide uppercase font-['Plus_Jakarta_Sans']">
                  Auspicious Date
                </p>
                <p className="text-sm font-semibold text-[#2A140A] font-['Playfair_Display']">
                  Sunday, 29 Nov 2026
                </p>
                <p className="text-xs text-stone-500 font-['Anek_Malayalam']">
                  1102 വൃശ്ചികം 14
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Muhurtham */}
          <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#D4AF37]/35 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FAF6EE] text-[#D4AF37] border border-[#D4AF37]/30">
                <Clock className="w-5 h-5 text-[#B8860B]" />
              </div>
              <div>
                <p className="text-xs text-[#8B1E1E] font-medium tracking-wide uppercase font-['Plus_Jakarta_Sans']">
                  Shubha Muhurtham
                </p>
                <p className="text-sm font-semibold text-[#2A140A] font-['Playfair_Display']">
                  09:15 AM - 10:30 AM
                </p>
                <p className="text-xs text-stone-500 font-['Anek_Malayalam']">
                  വൃശ്ചിക രാശി ശുഭ ലഗ്നം
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Venue */}
          <div className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-[#D4AF37]/35 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FAF6EE] text-[#D4AF37] border border-[#D4AF37]/30">
                <MapPin className="w-5 h-5 text-[#8B1E1E]" />
              </div>
              <div>
                <p className="text-xs text-[#8B1E1E] font-medium tracking-wide uppercase font-['Plus_Jakarta_Sans']">
                  Sacred Venue
                </p>
                <p className="text-sm font-semibold text-[#2A140A] font-['Playfair_Display'] truncate">
                  Temple Auditorium
                </p>
                <p className="text-xs text-stone-500 truncate">
                  Guruvayur, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Muhurtham Countdown Styled as Traditional Brass Placards */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="text-center mb-4">
            <span className="text-xs font-['Anek_Malayalam'] text-[#8B1E1E] tracking-widest font-semibold uppercase flex items-center justify-center gap-2">
              <PeepalLeafIcon className="w-4 h-4 text-[#D4AF37]" />
              മുഹൂർത്തത്തിന് ഇനി ബാക്കി സമയം · COUNTDOWN TO MUHURTHAM
              <PeepalLeafIcon className="w-4 h-4 text-[#D4AF37]" />
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {/* Days */}
            <div className="relative group p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF5E8] border border-[#D4AF37]/40 shadow-md text-center">
              <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-[#B8860B]/40" />
              <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#B8860B]/40" />
              <span className="block text-2xl sm:text-4xl font-bold font-['Playfair_Display'] text-[#8B1E1E] tabular-nums">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold text-[#614533] uppercase tracking-wider mt-1">
                Days · ദിവസങ്ങൾ
              </span>
            </div>

            {/* Hours */}
            <div className="relative group p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF5E8] border border-[#D4AF37]/40 shadow-md text-center">
              <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-[#B8860B]/40" />
              <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#B8860B]/40" />
              <span className="block text-2xl sm:text-4xl font-bold font-['Playfair_Display'] text-[#8B1E1E] tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold text-[#614533] uppercase tracking-wider mt-1">
                Hours · മണിക്കൂർ
              </span>
            </div>

            {/* Minutes */}
            <div className="relative group p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF5E8] border border-[#D4AF37]/40 shadow-md text-center">
              <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-[#B8860B]/40" />
              <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#B8860B]/40" />
              <span className="block text-2xl sm:text-4xl font-bold font-['Playfair_Display'] text-[#8B1E1E] tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold text-[#614533] uppercase tracking-wider mt-1">
                Mins · മിനിറ്റ്
              </span>
            </div>

            {/* Seconds */}
            <div className="relative group p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF5E8] border border-[#D4AF37]/40 shadow-md text-center">
              <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-[#B8860B]/40" />
              <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#B8860B]/40" />
              <span className="block text-2xl sm:text-4xl font-bold font-['Playfair_Display'] text-[#8B1E1E] tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold text-[#614533] uppercase tracking-wider mt-1">
                Secs · സെക്കൻഡ്
              </span>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#rsvp"
            className="px-7 py-3 rounded-full text-sm font-semibold text-[#FAF6EE] bg-gradient-to-r from-[#8B1E1E] via-[#A82828] to-[#8B1E1E] hover:from-[#731818] hover:to-[#731818] shadow-lg shadow-[#8B1E1E]/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-[#E5C158]/50"
          >
            <Heart className="w-4 h-4 fill-current text-[#E5C158]" />
            <span>Confirm RSVP via WhatsApp</span>
          </a>

          <button
            onClick={handleDownloadCalendar}
            className="px-6 py-3 rounded-full text-sm font-semibold text-[#3A1F0D] bg-[#FAF6EE] hover:bg-[#FFFBEB] border border-[#D4AF37] shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-[#8B1E1E]" />
            <span>Add to Calendar (.ics)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
