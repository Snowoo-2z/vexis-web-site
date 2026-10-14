import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/vexisData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B0D0D] text-[#E1ECFC] border-t border-[#0B0D0D]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E1ECFC]/15">
          {/* Col 1-5: Official Brand Lockup */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/assets/vexis-mark-light.png"
                alt="VEXIS Emblem"
                className="w-11 h-11 object-contain"
              />
              <div>
                <img
                  src="/assets/vexis-wordmark-light.png"
                  alt="VEXIS"
                  className="h-5 w-auto object-contain object-left"
                />
                <span className="block font-mono-tech text-[10px] tracking-[0.2em] text-[#E1ECFC]/60 mt-1">
                  STRUCTURE ESPORT FORTNITE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E1ECFC]/75 max-w-md leading-relaxed">
              Portail officiel de la structure VEXIS. Retrouvez notre roster, l’avancement de notre
              map, notre chaîne YouTube et notre serveur Discord.
            </p>
          </div>

          {/* Col 6-8: Les 4 Tuiles Principales */}
          <div className="lg:col-span-4 space-y-3 font-mono-tech">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E1ECFC]">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs text-[#E1ECFC]/75">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('roster')}
                  className="hover:text-white hover:underline py-1 text-left"
                >
                  01 // NOTRE ROSTER
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('maps')}
                  className="hover:text-white hover:underline py-1 text-left"
                >
                  02 // MAP
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('reseaux')}
                  className="hover:text-white hover:underline py-1 text-left"
                >
                  03 // RÉSEAUX
                </button>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline py-1 inline-block"
                >
                  04 // DISCORD
                </a>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Direct Links & Back to top */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-4 font-mono-tech">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E1ECFC]">
                LIENS OFFICIELS
              </span>
              <div className="text-xs text-[#E1ECFC]/80 space-y-2">
                <a
                  href={OFFICIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white hover:underline"
                >
                  <span>DISCORD : {OFFICIAL_LINKS.discordDisplay}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={OFFICIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white hover:underline"
                >
                  <span>YOUTUBE : {OFFICIAL_LINKS.youtubeHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="self-start min-h-[42px] px-4 py-2 border border-[#E1ECFC]/40 text-xs uppercase tracking-wider hover:bg-[#E1ECFC] hover:text-[#0B0D0D] transition-colors flex items-center gap-2"
            >
              <span>RETOUR EN HAUT</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-tech text-[11px] text-[#E1ECFC]/55">
          <p>© {new Date().getFullYear()} VEXIS E-SPORT. TOUS DROITS RÉSERVÉS.</p>
          <p className="max-w-xl sm:text-right">
            Site officiel VEXIS — Non affilié à Epic Games, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
