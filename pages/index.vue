<template>
  <div class="app-container pt-5 lg:hidden">
    <div
      class="flex items-center justify-start border border-app-third-500 rounded-xl px-2 py-1"
    >
      <label
        for="search-query"
        class="text-app-third-500 flex items-center justify-center"
      >
        <UIcon name="tabler:search" class="w-6 h-6" />
      </label>
      <input
        id="search-query"
        type="search"
        name="search-query"
        class="placeholder:text-input-hint-default text-app-text-default w-full px-3 py-1.5 focus:outline-none bg-inherit accent-app-primary-500"
        :placeholder="$t(`pages.home.sections.hero.searchPlaceholder`)"
      />
    </div>
  </div>
  <HomeHeroSection :is-open-restaurant />
  <HomeOffersSectionSquareTheme
    v-if="settingsState.layout.offerTheme === 'squared'"
    :offers-list="offersList"
  />
  <HomeOffersSectionRoundedTheme
    v-if="settingsState.layout.offerTheme === 'rounded'"
    :offers-list="offersList"
  />
  <HomeMenusSection :menu-list />
  <HomeOrderSummery :dishes-count="7" :total-price="253" />
  <HomeDeliveryServicesSection />
  <HomeFeaturedDishes :dishes-list="dishesList" />
  <HomeDownloadAppSection />
  <HomeOffersWithDiscounts :collection />
  <HomePosterSection poster-type="restaurant" />
</template>
<script setup lang="ts">
import { useSettingsStore } from "~/store/settings-store";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core";

const GLOBAL_CONFIG = gql`
  query GlobalConfig {
    global_config {
      id
      restaurant_address
      restaurant_phone
      facebook_link
      linkedin_link
      twitter_link
      instagram_link
      snapchat_link
      telegram_link
      tiktok_link
      whatsapp_link
      terms
      description
      restaurant_logo {
        id
        type
      }
    }
  }
`;

const gqlResponse = useQuery(GLOBAL_CONFIG);

console.log("gqlResponse", gqlResponse);

const { t } = useI18n();
useHead({
  titleTemplate: (prevTitle) => `${prevTitle} | ${t("pages.home.seo.title")}`,
});
const settingsState = useSettingsStore();
const isOpenRestaurant = ref(true);
const offersList = computed(() => [
  {
    headingTitle: "أطلب الآن والتوصيل مجاني لأول طلب",
    description: "",
    cta: "أطلب الآن",
    img: "/images/pin-img.svg",
  },
  {
    headingTitle: "أكتشف العروض الجديدة",
    description:
      "عروض العائلة والمناسبات والخصومات الرهيبة بانتظارك في مطعم مكانك",
    cta: "العروض",
    img: "/images/gift-img.svg",
  },
  {
    headingTitle: "خصم يصل إلى 50% وتوصيل مجاني لوجبات العائلة",
    description: "بانتظار اتصالك الآن",
    cta: "",
    img: "/images/fire-img.svg",
  },
]);
const menuList = computed(() => [
  {
    id: 1,
    title: "المشويات",
    thumbnail:
      "https://copon5sm.com/wp-content/uploads/2023/06/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%B7%D8%A7%D8%B9%D9%85-%D9%85%D8%B4%D9%88%D9%8A%D8%A7%D8%AA-%D9%81%D9%8A-%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9-1-620x300.jpg",
  },
  {
    id: 2,
    title: "أكل آسيوي",
    thumbnail:
      "https://shamlola.s3.amazonaws.com/Shamlola_Images/11/src/9ca3f51813a3d410f303431e252d844647d309c4.jpg",
  },
  {
    id: 3,
    title: "وجبات سريعة",
    thumbnail:
      "https://cdn.img.sarabic.ae/img/103252/76/1032527671_22:0:1899:1056_1920x0_80_0_0_5c968eabd60a72c37d6b31245493ba66.jpg",
  },
  {
    id: 4,
    title: "وجبات سوري",
    thumbnail: "https://kalamalqahira.com/app/uploads//2019/09/edfgea.png",
  },
]);
const dishesList = computed(() => [
  {
    id: 1,
    title: "بيض مسلوق و عيش توست",
    thumbnail: "/images/services/dish-1.jpg",
    price: 20,
    discount: 0,
  },
  {
    id: 2,
    title: "كيلو لحم ستيك ميديوم",
    thumbnail: "/images/services/dish-2.jpeg",
    price: 80,
    discount: 0,
  },
  {
    id: 3,
    title: "سلطة فواكه بقطع الدجاج",
    thumbnail: "/images/services/dish-3.jpeg",
    price: 120,
    discount: 110,
  },
  {
    id: 4,
    title: "ميكس جريل",
    thumbnail: "/images/services/dish-4.jpeg",
    price: 20,
    discount: 0,
  },
  {
    id: 5,
    title: "فراخ تندوري",
    thumbnail: "/images/services/dish-5.jpeg",
    price: 80,
    discount: 0,
  },
  {
    id: 6,
    title: "بيتزا كرانشي",
    thumbnail: "/images/services/dish-6.jpg",
    price: 120,
    discount: 110,
  },
]);
const collection = computed(() => [
  "images/offers-and-discounts/01.webp",
  "images/offers-and-discounts/03.webp",
  "images/offers-and-discounts/02.webp",
]);
const tabsItems = computed<
  {
    label: string;
    icon?: string;
    content?: string;
  }[]
>(() => [
  {
    label: t("pages.menu.categories.all"),
  },
  {
    label: t("pages.menu.categories.grills"),
  },
  {
    label: t("pages.menu.categories.burger"),
  },
  {
    label: t("pages.menu.categories.appetizers"),
  },
  {
    label: t("pages.menu.categories.syrian"),
  },
  {
    label: t("pages.menu.categories.asian"),
  },
  {
    label: t("pages.menu.categories.drinks"),
  },
]);

onMounted(() => {
  settingsState.setColoredAppHeader(false);
});
</script>
