/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        // Optional: Define custom dark mode media queries if needed
      },
      colors: {
        primary: {
          DEFAULT: '#007bff', // Light mode color
          dark: '#171a29', // Dark mode color
        },
        // ...other color customizations for dark mode
      },
    },
  },
  darkMode:'class',
  plugins: [],
}