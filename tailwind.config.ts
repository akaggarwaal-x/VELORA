import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0E2F2B',
        beige: '#F4EFEA',
        gold: '#C9A96E',
        offwhite: '#FCFCFA'
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-inter)']
      }
    }
  },
  plugins: []
};

export default config;
