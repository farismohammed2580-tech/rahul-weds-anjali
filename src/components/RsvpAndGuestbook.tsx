import React, { useState, useEffect } from 'react';
import { Send, Heart, Users, MessageSquare, CheckCircle, Sparkles, UserCheck } from 'lucide-react';
import { TempleArchHeader, PeepalLeafIcon, LotusIcon } from './TraditionalMotifs';

interface Blessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  isMalayalam?: boolean;
}

const DEFAULT_BLESSINGS: Blessing[] = [
  {
    id: 'blessing-1',
    name: 'Govindan Namboothiri & Family',
    relation: 'Elders & Family Friends',
    message: 'ദീർഘസുമംഗലീ ഭവഃ! സർവ്വ ഐശ്വര്യങ്ങളും നൽകി ഗുരുവായൂരപ്പൻ നിങ്ങളുടെ ദാമ്പത്യജീവിതം എന്നും ധന്യമാക്കട്ടെ. ഹൃദയം നിറഞ്ഞ വിവാഹ മംഗളാശംസകൾ!',
    timestamp: 'Just now',
    isMalayalam: true,
  },
  {
    id: 'blessing-2',
    name: 'Dr. Suresh & Lakshmi Menon',
    relation: "Bride's Uncle & Aunt",
    message: 'Dearest Anjali & Rahul, may your union be as pure as gold kasavu and as fragrant as mullappoo. Eagerly waiting to celebrate the auspicious thalikettu in Guruvayur!',
    timestamp: '2 hours ago',
  },
  {
    id: 'blessing-3',
    name: 'Arjun & Keerthi',
    relation: "Groom's Tech Colleagues",
    message: 'Congratulations Rahul & Anjali! Wishing you both endless adventures, joy, and laughter. Can’t wait for the legendary Kalyana Sadhya and evening reception party!',
    timestamp: 'Yesterday',
  },
  {
    id: 'blessing-4',
    name: 'Radhika Varma',
    relation: 'Childhood Friend',
    message: 'കണ്ടുമുട്ടിയ നാൾ മുതൽ നിങ്ങൾ പരസ്പരം എത്ര അനുയോജ്യരാണെന്ന് ഞങ്ങൾ കണ്ടതാണ്. സന്തോഷവും സമാധാനവും നിറഞ്ഞ ഒരു നല്ല ജീവിതം ആശംസിക്കുന്നു!',
    timestamp: '2 days ago',
    isMalayalam: true,
  },
];

export const RsvpAndGuestbook: React.FC = () => {
  // RSVP Form State
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [attendingEvents, setAttendingEvents] = useState('All Events (Muhurtham, Sadhya & Reception)');
  const [dietaryNote, setDietaryNote] = useState('');
  const [rsvpSent, setRsvpSent] = useState(false);

  // Blessings State
  const [blessings, setBlessings] = useState<Blessing[]>(() => {
    try {
      const saved = localStorage.getItem('kerala_wedding_blessings');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_BLESSINGS;
  });

  const [authorName, setAuthorName] = useState('');
  const [authorRelation, setAuthorRelation] = useState('Family / Friend');
  const [blessingMessage, setBlessingMessage] = useState('');
  const [wishSubmitted, setWishSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('kerala_wedding_blessings', JSON.stringify(blessings));
    } catch {
      // ignore
    }
  }, [blessings]);

  // WhatsApp RSVP submission
  const handleWhatsAppRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const messageText = `Namaskaram! 🙏✨%0A%0A*RSVP for Rahul & Anjali's Kerala Wedding*%0A%0A*Guest Name:* ${encodeURIComponent(
      guestName.trim()
    )}%0A*Number of Guests:* ${guestCount}%0A*Attending Ceremonies:* ${encodeURIComponent(
      attendingEvents
    )}${dietaryNote ? `%0A*Note:* ${encodeURIComponent(dietaryNote)}` : ''}%0A%0AWe are delighted to celebrate this auspicious day with you!`;

    const whatsappUrl = `https://wa.me/918606810450?text=${messageText}`;
    setRsvpSent(true);
    window.open(whatsappUrl, '_blank');
  };

  // Add new blessing to live guestbook
  const handleAddBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !blessingMessage.trim()) return;

    const newBlessing: Blessing = {
      id: `blessing-${Date.now()}`,
      name: authorName.trim(),
      relation: authorRelation,
      message: blessingMessage.trim(),
      timestamp: 'Just now',
      isMalayalam: /[\u0D00-\u0D7F]/.test(blessingMessage),
    };

    setBlessings([newBlessing, ...blessings]);
    setAuthorName('');
    setBlessingMessage('');
    setWishSubmitted(true);
    setTimeout(() => setWishSubmitted(false), 5000);
  };

  return (
    <section id="rsvp" className="py-20 px-4 max-w-6xl mx-auto relative">
      <TempleArchHeader
        title="RSVP & Auspicious Blessings"
        subtitle="സാന്നിദ്ധ്യവും ആശംസകളും · Guest Response & Blessings"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: RSVP Form (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl relative">
          <div className="absolute top-0 left-8 right-8 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#FFFBEB] via-[#E5C158] to-[#D4AF37]" />

          <div className="mb-6">
            <span className="font-['Anek_Malayalam'] text-xs font-semibold text-[#8B1E1E] uppercase tracking-wider block mb-1">
              വരവേൽപ്പ് · Warm Welcome
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2A140A]">
              Confirm Your Attendance
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-stone-500 mt-1">
              Please RSVP by 15 November 2026 to help us serve you the traditional sadhya with utmost care.
            </p>
          </div>

          <form onSubmit={handleWhatsAppRsvp} className="space-y-4">
            <div>
              <label htmlFor="rsvp-guest-name" className="block text-xs font-semibold text-[#3A1F0D] mb-1">
                Your Full Name <span className="text-[#8B1E1E]">*</span>
              </label>
              <input
                id="rsvp-guest-name"
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Radhakrishnan Menon"
                className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-[#FAF6EE]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all text-[#2A140A]"
              />
            </div>

            <div>
              <label htmlFor="rsvp-guest-count" className="block text-xs font-semibold text-[#3A1F0D] mb-1">
                Number of Guests Attending
              </label>
              <div className="relative">
                <select
                  id="rsvp-guest-count"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-[#FAF6EE]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all text-[#2A140A] appearance-none"
                >
                  <option value="1">1 Person (Just Me)</option>
                  <option value="2">2 Persons (Couple / Pair)</option>
                  <option value="3">3 Persons (Family of 3)</option>
                  <option value="4">4 Persons (Family of 4)</option>
                  <option value="5+">5+ Persons (Family Group)</option>
                </select>
                <Users className="w-4 h-4 text-stone-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label htmlFor="rsvp-events" className="block text-xs font-semibold text-[#3A1F0D] mb-1">
                Attending Ceremonies
              </label>
              <select
                id="rsvp-events"
                value={attendingEvents}
                onChange={(e) => setAttendingEvents(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-[#FAF6EE]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all text-[#2A140A]"
              >
                <option value="All Events (Muhurtham, Sadhya & Reception)">All Events (Muhurtham, Sadhya &amp; Reception)</option>
                <option value="Morning Thalikettu & Kalyana Sadhya Only">Morning Thalikettu &amp; Kalyana Sadhya Only</option>
                <option value="Evening Sangeeth & Reception Only">Evening Sangeeth &amp; Reception Only</option>
              </select>
            </div>

            <div>
              <label htmlFor="rsvp-dietary" className="block text-xs font-semibold text-[#3A1F0D] mb-1">
                Note or Special Wishes (Optional)
              </label>
              <input
                id="rsvp-dietary"
                type="text"
                value={dietaryNote}
                onChange={(e) => setDietaryNote(e.target.value)}
                placeholder="Looking forward to being there!"
                className="w-full px-4 py-2 rounded-xl border border-[#D4AF37]/50 bg-[#FAF6EE]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all text-[#2A140A]"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#128C7E] hover:from-[#1EBE5D] hover:to-[#0E7A6D] shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.531 1.769.78 2.796.78 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.828c0 5.514-4.486 10-10 10-1.802 0-3.486-.481-4.945-1.321l-5.055 1.321 1.353-4.939c-.927-1.508-1.464-3.267-1.464-5.061 0-5.514 4.486-10 10-10s10 4.486 10 10z" />
              </svg>
              <span>Confirm via WhatsApp</span>
            </button>
          </form>

          {rsvpSent && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>WhatsApp message opened! Thank you for confirming your presence.</span>
            </div>
          )}
        </div>

        {/* Right Column: Share Your Blessings & Live Guestbook (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Post a Blessing Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#2A140A]">
                Share Your Blessings (മംഗളാശംസകൾ)
              </h3>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-stone-500 mb-4">
              Leave your pious prayers and warm congratulatory wishes for Rahul &amp; Anjali. Your blessing will appear instantly in the live guestbook below!
            </p>

            <form onSubmit={handleAddBlessing} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Your Name (പേര്)"
                    className="w-full px-4 py-2 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6EE]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all text-[#2A140A]"
                  />
                </div>
                <div>
                  <select
                    value={authorRelation}
                    onChange={(e) => setAuthorRelation(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6EE]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all text-[#2A140A]"
                  >
                    <option value="Family / Relative">Family / Relative (കുടുംബാംഗം)</option>
                    <option value="Close Friend">Close Friend (സുഹൃത്ത്)</option>
                    <option value="Colleague / Mentor">Colleague / Mentor</option>
                    <option value="Elder Well-Wisher">Elder Well-Wisher (ഗുരുജന / മുതിർന്നവർ)</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  required
                  rows={2}
                  value={blessingMessage}
                  onChange={(e) => setBlessingMessage(e.target.value)}
                  placeholder="Write your auspicious wishes (ആശംസകൾ കുറിക്കുക)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FAF6EE]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all text-[#2A140A]"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-stone-400">
                  Malayalam &amp; English text supported
                </span>
                <button
                  type="submit"
                  className="py-2 px-5 rounded-xl text-xs sm:text-sm font-semibold text-[#FAF6EE] bg-gradient-to-r from-[#8B1E1E] to-[#A82828] hover:from-[#731818] hover:to-[#731818] border border-[#E5C158]/50 shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post Blessing</span>
                </button>
              </div>
            </form>

            {wishSubmitted && (
              <div className="mt-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600" />
                <span>Thank you! Your heartfelt blessing has been recorded.</span>
              </div>
            )}
          </div>

          {/* Live Blessings Feed */}
          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {blessings.map((b) => (
              <div
                key={b.id}
                className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#D4AF37]/30 shadow-sm hover:border-[#D4AF37]/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#D4AF37]/40 flex items-center justify-center text-[#8B1E1E]">
                      <LotusIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] text-sm font-bold text-[#2A140A]">
                        {b.name}
                      </h4>
                      <p className="text-[10px] text-[#8B1E1E] font-medium">
                        {b.relation}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-stone-400 tabular-nums">
                    {b.timestamp}
                  </span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed text-[#4A3222] ${
                    b.isMalayalam ? "font-['Anek_Malayalam'] font-normal" : "font-['Plus_Jakarta_Sans']"
                  }`}
                >
                  "{b.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
