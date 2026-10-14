import React, { useState } from 'react';
import { ROSTER_TIERS, OFFICIAL_LINKS } from '../data/vexisData';
import { ArrowUpRight, UserPlus, CheckCircle2 } from 'lucide-react';
import { IconRoster } from './VexisIcons';

export const RosterSection: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('ALL');

  const displayedTiers =
    selectedTierId === 'ALL'
      ? ROSTER_TIERS
      : ROSTER_TIERS.filter((t) => t.id === selectedTierId);

  const totalSigned = ROSTER_TIERS.reduce(
    (acc, t) => acc + t.slots.filter((s) => s.status === 'OCCUPÉ').length,
    0
  );
  const totalOpen = ROSTER_TIERS.reduce(
    (acc, t) => acc + t.slots.filter((s) => s.status === 'LIBRE').length,
    0
  );

  return (
    <section
      id="roster"
      className="relative w-full py-16 sm:py-24 border-b border-[#0B0D0D] bg-[#E1ECFC]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 border-b border-[#0B0D0D]">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-xs font-bold px-2.5 py-1 bg-[#0B0D0D] text-[#E1ECFC]">
                01 // ROSTER
              </span>
              <span className="font-mono-tech text-xs text-[#0B0D0D]/70 uppercase tracking-widest">
                EFFECTIF ACTUEL & PLACES DISPONIBLES
              </span>
            </div>
            <h2 className="font-display-tight text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0D0D]">
              NOTRE ROSTER
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:items-end justify-end gap-3">
            <p className="text-sm text-[#12161A]/80 sm:text-right max-w-md">
              Voici les joueurs qui composent actuellement notre roster, répartis en{' '}
              <strong>4 paliers de Power Ranking (PR)</strong>. Les emplacements{' '}
              <strong>@libre</strong> sont ouverts au recrutement sur notre Discord.
            </p>
          </div>
        </div>

        {/* Filter & Summary Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#0B0D0D]/20">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedTierId('ALL')}
              className={`min-h-[42px] px-4 py-2 font-mono-tech text-xs uppercase tracking-wider border transition-colors ${
                selectedTierId === 'ALL'
                  ? 'bg-[#0B0D0D] text-[#E1ECFC] border-[#0B0D0D] font-semibold'
                  : 'bg-[#EDF3FE] text-[#0B0D0D] border-[#0B0D0D]/40 hover:border-[#0B0D0D]'
              }`}
            >
              TOUS LES PALIERS
            </button>
            {ROSTER_TIERS.map((tier) => {
              const active = selectedTierId === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`min-h-[42px] px-4 py-2 font-mono-tech text-xs uppercase tracking-wider border transition-colors ${
                    active
                      ? 'bg-[#0B0D0D] text-[#E1ECFC] border-[#0B0D0D] font-semibold'
                      : 'bg-[#EDF3FE] text-[#0B0D0D] border-[#0B0D0D]/40 hover:border-[#0B0D0D]'
                  }`}
                >
                  {tier.title}
                </button>
              );
            })}
          </div>

          <div className="font-mono-tech text-xs text-[#0B0D0D] flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#0B0D0D] text-[#E1ECFC] font-bold">
              {totalSigned} JOUEURS ACTIFS
            </span>
            <span className="px-2.5 py-1 bg-[#EDF3FE] border border-[#0B0D0D] font-semibold">
              {totalOpen} PLACES @LIBRE
            </span>
          </div>
        </div>

        {/* 4 PR Tiers Matrix */}
        <div className="mt-10 space-y-8">
          {displayedTiers.map((tier) => {
            const occupiedCount = tier.slots.filter((s) => s.status === 'OCCUPÉ').length;
            const freeCount = tier.slots.filter((s) => s.status === 'LIBRE').length;

            return (
              <div
                key={tier.id}
                className="bg-[#EDF3FE] border-2 border-[#0B0D0D] overflow-hidden"
              >
                {/* Tier Header Bar */}
                <div className="px-6 py-4 bg-[#0B0D0D] text-[#E1ECFC] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <IconRoster className="w-5 h-5 text-[#E1ECFC] shrink-0" />
                    <span className="font-mono-tech text-xs opacity-60">{tier.index} //</span>
                    <h3 className="font-display-tight text-xl sm:text-2xl font-bold tracking-tight">
                      {tier.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 font-mono-tech text-xs">
                    {occupiedCount > 0 && (
                      <span className="px-2.5 py-0.5 bg-[#E1ECFC] text-[#0B0D0D] font-bold">
                        {occupiedCount} JOUEUR{occupiedCount > 1 ? 'S' : ''}
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 border border-[#E1ECFC]/40 text-[#E1ECFC]/85">
                      {freeCount} @LIBRE
                    </span>
                  </div>
                </div>

                {/* Slots Grid */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tier.slots.map((slot, idx) => {
                    if (slot.status === 'OCCUPÉ') {
                      return (
                        <div
                          key={slot.id}
                          className="p-5 bg-[#E1ECFC] border-2 border-[#0B0D0D] flex flex-col justify-between gap-4 shadow-[3px_3px_0px_0px_#0B0D0D]"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className="inline-flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-widest text-[#1D4ED8] font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                MEMBRE ROSTER VEXIS
                              </span>
                              <h4 className="font-display-tight text-2xl font-bold text-[#0B0D0D] mt-1">
                                {slot.pseudo}
                              </h4>
                            </div>

                            <img
                              src="/assets/vexis-mark-dark.png"
                              alt="VEXIS"
                              className="w-7 h-7 object-contain shrink-0"
                            />
                          </div>

                          <div className="pt-3 border-t border-[#0B0D0D]/20 flex items-center justify-between font-mono-tech">
                            <span className="text-[11px] text-[#0B0D0D]/70 uppercase">
                              POWER RANKING
                            </span>
                            <strong className="px-2.5 py-1 bg-[#0B0D0D] text-[#E1ECFC] text-xs font-bold">
                              {slot.pr}
                            </strong>
                          </div>
                        </div>
                      );
                    }

                    // Slot @libre
                    return (
                      <a
                        key={slot.id}
                        href={OFFICIAL_LINKS.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-5 bg-[#EDF3FE] border border-dashed border-[#0B0D0D]/45 hover:border-solid hover:border-[#0B0D0D] hover:bg-[#E1ECFC] transition-colors flex flex-col justify-between gap-4 min-h-[126px]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono-tech text-xs text-[#0B0D0D]/55">
                            SLOT 0{idx + 1} // {tier.title}
                          </span>
                          <UserPlus className="w-4 h-4 text-[#0B0D0D]/50 group-hover:text-[#0B0D0D] transition-colors" />
                        </div>

                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-mono-tech text-base font-bold text-[#0B0D0D]/75 group-hover:text-[#0B0D0D]">
                            @libre
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono-tech text-[11px] font-semibold uppercase text-[#0B0D0D]/60 group-hover:text-[#1D4ED8]">
                            <span>POSTULER SUR DISCORD</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
