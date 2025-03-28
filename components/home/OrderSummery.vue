<template>
  <section class="bg-app-secondary-500 hidden lg:block w-full mt-16 py-16">
    <div
      class="app-container flex items-center flex-wrap justify-between gap-6"
    >
      <span class="flex flex-col gap-1">
        <h2 class="font-bold text-[44px] text-white">
          {{ $t("pages.home.sections.orderSummeryComponent.title") }}
        </h2>
        <p class="text-[20px] font-semibold text-app-subtitle-default">
          {{ $t("pages.home.sections.orderSummeryComponent.description") }}
        </p>
      </span>
      <button
        type="button"
        class="btn btn-secondary-outline gap-3 !rounded-full text-[18px] px-4"
      >
        <p>{{ $t("pages.home.sections.orderSummeryComponent.cta") }}</p>
        <UIcon name="mdi-light:arrow-left" class="text-2xl" />
      </button>
    </div>
    <div
      class="app-container flex items-center justify-between pt-8 gap-2 flex-wrap"
    >
      <h4 v-dynamic-color class="text-[20px] text-white font-bold">
        {{ $t("pages.home.sections.orderSummeryComponent.dishesCount") }}
        <mark class="bg-inherit px-2.5 text-inherit">({{ dishesCount }})</mark>
      </h4>
      <span class="flex items-center justify-center gap-3">
        <p
          v-dynamic-color
          class="text-[16px] font-semibold text-app-subtitle-default"
        >
          {{ $t("pages.home.sections.orderSummeryComponent.total") }}
        </p>
        <strong class="text-[32px] text-white">
          {{ totalPrice }}
        </strong>
        <p v-dynamic-color class="text-[16px] font-semibold text-white">
          {{ locale === "ar" ? "ر.س" : "SAR" }}
        </p>
      </span>
    </div>
  </section>
</template>
<script setup lang="ts">
const { locale } = useI18n();
defineProps<{
  dishesCount: number;
  totalPrice: number;
}>();
</script>
