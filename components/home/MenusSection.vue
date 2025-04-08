<template>
  <section class="bg-app-background-500 min-h-fit flex-col app-container">
    <div class="mt-5 md:mt-8 lg:mt-16">
      <h1
        class="text-[16px] md:text-[32px] md:font-semibold lg:text-[44px] font-bold text-center mb-2 text-app-text-default"
      >
        {{ $t("pages.home.sections.ourMenu.title") }}
      </h1>
      <p
        class="text-[12px] md:text-[20px] font-semibold text-center text-app-subtitle-default"
      >
        {{ $t("pages.home.sections.ourMenu.description") }}
      </p>
      <NuxtLinkLocale
        to="/menus"
        class="text-app-primary-500 text-[16px] md:hidden flex font-bold items-center justify-center gap-3 mb-4 mt-5"
      >
        <h3>
          {{ $t("pages.home.sections.ourMenu.fullMenuButton") }}
        </h3>
        <span
          class="flex items-center justify-center size-6 rounded-full border border-dashed rotate-45"
        >
          <UIcon name="material-symbols:arrow-left-alt-rounded" />
        </span>
      </NuxtLinkLocale>
    </div>
    <ul
      class="mt-2 lg:mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-11 md:min-h-[580px]"
    >
      <ProductCategoryCard
        v-for="(item, index) of menuList"
        :key="index"
        :item="item"
      />
    </ul>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  menuList: [];
}>();
</script>
