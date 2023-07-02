<script setup>
import { Card, Avatar, Button, DownloadIcon } from "omorphia";
const { data: mods } = await useApi("/mods");
const $router = useRouter();
useAsyncData(async () => {
  return {
    docPages: await queryContent("docs").find(),
  };
});
</script>

<template>
  <div class="hero">
    <h1>Mods</h1>
    <div class="flex-row image-card-row">
      <Card v-for="mod in mods" class="flex-row-item">
        <img :src="mod.galleryImage" />
        <h3>{{ mod.title }}</h3>

        <p>{{ mod.summary }}</p>

        <div class="buttons">
          <NuxtLink :to="mod.modrinthURL" class="link__button" target="_blank">
            <Button color="primary"><DownloadIcon />Download</Button></NuxtLink
          >

          <NuxtLink class="link__button" :to="'/docs/' + mod.id"
            ><Button>Read More</Button></NuxtLink
          >
        </div>
      </Card>
    </div>
  </div>
</template>
