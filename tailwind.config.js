const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#0C0C0C',
        'antique-white': '#FAEBD7',
        'kite-gold': '#FFD700',
        'kite-blue': '#1E90FF',
        'kite-purple': '#8A2BE2',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

