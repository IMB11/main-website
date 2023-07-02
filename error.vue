<template>
  <Navbar @theme-change="setTheme" />
  <div class="hero centered">
    <p class="error_number">{{ error.statusCode }}</p>
    <p>{{ error.statusMessage }}</p>
    <NuxtLink to="/" class="link__button">
      <Button large><HomeIcon />Go home</Button>
    </NuxtLink>
  </div>
</template>

<script>
import "omorphia/dist/style.css";
import "./app.scss";
import Navbar from "./components/Navbar.vue";
import { Button, HomeIcon } from "omorphia";

export default {
  name: "App",
  components: {
    Navbar,
    Button,
    HomeIcon,
  },
  props: ["error"],
  methods: {
    setTheme(theme) {
      document.documentElement.className = theme ? "light" : "dark";
    },
  },
};
</script>

<style>
:root {
  --color-red: #fb5419 !important;
  --color-brand: var(--color-red) !important;
}

html {
  background-color: var(--color-bg);
  color: var(--color-base);
}

.centered {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.centered > * {
  margin-left: auto;
  margin-right: auto;
}

.centered .error_number {
  font-size: 1000%;
  font-weight: bolder;
  margin: 0;
  background: var(--color-red);
  background: linear-gradient(to right, var(--color-red) 0%, #cf5a4b 77%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
