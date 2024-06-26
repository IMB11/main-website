<script setup lang="ts">
import { Card, Avatar, Button, MoonIcon, SunIcon } from "omorphia";

const colorMode = useColorMode();

const theme = computed({
  get() {
    return colorMode.value !== "dark";
  },
  set(newValue) {
    colorMode.value = newValue ? "light" : "dark";
  },
});
</script>

<template>
  <Card class="nav">
    <NuxtLink class="side__link side__profile" to="/">
      <Avatar src="/icon.png"></Avatar>
      <h2 class="username">IMB11</h2>
    </NuxtLink>
    <div class="side no__mobile">
      <NuxtLink to="/" class="side__link">Home</NuxtLink>
      <NuxtLink to="/mods" class="side__link">Mods</NuxtLink>
      <NuxtLink to="/updates" class="side__link">Updates</NuxtLink>
      <!-- <NuxtLink to="/documentation" class="side__link">Documentation</NuxtLink> -->
    </div>
    <div class="side__buttons no__mobile">
      <Button iconOnly class="button__rounded_icon" @click="theme = !theme">
        <MoonIcon v-if="!theme" />
        <SunIcon v-else />
      </Button>
    </div>
  </Card>

  <!-- Responsive version of the navbar for only mobile. -->
  <Card class="nav nav-body">
    <div class="side">
      <NuxtLink to="/" class="side__link">Home</NuxtLink>
      <NuxtLink to="/mods" class="side__link">Mods</NuxtLink>
      <NuxtLink to="/updates" class="side__link">Updates</NuxtLink>
      <!-- <NuxtLink to="/documentation" class="side__link">Documentation</NuxtLink> -->
    </div>
  </Card>
</template>

<style scoped lang="css">
/* Mobile Navbar */
@media only screen and (min-width: 600px) {
  .nav-body {
    display: none !important;
  }
}

/* Hide no__mobile */
@media only screen and (max-width: 600px) {
  .no__mobile {
    display: none !important;
  }

  .side__profile {
    margin: auto;
  }

  .side__profile>.username {
    /* Adjust font size to fit horizontally fully. */
    /* Using vw */
    margin: auto;
    padding-left: auto;
    font-size: 5cqw;
  }
}

.button__rounded_icon {
  border-radius: 50%;
  box-shadow: none;
  background-color: transparent;
  transition: color 100ms ease-in-out;
}

.side__buttons {
  margin-top: auto;
  margin-bottom: auto;
}

.button__rounded_icon:hover {
  color: var(--color-brand);
}

.nav-body {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.nav {
  padding: var(--gap-md);
  margin: auto;
  width: 85%;
  margin-top: var(--gap-lg) !important;
  background-color: var(--color-raised-bg);
  box-shadow: var(--shadow-raised-lg);
  display: flex;
}

.username {
  text-align: center;
  vertical-align: middle;
}

@media only screen and (min-width: 600px) and (max-width: 800px) {
  .username {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  .side {
    left: 0 !important;
    position: inherit !important;
  }
}

.side {
  position: relative;
  display: flex;
  margin: auto;
  margin-left: auto;
  left: calc(var(--gap-xl) * -4);
  flex-direction: row;
  gap: var(--gap-xl);
}

.side__profile {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
}

.side__link {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
  color: var(--color-base);
}

.side__link:hover>*,
.side__link:hover {
  color: var(--color-brand);
  transition: color 100ms ease-in-out;
}

.side__link>.username {
  margin: auto;
}
</style>
