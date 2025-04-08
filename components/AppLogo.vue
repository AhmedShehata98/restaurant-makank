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
import type { LogoThemeEnum } from "~/types/shared";

const appStore = useSettingsStore();

defineProps<{
  logoTheme: keyof typeof LogoThemeEnum;
}>();
</script>
