<script setup lang="ts">
import {
  Card,
  Button,
  WikiIcon,
  DownloadIcon,
  LeftArrowIcon,
  XIcon,
  SearchIcon,
  DropdownSelect,
} from "omorphia";

import { computedAsync } from "@vueuse/core";

const projects = computedAsync(async () => {
  return (await useApi("/v2/projects")).value;
}, []);
</script>

<template>
  <div class="hero">
    <h1>Mods</h1>
    <!-- <Card>
      <div class="flex-inputs">
        <div class="iconified-input left">
          <SearchIcon />
          <input
            class="search-box"
            v-model="inputText"
            type="text"
            placeholder="Search"
          />
          <Button @click="() => (inputText = '')">
            <XIcon />
          </Button>
        </div>
        <div class="right">
          <DropdownSelect
            class="dropdown"
            v-model="orderBy"
            :options="['Date', 'Title']"
            placeholder="Order By"
          />
          <Button
            @click="
              () => {
                descending = !descending;
              }
            "
            iconOnly
            ><LeftArrowIcon :transform="`rotate(${descending ? -90 : 90})`"
          /></Button>
        </div>
      </div>
    </Card> -->
    <div class="flex-row image-card-row">
      <Card v-for="mod in projects" class="flex-row-item">
        <img :src="mod.galleryImage" />
        <h3>{{ mod.title }}</h3>

        <p>{{ mod.summary }}</p>

        <div class="buttons">
          <NuxtLink :to="mod.modrinthURL" class="link__button" target="_blank">
            <Button color="primary"><DownloadIcon />Download</Button></NuxtLink
          >
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.right {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
}

.dropdown {
  width: fit-content;
  margin-top: auto;
  margin-bottom: auto;
}

.flex-row-item {
  max-width: 460px;
}
</style>
