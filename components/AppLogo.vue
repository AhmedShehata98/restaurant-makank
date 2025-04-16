<template>
  <img
    width="128"
    height="128"
    class="w-full"
    :src="imageSrc || '#'"
    alt="logo.svg"
  />
</template>
<script setup lang="ts">
import type { LogoThemeEnum } from "~/types/shared";
import type { GlobalConfig } from "~/types/global-config";
import { logoQuery } from "~/api/graphql/queries/global-config";
import { QUERIES_KEYS } from "~/constants/queries-keys";
const { data } = await useGraphQL<{ global_config: GlobalConfig }>(logoQuery,undefined,{
  key:QUERIES_KEYS.LOGO
});

const { imageSrc } = useImageSrc(data.value?.global_config.restaurant_logo.id);

defineProps<{
  logoTheme: keyof typeof LogoThemeEnum;
}>();
</script>
