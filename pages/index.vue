<script setup>
import { Card, Button, WikiIcon, DownloadIcon } from "omorphia";

const { data: updates } = await useApi("/updates");
const { data: ctrbs } = await useApi("/contributions");
const $md = useNuxtApp().$mdit;

const links = [
  {
    title: "Modrinth",
    link: "https://modrinth.com/user/mineblock11",
  },
  {
    title: "Curseforge",
    link: "https://legacy.curseforge.com/members/itsmineblock11/projects",
  },
  {
    title: "GitHub",
    link: "https://github.com/mineblock11",
  },
  {
    title: "Maven",
    link: "https://maven.mineblock11.dev/",
  },
  {
    title: "Discord",
    link: "https://discord.gg/UzHtJKqHny",
  },
];

const legalLinks = [
  {
    title: "EULA",
    link: "/legal/eula",
  },
  {
    title: "Usage in Modpacks",
    link: "/legal/modpacks",
  },
  {
    title: "Distribution Policy",
    link: "/legal/distribution",
  },
];

function formatCount(amount) {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(amount);
}
</script>

<template>
  <div class="hero">
    <h1>Updates</h1>
    <div class="flex-row updates-row">
      <Card v-for="update in updates?.slice(0, 4)" class="flex-row-item">
        <img :src="update.galleryImage" />

        <h3>{{ update.title }}</h3>

        <p>{{ update.summary }}</p>

        <div class="buttons">
          <NuxtLink
            :to="update.modrinthURL"
            class="link__button"
            target="_blank"
          >
            <Button color="primary"><DownloadIcon />Download</Button></NuxtLink
          >

          <NuxtLink class="link__button" :to="'/updates/' + update.id"
            ><Button>Read More</Button></NuxtLink
          >
        </div>
      </Card>
      <Card class="flex-row-item">
        <img src="https://cdn.mineblock11.dev/cave_and_cliffs.jpg" />
        <h3>Looking for more?</h3>
        <p>You can find more information on updates on the updates page.</p>
        <NuxtLink to="/updates" class="link__button"
          ><Button color="primary"><WikiIcon />View More</Button></NuxtLink
        >
      </Card>
    </div>
  </div>
  <div class="hero">
    <h1>Information</h1>
    <div class="flex-row">
      <Card class="flex-row-item normal-item">
        <h3>About Me</h3>
        <ContentDoc />
      </Card>
      <Card class="flex-row-item normal-item">
        <h3>Links</h3>
        <div class="buttons">
          <NuxtLink
            v-for="link in links"
            :to="link.link"
            class="link__button"
            target="_blank"
            ><Button>{{ link.title }}</Button></NuxtLink
          >
        </div>
        <h3>Legal</h3>
        <div class="buttons">
          <NuxtLink
            v-for="link in legalLinks"
            :to="link.link"
            class="link__button"
            ><Button>{{ link.title }}</Button></NuxtLink
          >
        </div>
      </Card>
      <Card class="flex-row-item normal-item">
        <div class="grid-display">
          <div class="grid-display__item">
            <div class="label">Total Downloads</div>
            <div class="value">20M+</div>
            <span class="smaller-value">from Modrinth and Curseforge.</span>
          </div>
          <div class="grid-display__item">
            <div class="label">Contributions</div>
            <div class="value">
              {{ formatCount(ctrbs?.contributions) ?? 4000 }}
            </div>
            <span class="smaller-value">to open source projects.</span>
          </div>
          <div class="grid-display__item">
            <div class="label">Mod Versions Released</div>
            <div class="value">{{ updates?.length * 4 ?? 350 }}</div>
            <span class="smaller-value">from Modrinth and Curseforge </span>
          </div>
          <div class="grid-display__item">
            <div class="label">Forge Ports Requested</div>
            <div class="value">Too many...</div>
            <span class="smaller-value">probably from Curseforge </span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 735px) {
  .updates-row .flex-row-item:nth-child(4),
  .updates-row .flex-row-item:nth-child(3),
  .updates-row .flex-row-item:nth-child(2) {
    display: none;
  }
}
</style>
