<template>
  <section class="flex flex-col gap-1 app-container max-sm:min-h-screen">
    <slot name="header" />
    <LazyProfileCover
      username="user 1555405"
      avatar-img="https://picsum.photos/800/768"
      cover-img="https://picsum.photos/1200/764"
    />
    <LazySectionsNavButtons />
    <slot />
    <slot name="footer" />
  </section>
</template>
<script setup lang="ts">
import { useSettingsStore } from "~/store/settings-store";

const isSmallScreen = useMediaQuery("(max-width:768px)");
const settingsState = useSettingsStore();

onMounted(() => {
  if (isSmallScreen.value) {
    settingsState.setColoredAppHeader(false);
    console.log("un-set colored app header");
  } else {
    settingsState.setColoredAppHeader(true);
    console.log("set colored app header");
  }
});
</script>
