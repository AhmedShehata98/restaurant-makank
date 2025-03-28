<template>
  <img
    width="128"
    height="128"
    class="w-full"
    :src="appStore.logo[logoTheme] || appStore.logo.DEFAULT"
    alt="logo.svg"
  />
</template>
<script setup lang="ts">
import { useSettingsStore } from "~/store/settings-store";
import { LogoThemeEnum } from "~/types/shared";

const appStore = useSettingsStore();
console.log(appStore.logo.DEFAULT);
defineProps<{
  logoTheme: keyof typeof LogoThemeEnum;
}>();
</script>
