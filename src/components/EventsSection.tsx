import React from 'react';
import { Clock, MapPin, ExternalLink, Sparkles, Utensils, Music, Calendar } from 'lucide-react';
import { TempleArchHeader, NilavilakkuIcon, LotusIcon } from './TraditionalMotifs';

interface WeddingEvent {
  id: string;
  malayalamTitle: string;
  englishTitle: string;
  category: string;
  time: string;
  date: string;
  venueName: string;
  address: string;
  description: string;
  mapsUrl: string;
  imageUrl?: string;
  icon: 'ceremony' | 'sadhya' | 'reception';
}

export const EventsSection: React.FC = () => {
  const events: WeddingEvent[] = [
    {
      id: 'thalikettu',
      malayalamTitle: 'താലികെട്ടും ശുഭ മുഹൂർത്തവും',
      englishTitle: 'Thalikettu & Sacred Muhurtham',
      category: 'Sacred Ceremony',
      time: '09:15 AM - 10:30 AM',
      date: 'Sunday, 29 November 2026',
      venueName: 'Sree Krishna Temple Auditorium',
      address: 'East Nada, Guruvayur, Thrissur, Kerala 680101',
      description: 'The sanctified mangalya sutra dharanam (thalikettu) ceremony in Vrishika Rashi auspicious lagna with Vedic chants, nadaswaram recital, and offering of fragrant flower garlands.',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple+Auditorium+Kerala',
      imageUrl: '/images/ceremony.jpg',
      icon: 'ceremony',
    },
    {
      id: 'sadhya',
      malayalamTitle: 'പരമ്പരാഗത കല്യാണ സദ്യ',
      englishTitle: 'Traditional Kalyana Sadhya',
      category: 'Grand Kerala Feast',
      time: '11:30 AM - 02:30 PM',
      date: 'Sunday, 29 November 2026',
      venueName: 'The Royal Oottupura (Dining Hall)',
      address: 'Guruvayur Devaswom Convention Centre, Guruvayur',
      description: 'An authentic 24-dish vegetarian Kerala banquet served on pristine plantain banana leaves with Parippu & pure ghee, Avial, Thoran, Kalan, Olan, crunchy banana chips, sweet sharkara upperi, and varieties of warm Ada Pradhaman & Palada Payasam.',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Devaswom+Convention+Centre',
      imageUrl: '/images/sadhya.jpg',
      icon: 'sadhya',
    },
    {
      id: 'reception',
      malayalamTitle: 'സംഗീതും വിവാഹ സൽക്കാരവും',
      englishTitle: 'Sangeeth & Grand Reception',
      category: 'Evening Celebration',
      time: '06:30 PM Onwards',
      date: 'Sunday, 29 November 2026',
      venueName: 'Grand Ballroom, Le Méridien Kochi',
      address: 'Maradu, Kochi, Kerala 682304',
      description: 'An evening of joyous celebratory music, cultural fusion performances, cocktail dinner, interactive photo booths, and sharing joyous laughter with family and friends.',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Le+Meridien+Kochi+Kerala',
      icon: 'reception',
    },
  ];

  return (
    <section id="events" className="py-20 px-4 max-w-6xl mx-auto relative">
      <TempleArchHeader
        title="Ceremonies & Muhurtham Schedule"
        subtitle="വിവാഹ ചടങ്ങുകൾ · Itinerary of Auspicious Events"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="group relative flex flex-col rounded-3xl bg-white/80 backdrop-blur-md border border-[#D4AF37]/35 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Top Kasavu Border Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#FFFBEB] via-[#E5C158] to-[#D4AF37]" />

            {/* Event Header Image if present */}
            {evt.imageUrl && (
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <img
                  src={evt.imageUrl}
                  alt={evt.englishTitle}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('src/assets/images')) {
                      target.src = evt.id === 'thalikettu' 
                        ? '/src/assets/images/kerala_wedding_ceremony_1793882734185.jpg'
                        : '/src/assets/images/kerala_kalyana_sadhya_1793882734689.jpg';
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#8B1E1E]/90 border border-[#E5C158]/40 backdrop-blur-sm">
                    {evt.category}
                  </span>
                </div>
              </div>
            )}

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                {/* Non-image header tag */}
                {!evt.imageUrl && (
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#8B1E1E]/10 text-[#8B1E1E] border border-[#8B1E1E]/20">
                      {evt.category}
                    </span>
                    <div className="p-2 rounded-full bg-[#FAF6EE] text-[#B8860B] border border-[#D4AF37]/40">
                      <Music className="w-4 h-4 text-[#8B1E1E]" />
                    </div>
                  </div>
                )}

                {/* Malayalam Title */}
                <p className="font-['Anek_Malayalam'] text-sm font-semibold text-[#8B1E1E] mb-1">
                  {evt.malayalamTitle}
                </p>

                {/* English Title */}
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#2A140A] mb-3 group-hover:text-[#8B1E1E] transition-colors">
                  {evt.englishTitle}
                </h3>

                {/* Timing Badge */}
                <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm text-[#2A140A] font-semibold bg-[#FAF6EE] p-2.5 rounded-xl border border-[#D4AF37]/30">
                  <Clock className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                  <span>{evt.time}</span>
                  <span className="text-stone-300">|</span>
                  <Calendar className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <span className="text-stone-600 font-normal">{evt.date}</span>
                </div>

                {/* Venue Details */}
                <div className="flex items-start gap-2.5 mb-4 text-xs sm:text-sm text-[#4A3222]">
                  <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2A140A]">{evt.venueName}</p>
                    <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{evt.address}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#5C3D28] leading-relaxed mb-6">
                  {evt.description}
                </p>
              </div>

              {/* Action Button: Open in Google Maps */}
              <div className="pt-2 border-t border-[#D4AF37]/20">
                <a
                  href={evt.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#3A1F0D] bg-[#FAF6EE] hover:bg-[#F3E8CB] border border-[#D4AF37] flex items-center justify-center gap-2 transition-all hover:shadow-md active:scale-98"
                >
                  <MapPin className="w-4 h-4 text-[#8B1E1E]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dress Code & Traditional Guidelines Strip */}
      <div className="mt-12 p-6 rounded-2xl bg-white/70 border border-[#D4AF37]/30 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-[#FAF6EE] text-[#8B1E1E] border border-[#D4AF37]/40 shrink-0">
            <Sparkles className="w-5 h-5 text-[#8B1E1E]" />
          </div>
          <div>
            <h4 className="font-['Playfair_Display'] text-base font-bold text-[#2A140A]">
              Traditional Kerala Attire Recommended
            </h4>
            <p className="text-xs text-[#5C3D28] mt-0.5">
              Kasavu Saree / Kerala Settu Mundu for Ladies · Kasavu Mundu &amp; Kurta / Melmundu for Gentlemen
            </p>
          </div>
        </div>
        <div className="text-xs font-semibold text-[#8B1E1E] px-4 py-2 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 shrink-0 font-['Anek_Malayalam']">
          മംഗള വസ്ത്രധാരണം
        </div>
      </div>
    </section>
  );
};
