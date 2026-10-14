import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroFourTiles } from './components/HeroFourTiles';
import { RosterSection } from './components/RosterSection';
import { MapSection } from './components/MapSection';
import { ReseauxSection } from './components/ReseauxSection';
import { Footer } from './components/Footer';
import { Check } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('tuiles');
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [toastLabel, setToastLabel] = useState<string | null>(null);

  const handleCopy = useCallback((value: string, label: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(() => {
        // Fallback if clipboard API is restricted
      });
    }
    setCopiedValue(value);
    setToastLabel(`${label} COPIÉ`);
    const timer = setTimeout(() => {
      setCopiedValue(null);
      setToastLabel(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['tuiles', 'roster', 'maps', 'reseaux'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: 0.05 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#E1ECFC] text-[#0B0D0D] relative overflow-x-hidden">
      {/* Subtle organic print/paper grain overlay (anti-"AI sterile" materiality) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 vexis-grain"
      />

      {/* Top Sticky Architectural Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        {/* Hero + The 4 Primary Tiles (Roster, Map, Réseaux, Discord) */}
        <HeroFourTiles onSelectTile={handleNavigate} />

        {/* Module 01: Notre Roster (4 Paliers de PR + Places @libre) */}
        <RosterSection />

        {/* Module 02: Map (En cours de création) */}
        <MapSection />

        {/* Module 03: Réseaux Officiels (YouTube @Vexis_E-sport & Discord) */}
        <ReseauxSection onCopyText={handleCopy} copiedText={copiedValue} />
      </main>

      {/* Architectural Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mechanical Clipboard Confirmation Toast */}
      {toastLabel && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 bg-[#0B0D0D] text-[#E1ECFC] border-2 border-[#E1ECFC] px-4 py-3 shadow-[4px_4px_0px_0px_#0B0D0D] flex items-center gap-2.5 font-mono-tech text-xs uppercase tracking-wider"
        >
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastLabel}</span>
        </div>
      )}
    </div>
  );
}

export default App;
