<script>
import { Card, Avatar, Button, MoonIcon, SunIcon, HomeIcon } from "omorphia";
export default {
  name: "Navbar",
  components: {
    Card,
    Avatar,
    Button,
    MoonIcon,
    SunIcon,
    HomeIcon,
  },
  emits: ["themeChange"],
  data() {
    return {
      theme: window.localStorage.getItem("theme") === "true" || false,
    };
  },
  mounted() {
    this.$emit("themeChange", this.theme);
  },
  watch: {
    theme: function () {
      localStorage.setItem("theme", this.theme);
      this.$emit("themeChange", this.theme);
    },
  },
  computed: {
    themeValue: function () {
      return this.theme ? "light" : "dark";
    },
  },
};
</script>

<template>
  <Card class="nav">
    <NuxtLink class="side__link side__profile" to="/">
      <Avatar src="https://github.com/mineblock11.png"></Avatar>
      <h2 class="username">mineblock11</h2>
    </NuxtLink>
    <div class="side">
      <NuxtLink to="/" class="side__link">Home</NuxtLink>
      <NuxtLink to="/mods" class="side__link">Mods</NuxtLink>
      <NuxtLink to="/docs" class="side__link">Documentation</NuxtLink>
      <NuxtLink to="/contact" class="side__link">Contact</NuxtLink>
    </div>
    <div class="side__buttons">
      <Button
        iconOnly
        class="button__rounded_icon"
        @click="this.theme = !this.theme"
        ><MoonIcon v-if="!this.theme" /><SunIcon v-if="this.theme"
      /></Button>
    </div>
  </Card>
  <Card class="mobile__nav">
    <NuxtLink to="/"
      ><Button class="mobile__link_icon" iconOnly><HomeIcon /></Button
    ></NuxtLink>
    <NuxtLink to="/mods"
      ><Button class="mobile__link_icon" iconOnly><HomeIcon /></Button
    ></NuxtLink>
    <NuxtLink to="/docs"
      ><Button class="mobile__link_icon" iconOnly><HomeIcon /></Button
    ></NuxtLink>
    <NuxtLink to="/contact"
      ><Button class="mobile__link_icon" iconOnly><HomeIcon /></Button
    ></NuxtLink>
    <Button
      iconOnly
      class="button__rounded_icon"
      @click="this.theme = !this.theme"
      ><MoonIcon v-if="!this.theme" /><SunIcon v-if="this.theme"
    /></Button>
  </Card>
</template>

<style scoped lang="css">
.button__rounded_icon {
  border-radius: 50%;
  box-shadow: none;
  background-color: transparent;
  transition: color 100ms ease-in-out;
}

.button__rounded_icon:hover {
  color: var(--color-red);
}

.nav-body {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.nav {
  padding: var(--gap-md);
  align-self: center;
  margin: auto;
  width: 85%;
  margin-top: var(--gap-lg) !important;
  background-color: var(--color-raised-bg);
  box-shadow: var(--shadow-raised-lg);
  display: flex;
  align-items: center;
}

.side {
  display: flex;
  margin: auto;
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

.side__link:hover > *,
.side__link:hover {
  color: var(--color-red);
  transition: color 100ms ease-in-out;
}

.side__link > .username {
  margin: auto;
}

.mobile__nav {
  z-index: 999;
  width: 100%;
  position: fixed;
  bottom: 0;
  margin: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 4%;
  align-items: stretch;
  padding-left: 15%;
  padding-right: 15%;
  justify-content: space-between;
  flex-direction: row;
  display: none;
  gap: var(--gap-sm);
}

.mobile__link_icon {
  background-color: transparent;
  box-shadow: none;
}

@media (max-width: 735px) {
  .nav {
    display: none;
  }
  .mobile__nav {
    display: flex !important;
  }
}
</style>
