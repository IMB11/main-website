<script setup>
import { Card, Button, LeftArrowIcon, HomeIcon } from "omorphia";
const router = useRouter();
const { data: page } = await useAsyncData(
  "page_docs",
  queryContent(router.currentRoute.value.path).findOne
);

let windowWidth = ref(0);

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.onresize = () => {
    windowWidth.value = window.innerWidth;
  };
});

const { data: sidebarData } = await useAsyncData("sidebarData", () => {
  const URL = router.currentRoute.value.fullPath.split("/");
  return queryContent(URL[1] + "/" + URL[2] + "/sidebar").findOne();
});
</script>

<template>
  <div class="hero">
    <div class="documentation-area">
      <Card class="toc-box" :collapsible="!(windowWidth > 1000)">
        <template #header>
          <h2>{{ sidebarData?.title }}</h2>
        </template>
        <div>
          <ContentDoc class="no-overflow" path="/docs/mru/sidebar" />
        </div>
      </Card>
      <Card class="content-box card-content-item">
        <h1>{{ page.title }}</h1>
        <div class="no-overflow">
          <ContentDoc>
            <template #empty></template>
          </ContentDoc>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.documentation-area {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 0px 0px;
  gap: var(--gap-md);
  grid-template-areas:
    "toc-pane content-pane content-pane"
    "toc-pane content-pane content-pane"
    "toc-pane content-pane content-pane";
  overflow: scroll;
}

@media (max-width: 1000px) {
  .documentation-area {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "toc-pane"
      "content-pane";
  }

  .toc-box {
    height: min-content;
  }
}

.toc-box {
  margin: 0;
  height: 100%;
  grid-area: toc-pane;
}

.content-box {
  margin: 0;
  height: 100%;
  grid-area: content-pane;
}
</style>
