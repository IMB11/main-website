// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/color-mode'],
  nitro: {
    preset: 'github-pages'
  },
  ssr: false,
  colorMode: {
    preference: 'system',
    fallback: 'light',
    componentName: 'ColorScheme',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL ?? "https://api.imb11.dev",
    }
  },
})
