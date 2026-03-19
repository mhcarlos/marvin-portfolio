/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#1A6B5C',
          light: '#E1F5EE',
        },
      },
    },
  },
  plugins: [],
}
