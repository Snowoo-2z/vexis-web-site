export interface RosterSlot {
  id: string;
  status: 'OCCUPÉ' | 'LIBRE';
  pseudo?: string;
  pr?: string;
  note?: string;
}

export interface RosterTier {
  id: string;
  index: string;
  title: string;
  roleLabel?: string;
  prRange: string;
  description: string;
  slots: RosterSlot[];
}

export const OFFICIAL_LINKS = {
  discord: 'https://discord.gg/frgKErUGK6',
  discordDisplay: 'discord.gg/frgKErUGK6',
  youtube: 'https://www.youtube.com/@Vexis_E-sport/',
  youtubeHandle: '@Vexis_E-sport',
  x: 'https://x.com/VexisEsport26',
  xHandle: '@VexisEsport26',
  tiktok: 'https://www.tiktok.com/@vexisesport26',
  tiktokHandle: '@vexisesport26',
};

export const ROSTER_TIERS: RosterTier[] = [
  {
    id: 'tier-5000-plus',
    index: 'PALIER 01',
    title: '+ 5000 PR',
    prRange: '5 000 PR ET PLUS',
    description: 'Palier principal de la structure VEXIS pour les joueurs à haut Power Ranking.',
    slots: [
      {
        id: 'slot-5k-1',
        status: 'OCCUPÉ',
        pseudo: 'Lyzpichu',
        pr: '37k PR',
        note: 'Joueur Officiel VEXIS',
      },
      { id: 'slot-5k-2', status: 'LIBRE' },
      { id: 'slot-5k-3', status: 'LIBRE' },
      { id: 'slot-5k-4', status: 'LIBRE' },
      { id: 'slot-5k-5', status: 'LIBRE' },
      { id: 'slot-5k-6', status: 'LIBRE' },
    ],
  },
  {
    id: 'tier-2500-4999',
    index: 'PALIER 02',
    title: '2500 - 4999 PR',
    prRange: '2 500 À 4 999 PR',
    description: '6 places ouvertes au recrutement pour les joueurs réguliers en tournois.',
    slots: [
      { id: 'slot-2500-1', status: 'LIBRE' },
      { id: 'slot-2500-2', status: 'LIBRE' },
      { id: 'slot-2500-3', status: 'LIBRE' },
      { id: 'slot-2500-4', status: 'LIBRE' },
      { id: 'slot-2500-5', status: 'LIBRE' },
      { id: 'slot-2500-6', status: 'LIBRE' },
    ],
  },
  {
    id: 'tier-1000-2499',
    index: 'PALIER 03',
    title: '1000 - 2499 PR',
    prRange: '1 000 À 2 499 PR',
    description: '6 places ouvertes aux joueurs en progression compétitive.',
    slots: [
      { id: 'slot-1000-1', status: 'LIBRE' },
      { id: 'slot-1000-2', status: 'LIBRE' },
      { id: 'slot-1000-3', status: 'LIBRE' },
      { id: 'slot-1000-4', status: 'LIBRE' },
      { id: 'slot-1000-5', status: 'LIBRE' },
      { id: 'slot-1000-6', status: 'LIBRE' },
    ],
  },
  {
    id: 'tier-0-999',
    index: 'PALIER 04',
    title: '0 - 999 PR',
    roleLabel: 'Joueur Grinder',
    prRange: '0 À 999 PR',
    description: 'Palier Joueur Grinder VEXIS - 8 joueurs actifs.',
    slots: [
      {
        id: 'slot-0-1',
        status: 'OCCUPÉ',
        pseudo: 'VEXIS tyfyyx!!',
        pr: '63 PR',
        note: 'Joueur Grinder VEXIS',
      },
      {
        id: 'slot-0-2',
        status: 'OCCUPÉ',
        pseudo: 'ReYz Frailer',
        pr: '50 PR',
        note: 'Joueur Grinder VEXIS',
      },
      {
        id: 'slot-0-3',
        status: 'OCCUPÉ',
        pseudo: 'HYR NAX ツ 1',
        pr: '36 PR',
        note: 'Joueur Grinder VEXIS',
      },
      {
        id: 'slot-0-4',
        status: 'OCCUPÉ',
        pseudo: 'VEXIS | 𝒀𝒁𝑶𝑶',
        pr: '0 PR',
        note: 'Joueur Grinder VEXIS',
      },
      {
        id: 'slot-0-5',
        status: 'OCCUPÉ',
        pseudo: 'by_itachi',
        pr: '0 PR',
        note: 'Joueur Grinder VEXIS',
      },
      {
        id: 'slot-0-6',
        status: 'OCCUPÉ',
        pseudo: 'Valco',
        pr: '0 PR',
        note: 'Joueur Grinder VEXIS',
      },
      {
        id: 'slot-0-7',
        status: 'OCCUPÉ',
        pseudo: 'VEXIS GAKRO!',
        pr: '0 PR',
        note: 'Joueur Grinder VEXIS',
      },
      {
        id: 'slot-0-8',
        status: 'OCCUPÉ',
        pseudo: 'EU poncho',
        pr: '0 PR',
        note: 'Joueur Grinder VEXIS',
      },
    ],
  },
];
