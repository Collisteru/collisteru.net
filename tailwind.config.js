/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        red: '#800020',
        gold: '#FFD700',
        green: '#013220',
        light_blue: '#000080',
        dark_blue: '#261C80',
        purple: '#714194',
        yellow: '#CCA278',
        brown: '#541D01',
        white: '#EDECE1',
        black: '0F0F0F'
      }
    },
  },
  plugins: [],
}
