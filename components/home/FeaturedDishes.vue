<template>
  <section class="app-container flex flex-col h-fit">
    <div
      class="flex items-center justify-between flex-wrap gap-3 w-full mt-16 mb-14"
    >
      <h2
        class="text-[16px] md:text-[40px] font-semibold md:font-bold text-app-text-default"
      >
        {{ $t("pages.home.sections.featuredDishes.title") }}
      </h2>
      <NuxtLinkLocale
        to="/featured-dishes"
        class="flex items-center justify-center gap-2"
      >
        <p class="text-app-primary-500 text-[16px] md:text-xl font-semibold">
          {{ $t("pages.home.sections.featuredDishes.fullMenuButton") }}
        </p>
        <span
          class="size-6 lg:size-8 border border-app-primary-500 rounded-full flex justify-center item center"
        >
          <UIcon
            name="mdi-light:arrow-left"
            class="text-lg md:text-2xl text-app-primary-500 m-auto"
          />
        </span>
      </NuxtLinkLocale>
    </div>
    <ul class="w-full grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5">
      <DishCard v-for="(dish, idx) of dishesList" :key="idx" :dish />
    </ul>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  dishesList: any[];
}>();
</script>
