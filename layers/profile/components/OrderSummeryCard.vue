<template>
  <div class="flex items-center justify-between w-full gap-5 mt-10">
    <!-- Tracking Info -->
    <div
      class="flex items-center justify-between rounded-xl w-full md:w-[75%] gap-5 py-4 px-4"
      :class="
        clsx(
          { [trackerBgColor]: isShownStatus && isOpen },
          { [trackerBgColor]: !isShownStatus && isOpen },
          { '!bg-gray-500': !isOpen }
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
      <span class="flex items-center justify-center gap-4">
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
    </div>
    <!-- Order Status -->
    <div
      v-if="isShownStatus"
      class="w-full md:w-[25%] bg-app-background-500 gap-5 flex flex-col"
    >
      <p
        class="relative flex items-center justify-end p-2 ps-6 bg-black text-white rounded-lg text-xs font-semibold min-h-[50%] w-full after:content-[''] after:absolute after:-right-1.5 after:top-1/2 after:bg-black after:size-5 after:rotate-45 after:-translate-y-1/2 after:rounded-sm"
      >
        {{
          t(
            "pages.profile.ordersContent.currentOrdersContent.orderTracker.OrderInProcessStatus"
          )
        }}
        02 : 20 PM
      </p>
      <p
        class="relative flex items-center justify-end p-2 ps-6 bg-green-default/60 text-white rounded-lg text-xs font-semibold min-h-[50%] w-full after:content-[''] after:absolute after:-right-1.5 after:top-1/2 after:bg-green-default after:opacity-70 isolate after:size-5 after:rotate-45 after:-translate-y-1/2 after:rounded-sm"
      >
        {{
          t(
            "pages.profile.ordersContent.currentOrdersContent.orderTracker.OrderCompletedStatus"
          )
        }}
        00 : 00 -
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import clsx from "clsx";

const { t } = useI18n();
defineProps<{
  orderNo: string;
  orderDate: string;
  isOpen: boolean;
  trackerBgColor: string;
  isShownStatus: boolean;
}>();

defineEmits<(event: "toggle") => void>();
</script>
