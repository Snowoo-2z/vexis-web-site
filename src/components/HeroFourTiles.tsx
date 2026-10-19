import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  IconRoster,
  IconMapUefn,
  IconReseaux,
  IconDiscordHq,
} from './VexisIcons';
import { OFFICIAL_LINKS } from '../data/vexisData';

interface HeroFourTilesProps {
  onSelectTile: (sectionId: string) => void;
}

export const HeroFourTiles: React.FC<HeroFourTilesProps> = ({ onSelectTile }) => {
  return (
    <section
      id="tuiles"
      className="relative w-full border-b border-[#0B0D0D] vexis-draft-grid overflow-hidden"
    >
      {/* Subtle architectural watermark V from official mark on the far right */}
      <img
        src="/assets/vexis-mark-dark.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden xl:block absolute -right-20 -top-10 w-[500px] opacity-[0.05] object-contain"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-14 sm:pb-20 relative z-10">
        {/* Clean, Sober Pro Header */}
        <div className="pb-10 sm:pb-12 border-b border-[#0B0D0D]/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src="/assets/vexis-mark-dark.png"
              alt="Logo VEXIS"
              className="w-14 h-14 sm:w-18 sm:h-18 object-contain shrink-0"
            />
            <div>
              <img
                src="/assets/vexis-wordmark-dark.png"
                alt="VEXIS"
                className="h-7 sm:h-9 w-auto object-contain object-left"
              />
              <p className="text-sm sm:text-base text-[#12161A]/80 mt-2 max-w-xl">
                Structure esport Fortnite. Accédez directement à notre roster, notre map, nos
                réseaux et notre serveur Discord.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================================
            THE 4 CORE TILES (ROSTER / MAP / RÉSEAUX / DISCORD)
            Asymmetric architectural 7/5 & 5/7 rhythm on desktop, 2x2 on tablet,
            1-col stack on mobile.
           ===================================================================== */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* TILE 01 — ROSTER (7 cols on lg) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onSelectTile('roster')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectTile('roster');
              }
            }}
            className="lg:col-span-7 vexis-tile cursor-pointer group bg-[#EDF3FE] border-2 border-[#0B0D0D] p-6 sm:p-8 flex flex-col justify-between min-h-[235px] text-left focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#0B0D0D]/15 pb-4">
              <span className="font-mono-tech text-xs font-bold px-2.5 py-1 bg-[#0B0D0D] text-[#E1ECFC] tracking-wider">
                01 // ROSTER
              </span>
              <div className="w-11 h-11 border border-[#0B0D0D] bg-[#E1ECFC] group-hover:bg-[#0B0D0D] group-hover:text-[#E1ECFC] transition-colors flex items-center justify-center shrink-0">
                <IconRoster className="w-6 h-6" />
              </div>
            </div>

            <div className="py-5 space-y-2">
              <h2 className="font-display-tight text-2xl sm:text-3xl font-bold text-[#0B0D0D] tracking-tight">
                ROSTER
              </h2>
              <p className="text-sm text-[#12161A]/80 leading-relaxed max-w-xl">
                Effectif officiel VEXIS réparti par paliers de PR (+5000 PR, 2500-4999 PR,
                1000-2499 PR et 0-999 PR).
              </p>
            </div>

            <div className="pt-4 border-t border-[#0B0D0D]/15 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5 font-mono-tech text-[11px]">
                <span className="px-2 py-0.5 bg-[#E1ECFC] border border-[#0B0D0D]/25">
                  + 5000 PR
                </span>
                <span className="px-2 py-0.5 bg-[#E1ECFC] border border-[#0B0D0D]/25">
                  2500 - 4999 PR
                </span>
                <span className="px-2 py-0.5 bg-[#E1ECFC] border border-[#0B0D0D]/25">
                  1000 - 2499 PR
                </span>
                <span className="px-2 py-0.5 bg-[#E1ECFC] border border-[#0B0D0D]/25">
                  0 - 999 PR
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>VOIR LE ROSTER</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* TILE 02 — MAP (5 cols on lg) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onSelectTile('maps')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectTile('maps');
              }
            }}
            className="lg:col-span-5 vexis-tile cursor-pointer group bg-[#0B0D0D] text-[#E1ECFC] border-2 border-[#0B0D0D] p-6 sm:p-8 flex flex-col justify-between min-h-[235px] text-left focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E1ECFC]/20 pb-4">
              <span className="font-mono-tech text-xs font-bold px-2.5 py-1 bg-[#E1ECFC] text-[#0B0D0D] tracking-wider">
                02 // MAP
              </span>
              <div className="w-11 h-11 border border-[#E1ECFC]/40 bg-[#E1ECFC]/10 group-hover:bg-[#E1ECFC] group-hover:text-[#0B0D0D] transition-colors flex items-center justify-center shrink-0">
                <IconMapUefn className="w-6 h-6" />
              </div>
            </div>

            <div className="py-5 space-y-2">
              <h2 className="font-display-tight text-2xl sm:text-3xl font-bold text-[#E1ECFC] tracking-tight">
                MAP
              </h2>
              <p className="text-sm text-[#E1ECFC]/80 leading-relaxed">
                Map Fortnite VEXIS actuellement en développement. Le code d’île sera publié dès sa
                sortie officielle.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E1ECFC]/20 flex items-center justify-between gap-3">
              <span className="font-mono-tech text-[11px] text-[#E1ECFC]/70">
                BIENTÔT DISPONIBLE
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-[#E1ECFC] group-hover:translate-x-1 transition-transform">
                <span>VOIR LA MAP</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* TILE 03 — RÉSEAUX (5 cols on lg) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onSelectTile('reseaux')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectTile('reseaux');
              }
            }}
            className="lg:col-span-5 vexis-tile cursor-pointer group bg-[#EDF3FE] border-2 border-[#0B0D0D] p-6 sm:p-8 flex flex-col justify-between min-h-[235px] text-left focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#0B0D0D]/15 pb-4">
              <span className="font-mono-tech text-xs font-bold px-2.5 py-1 bg-[#0B0D0D] text-[#E1ECFC] tracking-wider">
                03 // RÉSEAUX
              </span>
              <div className="w-11 h-11 border border-[#0B0D0D] bg-[#E1ECFC] group-hover:bg-[#0B0D0D] group-hover:text-[#E1ECFC] transition-colors flex items-center justify-center shrink-0">
                <IconReseaux className="w-6 h-6" />
              </div>
            </div>

            <div className="py-5 space-y-2">
              <h2 className="font-display-tight text-2xl sm:text-3xl font-bold text-[#0B0D0D] tracking-tight">
                RÉSEAUX
              </h2>
              <p className="text-sm text-[#12161A]/80 leading-relaxed">
                Suivez les vidéos, clips et annonces officielles de VEXIS sur{' '}
                <strong>X</strong>, <strong>TikTok</strong> et <strong>YouTube</strong>.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0B0D0D]/15 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5 font-mono-tech text-[11px]">
                <span className="px-2 py-0.5 bg-[#E1ECFC] border border-[#0B0D0D]/25">X</span>
                <span className="px-2 py-0.5 bg-[#E1ECFC] border border-[#0B0D0D]/25">TIKTOK</span>
                <span className="px-2 py-0.5 bg-[#E1ECFC] border border-[#0B0D0D]/25">YOUTUBE</span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>NOS RÉSEAUX</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* TILE 04 — DISCORD (7 cols on lg — opens Discord directly) */}
          <a
            href={OFFICIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-7 vexis-tile cursor-pointer group bg-[#EDF3FE] border-2 border-[#0B0D0D] p-6 sm:p-8 flex flex-col justify-between min-h-[235px] text-left focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#0B0D0D]/15 pb-4">
              <span className="font-mono-tech text-xs font-bold px-2.5 py-1 bg-[#0B0D0D] text-[#E1ECFC] tracking-wider">
                04 // DISCORD
              </span>
              <div className="w-11 h-11 border border-[#0B0D0D] bg-[#E1ECFC] group-hover:bg-[#0B0D0D] group-hover:text-[#E1ECFC] transition-colors flex items-center justify-center shrink-0">
                <IconDiscordHq className="w-6 h-6" />
              </div>
            </div>

            <div className="py-5 space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="font-display-tight text-2xl sm:text-3xl font-bold text-[#0B0D0D] tracking-tight">
                  DISCORD
                </h2>
                <span className="font-mono-tech text-xs font-semibold text-[#0B0D0D]/70 hidden sm:inline">
                  {OFFICIAL_LINKS.discordDisplay}
                </span>
              </div>
              <p className="text-sm text-[#12161A]/80 leading-relaxed max-w-xl">
                Rejoignez le serveur Discord officiel VEXIS pour discuter avec la communauté et
                postuler aux places disponibles du roster.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0B0D0D]/15 flex flex-wrap items-center justify-between gap-3">
              <span className="px-2.5 py-0.5 bg-[#E1ECFC] border border-[#0B0D0D]/25 font-mono-tech text-[11px]">
                {OFFICIAL_LINKS.discordDisplay}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>REJOINDRE LE DISCORD</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom architectural chamfer bar mirroring vexis baniere.png */}
      <div className="relative h-2.5 w-full bg-[#E1ECFC] flex items-end justify-center sm:justify-start sm:pl-24">
        <div
          className="h-full w-56 sm:w-80 bg-[#0B0D0D]"
          style={{
            clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 100%, 0 100%)',
          }}
        />
      </div>
    </section>
  );
};
