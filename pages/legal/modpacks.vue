<script setup>
import { Card, renderHighlightedString } from "omorphia";

const content = `By using my mods in your modpacks, you agree to adhere to **atleast one of** following conditions:

-  Modpack Link Requirement: You must include a prominent and easily accessible link to the **Modrinth** page of each of my mods within the modpack. If the mod is exclusively available on CurseForge, you may link the CurseForge page instead. In all other instances, including other platforms or distributions, you must link to the **Modrinth** page.
- Changelog Link Requirement: Alternatively to the Modpack Link Requirement, if you release any updates or versions of the modpack that include my mods, you must include a direct link to the corresponding **Modrinth** page of each mod in the changelog of the modpack release. If the mod is exclusively available on CurseForge, you may link the CurseForge page instead. In all other instances, including other platforms or distributions, you must link to the **Modrinth** page. This ensures clear attribution and visibility for my mods.

Please note that failure to comply with these requirements may result in potential consequences.

It is important to respect and honor these conditions to maintain a positive and mutually beneficial relationship. By using my mods in your modpacks, you acknowledge and agree to the terms and conditions stated in this agreement. If you do not agree to these terms, you are not permitted to use my mods in your modpacks.

For any further information on mod configuration or other related details, please refer to [the documentation provided](/docs).`;
</script>

<template>
  <div class="hero">
    <h1>Modpack Usage Guidelines</h1>
    <div class="markdown" v-html="renderHighlightedString(content)"></div>
  </div>
</template>
