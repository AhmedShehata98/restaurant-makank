<template>
  <div class="w-full flex-col hidden md:flex gap-4 pt-24">
    <span class="hidden tablet:flex items-center justify-between gap-3">
      <p class="text-text-color-default text-[20px] font-bold">
        {{ $t("pages.productDetails.relatedProducts") }}
      </p>
      <NuxtLinkLocale
        :to="ROUTES.PRODUCTS"
        class="flex items-center justify-center gap-2 text-primary-500"
      >
        <p class="text-inherit text-[20px] font-bold">
          {{ $t("pages.productDetails.relatedProductsCta") }}
        </p>
        <span
          class="border-2 rounded-full size-7 flex items-center justify-center border-dashed border-primary-500"
        >
          <UIcon name="mdi:arrow-top-right" class="-rotate-90" />
        </span>
      </NuxtLinkLocale>
    </span>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8 mb-10">
      <DishCard v-for="(dish, idx) of menu" :key="idx" :dish />
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";
const menu = [
  {
    id: 1,
    title: "Classic Cheeseburger",
    price: 12.99,
    discount: 10,
    thumbnail: "https://picsum.photos/seed/burvsger/400/300",
  },
  {
    id: 2,
    title: "Margherita Pizza",
    price: 14.99,
    discount: 15,
    thumbnail: "https://picsum.photos/seed/pitvzza/400/300",
  },
  {
    id: 3,
    title: "Grilled Salmon",
    price: 18.99,
    discount: 5,
    thumbnail: "https://picsum.photos/seed/salemon/400/300",
  },
  {
    id: 4,
    title: "Caesar Salad",
    price: 9.99,
    discount: 0,
    thumbnail: "https://picsum.photos/seed/salvad/400/300",
  },
  {
    id: 5,
    title: "BBQ Ribs",
    price: 22.99,
    discount: 20,
    thumbnail: "https://picsum.photos/seed/rdibs/400/300",
  },
  {
    id: 6,
    title: "Spaghetti Carbonara",
    price: 13.99,
    discount: 10,
    thumbnail: "https://picsum.photos/seed/pasata/400/300",
  },
];
</script>
