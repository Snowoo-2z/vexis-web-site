import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/vexisData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const navItems = [
    { id: 'tuiles', label: 'ACCUEIL' },
    { id: 'roster', label: 'ROSTER' },
    { id: 'maps', label: 'MAP' },
    { id: 'reseaux', label: 'RÉSEAUX' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#E1ECFC]/95 backdrop-blur-sm border-b border-[#0B0D0D]">
      {/* Top architectural chamfer bar inspired by vexis baniere.png */}
      <div className="relative h-2 w-full bg-[#E1ECFC] overflow-hidden border-b border-[#0B0D0D]/15">
        <div
          className="h-full w-44 sm:w-64 bg-[#0B0D0D]"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Official VEXIS Logo Lockup */}
        <button
          type="button"
          onClick={() => onNavigate('tuiles')}
          className="group flex items-center gap-3.5 text-left focus:outline-none py-2 shrink-0"
          aria-label="VEXIS Accueil"
        >
          <img
            src="/assets/vexis-mark-dark.png"
            alt="VEXIS Emblem"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <img
            src="/assets/vexis-wordmark-dark.png"
            alt="VEXIS"
            className="h-3.5 sm:h-4 w-auto object-contain object-left"
          />
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center border border-[#0B0D0D]/20 bg-[#EDF3FE]/70">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2.5 text-xs font-mono-tech tracking-wider transition-colors border-r last:border-r-0 border-[#0B0D0D]/15 flex items-center ${
                  isActive
                    ? 'bg-[#0B0D0D] text-[#E1ECFC] font-semibold'
                    : 'text-[#0B0D0D] hover:bg-[#0B0D0D]/10'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Quick Action: Official YouTube + Discord CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={OFFICIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-3.5 py-2 bg-[#EDF3FE] border border-[#0B0D0D] text-xs font-mono-tech hover:bg-[#0B0D0D] hover:text-[#E1ECFC] transition-colors flex items-center gap-1.5"
          >
            <span>YOUTUBE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={OFFICIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 sm:px-4 py-2 bg-[#0B0D0D] text-[#E1ECFC] text-xs font-mono-tech font-medium tracking-wider uppercase flex items-center gap-1.5 hover:bg-[#1D4ED8] transition-colors"
          >
            <span>DISCORD</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
