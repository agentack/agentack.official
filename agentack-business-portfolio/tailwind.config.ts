import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Green
        'green-primary': '#00FF88',
        'green-hover': '#00E87A',
        'green-dark': '#001A0D',
        'green-mid': '#003320',
        'green-tinted': '#0D1A12',

        // Base Blacks
        'black-base': '#000000',
        'black-2': '#080808',
        'black-3': '#050505',

        // Muted Sage
        'sage-dark': '#3A4A42',
        'sage-mid': '#8A9A94',
        'sage-light': '#C8D4CE',

        // Frost White
        'frost-white': '#F0F2F0',
        'frost-mint': '#E8F0EC',
        'surface-dark': '#111714',
        'border-dark': '#1E2E26',

        // Electric Teal
        'teal-primary': '#00E5CC',
        'teal-mid': '#00B8A6',

        // Semantic
        'red-danger': '#A32D2D',
      },
      fontFamily: {
        display: ['var(--font-syne)'],
        body: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['52px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['42px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['28px', { lineHeight: '1.3' }],
        'h4': ['20px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'sm': ['14px', { lineHeight: '1.6' }],
        'xs': ['12px', { lineHeight: '1.5' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        'section-xl': '120px',
        'section-lg': '100px',
        'section-md': '80px',
        'section-sm': '60px',
        'container-px-mobile': '24px',
        'container-px-tablet': '40px',
        'container-px-desktop': '80px',
      },
      borderRadius: {
        'card': '12px',
        'btn-hero': '6px',
        'btn-nav': '5px',
        'btn-form': '8px',
        'badge': '4px',
        'pill': '999px',
      },
      transitionDuration: {
        'DEFAULT': '150ms',
        'color': '150ms',
        'transform': '200ms',
      },
      boxShadow: {
        'focus': '0 0 0 2px #00FF88',
      },
    },
  },
  plugins: [],
} satisfies Config
