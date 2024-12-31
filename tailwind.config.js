/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    "hover:cursor-pointer", // Whitelist the class
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

