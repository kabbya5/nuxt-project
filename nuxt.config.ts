// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/app.css',
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
  ],
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