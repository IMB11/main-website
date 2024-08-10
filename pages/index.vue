<script setup lang="ts">
import {
  Card,
  Button,
  WikiIcon,
  DownloadIcon,
  renderHighlightedString,
} from "omorphia";
import { computedAsync } from "@vueuse/core";

const recentReleases = computedAsync(async () => {
  return (await useApi(`/v2/recent`));
}, [] as any[]);

console.log(recentReleases)

const contributions = computedAsync(async () => {
  return (await useApi(`/contributions`));
}, 111 as number);

onUpdated(() => {
  console.log(contributions.value);
});

const links = [
  {
    title: "Modrinth",
    link: "https://modrinth.com/user/mineblock11",
  },
  {
    title: "Curseforge",
    link: "https://curseforge.com/members/itsmineblock11/projects",
  },
  {
    title: "GitHub",
    link: "https://github.com/IMB11",
  },
  {
    title: "Maven",
    link: "https://maven.imb11.dev/",
  },
  {
    title: "Discord",
    link: "https://discord.imb11.dev/",
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

function formatCount(amount: number) {
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
      <Card v-for="release in recentReleases" class="flex-row-item" :key="release.versionID">
        <img :src="release.galleryImage" />

        <h3>{{ release.name }}</h3>

        <p>{{ release.summary }}</p>

        <div class="buttons">
          <NuxtLink :to="release.htmlURL" class="link__button" target="_blank">
            <Button color="primary">
              <DownloadIcon />Download
            </Button>
          </NuxtLink>
        </div>
      </Card>
      <Card class="flex-row-item">
        <img src="https://cdn.imb11.dev/cave_and_cliffs.jpg" />
        <h3>Looking for more?</h3>
        <p>You can find more information on updates on the updates page.</p>
        <NuxtLink to="/updates" class="link__button bottom-btn"><Button color="primary">
            <WikiIcon />View More
          </Button></NuxtLink>
      </Card>
    </div>
  </div>
  <div class="hero">
    <h1>Information</h1>
    <div class="flex-row">
      <Card class="flex-row-item normal-item">
        <h3>Links</h3>
        <div class="buttons">
          <NuxtLink v-for="link in links" :to="link.link" class="link__button" target="_blank"><Button>{{ link.title
              }}</Button></NuxtLink>
        </div>
        <h3>Legal</h3>
        <div class="buttons">
          <NuxtLink v-for="link in legalLinks" :to="link.link" class="link__button"><Button>{{ link.title }}</Button>
          </NuxtLink>
        </div>
      </Card>
      <Card class="flex-row-item normal-item">
        <div class="grid-display">
          <div class="grid-display__item">
            <div class="label">Total Downloads</div>
            <div class="value">15M+</div>
            <span class="smaller-value">from Modrinth and Curseforge.</span>
          </div>
          <div class="grid-display__item">
            <div class="label">Contributions</div>
            <div class="value">
              {{ formatCount(contributions?.contributions ?? 4000) }}
            </div>
            <span class="smaller-value">to open source projects.</span>
          </div>
          <!-- <div class="grid-display__item">
            <div class="label">Forge Ports Requested</div>
            <div class="value">Too many...</div>
            <span class="smaller-value">probably from Curseforge </span>
          </div> -->
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

.bottom-btn {
  margin-top: auto;
}
</style>
