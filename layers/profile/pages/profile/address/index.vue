<template>
  <NuxtLayout name="profile">
    <div class="w-full md:w-1/2 lg:w-2/5 mt-10">
      <span class="flex items-center justify-between gap-5">
        <h4 class="text-base font-semibold text-text-color-default">
          {{ t("pages.profile.addressContent.addressConfirmBtn") }}
        </h4>
        <NuxtLinkLocale
          :href="ROUTES.PROFILE__ADDRESS__ADD"
          class="text-sm font-semibold text-app-secondary-500 flex items-center justify-center gap-1.5"
        >
          <p>
            {{ t("pages.profile.addressContent.addBtn") }}
          </p>
          <UIcon name="mdi:plus" />
        </NuxtLinkLocale>
      </span>
      <ul class="w-full grid grid-flow-row my-4">
        <li class="p-3 flex items-center justify-between">
          <label for="address-1" class="flex flex-col gap-2.5 cursor-pointer">
            <span class="flex items-center justify-start gap-2.5">
              <input
                id="address-1"
                type="radio"
                name="address-1"
                class="accent-black size-5"
              />
              <h3 class="font-semibold text-base text-text-color-default">
                المنزل
              </h3>
            </span>
            <p class="font-semibold text-xs text-app-subtitle-default">
              السعودية - الرياض - شارع الحسن بجوار مسجد السلام
            </p>
          </label>
          <button type="button" class="text-green-default cursor-pointer">
            <UIcon name="iconamoon:edit-light" />
          </button>
        </li>
        <li class="p-3 flex items-center justify-between">
          <label for="address-1" class="flex flex-col gap-2.5 cursor-pointer">
            <span class="flex items-center justify-start gap-2.5">
              <input
                id="address-1"
                type="radio"
                name="address-1"
                class="accent-black size-5"
              />
              <h3 class="font-semibold text-base text-text-color-default">
                الدوام
              </h3>
            </span>
            <p class="font-semibold text-xs text-app-subtitle-default">
              السعودية - الرياض - شارع الحسن بجوار مسجد السلام
            </p>
          </label>
          <button type="button" class="text-green-default cursor-pointer">
            <UIcon name="iconamoon:edit-light" />
          </button>
        </li>
        <li class="p-3 flex items-center justify-between">
          <label for="address-1" class="flex flex-col gap-2.5 cursor-pointer">
            <span class="flex items-center justify-start gap-2.5">
              <input
                id="address-1"
                type="radio"
                name="address-1"
                class="accent-black size-5"
              />
              <h3 class="font-semibold text-base text-text-color-default">
                الدوام
              </h3>
            </span>
            <p class="font-semibold text-xs text-app-subtitle-default">
              السعودية - الرياض - شارع الحسن بجوار مسجد السلام
            </p>
          </label>
          <button type="button" class="text-green-default cursor-pointer">
            <UIcon name="iconamoon:edit-light" />
          </button>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";

const { t } = useI18n();
</script>
