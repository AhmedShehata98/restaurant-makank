<template>
  <NuxtLayout name="order-layout">
    <section class="app-container flex flex-col items-center justify-start">
      <CustomBreadcrumb v-if="items" :items="items" class="!mb-5" />
      <!-- sign0in box -->
      <!-- <CheckNameForm /> -->
      <!-- <OTPConfirmationForm /> -->
      <SigninForm />
      <OrderSummeryConfirmation class="md:hidden" />

      <!-- Order items -->
      <div class="w-full flex flex-col gap-3 justify-between items-center mt-8">
        <span class="flex items-center justify-between gap-3 w-full">
          <p class="font-bold text-xl">
            {{ t("pages.orders.itemsCount") }}
            ({{ cartItemsLength }})
          </p>
          <span class="md:flex items-center justify-center gap-2 hidden">
            <p class="text-base font-semibold text-text-color-default">
              {{ t("pages.orders.total") }}
            </p>
            <!-- TODO: split currency and price  -->
            <p class="text-xl text-app-primary-500 font-bold">
              {{ formattedTotalPrice }}
            </p>
          </span>
        </span>
        <ul class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
          <OrderItem v-for="item of cartItems" :key="item.id" :item />
        </ul>
      </div>
    </section>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";
import { useSettingsStore } from "~/store/settings-store";

const { t } = useI18n();
useHead({
  titleTemplate: (prevTitle) => `${prevTitle} | ${t("pages.orders.seo.title")}`,
});
const formattedTotalPrice = useFormatPrice(1789);
const cartItems = [
  {
    id: 101,
    thumbnail: "https://picsum.photos/200/300",
    name: "طبق المشاوي المشكلة مع الأرز والسلطات",
    extraQuantity: 2,
    extraItemPrice: 10,
    price: 150,
    category: "المشويات",
  },
  {
    id: 102,
    thumbnail: "https://picsum.photos/200/301",
    name: "بيتزا مارغريتا الإيطالية بالجبنة الطازجة",
    extraQuantity: 3,
    extraItemPrice: 5,
    price: 90,
    category: "البيتزا",
  },
  {
    id: 103,
    thumbnail: "https://picsum.photos/200/302",
    name: "شوربة العدس الساخنة مع الخبز المحمص",
    extraQuantity: 1,
    extraItemPrice: 7,
    price: 40,
    category: "الشوربات",
  },
];
const cartItemsLength = cartItems.length;
const settingsStore = useSettingsStore();
const isMaxMediumScreen = useMediaQuery("(max-width: 768px)");
const items = ref([
  {
    label: t("layouts.header.nav.home"),
    to: ROUTES.HOME,
  },
  {
    label: t("layouts.header.nav.orders"),
    to: ROUTES.PRODUCTS,
  },
]);

onBeforeMount(() => {
  if (!isMaxMediumScreen.value) {
    settingsStore.setColoredAppHeader(true);
  } else {
    settingsStore.setColoredAppHeader(false);
  }
});
</script>
