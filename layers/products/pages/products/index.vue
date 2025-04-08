<template>
  <section class="flex flex-col app-container">
    <!-- breadcrumb -->
    <ul class="hidden md:flex gap-2 w-full pt-10">
      <li
        v-for="item of items"
        :key="item.to"
        class="flex items-center justify-start gap-2 text-app-subtitle-default"
      >
        <UIcon name="mdi-light:chevron-left" />
        <NuxtLinkLocale :to="item.to" class="flex items-center justify-center">
          <UIcon
            v-if="item?.icon"
            :name="item?.icon"
            class="text-app-subtitle-default"
          />
          <small class="text-app-subtitle-default font-semibold text-sm">{{
            item.label
          }}</small>
        </NuxtLinkLocale>
      </li>
    </ul>
    <div
      class="hidden md:grid grid-cols-2 items-center justify-center w-full rounded-xl overflow-hidden mt-10 relative"
    >
      <span class="bg-black text-white text-start py-5 ps-5">
        <p>{{ $t("pages.menu.offersBanner.partOne") }}</p>
      </span>
      <span
        class="text-app-primary-500 bg-app-primary-100 text-end py-5 pe-5 flex items-center justify-end gap-2"
      >
        <p>{{ $t("pages.menu.offersBanner.partTwo") }}</p>
        <UIcon name="iconamoon:smiling-face" />
      </span>
      <span
        class="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-full border-[70px] border-t-black border-r-black border-transparent"
      />
    </div>
    <!-- search and full list of menu -->
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-7 md:mt-10"
    >
      <span class="hidden md:flex flex-col gap-1">
        <h2 class="font-bold text-[44px] text-app-text-default">
          {{ $t("pages.menu.title") }}
        </h2>
        <p class="font-semibold text-[20px] text-app-subtitle-default">
          {{ $t("pages.menu.description") }}
        </p>
      </span>
      <div
        class="flex flex-col md:flex-row items-center justify-between md:justify-end gap-5 md:gap-3"
      >
        <div
          class="flex w-full md:w-fit flex-row items-center justify-between gap-2"
        >
          <HighlightingHeading
            :title="mobileHeadingTitle.title"
            :words="mobileHeadingTitle.words"
            main-text-color-class-name="text-color-default"
            marked-text-color-class-name="text-app-primary-500"
            class="font-semibold text-[20px] md:hidden"
          />
          <button class="btn btn-secondary rounded-full gap-2">
            <p>
              {{ $t("pages.menu.cta") }}
            </p>
            <UIcon name="mdi:chevron-down" class="w-12" />
          </button>
        </div>
        <label
          id="search-query"
          class="max-md:w-full flex py-1.5 px-3 items-center justify-between border border-app-subtitle-default rounded-full gap-2"
        >
          <UIcon name="iconamoon:search" class="text-app-subtitle-default" />
          <input
            id="search-query"
            type="search"
            class="text-black flex-1 placeholder:text-input-hint-default focus:outline-none"
            name="search-query"
            :placeholder="$t('pages.menu.searchPlaceholder')"
          />
        </label>
      </div>
    </div>
    <!-- tabs wrapper -->
    <ClientOnly>
      <swiper-container ref="tabsRef" class="w-full mb-14 mt-6 md:mt-10">
        <swiper-slide
          v-for="(item, idx) of tabsItems"
          :key="idx"
          class="flex items-center justify-center"
        >
          <button
            type="button"
            class="shrink-0 relative h-11 w-full overflow-hidden cursor-pointer"
            :class="
              clsx(
                { 'text-app-subtitle-default': activeTab !== item.id },
                { 'text-app-primary-500': activeTab === item.id }
              )
            "
            @click="activeTab = item.id"
          >
            <p>
              {{ item.label }}
            </p>
            <span v-if="item.icon">
              {{ item.icon }}
            </span>
            <span
              class="absolute bottom-0 left-1/2 translate-x-[150%] duration-500 transition-transform w-full h-1 bg-app-primary-500"
              :class="
                clsx({
                  'bg-app-primary-500 !-translate-x-1/2': activeTab === item.id,
                })
              "
            />
          </button>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <!-- tab content -->
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
      <DishCard v-for="(dish, idx) of menu" :key="idx" :dish />
    </ul>
    <PaginationItems
      class="mt-7 mb-11"
      :page="1"
      :buttons-limit="isSmallScreen ? 3 : 5"
      :total-pages="40"
    />
  </section>
</template>
<script setup lang="ts">
import { ROUTES } from "@/constants/routes";
// import { isActiveRoute } from "@/utils/helper";
import { useSettingsStore } from "@/store/settings-store";
import clsx from "clsx";
import { useMediaQuery } from "@vueuse/core";

const { locale, tm, t } = useI18n();
useHead({
  titleTemplate: (prevTitle) => `${prevTitle} | ${t("pages.menu.seo.title")}`,
});
const tabsRef = ref(null);
useSwiper(tabsRef, {
  loop: false,

  slidesPerView: 3.4,
  centeredSlides: false,
  spaceBetween: 0,
  initialSlide: 0,
  breakpoints: {
    248: {
      slidesPerView: 3.4,
      spaceBetween: 2,
      initialSlide: 0,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 0,
      initialSlide: 0,
    },
    992: {
      slidesPerView: 6.5,
      spaceBetween: 0,
      initialSlide: 0,
    },
  },
});
const activeTab = ref("1");
const menu = [
  {
    id: 1,
    title: "Classic Cheeseburger",
    price: 12.99,
    discount: 10,
    thumbnail: "https://picsum.photos/seed/burger/400/300",
  },
  {
    id: 2,
    title: "Margherita Pizza",
    price: 14.99,
    discount: 15,
    thumbnail: "https://picsum.photos/seed/pizza/400/300",
  },
  {
    id: 3,
    title: "Grilled Salmon",
    price: 18.99,
    discount: 5,
    thumbnail: "https://picsum.photos/seed/salmon/400/300",
  },
  {
    id: 4,
    title: "Caesar Salad",
    price: 9.99,
    discount: 0,
    thumbnail: "https://picsum.photos/seed/salad/400/300",
  },
  {
    id: 5,
    title: "BBQ Ribs",
    price: 22.99,
    discount: 20,
    thumbnail: "https://picsum.photos/seed/ribs/400/300",
  },
  {
    id: 6,
    title: "Spaghetti Carbonara",
    price: 13.99,
    discount: 10,
    thumbnail: "https://picsum.photos/seed/pasta/400/300",
  },
  {
    id: 7,
    title: "Sushi Platter",
    price: 25.99,
    discount: 5,
    thumbnail: "https://picsum.photos/seed/sushi/400/300",
  },
  {
    id: 8,
    title: "Chicken Tacos",
    price: 10.99,
    discount: 15,
    thumbnail: "https://picsum.photos/seed/tacos/400/300",
  },
  {
    id: 9,
    title: "Chocolate Lava Cake",
    price: 8.99,
    discount: 0,
    thumbnail: "https://picsum.photos/seed/dessert/400/300",
  },
];

const router = useRouter();
const settingsStore = useSettingsStore();
const isSmallScreen = useMediaQuery("(max-width: 768px)");

const items = computed<
  {
    label: string;
    icon?: string;
    to: string;
    isActive: boolean;
  }[]
>(() => [
  {
    label: t("layouts.header.nav.home"),
    to: ROUTES.HOME,
    isActive: isActiveRoute({
      href: ROUTES.HOME,
      locale: locale.value,
      routePath: router.currentRoute.value.path,
    }),
  },
  {
    label: t("layouts.header.nav.menu"),
    to: ROUTES.PRODUCTS,
    isActive: isActiveRoute({
      href: ROUTES.PRODUCTS,
      locale: locale.value,
      routePath: router.currentRoute.value.path,
    }),
  },
]);

const tabsItems = computed<
  {
    label: string;
    icon?: string;
    id: string;
    content?: string;
  }[]
>(() => [
  {
    label: t("pages.menu.categories.grills"),
    id: "1",
  },
  {
    label: t("pages.menu.categories.burger"),
    id: "2",
  },
  {
    label: t("pages.menu.categories.appetizers"),
    id: "3",
  },
  {
    label: t("pages.menu.categories.syrian"),
    id: "4",
  },
  {
    label: t("pages.menu.categories.asian"),
    id: "5",
  },
  {
    label: t("pages.menu.categories.drinks"),
    id: "6",
  },
]);

onBeforeMount(() => settingsStore.setColoredAppHeader(true));
onUnmounted(() => settingsStore.setColoredAppHeader(false));
const mobileHeadingTitle = ref({
  words: Array.isArray(tm("pages.menu.mobileTitle.markWords"))
    ? (tm("pages.menu.mobileTitle.markWords") as any[]).map((i) => i.loc.source)
    : [],
  title: t("pages.menu.mobileTitle.text"),
});
</script>
<style scoped lang="css">
.router-link-active > small,
.router-link-exact-active > small {
  color: var(--text-color-default);
}
</style>
