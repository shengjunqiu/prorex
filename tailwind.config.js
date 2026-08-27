/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#060B14', // Deepest cyber navy
          darker: '#03070D',
          card: 'rgba(10, 20, 38, 0.7)',
          cardHover: 'rgba(16, 32, 60, 0.85)',
          surface: '#0B1528',
          border: 'rgba(56, 189, 248, 0.12)',
        },
        primary: {
          DEFAULT: '#0EA5E9', // Vibrant Sky/Cyber Blue
          hover: '#38BDF8',
          glow: 'rgba(14, 165, 233, 0.4)',
          dark: '#0284C7',
          light: '#BAE6FD',
        },
        accent: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          gold: '#F59E0B',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.18) 0%, rgba(6, 11, 20, 0) 70%)',
        'card-glow': 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.08) 0%, rgba(10, 20, 38, 0) 100%)',
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
