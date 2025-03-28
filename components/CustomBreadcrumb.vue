<template>
  <ul class="hidden md:flex gap-2 w-full pt-10">
    <li
      v-for="(item, idx) of items"
      :key="item.to"
      class="flex items-center justify-start gap-2 text-app-subtitle-default"
    >
      <UIcon name="mdi-light:chevron-left" />
      <NuxtLinkLocale :to="item.to" class="flex items-center justify-center">
        <UIcon
          v-if="item?.icon"
          :name="item?.icon"
          class="text-app-subtitle-default"
        />
        <small
          class="text-app-subtitle-default font-semibold text-sm"
          :class="
            clsx({
              '!text-black !font-semibold':
                route.fullPath.endsWith(item.to) ||
                (isLastLinkActive && items.length - 1 === idx),
            })
          "
          >{{ item.label }}</small
        >
      </NuxtLinkLocale>
    </li>
  </ul>
</template>
<script setup lang="ts">
import clsx from "clsx";

const route = useRoute();
defineProps<{
  items: Array<{
    to: string;
    label: string;
    icon?: string;
  }>;
  isLastLinkActive: boolean;
}>();
</script>
