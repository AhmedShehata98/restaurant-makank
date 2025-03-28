<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useSettingsStore } from "~/store/settings-store";
import { QUERIES_KEYS } from "~/constants/queries-keys";

const settingsStore = useSettingsStore();
useAsyncData(QUERIES_KEYS.SETTINGS, () =>
  settingsStore.initializeAppSettings()
);
</script>
