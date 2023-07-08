<script setup>
import { Card } from "omorphia";
const router = useRouter();
const { data: page } = await useAsyncData("page_legal", () => {
  console.log(router.currentRoute);
  return queryContent(router.currentRoute.value.path).findOne();
});
</script>

<template>
  <div class="hero">
    <h1>{{ page?.title }}</h1>
    <Card>
      <ContentDoc :head="false" />
    </Card>
  </div>
</template>
