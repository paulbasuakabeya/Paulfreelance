/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./index.html", // ✅ ajoutez cette ligne
    "./src/**/*.{js,jsx,ts,tsx}" // ✅ ajoutez cette ligne
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}