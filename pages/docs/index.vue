<script setup>
import { Button, Card } from "omorphia";
const { data: docPages } = await useAsyncData(`docPages`, () =>
  queryContent("docs").where({ _extension: "md" }).find()
);
const { data: mods } = await useApi("/mods");
useHead({
  title: "mineblock11 | Documentation",
});
</script>

<template>
  <div class="hero">
    <h1>Documentation</h1>
    <div class="flex-row image-card-row">
      <Card
        v-for="mod in mods.filter(
          (mod) =>
            docPages.filter((page) => page._path === `/docs/${mod.id}`).length >
            0
        )"
        class="flex-row-item"
      >
        <img :src="mod.galleryImage" />
        <h3>{{ mod.title }}</h3>

        <p>{{ mod.summary }}</p>

        <div class="buttons">
          <NuxtLink
            class="link__button"
            :to="'/docs/' + mod.id"
            v-if="
              docPages.filter((page) => page._path === `/docs/${mod.id}`)
                .length > 0
            "
            ><Button>View Documentation</Button></NuxtLink
          >
        </div>
      </Card>
    </div>
  </div>
</template>
