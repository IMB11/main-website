<script setup>
import "omorphia/dist/style.css";
import "./app.scss";
import Navbar from "./components/Navbar.vue";

useHead({
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "https://github.com/imb11.png",
    },
  ],
});

useSeoMeta({
  title: "IMB11",
  description: "Mod developer for Unity and Java-based games.",
  ogImage: "https://github.com/imb11.png",
  favicon: "https://github.com/imb11.png",
  twitterCard: "app",
  themeColor: "#fb5419",
});
</script>

<template>
  <Navbar />
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
