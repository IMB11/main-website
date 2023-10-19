<script setup>
import { Button, Card } from "omorphia";
const { data: docPages } = await useAsyncData(`docPages`, () =>
  queryContent("docs").where({ _extension: "md" }).find()
);
const { data: mods } = await useApi("/mods");
useSeoMeta({
  title: "mineblock11 | Documentation",
});
</script>

<template>
  <div class="hero">
    <div class="hero centered">
      <p class="hero_title">Coming soon...</p>
      <p class="">
        Documentation is currently being migrated to
        <code>docs.mineblock11.dev</code>, please use the
        <code>#support</code> channel on the Discord for any information
        temporarily.
      </p>
      <div class="buttons">
        <NuxtLink to="/" class="link__button">
          <Button large><HomeIcon />Go home</Button>
        </NuxtLink>
        <NuxtLink to="https://discord.mineblock11.dev" class="link__button">
          <Button large>Discord</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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

.centered .hero_title {
  font-size: calc(2rem + 1vw);
  font-weight: bolder;
  margin: 0;
  background: var(--color-red);
  background: linear-gradient(to right, var(--color-red) 0%, #cf5a4b 77%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
