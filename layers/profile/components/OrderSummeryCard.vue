<template>
  <div
    class="flex items-center justify-between flex-col-reverse md:flex-row w-full md:gap-5 mt-5 md:mt-10"
  >
    <!-- Tracking Info -->
    <div
      class="flex items-center justify-between rounded-xl w-full md:w-[75%] max-md:rounded-b-lg gap-5 py-4 px-4"
      :class="
        clsx(
          { [trackerBgColor]: isShownStatus && isOpen },
          { [trackerBgColor]: !isShownStatus && isOpen },
          { '!bg-gray-500': !isOpen && !isSmallScreen },
          { 'max-md:rounded-none': isShownStatus },
          { 'max-md:rounded-t-lg': !isShownStatus },
          { [trackerBgColor]: isSmallScreen }
        )
      "
    >
      <img src="public/icons/backpack.svg" alt="backpack.svg" />
      <span class="flex flex-col gap-1 flex-1">
        <!-- Order NO -->
        <span class="text-white flex items-center justify-start gap-2">
          <p>
            {{
              t(
                "pages.profile.ordersContent.currentOrdersContent.orderTracker.OrderNo"
              )
            }}
          </p>
          <p>151561546</p>
        </span>
        <!-- Order Date -->
        <span class="text-white flex items-center justify-start gap-2">
          <p>
            {{
              t(
                "pages.profile.ordersContent.currentOrdersContent.orderTracker.OrderDate"
              )
            }}
          </p>
          <p>2023-01-12</p>
        </span>
      </span>
      <!-- call center -->
      <span class="hidden md:flex items-center justify-center gap-4">
        <NuxtLinkLocale
          to="#"
          class="flex items-center justify-center gap-1.5 text-white underline"
        >
          <p>
            {{
              t(
                "pages.profile.ordersContent.currentOrdersContent.callCenterBtn"
              )
            }}
          </p>
          <img src="public/icons/call-center.svg" alt="call-center.svg" />
        </NuxtLinkLocale>
        <button
          type="button"
          class="p-2 cursor-pointer text-white"
          @click="$emit('toggle')"
        >
          <UIcon v-if="isOpen" name="mi:chevron-up" />
          <UIcon v-if="!isOpen" name="mi:chevron-down" />
        </button>
      </span>
      <button
        type="button"
        class="p-2 md:hidden flex items-center justify-center cursor-pointer text-white size-11"
        @click="$emit('on-navigate-order-details')"
      >
        <UIcon name="mdi:chevron-left" size="42" />
      </button>
    </div>
    <!-- Order Status -->
    <div
      v-if="isShownStatus"
      class="w-full md:w-[25%] bg-app-background-500 md:gap-5 flex md:flex-col"
    >
      <p
        class="relative flex items-center justify-center tablet:justify-end p-2 ps-6 rounded-lg text-xs font-semibold min-h-[50%] w-full max-md:rounded-none max-md:rounded-ss-lg"
        :style="{
          ...orderStatusStyles.firstCard,
          clipPath: 'polygon(0 0, 94% 1%, 100% 50%, 94% 100%, 0 100%, 0% 50%)',
        }"
      >
        {{
          t(
            "pages.profile.ordersContent.currentOrdersContent.orderTracker.OrderInProcessStatus"
          )
        }}
      </p>
      <p
        class="relative flex items-center justify-center tablet:justify-end p-2 ps-6 text-xs font-semibold min-h-[50%] w-full max-md:rounded-none max-md:rounded-se-lg isolate md:rounded-lg"
        :style="{
          ...orderStatusStyles.secondCard,
          clipPath: 'polygon(0 0, 94% 1%, 100% 50%, 94% 100%, 0 100%, 0% 50%)',
        }"
      >
        {{
          t(
            "pages.profile.ordersContent.currentOrdersContent.orderTracker.OrderCompletedStatus"
          )
        }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import clsx from "clsx";

const isSmallScreen = useMediaQuery("(max-width:768px)");
const { t } = useI18n();
const props = defineProps<{
  orderNo: string;
  orderDate: string;
  isOpen: boolean;
  trackerBgColor: string;
  isShownStatus: boolean;
  orderStatus: "in-process" | "in-the-way";
}>();

const orderStatusStyles = computed(() => {
  switch (props.orderStatus) {
    case "in-process":
      return {
        firstCard: {
          backgroundColor: "#161616",
          color: "#ffffff",
        },
        secondCard: {
          backgroundColor: "var(--green-color-default)",
          color: "#ffffff",
          opacity: "0.25",
        },
      };
    case "in-the-way":
      return {
        firstCard: {
          backgroundColor: "#b3b2b2",
          color: "#ffffff",
        },
        secondCard: {
          backgroundColor: "var(--green-color-default)",
          color: "#ffffff",
        },
      };
    default:
      return {
        firstCard: {
          backgroundColor: "#161616",
          color: "#ffffff",
        },
        secondCard: {
          backgroundColor: "var(--green-color-default)",
          color: "#ffffff",
          opacity: "0.25",
        },
      };
  }
});

defineEmits<{
  (e: "toggle"): void;
  (e: "on-navigate-order-details"): void;
}>();
</script>
