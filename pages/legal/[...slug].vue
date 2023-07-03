<script setup>
import { Card } from "omorphia";
const router = useRouter();
const { data: page } = await useAsyncData("page_legal", () => {
  console.log(router.currentRoute);
  return queryContent(router.currentRoute.value.path).findOne();
});
// console.log(page);
// console.log(router.currentRoute.value);
</script>

<template>
  <div class="hero">
    <h1>{{ page?.title }}</h1>
    <Card>
      <ContentDoc />
    </Card>
  </div>
</template>
