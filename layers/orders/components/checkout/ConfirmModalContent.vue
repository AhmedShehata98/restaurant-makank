<template>
  <div class="flex flex-col items-center justify-center p-3">
    <figure
      class="flex items-center justify-center p-10 size-40 bg-app-background-500 rounded-full"
    >
      <NuxtImg
        src="/images/party.svg"
        alt="party.svg"
        width="128"
        height="128"
        class="object-cover max-w-full"
      />
    </figure>
    <span class="flex flex-col gap-4 mb-11">
      <h4 class="text-2xl text-text-color-default font-semibold text-center">
        {{ t("pages.checkout.model.title") }}
      </h4>
      <p class="text-base text-text-color-default/70 font-medium text-center">
        {{ t("pages.checkout.model.description") }}
      </p>
    </span>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center justify-between w-full mb-2"
    >
      <button
        type="submit"
        class="rounded-xl bg-app-primary-500 px-5 py-2 text-white hover:opacity-80 cursor-pointer max-md:order-2"
        @click="$router.push(ROUTES.PRODUCTS)"
      >
        {{ t("pages.checkout.model.submitBtn") }}
      </button>
      <button
        type="button"
        class="rounded-xl bg-app-background-600 px-5 py-2 hover:opacity-80 text-text-color-default cursor-pointer max-md:order-1"
        @click="$router.push(ROUTES.ORDERS)"
      >
        {{ t("pages.checkout.model.cancelBtn") }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { ROUTES } from "~/constants/routes";

const { t } = useI18n();
</script>
