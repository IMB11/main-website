<script setup>
import {
  Card,
  Avatar,
  Button,
  DownloadIcon,
  ArchiveIcon,
  ShareIcon,
  ShareModal,
} from "omorphia";
import MarkdownStringRenderer from "~/components/MarkdownStringRenderer.vue";
const route = useRoute();
console.log(route.params);
const { data: update } = await useApi("/update/" + route.params.id);

console.log(update.value);
if (update.value.error) {
  throw createError({
    statusCode: 404,
    statusMessage: "Update not found.",
    fatal: true,
  });
}

update.value = update.value.data;

useSeoMeta({
  title: update.value.title,
  description: update.value.summary,
  ogImage: update.value.galleryImage,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <ShareModal
    ref="shareLink"
    share-title="This is the title for the link"
    share-text="Share this link"
    link
  />
  <div class="hero">
    <h1>{{ update?.title }}</h1>
    <Card class="content">
      <MarkdownStringRenderer :markdown-string="update.content" />
    </Card>
    <div class="buttons">
      <NuxtLink class="link__button" :to="update.modrinthURL" target="_blank"
        ><Button color="primary"><DownloadIcon /> Download</Button></NuxtLink
      >
      <Button
        @click="
          $refs.shareLink.show(`https://mineblock11.dev/update/${update.id}`)
        "
        ><ShareIcon />Share</Button
      >
    </div>
  </div>
</template>

<style scoped>
.content {
  overflow: scroll;
}
</style>
