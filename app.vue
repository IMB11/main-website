<script>
import "omorphia/dist/style.css";
import "./app.scss";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    setTheme(theme) {
      document.documentElement.className = theme ? "light" : "dark";
    },
  },
};
</script>

<template>
  <Navbar @theme-change="setTheme" />
  <div class="padded-mobile">
    <NuxtPage />
  </div>
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
