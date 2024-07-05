/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#023047', //navy blue-header
        secondary: '#F1FAEE', //light -blue -background
        accent: '#FB8500', //orange-accent
        cardsbg: '#A8DADC', //ligh blue for card bg
      }
    },
  },
  plugins: [],
}

