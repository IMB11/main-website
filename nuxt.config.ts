// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
  nitro: {
    preset: 'github-pages'
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: 'github-dark'
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    componentName: 'ColorScheme',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  runtimeConfig: {
    public: {
      // apiURL: process.env.API_URL ?? "https://api.mineblock11.dev",
      apiURL: "http://localhost:3099"
    }
  },
})
