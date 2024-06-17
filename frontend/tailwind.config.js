/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Internet Explorer 10+ */
          '-ms-overflow-style': 'none',
          /* WebKit */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}