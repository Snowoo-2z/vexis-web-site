import React from 'react';
import { OFFICIAL_LINKS } from '../data/vexisData';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

interface ReseauxSectionProps {
  onCopyText: (text: string, label: string) => void;
  copiedText: string | null;
}

export const ReseauxSection: React.FC<ReseauxSectionProps> = ({
  onCopyText,
  copiedText,
}) => {
  return (
    <section
      id="reseaux"
      className="relative w-full py-16 sm:py-24 border-b border-[#0B0D0D] bg-[#E1ECFC]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 border-b border-[#0B0D0D]">
          <div className="lg:col-span-7 space-y-3">
            <span className="font-mono-tech text-xs font-bold px-2.5 py-1 bg-[#0B0D0D] text-[#E1ECFC] inline-block">
              03 // RÉSEAUX
            </span>
            <h2 className="font-display-tight text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0D0D]">
              RÉSEAUX OFFICIELS
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:items-end justify-end">
            <p className="text-sm text-[#12161A]/80 sm:text-right max-w-md">
              Retrouvez nos liens officiels pour suivre l’actualité et les vidéos de la structure
              VEXIS.
            </p>
          </div>
        </div>

        {/* Official Channels Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: YouTube Officiel */}
          <article className="bg-[#EDF3FE] border-2 border-[#0B0D0D] flex flex-col justify-between">
            <div>
              <div className="px-6 py-3.5 bg-[#0B0D0D] text-[#E1ECFC] flex items-center justify-between font-mono-tech text-xs">
                <span>YOUTUBE</span>
                <span className="px-2 py-0.5 bg-[#E1ECFC]/15 text-[#E1ECFC] text-[10px]">
                  CHAÎNE OFFICIELLE
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-display-tight text-2xl sm:text-3xl font-bold text-[#0B0D0D]">
                  {OFFICIAL_LINKS.youtubeHandle}
                </h3>
                <p className="text-sm text-[#12161A]/80 leading-relaxed">
                  Vidéos officielles de la structure, présentations du roster et annonces VEXIS.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#0B0D0D]/15 bg-[#EDF3FE] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onCopyText(OFFICIAL_LINKS.youtube, 'LIEN YOUTUBE')}
                className="min-h-[42px] px-3.5 py-2 border border-[#0B0D0D]/30 bg-[#E1ECFC] hover:border-[#0B0D0D] font-mono-tech text-xs flex items-center gap-1.5"
              >
                {copiedText === OFFICIAL_LINKS.youtube ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>COPIÉ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPIER LE LIEN</span>
                  </>
                )}
              </button>

              <a
                href={OFFICIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[42px] px-5 py-2 bg-[#0B0D0D] text-[#E1ECFC] hover:bg-[#1D4ED8] transition-colors font-mono-tech text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>ACCÉDER À YOUTUBE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </article>

          {/* Card 2: Discord Officiel */}
          <article className="bg-[#EDF3FE] border-2 border-[#0B0D0D] flex flex-col justify-between">
            <div>
              <div className="px-6 py-3.5 bg-[#0B0D0D] text-[#E1ECFC] flex items-center justify-between font-mono-tech text-xs">
                <span>DISCORD</span>
                <span className="px-2 py-0.5 bg-[#E1ECFC]/15 text-[#E1ECFC] text-[10px]">
                  SERVEUR OFFICIEL
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-display-tight text-2xl sm:text-3xl font-bold text-[#0B0D0D]">
                  {OFFICIAL_LINKS.discordDisplay}
                </h3>
                <p className="text-sm text-[#12161A]/80 leading-relaxed">
                  Rejoignez la communauté VEXIS et postulez directement pour les places disponibles
                  dans notre roster.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#0B0D0D]/15 bg-[#EDF3FE] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onCopyText(OFFICIAL_LINKS.discord, 'LIEN DISCORD')}
                className="min-h-[42px] px-3.5 py-2 border border-[#0B0D0D]/30 bg-[#E1ECFC] hover:border-[#0B0D0D] font-mono-tech text-xs flex items-center gap-1.5"
              >
                {copiedText === OFFICIAL_LINKS.discord ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>COPIÉ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPIER LE LIEN</span>
                  </>
                )}
              </button>

              <a
                href={OFFICIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[42px] px-5 py-2 bg-[#0B0D0D] text-[#E1ECFC] hover:bg-[#1D4ED8] transition-colors font-mono-tech text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>REJOINDRE LE DISCORD</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
