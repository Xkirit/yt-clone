/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '&': {
            '-ms-overflow-style': 'none',  /* IE and Edge */
            'scrollbar-width': 'none'  /* Firefox */
          }
        },
        '.scrollbar-default': {
          '&::-webkit-scrollbar': {
            width: '12px',
            height: '12px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#212121'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555'
          }
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }],
}