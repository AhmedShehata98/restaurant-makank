<template>
  <section class="bg-app-background-500 min-h-fit flex flex-col gap-8 pt-8">
    <div class="w-full max-w-full">
      <ClientOnly>
        <swiper-container ref="containerRef" class="lg:hidden">
          <swiper-slide v-for="(offer, idx) of offersList" :key="idx">
            <OfferSquareCard
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
      </ClientOnly>
    </div>
    <ul
      class="app-container hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6"
    >
      <OfferSquareCard
        v-for="(offer, idx) of offersList"
        :key="idx"
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
          الأمير فيصل، السليمانية، الرياض 11545، المملكة العربية السعودية
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
        <p class="text-app-text-default">+966 9200 12026</p>
      </span>
    </div>
  </section>
</template>
<script setup lang="ts">
import clsx from "clsx";
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 8,
  initialSlide: 1,
  breakpoints: {
    248: {
      slidesPerView: 1.5,
      spaceBetween: 8,
      initialSlide: 1,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 12,
      initialSlide: 1,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 12,
      initialSlide: 1,
    },
  },
});

defineProps<{
  offersList: any[];
}>();
</script>
<style lang="css" scoped>
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
}
</style>
