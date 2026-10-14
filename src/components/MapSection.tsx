import React from 'react';
import { OFFICIAL_LINKS } from '../data/vexisData';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { IconMapUefn } from './VexisIcons';

export const MapSection: React.FC = () => {
  return (
    <section
      id="maps"
      className="relative w-full py-16 sm:py-24 border-b border-[#0B0D0D] bg-[#EDF3FE] vexis-draft-grid"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 border-b border-[#0B0D0D]">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-xs font-bold px-2.5 py-1 bg-[#0B0D0D] text-[#E1ECFC]">
                02 // MAP
              </span>
              <span className="font-mono-tech text-xs text-[#0B0D0D]/70 uppercase tracking-widest">
                MAP CRÉATIF FORTNITE
              </span>
            </div>
            <h2 className="font-display-tight text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0D0D]">
              MAP VEXIS
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:items-end justify-end">
            <p className="text-sm text-[#12161A]/80 sm:text-right max-w-md">
              La map officielle est en cours de préparation. Le concept et le code d’île seront
              dévoilés sur notre serveur discord.
            </p>
          </div>
        </div>

        {/* Single Sober Architectural Blueprint Card */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 bg-[#0B0D0D] text-[#E1ECFC] border-2 border-[#0B0D0D] p-6 sm:p-10 flex flex-col justify-between gap-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E1ECFC]/20 pb-4 font-mono-tech text-xs">
              <span className="px-2.5 py-1 bg-[#E1ECFC] text-[#0B0D0D] font-bold">
                STATUT : EN COURS DE CRÉATION
              </span>
              <span className="text-[#E1ECFC]/70">FORTNITE // VEXIS MAP</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display-tight text-2xl sm:text-4xl font-bold tracking-tight text-[#E1ECFC]">
                  Map officielle en développement.
                </h3>
                <IconMapUefn className="w-10 h-10 text-[#E1ECFC] shrink-0 opacity-85" />
              </div>

              <p className="text-sm sm:text-base text-[#E1ECFC]/80 leading-relaxed max-w-2xl">
                L’équipe VEXIS travaille actuellement sur sa première map Fortnite. Toutes les
                annonces et les leaks se feront sur notre serveur Discord et notre chaîne YouTube.
              </p>
            </div>

            {/* Code Placeholder Box */}
            <div className="p-5 bg-[#E1ECFC]/10 border border-[#E1ECFC]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#E1ECFC]/65 block">
                  CODE D’ÎLE FORTNITE
                </span>
                <strong className="font-mono-tech text-lg sm:text-2xl font-bold tracking-widest text-[#E1ECFC]">
                  XXXX - XXXX - XXXX // BIENTÔT DISPONIBLE
                </strong>
              </div>

              <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#E1ECFC] text-[#0B0D0D] font-mono-tech text-xs font-bold uppercase shrink-0">
                <Clock className="w-4 h-4" />
                <span>EN ATTENTE DE SORTIE</span>
              </span>
            </div>
          </div>

          {/* Right 4 cols: Follow Progress on Discord */}
          <div className="lg:col-span-4 bg-[#E1ECFC] border-2 border-[#0B0D0D] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="w-11 h-11 bg-[#0B0D0D] text-[#E1ECFC] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display-tight text-2xl font-bold text-[#0B0D0D]">
                Suivre l’avancement
              </h3>
              <p className="text-sm text-[#12161A]/80 leading-relaxed">
                Vous souhaitez proposer des idées pour la map, participer aux premiers tests ou être
                notifié dès la sortie de la map ? Rejoignez le Discord officiel VEXIS.
              </p>
            </div>

            <a
              href={OFFICIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] w-full px-5 py-3 bg-[#0B0D0D] text-[#E1ECFC] hover:bg-[#1D4ED8] transition-colors font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center justify-between"
            >
              <span>REJOINDRE LE DISCORD</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
