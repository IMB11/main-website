<script setup>
import { Card, Button, LeftArrowIcon, HomeIcon } from "omorphia";
const router = useRouter();
const { data: page } = await useAsyncData(
  "page",
  queryContent(router.currentRoute).findOne
);
const { data: surroundingPages } = await useAsyncData(
  "surroundingPages",
  queryContent(router.currentRoute).findSurround
);

console.log(surroundingPages.value);
</script>

<template>
  <main>
    <div class="hero">
      <div class="flex-row">
        <div class="toc">
          <Card class="toc">
            <div class="buttons">
              <NuxtLink class="link__button" to="/docs"
                ><Button><LeftArrowIcon />Back</Button></NuxtLink
              >
            </div>
            <ContentDoc path="/docs/mru/sidebar" />
          </Card>
        </div>
        <div class="content-item">
          <Card class="card-content-item">
            <h1>{{ page.title }}</h1>
            <ContentDoc>
              <template #empty></template>
            </ContentDoc>
          </Card>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.toc {
  flex: 1 0 125px;
  box-sizing: border-box;
  margin: 1rem 0.5em;
  height: 100%;
}

.toc > * > h3[id] {
  text-align: center;
}

.content-item {
  flex: 1 0 calc(78% - 125px);
  box-sizing: border-box;
  height: 80vh;
}

.content-item .card-content-item {
  margin-top: 2em;
  overflow: scroll;
  height: 80vh;
}
</style>
