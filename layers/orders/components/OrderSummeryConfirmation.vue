<template>
  <div class="flex flex-col w-full pt-5">
    <!-- Coupon -->
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
    <div
      class="w-full bg-app-background-500 flex flex-col p-[10px] mt-6 gap-3 [&>:last-child]:py-2 [&>:last-child]:border-t-2 [&>:last-child]:border-app-background-700"
    >
      <CheckoutOrderInfoItem
        :label="t('pages.checkout.orderInfo.orderTotalPrice')"
        size="normal"
        :price="350"
      />
      <CheckoutOrderInfoItem
        :label="t('pages.checkout.orderInfo.tax')"
        size="normal"
        :price="799"
      />
      <CheckoutOrderInfoItem
        :label="t('pages.checkout.orderInfo.delivery')"
        size="normal"
        :price="50"
      />
      <CheckoutOrderInfoItem
        :label="t('pages.checkout.orderInfo.discount')"
        size="normal"
        :price="25"
      />
      <CheckoutOrderInfoItem
        class="[&>:last-child]:text-app-primary-500"
        :label="t('pages.checkout.orderInfo.total')"
        size="large"
        :price="1789"
      />
    </div>
    <button
      type="button"
      class="flex items-center justify-center rounded-xl py-2 px-5 bg-app-primary-500 mt-4"
    >
      <p class="text-sm font-bold !text-white">
        {{ $t("pages.orders.submissionBtn") }}
      </p>
    </button>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const state = reactive({
  coupon: "",
});
</script>
