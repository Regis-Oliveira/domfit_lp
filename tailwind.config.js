/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)']
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/1280x893.jpg')",
      }
    },
  },
  plugins: [],
}
