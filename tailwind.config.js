// tailwind.config.cjs
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          900: "#062D4F", // deep navy
          800: "#0F4C81", // corporate blue
          700: "#246EB2",
          500: "#2EA6FF", // vivid
          300: "#9EE7FF",
        },
        accent: {
          teal: "#14B8A6",
          green: "#10B981",
          warn: "#F59E0B",
          pink: "#FF6B9A"
        },
        neutral: {
          900: "#0B1220",
          700: "#25303B",
          500: "#7B8794",
          200: "#E6EEF6",
          100: "#F7FAFC",
        },
      },
      boxShadow: {
        'glass-soft': '0 10px 30px rgba(2,6,23,0.12)',
        'card-lg': '0 20px 40px rgba(2,6,23,0.12)',
        'neon': '0 6px 30px rgba(46,166,255,0.12), 0 0 8px rgba(46,166,255,0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.6s linear infinite'
      }
    },
  },
  plugins: [],
}
