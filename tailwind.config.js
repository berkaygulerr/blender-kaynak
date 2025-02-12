/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#ec4899',
          dark: '#db2777',
        },
        background: {
          light: '#f8fafc',
          dark: '#0f172a',
        }
      },
      boxShadow: {
        'neumorphic': '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff',
        'neumorphic-dark': '20px 20px 60px #0a0e1a, -20px -20px 60px #141e3a'
      }
    },
  },
  plugins: [],
}
