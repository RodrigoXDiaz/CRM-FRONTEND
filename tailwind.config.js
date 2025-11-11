/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          900: "#0F4C81", // primary deep
          700: "#31698A", // primary hover
          500: "#148F77", // teal accent
        },
        neutral: {
          900: "#25303B",
          500: "#9AA5B1",
          100: "#F7FAFC"
        },
        accent: {
          green: "#10B981",
          warn: "#F59E0B"
        }
      },
      borderRadius: {
        md: '0.75rem'
      },
      boxShadow: {
        soft: '0 6px 18px rgba(15,76,129,0.08)'
      }
    },
  },
  plugins: [],
}
