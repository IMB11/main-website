<script setup>
import "omorphia/dist/style.css";
import "./app.scss";
import Navbar from "./components/Navbar.vue";

function setTheme(theme) {
  document.documentElement.className = theme ? "light" : "dark";
}

useSeoMeta({
  title: "mineblock11",
  description: "Mod developer for Unity and Java-based games.",
  ogImage: "https://github.com/mineblock11.png",
  favicon: "https://github.com/mineblock11.png",
  twitterCard: "app",
});
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
