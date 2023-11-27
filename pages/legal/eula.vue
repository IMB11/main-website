<script setup>
import { Card, renderHighlightedString } from "omorphia";

const content = `When using my mods, you automatically agree to this End User License Agreement.

By using my mods, you agree that you will not engage in any activities that give you an unfair or uncompetitive advantage over other users. This includes, but is not limited to, using my mods to gain an unfair advantage in gameplay, competitions, or any other aspect of the game.

You cannot:

1. Use my mods to gain an uncompetitive advantage over other players, including but not limited to:
    1. Exploiting bugs, glitches, or unintended features of the mods or the game itself.
    2. Modifying the mods or using third-party tools to gain unfair advantages.
    3. Cheating, hacking, or using any unauthorized software or modifications.
2. Use my mods to disrupt or negatively impact the gameplay experience of other users, including but not limited to:
    1. Intentionally causing server crashes, lag, or other technical issues.
    2. Engaging in toxic behavior, harassment, or any form of cheating or unfair play.
3. Distribute or share modified versions of my mods that enable uncompetitive advantages or violate the terms of this agreement.
4. Use my mods in any way that violates the terms of the [Minecraft End User License Agreement](https://www.minecraft.net/en-us/eula) or any other applicable laws or regulations.

By using my mods, you acknowledge that any violation of this agreement may result in consequences, including but not limited to legal action, if necessary, to protect my rights as the creator of the mods.

Please note that this End User License Agreement may be updated or modified at any time, and it is your responsibility to review and comply with the latest version.

By using my mods, you agree to the terms and conditions stated in this End User License Agreement. If you do not agree to these terms, you are not permitted to use my mods.`;
</script>

<template>
  <div class="hero">
    <h1>End User License Agreement</h1>
    <div class="markdown" v-html="renderHighlightedString(content)"></div>
  </div>
</template>
