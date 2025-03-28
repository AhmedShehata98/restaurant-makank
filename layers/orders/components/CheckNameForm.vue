<template>
  <form
    action=""
    class="w-full py-4 md:px-16 md:py-11 flex-col flex items-start justify-start min-h-[231px] md:bg-primary-500 relative mt-3 rounded-lg"
  >
    <span class="flex flex-col">
      <h3
        class="font-bold text-2xl capitalize text-text-color-default md:text-white"
      >
        {{ t("pages.orders.singinForm.clientNameTitle") }}
      </h3>
    </span>

    <NuxtImg
      src="../../images/cart-image.webp"
      alt="cart-image.webp"
      class="w-[231px] absolute left-1/4 bottom-0 max-md:hidden"
    />

    <!-- OTP form -->
    <form
      action=""
      class="flex w-full items-end justify-between flex-col md:flex-row gap-5 isolate mt-auto"
    >
      <span class="w-full flex flex-col items-start justify-start gap-2">
        <span
          class="flex w-full gap-2 flex-col items-start justify-start rounded-lg overflow-hidden"
        >
          <p
            class="font-medium text-start text-text-color-default md:text-white ps-2"
          >
            {{ t("pages.orders.singinForm.clientName") }}
          </p>
          <UInput
            v-model="nameValue"
            :placeholder="t('pages.orders.singinForm.clientName')"
            class="w-full text-sm font-medium"
            :ui="{
              base: 'py-3 rounded-xl border-transparent outline-none px-5',
            }"
            type="text"
          />
        </span>
      </span>
      <button
        type="button"
        class="btn btn-primary md:btn-black shrink-0 py-2.5 md:min-w-56 min-w-full"
      >
        {{ t("pages.orders.singinForm.confirmNameBtn") }}
      </button>
    </form>
  </form>
</template>
<script setup lang="ts">
const { t } = useI18n();
const nameValue = ref("");
</script>
