/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080607',
          surface: '#10090B',
          card: 'rgba(16, 9, 11, 0.70)',
          border: 'rgba(190, 90, 70, 0.22)',
          subtle: '#261317',
        },
        brand: {
          burgundy: '#8F1720',
          burgundyDark: '#5C0B12',
          crimson: '#B51E29',
          warm: '#C45A32',
          warmLight: '#E3A06F',
          amber: '#D57A45',
          cream: '#F7EDE7',
          creamMuted: '#EAD8D0',
          muted: '#BFA9A2',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
