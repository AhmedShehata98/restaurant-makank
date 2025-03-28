<template>
  <div class="w-full flex flex-col">
    <!-- Order Tracker -->
    <OrderSummeryCard
      order-no="#1102400"
      order-date="02 فبراير, 2025"
      :is-open="isOpen"
      :is-shown-status="false"
      tracker-bg-color="bg-app-secondary-500"
      @toggle="() => console.log('toggle: ', (isOpen = !isOpen))"
    />
    <div class="w-full md:w-[75%] flex flex-col">
      <!-- Reviews -->
      <div
        class="flex items-center justify-self-start gap-3 mt-5 w-full max-w-full"
      >
        <button
          type="button"
          class="btn btn-primary shrink-0 text-base font-bold"
        >
          {{
            t("pages.profile.ordersContent.previousOrdersContent.reOrderAllBtn")
          }}
        </button>
        <div
          class="bg-app-background-600 flex items-center gap-3 rounded-xl max-w-full"
        >
          <button
            class="size-9 bg-green-default text-white rounded-xl cursor-pointer"
            @click="isOpenRatingModal = true"
          >
            <UIcon name="fe:edit" />
          </button>
          <span class="flex items-center justify-center gap-2 max-w-full">
            <span class="flex items-center">
              <p class="pe-2">3.2</p>
              <StarRating :rating="2" />
            </span>
            <p
              class="text-sm font-semibold text-text-color-default max-w-full truncate overflow-hidden"
            >
              الأطباق شهية جدا بارك الله فيكم وان شاء الله تكولون بنفس الجودة
              وراح اطل..
            </p>
          </span>
          <button
            type="button"
            class="text-app-secondary-500 text-sm font-semibold px-3 py-2"
          >
            {{ t("pages.profile.ordersContent.previousOrdersContent.more") }}
          </button>
        </div>
      </div>
      <!-- Order summery -->
      <ul class="w-full grid grid-cols-2 gap-5 mt-3">
        <!-- Order Card -->
        <li class="flex flex-col">
          <h4 class="text-app-primary-500 text-base font-bold mb-3">
            {{
              t(
                "pages.profile.ordersContent.currentOrdersContent.orderDetails.orderData.title"
              )
            }}
          </h4>
          <span class="flex items-center justify-start gap-1.5 mb-1">
            <p class="text-base font-medium text-text-color-default">
              {{
                t(
                  "pages.profile.ordersContent.currentOrdersContent.orderDetails.orderData.orderDate"
                )
              }}:
            </p>
            <p class="text-base font-medium text-text-color-default">
              02 فبراير, 2025
            </p>
          </span>
          <span class="flex items-center justify-start gap-1.5 mb-1">
            <p class="text-base font-medium text-text-color-default">
              {{
                t(
                  "pages.profile.ordersContent.currentOrdersContent.orderDetails.orderData.ShippingToHome"
                )
              }}:
            </p>
          </span>
          <span class="flex items-center justify-start gap-1.5 mb-1">
            <p class="text-base font-medium text-text-color-default">
              {{
                t(
                  "pages.profile.ordersContent.currentOrdersContent.orderDetails.orderData.orderNo"
                )
              }}:
            </p>
            <p class="text-base font-medium text-text-color-default">
              156415184#
            </p>
          </span>
        </li>

        <!-- User data -->
        <li class="flex flex-col">
          <h4 class="text-app-primary-500 text-base font-bold mb-3">
            {{
              t(
                "pages.profile.ordersContent.currentOrdersContent.orderDetails.meData.title"
              )
            }}
          </h4>
          <span class="flex items-center justify-start gap-1.5 mb-1">
            <p class="text-base font-medium text-text-color-default">
              احمد شحاتة
            </p>
          </span>
          <span class="flex items-center justify-start gap-1.5 mb-1">
            <p class="text-base font-medium text-text-color-default">
              +20 1096019665
            </p>
          </span>
          <span class="flex items-center justify-start gap-1.5 mb-1">
            <p class="text-base font-medium text-text-color-default">
              الحضرة الجديدة ,الاسكندرية, مصر
            </p>
          </span>
        </li>

        <!-- Payments data -->
        <li class="flex flex-col col-span-2 w-full">
          <h4 class="text-app-primary-500 text-base font-bold mb-3">
            {{
              t(
                "pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.title"
              )
            }}
          </h4>
          <div
            class="flex items-center justify-between rounded-lg gap-1.5 mb-1 bg-app-background-600 py-1 px-2"
          >
            <p class="text-base font-medium text-text-color-default">
              **************** 5454 4545
            </p>
            <span class="w-full md:w-1/2 flex items-center justify-between">
              <p class="text-base font-medium text-text-color-default">
                {{
                  t(
                    "pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.total"
                  )
                }}
              </p>
              <p class="text-base font-medium text-app-primary-500">
                {{ formattedTotalPrice }}
              </p>
            </span>
          </div>
        </li>
        <!-- Order Pricing Summery -->
        <ul
          class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 col-span-2"
        >
          <li>
            <CheckoutOrderInfoItem
              class="w-full"
              :label="
                t(
                  'pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.delivery'
                )
              "
              size="normal"
              :price="600"
            />
          </li>
          <li>
            <CheckoutOrderInfoItem
              class="w-full"
              :label="
                t(
                  'pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.ordersTotal'
                )
              "
              size="normal"
              :price="2599"
            />
          </li>
          <li>
            <CheckoutOrderInfoItem
              class="w-full"
              :label="
                t(
                  'pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.discount'
                )
              "
              size="normal"
              :price="200"
            />
          </li>
          <li>
            <CheckoutOrderInfoItem
              class="w-full"
              :label="
                t(
                  'pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.tax'
                )
              "
              size="normal"
              :price="75"
            />
          </li>
        </ul>
      </ul>
      <!-- previous Order Items -->
      <ul class="mt-6 mb-10 grid grid-flow-row-dense gap-y-7 w-full">
        <OrderItem v-for="item of cartItems" :item>
          <template #actionButton>
            <button
              type="button"
              class="bg-black text-white rounded-xl px-3 py-2 flex items-center justify-center gap-2"
            >
              <p>
                {{
                  t(
                    "pages.profile.ordersContent.previousOrdersContent.reOrderBtn"
                  )
                }}
              </p>
              <UIcon name="ion:refresh" />
            </button>
          </template>
        </OrderItem>
      </ul>
    </div>
    <UModal
      :open="isOpenRatingModal"
      :ui="{
        overlay: 'bg-app-background-500/60',
        content: 'rounded-3xl',
      }"
    >
      <template #content>
        <OrderRatingModal
          @close="() => (isOpenRatingModal = !isOpenRatingModal)"
        />
      </template>
    </UModal>
  </div>
</template>
<script setup lang="ts">
const formattedTotalPrice = useFormatPrice(2799);
const { t } = useI18n();
const isOpen = ref(false);
const isOpenRatingModal = ref(false);
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
