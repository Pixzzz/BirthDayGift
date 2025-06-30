// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      clipPath: {
        'envelope-top': 'polygon(0 0, 100% 0, 50% 100%)',
      }
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}
