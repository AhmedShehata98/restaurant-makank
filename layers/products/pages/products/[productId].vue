<template>
  <section class="flex flex-col">
    <CustomBreadcrumb v-if="items" :items="items" class="app-container !mb-5" />
    <!-- Product preview container-->
    <div
      class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-11 md:mt-10 app-container mt-3"
    >
      <!-- product images container -->
      <div
        class="flex flex-col-reverse relative md:flex-row items-start justify-start gap-5 h-[40dvh] lg:h-[70vh]"
      >
        <div
          class="absolute md:relative h-20 w-4/5 self-center md:h-full md:w-20"
        >
          <!-- preview product images -->
          <ClientOnly>
            <swiper-container
              ref="productImagesListRef"
              :direction="swiperDirection"
              :data-direction="swiperDirection"
            >
              <swiper-slide
                v-for="(imgSrc, idx) of productImages"
                :key="idx"
                class="transition-[border] max-md:aspect-square"
                :class="
                  clsx({
                    'preview-img_slide-active': imgSrc === activePreviewImage,
                  })
                "
              >
                <NuxtImg
                  :src="imgSrc"
                  alt="product-img"
                  width="200"
                  height="200"
                  class="object-cover w-full h-full rounded-lg"
                  @click="handleSelectPreviewImage(imgSrc)"
                />
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
        <figure
          class="flex-1 w-full h-full md:w-[unset] flex items-center justify-center overflow-hidden rounded-md md:rounded-2xl"
        >
          <NuxtImg
            v-slot="{ src, isLoaded, imgAttrs }"
            src="https://picsum.photos/seed/piaozza/200/300"
            alt="product-img-preview"
            width="542"
            height="456"
            class="object-cover w-full h-full"
            :custom="true"
          >
            <!-- Show the actual image when loaded -->
            <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />

            <!-- Show a placeholder while loading -->
            <img v-else src="https://placehold.co/542x456" alt="placeholder" />
          </NuxtImg>
        </figure>
      </div>
      <!-- product details container -->
      <div class="flex flex-col gap-2 self-center">
        <!-- category -->
        <p class="text-app-secondary-500 font-medium text-[16px]">
          وجبات سريعة
        </p>
        <!-- Title -->
        <h3 class="text-text-color-default text-[32px] font-semibold">
          بيض مسلوق و عيش توست
        </h3>
        <!-- Prise -->
        <span
          class="flex items-center mb-8 font-bold text-[20px] justify-start gap-1.5 text-app-primary-500"
        >
          <p>100</p>
          <p>ريال سعودي</p>
        </span>
        <!-- Sizes -->
        <div class="flex flex-col gap-2 mb-6">
          <p class="text-base font-semibold">
            {{ $t("pages.productDetails.sizes") }}
          </p>
          <ul class="flex items-center justify-start gap-4">
            <button
              type="button"
              class="flex items-center gap-1 bg-primary-500 text-white py-2 px-4 rounded-lg"
            >
              <p>صغير</p>
              <p>100</p>
            </button>
            <button
              type="button"
              class="flex items-center gap-1 border-gray-400 border py-2 px-4 rounded-lg"
            >
              <p>وسط</p>
              <p>120</p>
            </button>
            <button
              type="button"
              class="flex items-center gap-1 border-gray-400 border py-2 px-4 rounded-lg"
            >
              <p>كبير</p>
              <p>150</p>
            </button>
          </ul>
        </div>
        <!-- Extras -->
        <div class="mb-6 flex flex-col gap-2">
          <p class="text-base font-semibold">
            {{ $t("pages.productDetails.extras") }}
          </p>
          <ul class="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
            <li class="flex items-center justify-start gap-2">
              <UCheckbox label=">مشروب بالبيض" color="primary" />
            </li>
            <li class="flex items-center justify-start gap-2">
              <UCheckbox label=">مشروب بالبيض" color="info" />
            </li>
            <li class="flex items-center justify-start gap-2">
              <UCheckbox label=">مشروب بالبيض" color="info" />
            </li>
          </ul>
          <!-- Buttons (add to cart / quantity)  -->
          <div
            class="mt-8 flex flex-col items-center tablet:flex-row gap-5 justify-start"
          >
            <span
              class="flex rounded-lg items-center justify-center gap-1 border-2 border-gray-400 w-fit"
            >
              <button
                type="button"
                class="w-9 h-10 flex items-center cursor-pointer justify-center"
              >
                <UIcon name="mdi:plus" @click="count += 1" />
              </button>
              <p class="w-9 h-10 flex font-bold items-center justify-center">
                {{ count }}
              </p>
              <button
                type="button"
                class="w-9 h-10 flex items-center justify-center cursor-pointer"
                @click="() => (count > 0 ? (count -= 1) : null)"
              >
                <UIcon name="mdi:minus" />
              </button>
            </span>
            <button
              type="button"
              class="btn w-full md:w-fit btn-black gap-2 cursor-pointer"
            >
              {{ $t("pages.productDetails.adToCartButton") }}
              <p>
                ({{
                  Intl.NumberFormat(`${locale}-SA`, {
                    currency: "SAR",
                    style: "currency",
                  }).format(170)
                }})
              </p>
              <UIcon name="iconamoon:shopping-bag" class="mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Product about container -->
    <div class="flex flex-col gap-2 mt-4 tablet:mt-10 app-container">
      <p class="text-app-subtitle-default text-[20px] font-bold">
        {{ $t("pages.productDetails.aboutProduct") }}
      </p>
      <h3 class="text-text-color-default text-[20px] font-semibold">
        تتكون الوجبة من البيض الطازج المطبوخ بالطريقة الفرنسية والعيش المخبوز
        بأيدي سعودية بطريقة سكان نيوزيلاندا.
      </h3>
    </div>
    <!-- Order Summery -->
    <HomeOrderSummery :total-price="2099" :dishes-count="4" class="!mt-5" />
    <!-- Related Products -->
    <div class="flex-col hidden md:flex gap-4 pt-16 app-container">
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
  </section>
</template>
<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import clsx from "clsx";
import { ROUTES } from "~/constants/routes";
import { useSettingsStore } from "~/store/settings-store";

const route = useRoute();
const productImagesListRef = ref(null);
const count = ref(0);
const settingsStore = useSettingsStore();
const { t, locale } = useI18n();
const isMaxMediumScreen = useMediaQuery("(max-width: 768px)");
const swiperDirection = computed(() =>
  isMaxMediumScreen.value ? "horizontal" : "vertical"
);
useSwiper(productImagesListRef, {
  loop: false,
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 24,
  initialSlide: 0,
});
const productImages = ref([
  "https://picsum.photos/seed/food1/200/300",
  "https://picsum.photos/seed/food2/200/300",
  "https://picsum.photos/seed/food3/200/300",
  "https://picsum.photos/seed/food4/200/300",
  "https://picsum.photos/seed/food5/200/300",
  "https://picsum.photos/seed/food6/200/300",
]);
const activePreviewImage = ref(productImages.value[0]);

onBeforeMount(() => {
  if (!isMaxMediumScreen.value) {
    settingsStore.setColoredAppHeader(true);
  } else {
    settingsStore.setColoredAppHeader(false);
  }
});
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

const items = ref([
  {
    label: t("layouts.header.nav.home"),
    to: ROUTES.HOME,
  },
  {
    label: t("layouts.header.nav.menu"),
    to: ROUTES.PRODUCTS,
  },
  {
    label: route.params.productId,
    to: route.params.productId,
  },
]);

const handleSelectPreviewImage = (imgSrc: string) => {
  // Update the selected image
  activePreviewImage.value = imgSrc;
};
</script>
<style lang="css" scoped>
swiper-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
}
.preview-img_slide-active {
  @apply border-2  border-[var(--secondary-color-500)];
  border-radius: 8px;
  padding: 2px;
}
</style>
