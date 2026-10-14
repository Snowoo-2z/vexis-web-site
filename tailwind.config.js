/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vexis: {
          ice: '#E1ECFC',
          paper: '#EDF3FE',
          surface: '#D5E3F9',
          line: '#B6C8E6',
          carbon: '#0B0D0D',
          ink: '#12161A',
          slate: '#42526B',
          cobalt: '#1D4ED8',
          signal: '#0D9488',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      }
    },
  },
  plugins: [],
}
