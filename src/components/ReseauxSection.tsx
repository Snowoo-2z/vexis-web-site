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
  const networks = [
    {
      id: 'x',
      tag: 'X (TWITTER)',
      badge: 'COMPTE OFFICIEL',
      handle: OFFICIAL_LINKS.xHandle,
      url: OFFICIAL_LINKS.x,
      description: 'Annonces officielles, suivi du roster et actualités en direct de VEXIS.',
      cta: 'SUIVRE SUR X',
    },
    {
      id: 'tiktok',
      tag: 'TIKTOK',
      badge: 'COMPTE OFFICIEL',
      handle: OFFICIAL_LINKS.tiktokHandle,
      url: OFFICIAL_LINKS.tiktok,
      description: 'Clips Fortnite des joueurs du roster, highlights et teasers VEXIS.',
      cta: 'VOIR LE TIKTOK',
    },
    {
      id: 'youtube',
      tag: 'YOUTUBE',
      badge: 'CHAÎNE OFFICIELLE',
      handle: OFFICIAL_LINKS.youtubeHandle,
      url: OFFICIAL_LINKS.youtube,
      description: 'Vidéos officielles, présentations du roster et annonces VEXIS.',
      cta: 'ACCÉDER À YOUTUBE',
    },
    {
      id: 'discord',
      tag: 'DISCORD',
      badge: 'SERVEUR OFFICIEL',
      handle: OFFICIAL_LINKS.discordDisplay,
      url: OFFICIAL_LINKS.discord,
      description:
        'Rejoignez la communauté VEXIS et postulez directement pour les places disponibles dans notre roster.',
      cta: 'REJOINDRE LE DISCORD',
    },
  ];

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
              Retrouvez nos liens officiels sur X, TikTok, YouTube et Discord pour suivre toute
              l’actualité de VEXIS.
            </p>
          </div>
        </div>

        {/* Official Channels Grid (4 Cards) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {networks.map((net) => (
            <article
              key={net.id}
              className="bg-[#EDF3FE] border-2 border-[#0B0D0D] flex flex-col justify-between"
            >
              <div>
                <div className="px-6 py-3.5 bg-[#0B0D0D] text-[#E1ECFC] flex items-center justify-between font-mono-tech text-xs">
                  <span>{net.tag}</span>
                  <span className="px-2 py-0.5 bg-[#E1ECFC]/15 text-[#E1ECFC] text-[10px]">
                    {net.badge}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-display-tight text-2xl sm:text-3xl font-bold text-[#0B0D0D]">
                    {net.handle}
                  </h3>
                  <p className="text-sm text-[#12161A]/80 leading-relaxed">{net.description}</p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-[#0B0D0D]/15 bg-[#EDF3FE] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onCopyText(net.url, `LIEN ${net.tag}`)}
                  className="min-h-[42px] px-3.5 py-2 border border-[#0B0D0D]/30 bg-[#E1ECFC] hover:border-[#0B0D0D] font-mono-tech text-xs flex items-center gap-1.5"
                >
                  {copiedText === net.url ? (
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
                  href={net.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-5 py-2 bg-[#0B0D0D] text-[#E1ECFC] hover:bg-[#1D4ED8] transition-colors font-mono-tech text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>{net.cta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
