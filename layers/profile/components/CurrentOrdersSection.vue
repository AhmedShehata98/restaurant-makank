<template>
  <div class="w-full flex flex-col">
    <!-- Order Tracker -->
    <OrderSummeryCard
      order-no="#1102400"
      order-date="02 فبراير, 2025"
      :is-open="isOpen"
      :is-shown-status="true"
      tracker-bg-color="bg-green-default"
      order-status="in-the-way"
      @toggle="() => console.log('toggle: ', (isOpen = !isOpen))"
      @on-navigate-order-details="
        $router.push({
          path: ROUTES.PROFILE__ORDER_DETAILS,
          query: { 'order-section': 'current-orders' },
        })
      "
    />
    <div class="w-full md:w-[calc(75%-1rem)] flex flex-col">
      <!-- Order summery -->
      <OrderDetails
        class="max-md:hidden"
        :user="{
          name: 'ahmed shehata',
          address: 'الاسكندرية ,مصر',
          phoneNumber: '+201096019665',
        }"
        :order="{
          total: 1700,
          tax: 50,
          payment: '************5887',
          orderNo: '4864441',
          orderDate: '10 April 2024',
          discount: 100,
          deliveryMetod: 'توصيل للمنزل',
          deliveryCoast: 75,
        }"
      />
      <!-- Current Order Items -->
      <span class="flex items-center justify-between gap-3 mt-3">
        <p class="text-sm font-medium text-text-color-default">
          {{
            $t(
              "pages.profile.ordersContent.previousOrdersContent.orderDetails.paymentData.total"
            )
          }}
        </p>
        <p class="text-app-primary-500 text-sm font-semibold">
          {{ formattedTotalPrice }}
        </p>
      </span>
      <ul class="mt-6 mb-10 grid grid-flow-row-dense gap-y-7 w-full">
        <OrderItem v-for="item of cartItems" :item />
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";

const { t } = useI18n();
const isOpen = ref(false);
const formattedTotalPrice = useFormatPrice(2799);
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
</script>
