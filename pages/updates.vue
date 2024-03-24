<script setup lang="ts">
import { Card, Button, DownloadIcon } from "omorphia";
import { computedAsync } from "@vueuse/core";

const releases = computedAsync(async () => {
  const projects = (await useApi("/v2/projects"));

  const flatReleases: any[] = projects.flatMap((project: any) => {
    return project.releases;
  });

  // Sort by date.
  flatReleases.sort((a: any, b: any) => {
    return (
      new Date(b.date_published).getTime() -
      new Date(a.date_published).getTime()
    );
  });

  // Remove releases with duplicate names.
  const seen: any = {};
  const filteredReleases = flatReleases.filter((release: any) => {
    if (release.name.includes("P2P")) {
      return false;
    }

    if (seen[release.name]) {
      return false;
    }

    seen[release.name] = true;
    return true;
  });

  return filteredReleases;
});
</script>

<template>
  <div class="hero">
    <h1>Updates</h1>
    <div class="flex-row updates-row">
      <Card v-for="release in releases" class="flex-row-item" :key="release.versionID">
        <br />
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
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
