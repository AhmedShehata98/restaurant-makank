<template>
  <NuxtLayout name="profile">
    <template #header>
      <CustomBreadcrumb
        :items="breadcrumb"
        is-last-link-active
        class="app-container"
      />
    </template>
    <span class="flex md:hidden items-center justify-start w-full py-3">
      <button type="button" class="cursor-pointer" @click="$router.back()">
        <UIcon name="mdi:chevron-right" size="24" />
      </button>
      <p class="mx-auto text-sm font-semibold pe-7">
        {{ $t("pages.profile.mobile.address.title") }}
      </p>
    </span>
    <p class="flex w-full text-start text-base font-semibold mt-7">
      {{ $t("pages.profile.mobile.address.description") }}
    </p>
    <div class="w-full md:w-1/2 lg:w-2/5 lg:mt-10">
      <span class="hidden tablet:flex items-center justify-between gap-5">
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
          <button
            type="button"
            class="text-green-default cursor-pointer"
            @click="shownEditAddressModal = true"
          >
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
          <button
            type="button"
            class="text-green-default cursor-pointer"
            @click="shownEditAddressModal = true"
          >
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
          <button
            type="button"
            class="text-green-default cursor-pointer"
            @click="shownEditAddressModal = true"
          >
            <UIcon name="iconamoon:edit-light" />
          </button>
        </li>
      </ul>
    </div>
    <NuxtLinkLocale
      :href="ROUTES.PROFILE__ADDRESS__ADD"
      class="text-sm font-bold bg-black flex items-center justify-center gap-1.5 text-white btn py-3 mt-auto mb-44 md:hidden"
    >
      <p>
        {{ t("pages.profile.addressContent.addBtn") }}
      </p>
      <UIcon name="mdi:plus" />
    </NuxtLinkLocale>
    <!-- Address Form Modal -->
    <UModal
      :open="shownEditAddressModal"
      :fullscreen="isSmallScreen"
      :ui="{
        overlay: 'bg-app-background-500/60',
      }"
    >
      <template #content>
        <div class="w-full flex flex-col px-3 py-4 overflow-y-auto">
          <span class="flex items-center justify-start w-full py-3 mb-10">
            <button
              type="button"
              class="cursor-pointer"
              @click="shownEditAddressModal = false"
            >
              <UIcon name="mdi:chevron-right" size="24" />
            </button>
            <p class="mx-auto text-sm font-semibold pe-7">
              {{ $t("pages.profile.addressContent.editHeadingTitle") }}
            </p>
          </span>
          <AddressForm>
            <template #actionBtn>
              <button
                type="submit"
                class="btn bg-green-default text-white font-semibold py-3 mt-10 mb-4"
              >
                {{ $t("pages.profile.addressContent.form.saveBtn") }}
              </button>
            </template>
          </AddressForm>
        </div>
      </template>
    </UModal>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";

const { t } = useI18n();
const shownEditAddressModal = ref(false);
const isSmallScreen = useMediaQuery("(max-width: 768px)");
const breadcrumb = computed(() => [
  {
    label: t("layouts.header.nav.home"),
    to: ROUTES.HOME,
  },
  {
    label: t("layouts.header.nav.profile"),
    to: ROUTES.PROFILE,
  },
  {
    label: t("layouts.header.nav.address"),
    to: ROUTES.PROFILE__ADDRESS,
  },
]);
</script>
