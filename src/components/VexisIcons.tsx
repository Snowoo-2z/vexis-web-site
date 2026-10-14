import React from 'react';

interface IconProps {
  className?: string;
}

/**
 * Custom architectural wireframe icons designed specifically for VEXIS
 * Matching the 60°/45° faceted wireframe language of vexis.png & vexis baniere.png
 */

// Tile 01: Roster / Competitive Squad Emblem
export const IconRoster: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    {/* Angular shield / crosshair frame */}
    <path
      d="M4 6H14L17 9H28V23L23 28H4V6Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="miter"
    />
    {/* V-faceted operator chevron inside */}
    <path
      d="M10 13L15.5 22L22 13"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
    />
    <path
      d="M15.5 18L20.5 11.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect x="7" y="9" width="2" height="2" fill="currentColor" />
  </svg>
);

// Tile 02: Maps UEFN / Fortnite Island Blueprint Grid
export const IconMapUefn: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    {/* Isometric architectural build grid */}
    <path
      d="M16 3L29 10.5V21.5L16 29L3 21.5V10.5L16 3Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="miter"
    />
    <path
      d="M3 10.5L16 18L29 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M16 18V29"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9.5 6.75L22.5 14.25"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeDasharray="2 2"
    />
  </svg>
);

// Tile 03: Réseaux / Broadcast Signal Matrix
export const IconReseaux: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    {/* Technical node network with chamfered nodes */}
    <path
      d="M5 20L12 13H20L27 6"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <path
      d="M21 6H27V12"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <rect x="4" y="5" width="8" height="8" stroke="currentColor" strokeWidth="1.75" />
    <rect x="20" y="19" width="8" height="8" stroke="currentColor" strokeWidth="1.75" />
    <path d="M4 26H14L17 23" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Tile 04: Discord / Comms HQ Terminal
export const IconDiscordHq: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    {/* Angular tactical comms frame */}
    <path
      d="M4 5H24L28 9V22H18L13 27V22H4V5Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="miter"
    />
    {/* Voice frequency / channel bars */}
    <path d="M10 14V16" stroke="currentColor" strokeWidth="2" />
    <path d="M14 11V17" stroke="currentColor" strokeWidth="2" />
    <path d="M18 12.5V15.5" stroke="currentColor" strokeWidth="2" />
    <path d="M22 10V17" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Decorative technical line from vexis baniere.png
export const TechnicalElbowLine: React.FC<{ className?: string; flip?: boolean }> = ({
  className = 'w-48 h-5',
  flip = false,
}) => (
  <svg
    viewBox="0 0 240 24"
    fill="none"
    className={className}
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    aria-hidden="true"
  >
    <path
      d="M0 4H112L128 20H240"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect x="234" y="17" width="6" height="6" fill="currentColor" />
  </svg>
);
