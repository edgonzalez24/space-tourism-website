/** @type {import('tailwindcss').Config} */
export default {
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
      colors: {
        blue: {
          900: '#0B0D17'
        }
      },
      backgroundImage: {
        'home-desktop': "url('~/assets/images/home/background-home-desktop.jpg')",
        'home-tablet': "url('~/assets/images/home/background-home-tablet.jpg')",
        'home-mobile': "url('~/assets/images/home/background-home-mobile.jpg')",
      }
    },
  },
  plugins: [],
}

