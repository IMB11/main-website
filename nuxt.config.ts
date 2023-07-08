// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: 'github-dark'
    }
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL ?? "https://api.mineblock11.dev",
    }
  },
})
