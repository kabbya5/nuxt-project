// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/app.css',
    'swiper/swiper-bundle.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-swiper',
  ],

  swiper: {
    styleLang: 'css',  // Optional: Use 'css' for Swiper styles
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    },
  },
  plugins: [
    '~/plugins/fontawesome.js',
  ],
})