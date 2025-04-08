<template>
  <NuxtLinkLocale
    :to="`${ROUTES.PRODUCTS}/${dish.id}`"
    class="flex flex-col text-start justify-start gap-1 relative"
  >
    <div class="relative rounded-lg lg:rounded-2xl">
      <span
        class="absolute inset-0 bg-slate-800/15 rounded-lg lg:rounded-2xl"
      />
      <span
        v-if="dish.discount"
        class="absolute right-3 top-3 size-16 rounded-2xl text-white bg-app-primary-500 shadow-lg flex items-center justify-center flex-col"
      >
        <p class="font-medium text-xs">
          {{ $t("components.dishCard.discount") }}
        </p>
        <p class="font-bold text-base">
          {{
            Intl.NumberFormat("en-US", {
              style: "percent",
              localeMatcher: "lookup",
              maximumFractionDigits: 1,
            }).format(dish.discount / 100 || 0)
          }}
        </p>
      </span>
      <NuxtImg
        :src="dish.thumbnail"
        :alt="dish.title"
        width="385"
        height="250"
        class="object-cover w-full max-h-[127px] md:max-h-[250px] rounded-lg lg:rounded-2xl"
      />
    </div>
    <div class="flex flex-col items-start justify-start gap-1">
      <h4 class="text-sm md:text-[24px] font-semibold text-[#33312C]">
        {{ dish.title }}
      </h4>
      <span class="flex items-center justify-start gap-3">
        <h6
          :class="
            clsx('text-[10px] md:text-[18px] font-semibold text-[#33312C]', {
              'line-through': dish.discount,
            })
          "
        >
          {{
            !dish.discount
              ? Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-us", {
                  style: "currency",
                  currency: "SAR",
                }).format(dish.price)
              : dish.price
          }}
        </h6>
        <small
          v-if="dish.discount"
          :class="
            clsx(
              'text-[10px] md:text-[18px] font-semibold text-app-primary-500'
            )
          "
          >{{
            Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-us", {
              style: "currency",
              currency: "SAR",
            }).format(dish.discount)
          }}</small
        >
      </span>
    </div>
  </NuxtLinkLocale>
</template>
<script setup lang="ts">
import clsx from "clsx";
import { ROUTES } from "~/constants/routes";

const { locale } = useI18n();
defineProps<{
  dish: any;
}>();
</script>
