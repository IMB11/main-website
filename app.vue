<script>
import "omorphia/dist/style.css";
import "./app.scss";
import Navbar from "./components/Navbar.vue";

export default defineNuxtComponent({
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    setTheme(theme) {
      console.log(theme);
      document.documentElement.className = theme ? "light" : "dark";
    },
  },
  head() {
    return {
      title: "mineblock11",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://github.com/mineblock11.png",
        },
      ],
      meta: [
        {
          key: "description",
          hid: "description",
          content: "Mod developer for Unity and Java based games.",
        },
        {
          key: "og:image",
          hid: "og:image",
          content: "https://github.com/mineblock11.png",
        },
        {
          key: "theme-color",
          hid: "theme-color",
          content: "#fb5419",
        },
      ],
    };
  },
});
</script>

<template>
  <ClientOnly>
    <Navbar @theme-change="setTheme" />
    <div class="padded-mobile">
      <NuxtPage />
    </div>
  </ClientOnly>
</template>

<style>
:root {
  --color-red: #fb5419 !important;
  --color-brand: var(--color-red) !important;
}

html {
  background-color: var(--color-bg);
  color: var(--color-base);
}

@media (max-width: 735px) {
  .padded-mobile {
    padding-bottom: 5em;
  }
}
</style>
