<template>
  <NuxtLinkLocale
    :to="`${ROUTES.PRODUCTS}/${dish.id}`"
    class="flex flex-col text-start justify-start gap-1"
  >
    <img
      :src="dish.thumbnail"
      :alt="dish.title"
      width="385"
      height="250"
      class="object-cover w-full max-h-[250px] rounded-lg lg:rounded-2xl"
    />
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
