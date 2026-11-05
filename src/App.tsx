/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { RsvpAndGuestbook } from './components/RsvpAndGuestbook';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalsAnimation } from './components/PetalsAnimation';
import { KasavuDivider } from './components/TraditionalMotifs';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] relative selection:bg-[#E5C158]/30 selection:text-[#8B1E1E] overflow-x-hidden silk-pattern-bg">
      {/* Floating Ambient Marigold and Jasmine Petals */}
      <PetalsAnimation />

      {/* Floating Auspicious Music Player */}
      <AudioPlayer />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Wedding Invitation Content */}
      <main className="relative">
        {/* Hero Section with Live Muhurtham Countdown */}
        <HeroSection />

        <KasavuDivider className="my-6 md:my-12 opacity-80" />

        {/* The Couple / Sacred Union */}
        <CoupleSection />

        <KasavuDivider className="my-6 md:my-12 opacity-80" />

        {/* Ceremonies & Muhurtham Itinerary */}
        <EventsSection />

        <KasavuDivider className="my-6 md:my-12 opacity-80" />

        {/* Auspicious Moments Gallery */}
        <GallerySection />

        <KasavuDivider className="my-6 md:my-12 opacity-80" />

        {/* Interactive RSVP & Live Blessings Guestbook */}
        <RsvpAndGuestbook />
      </main>

      {/* Footer with Mandatory Agency Branding */}
      <Footer />
    </div>
  );
}
