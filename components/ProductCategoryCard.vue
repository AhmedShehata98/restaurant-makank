<template>
  <li
    class="flex flex-col items-center justify-center [&:nth-child(2)]:md:row-span-2 [&:nth-child(3)]:md:row-span-2 [&:nth-child(2)>a:first-child]:md:flex [&:nth-child(3)>a:nth-child(2)]:md:flex [&:nth-child(3)]:flex-col-reverse max-md:h-28"
  >
    <NuxtLinkLocale
      to="/menus"
      class="text-app-primary-500 text-[28px] font-bold hidden items-center justify-center gap-3 mb-6"
    >
      <h3>
        {{ $t("pages.home.sections.ourMenu.fullMenuButton") }}
      </h3>
      <span
        class="flex items-center justify-center size-8 rounded-full border border-dashed rotate-45"
      >
        <UIcon name="material-symbols:arrow-left-alt-rounded" />
      </span>
    </NuxtLinkLocale>
    <NuxtLinkLocale
      to="/featured-menus"
      class="text-app-secondary-500 text-[28px] font-bold hidden items-center justify-center gap-3 mt-6"
    >
      <h3>
        {{ $t("pages.home.sections.ourMenu.featuredDishesButton") }}
      </h3>
      <span
        class="flex items-center justify-center size-8 rounded-full border border-dashed rotate-45"
      >
        <UIcon name="mdi-light:arrow-down" />
      </span>
    </NuxtLinkLocale>
    <div
      class="h-full rounded-lg lg:rounded-xl overflow-hidden flex items-end p-4 justify-start relative bg-center bg-cover bg-no-repeat w-full"
      :style="{ backgroundImage: `url(${item.thumbnail})` }"
    >
      <span
        class="inline-block absolute top-0 left-0 w-full h-full rounded-xl"
        style="background: linear-gradient(1deg, #141414c2, #2626261a)"
      />
      <h2 class="isolate text-[20px] font-bold text-white mt-4">
        {{ item.title }}
      </h2>
    </div>
  </li>
</template>
<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
