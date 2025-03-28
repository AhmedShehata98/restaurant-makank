<template>
  <section class="app-container flex flex-col justify-start">
    <CustomBreadcrumb :items="items" />
    <!-- Banner -->
    <div
      class="hidden md:grid grid-cols-2 items-center justify-center w-full rounded-xl overflow-hidden mt-10 relative"
    >
      <span class="bg-black text-white text-start py-5 ps-5">
        <p>{{ $t("pages.checkout.offersBanner.partOne") }}</p>
      </span>
      <span
        class="text-app-primary-500 bg-app-primary-100 text-end py-5 pe-5 flex items-center justify-end gap-2"
      >
        <p>{{ $t("pages.checkout.offersBanner.partTwo") }}</p>
        <UIcon name="iconamoon:smiling-face" />
      </span>
      <span
        class="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-full border-[70px] border-t-black border-r-black border-transparent"
      />
    </div>

    <!-- Free shipping banner -->
    <div
      class="hidden md:flex items-center justify-between gap-3 py-3 px-7 mt-10 bg-green-default text-white rounded-xl"
    >
      <p class="text-sm font-semibold">
        {{ t("pages.checkout.freeShippingBanner.description") }}
      </p>
      <span class="flex items-center justify-end gap-2">
        <p class="text-sm font-semibold">
          {{ t("pages.checkout.freeShippingBanner.exteaDescripe") }}
        </p>
        <UIcon name="iconamoon:smiling-face"
      /></span>
    </div>
    <div
      class="flex items-start justify-between gap-10 flex-col tablet:flex-row mt-10"
    >
      <!-- Order items -->
      <div
        class="w-full tablet:w-[calc(60%-2.75rem)] hidden md:flex flex-col gap-3 justify-between items-center"
      >
        <span class="flex items-center justify-between gap-3 w-full">
          <p class="font-bold text-xl">
            {{ t("pages.orders.itemsCount") }}
            ({{ cartItemsLength }})
          </p>
          <span class="flex items-center justify-center gap-2">
            <p class="text-base font-semibold text-text-color-default">
              {{ t("pages.orders.total") }}
            </p>
            <!-- TODO: split currency and price  -->
            <p class="text-xl text-app-primary-500 font-bold">
              {{ formattedPrice }}
            </p>
          </span>
        </span>
        <ul class="w-full grid grid-cols-1 gap-6 mt-3">
          <OrderItem v-for="item of cartItems" :key="item.id" :item />
        </ul>
      </div>
      <!-- Order payment Form -->
      <div
        class="w-full tablet:w-[40%] flex flex-col items-center justify-start gap-1 rounded-xl md:px-4 md:shadow-xl"
      >
        <h4 class="text-center text-lg font-medium py-6">
          {{ t("pages.checkout.form.title") }}
        </h4>
        <UForm
          :schema="schema"
          :state="state"
          class="w-full"
          @submit="onSubmit"
        >
          <PhoneInput />
          <UFormField name="name" class="w-full mt-5">
            <p class="text-sm font-semibold mb-2">
              {{ t("pages.checkout.form.name") }}
            </p>
            <UInput
              v-model="state.name"
              class="w-full"
              :ui="{ base: 'py-2 placeholder:text-slate-400' }"
              :placeholder="t('pages.checkout.form.name')"
              color="primary"
            />
          </UFormField>
          <UFormField name="address" class="w-full mt-5">
            <div class="flex items-center justify-between gap-2 mb-2">
              <p class="text-sm font-semibold">
                {{ t("pages.checkout.form.address") }}
              </p>
              <button
                type="button"
                class="text-sm font-semibold text-app-secondary-500"
              >
                {{ t("pages.checkout.form.addAddressBtn") }}
              </button>
            </div>
            <USelectMenu
              v-model="state.address"
              :dir="locale === 'ar' ? 'rtl' : 'ltr'"
              :items="[
                t('pages.checkout.form.selectAddressPlaceholder'),
                'Backlog',
                'Todo',
                'In Progress',
                'Done',
              ]"
              class="w-full"
              :ui="{
                base: 'py-2 placeholder:text-slate-400',
              }"
            />
            <UCheckbox
              class="mt-2"
              :label="t('pages.checkout.form.pickUpFromLocation')"
              :ui="{
                label: 'text-app-subtitle-default',
              }"
            />
          </UFormField>
          <UFormField name="coupon" class="w-full mt-5 max-md:hidden">
            <div
              class="flex items-center gap-1.5 justify-between rounded-[12px] border border-app-background-700 p-1"
            >
              <UInput
                v-model="state.coupon"
                class="w-full rounded-[10px]"
                :ui="{
                  base: 'py-2 placeholder:text-slate-400 ring-app-background-700',
                }"
                :placeholder="t('pages.checkout.form.couponPlaceholder')"
                color="primary"
              />
              <button
                type="button"
                class="shrink-0 py-2 text-sm font-semibold px-4 btn-secondary rounded-[10px]"
              >
                {{ t("pages.checkout.form.couponApplyBtn") }}
              </button>
            </div>
          </UFormField>
        </UForm>
        <div
          class="w-full md:bg-app-background-600 flex flex-col p-[10px] mt-6 gap-3 [&>:last-child]:py-2 [&>:last-child]:border-t-2 [&>:last-child]:border-app-background-700"
        >
          <CheckoutOrderInfoItem
            :label="t('pages.checkout.orderInfo.orderTotalPrice')"
            size="normal"
            :price="200"
          />
          <CheckoutOrderInfoItem
            :label="t('pages.checkout.orderInfo.tax')"
            size="normal"
            :price="220"
          />
          <CheckoutOrderInfoItem
            :label="t('pages.checkout.orderInfo.delivery')"
            size="normal"
            :price="220"
          />
          <CheckoutOrderInfoItem
            :label="t('pages.checkout.orderInfo.discount')"
            size="normal"
            :price="220"
          />
          <CheckoutOrderInfoItem
            class="max-md:[&>:last-child]:text-app-primary-500"
            :label="t('pages.checkout.orderInfo.total')"
            size="large"
            :price="220"
          />
        </div>
        <!-- payment -->
        <div class="mt-5 flex flex-col w-full gap-1">
          <p class="font-medium text-base">
            {{ t("pages.checkout.form.choosePaymentMethod") }}
          </p>
          <ul
            class="grid grid-cols-4 gap-2.5 w-full items-center justify-between"
          >
            <label
              v-for="item of paymentMethodsList"
              :key="item.value"
              :for="item.value"
              class="flex items-center justify-center"
            >
              <input
                :id="item.value"
                type="radio"
                name="paymentMethod"
                class="peer"
                hidden
              />
              <NuxtImg
                :src="item.img"
                width="44"
                height="44"
                :alt="item.value"
                class="h-full object-cover peer-checked:opacity-100 peer-checked:pointer-events-auto pointer-events-auto peer-checked:drop-shadow-2xl opacity-50"
              />
            </label>
          </ul>
        </div>
        <button
          type="submit"
          class="mt-5 w-full bg-app-primary-500 py-2 px-8 rounded-xl text-white mb-6 cursor-pointer hover:opacity-80"
        >
          {{ t("pages.checkout.form.checkoutBtn") }}
        </button>
      </div>
    </div>
    <!-- Order Confirm Modal -->
    <UModal
      overlay
      :ui="{
        overlay: 'bg-app-background-500/60',
        content: 'rounded-3xl',
      }"
    >
      <template #content>
        <ConfirmModalContent />
      </template>
    </UModal>
    <UModal
      overlay
      :ui="{
        overlay: 'bg-app-background-500/60',
        content: 'rounded-3xl',
      }"
      open
    >
      <template #content>
        <CreateAddressModal />
      </template>
    </UModal>
  </section>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import CreateAddressModal from "~/layers/orders/components/checkout/CreateAddressModal.vue";

const schema = z.object({
  phoneNumber: z.string(),
  name: z.string(),
  address: z.string(),
  coupon: z.string(),
  pickUpFromLocation: z.boolean(),
  paymentMethod: z.enum(["card", "paypal", "google-pay", "apple-pay"]),
});

type Schema = z.output<typeof schema>;
const { t, locale } = useI18n();

const state = reactive<Partial<Schema>>({
  phoneNumber: undefined,
  address: t("pages.checkout.form.selectAddressPlaceholder"),
  name: undefined,
  coupon: undefined,
  pickUpFromLocation: false,
  paymentMethod: "card",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
const formattedPrice = useFormatPrice(1860);
const paymentMethodsList = [
  {
    img: "../public/icons/apple-pay.svg",
    value: "apple-pay",
  },
  {
    img: "../public/icons/google-pay.svg",
    value: "google-pay",
  },
  {
    img: "../public/icons/paypal.svg",
    value: "paypal",
  },
  {
    img: "../public/icons/card.svg",
    value: "card",
  },
];
const items = [
  {
    label: t("layouts.header.nav.home"),
    to: ROUTES.HOME,
  },
  {
    label: t("layouts.header.nav.checkout"),
    to: ROUTES.CHECKOUT,
  },
];
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
</script>
