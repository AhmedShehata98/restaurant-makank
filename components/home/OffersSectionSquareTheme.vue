<template>
  <section class="bg-app-background-500 min-h-fit flex flex-col gap-8 pt-8">
    <div class="w-full max-w-full">
      <ClientOnly>
        <swiper-container ref="containerRef" class="lg:hidden">
          <swiper-slide v-for="(offer, idx) of data?.hero_cards" :key="idx">
            <OfferSquareCard
              :key="offer.id"
              :offer="offer"
              :class="
                clsx(
                  {
                    'secondary-card': idx % 2 !== 0,
                  },
                  {
                    'third-card': idx === 2,
                  }
                )
              "
            />
          </swiper-slide>
        </swiper-container>
        <template #fallback>
          <span
            class="flex md:hidden flex-col items-center justify-between p-6 w-[calc(100%-3rem)] h-48 animate-pulse bg-app-background-700/90 rounded-xl my-4 mx-auto"
          >
            <div class="w-full flex flex-col gap-1.5 items-start justify-start">
              <span
                class="bg-app-background-800/80 h-6 w-full mx-auto inline-block rounded-md"
              />
              <span
                class="bg-app-background-800/80 h-4 w-11/12 mt-3 inline-block rounded-md"
              />
              <span
                class="bg-app-background-800/80 h-4 w-5/12 inline-block rounded-md"
              />
            </div>
            <span
              class="flex w-full mx-auto items-center justify-between gap-4"
            >
              <span
                class="bg-app-background-800/90 h-9 w-1/3 inline-block rounded-lg"
              />
              <span
                class="bg-app-background-800/90 h-12 w-12 inline-block rounded-full"
              />
            </span>
          </span>
        </template>
      </ClientOnly>
    </div>
    <ul
      class="app-container hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6"
    >
      <OfferSquareCard
        v-for="(offer, idx) of data?.hero_cards"
        :key="offer.id"
        :offer="offer"
        :class="
          clsx(
            {
              'secondary-card': idx % 2 !== 0,
            },
            {
              'third-card': idx === 2,
            }
          )
        "
      />
    </ul>
    <div
      class="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-6 bg-app-third-200 py-2"
    >
      <span class="flex items-center justify-center gap-2">
        <img src="~/public/icons/gmap.svg" alt="gmap.svg" class="opacity-70" />
        <p class="text-app-text-default opacity-70">
          {{ $t("pages.home.sections.offers.infos.location") }}
        </p>
        <p class="text-app-text-default">
          {{ data?.global_config.restaurant_address }}
        </p>
      </span>
      <span class="flex items-center justify-center gap-2">
        <img
          src="~/public/icons/mobile.svg"
          alt="mobile.svg"
          class="opacity-70"
        />
        <p class="text-app-text-default opacity-70">
          {{ $t("pages.home.sections.offers.infos.phone") }}
        </p>
        <p class="text-app-text-default">
          {{ data?.global_config.restaurant_phone }}
        </p>
      </span>
    </div>
  </section>
</template>
<script setup lang="ts">
import clsx from "clsx";
import { cardsQuery } from "~/api/graphql/queries/hero";
import { QUERIES_KEYS } from "~/constants/queries-keys";
import type { GlobalConfig } from "~/types/global-config";
import type { HeroCard } from "~/types/hero.types";
const containerRef = ref(null);
useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 8,
  initialSlide: 0,
  breakpoints: {
    248: {
      slidesPerView: 1.5,
      spaceBetween: 8,
      initialSlide: 0,
      autoplay: true,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 12,
      initialSlide: 0,
      autoplay: true,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 12,
      initialSlide: 0,
      autoplay: true,
    },
  },
});

const { data } = await useGraphQL<{
  hero_cards: HeroCard[];
  global_config: GlobalConfig;
}>(cardsQuery, undefined, {
  key: QUERIES_KEYS.HERO_CARDS,
});
</script>
<style lang="css" scoped>
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
}
</style>
