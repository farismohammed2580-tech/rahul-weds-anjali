import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Bell } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Mohanam / Kalyana Vasantham auspicious wedding raga frequencies (D base)
  // D3 = 146.83 Hz (Sa), E3 = 164.81 (Ri), F#3 = 185.00 (Ga), A3 = 220.00 (Pa), B3 = 246.94 (Dha), D4 = 293.66 (Sa')
  const notes = [
    { freq: 146.83, dur: 1.2 }, // Sa
    { freq: 164.81, dur: 0.8 }, // Ri
    { freq: 185.00, dur: 1.4 }, // Ga
    { freq: 220.00, dur: 1.0 }, // Pa
    { freq: 246.94, dur: 1.2 }, // Dha
    { freq: 293.66, dur: 1.8 }, // Sa'
    { freq: 246.94, dur: 0.9 }, // Dha
    { freq: 220.00, dur: 1.4 }, // Pa
    { freq: 185.00, dur: 1.1 }, // Ga
    { freq: 164.81, dur: 0.9 }, // Ri
    { freq: 146.83, dur: 2.2 }, // Sa
  ];

  const stopMusic = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try {
        audioCtxRef.current.suspend();
      } catch (e) {
        console.error(e);
      }
    }
    isPlayingRef.current = false;
    setIsPlaying(false);
  };

  const playTempleBell = (ctx: AudioContext, masterGain: GainNode) => {
    try {
      const bellFreqs = [587.33, 1174.66, 1760.0]; // D5 and bright overtone
      bellFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        const now = ctx.currentTime;
        gain.gain.setValueAtTime(0.04 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
        
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(now);
        osc.stop(now + 2.5);
      });
    } catch {
      // Audio fallback safe
    }
  };

  const playNadaswaramNote = (ctx: AudioContext, masterGain: GainNode, freq: number, duration: number) => {
    try {
      const now = ctx.currentTime;
      // Dual oscillator for authentic double-reed nadaswaram overtone richness
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'triangle';
      
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq * 2, now); // Octave overtone

      // Gentle traditional vibrato (gamakam)
      const vibrato = ctx.createOscillator();
      const vibratoGain = ctx.createGain();
      vibrato.frequency.setValueAtTime(5.5, now);
      vibratoGain.gain.setValueAtTime(3.5, now);
      vibrato.connect(osc1.frequency);
      vibrato.start(now);

      // Warm low-pass filter to give mellow wooden/brass acoustic timbre
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, now);
      filter.Q.setValueAtTime(3, now);

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.05, now + 0.15); // soft breath attack
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.1);
      osc2.stop(now + duration + 0.1);
      vibrato.stop(now + duration + 0.1);
    } catch {
      // Safe handle
    }
  };

  const startMusicLoop = (step = 0) => {
    if (!isPlayingRef.current || !audioCtxRef.current || !gainNodeRef.current) return;
    const ctx = audioCtxRef.current;
    const master = gainNodeRef.current;

    const currentNote = notes[step % notes.length];
    
    // Play the auspicious note
    playNadaswaramNote(ctx, master, currentNote.freq, currentNote.dur);

    // Auspicious bell at melody turn
    if (step % notes.length === 0) {
      playTempleBell(ctx, master);
    }

    const nextStep = (step + 1) % notes.length;
    timerRef.current = window.setTimeout(() => {
      startMusicLoop(nextStep);
    }, currentNote.dur * 1000);
  };

  const startTanpuraDrone = (ctx: AudioContext, masterGain: GainNode) => {
    // Continuous auspicious Indian Tanpura drone (Sa & Pa)
    [146.83, 220.00, 293.66].forEach((f, i) => {
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      const droneFilter = ctx.createBiquadFilter();

      droneOsc.type = 'sawtooth';
      droneOsc.frequency.setValueAtTime(f, ctx.currentTime);

      droneFilter.type = 'lowpass';
      droneFilter.frequency.setValueAtTime(450 + i * 100, ctx.currentTime);

      droneGain.gain.setValueAtTime(0.015 / (i + 1), ctx.currentTime);

      droneOsc.connect(droneFilter);
      droneFilter.connect(droneGain);
      droneGain.connect(masterGain);

      droneOsc.start();
    });
  };

  const toggleMusic = async () => {
    if (isPlaying) {
      stopMusic();
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }
        if (audioCtxRef.current.state === 'suspended') {
          await audioCtxRef.current.resume();
        }

        const ctx = audioCtxRef.current;
        const master = ctx.createGain();
        master.gain.setValueAtTime(0.5, ctx.currentTime);
        master.connect(ctx.destination);
        gainNodeRef.current = master;

        isPlayingRef.current = true;
        setIsPlaying(true);

        // Start background tanpura drone and auspicious melody loop
        startTanpuraDrone(ctx, master);
        startMusicLoop(0);
      } catch (err) {
        console.warn('Audio autoplay requires user interaction', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <aside 
      aria-label="Ambient Wedding Nadaswaram Music"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Floating Status Badge / Tooltip */}
      <div 
        role="status"
        aria-live="polite"
        className={`px-3 py-1.5 rounded-full bg-[#FAF6EE] text-[#8B1E1E] text-xs font-medium border border-[#D4AF37]/50 shadow-md backdrop-blur-sm transition-all duration-300 pointer-events-none ${
          showTooltip || isPlaying ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
        }`}
      >
        <span className="flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
          <Bell className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isPlaying ? 'Auspicious Nadaswaram: Playing' : 'Play Auspicious Music'}</span>
        </span>
      </div>

      {/* Floating Golden Button with Wave Ripple */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Mute traditional auspicious nadaswaram music' : 'Play traditional auspicious nadaswaram music'}
        className={`relative group w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border-2 border-[#D4AF37] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/40 ${
          isPlaying
            ? 'bg-gradient-to-tr from-[#8B1E1E] to-[#B8860B] text-[#FFFBEB] animate-audio-ripple'
            : 'bg-gradient-to-tr from-[#FAF6EE] via-[#FFFBEB] to-[#F3E8CB] text-[#8B1E1E] hover:scale-105'
        }`}
      >
        {/* Golden outer glow aura */}
        <div className="absolute inset-0 rounded-full bg-[#D4AF37]/30 blur-sm -z-10 group-hover:bg-[#D4AF37]/50 transition-all" />

        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-6 h-6 text-[#FFFBEB]" />
            {/* Visual audio sound bars */}
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C158] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F59E0B]"></span>
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center text-[#8B1E1E]">
            <VolumeX className="w-6 h-6" />
          </div>
        )}
      </button>
    </aside>
  );
};
