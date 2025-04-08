<template>
  <div
    ref="wrapperRef"
    class="app-container flex flex-col items-center justify-start gap-3"
  >
    <span class="w-full h-48 flex items-center justify-center flex-col">
      <figure
        class="flex items-center justify-center size-28 mb-4 bg-app-background-600/50 rounded-full"
      >
        <!-- <img src="https://picsum.photos/200/300" alt="Profile picture" />
              -->
        <UIcon name="fluent:person-48-regular" class="text-5xl" />
      </figure>
      <p class="text-base font-medium capitalize text-center">john doe</p>
    </span>
    <ul
      class="grid grid-flow-row gap-1 w-full mt-5 divide-y divide-gray-300 pb-10"
    >
      <NuxtLinkLocale
        v-for="link of links"
        :key="link.label"
        :href="link.to"
        class="flex items-center justify-between gap-5 py-3 hover:opacity-80 text-text-color-default"
      >
        <span
          class="flex items-center justify-start gap-3 max-w-[90%] overflow-hidden"
        >
          <UIcon :name="link.icon" />
          <p
            class="max-w-full overflow-hidden truncate text-sm font-medium capitalize ml-2"
          >
            {{ link.label }}
          </p>
        </span>
        <UIcon name="ion:ios-arrow-back" />
      </NuxtLinkLocale>
      <!-- Locales -->
      <div
        class="flex items-center justify-between gap-5 py-3 hover:opacity-80 text-text-color-default"
      >
        <span
          class="flex items-center justify-start gap-3 max-w-[90%] overflow-hidden"
        >
          <UIcon name="lucide:globe" />
          <p
            class="max-w-full overflow-hidden truncate text-sm font-medium capitalize ml-2"
          >
            {{ t("pages.profile.menuLinks.language") }}
          </p>
        </span>
        <UDropdownMenu
          :items="localesItems"
          :content="{ align: 'start' }"
          :ui="{ content: 'w-28' }"
        >
          <UButton
            color="primary"
            variant="link"
            icon="i-lucide-chevron-down"
          />
        </UDropdownMenu>
      </div>
      <!-- Notifications switcher -->
      <div
        class="flex items-center justify-between gap-5 py-3 hover:opacity-80 text-text-color-default"
      >
        <span
          class="flex items-center justify-start gap-3 max-w-[90%] overflow-hidden"
        >
          <UIcon name="solar:bell-bing-linear" />
          <p
            class="max-w-full overflow-hidden truncate text-sm font-medium capitalize ml-2"
          >
            {{ t("pages.profile.menuLinks.notifications") }}
          </p>
        </span>
        <USwitch v-model="enableNotifications" size="lg" />
      </div>
      <!-- Call center -->
      <div
        class="flex items-center justify-between gap-5 py-3 hover:opacity-80 text-text-color-default"
      >
        <span
          class="flex items-center justify-start gap-3 max-w-[90%] overflow-hidden"
        >
          <UIcon name="solar:bell-bing-linear" />
          <p
            class="max-w-full overflow-hidden truncate text-sm font-medium capitalize ml-2"
          >
            {{ t("pages.profile.menuLinks.callCenter") }}
          </p>
        </span>
        <NuxtLinkLocale to="#" class="text-green-default underline">
          {{ t("pages.profile.menuLinks.callCenterBtn") }}
        </NuxtLinkLocale>
      </div>
      <!-- delete account -->
      <div
        class="flex items-center justify-between gap-5 py-3 hover:opacity-80"
      >
        <button
          type="button"
          class="flex items-center justify-start gap-3 max-w-[90%] overflow-hidden text-text-color-default"
        >
          <UIcon name="solar:trash-bin-trash-linear" />
          <p
            class="max-w-full overflow-hidden truncate text-sm font-medium capitalize ml-2"
          >
            {{ t("pages.profile.menuLinks.deleteAccount") }}
          </p>
        </button>
      </div>
      <!-- delete account -->
      <div
        class="flex items-center justify-between gap-5 py-3 hover:opacity-80"
      >
        <button
          type="button"
          class="flex items-center justify-start gap-3 max-w-[90%] overflow-hidden text-red-default"
        >
          <UIcon name="uit:signout" />
          <p
            class="max-w-full overflow-hidden truncate text-sm font-medium capitalize ml-2"
          >
            {{ t("pages.profile.menuLinks.logout") }}
          </p>
        </button>
      </div>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";
import {
  PROFILE_ORDER_SECTIONS,
  ROUTER_QUERIES,
} from "~/layers/base-layer/constants/router-queries";

const { t, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const enableNotifications = ref(true);
const wrapperRef = ref(null);
const isMdScreen = useMediaQuery("(max-width: 768px)");
const links = computed(() => [
  {
    icon: "iconamoon:profile",
    label: t("pages.profile.menuLinks.editName"),
    to: {
      path: ROUTES.PROFILE__EDIT_NAME,
    },
  },
  {
    icon: "carbon:location",
    label: t("pages.profile.menuLinks.address"),
    to: {
      path: ROUTES.PROFILE__ADDRESS,
    },
  },
  {
    icon: "iconamoon:shopping-card-duotone",
    label: t("pages.profile.menuLinks.orders"),
    to: {
      path: ROUTES.PROFILE__MY_ORDERS,
      query: {
        [ROUTER_QUERIES.PROFILE_ORDERS]: PROFILE_ORDER_SECTIONS.PREVIOUS,
      },
    },
  },
  {
    icon: "mdi-light:information",
    label: t("pages.profile.menuLinks.aboutUs"),
    to: {
      path: ROUTES.PROFILE__ABOUT_US,
    },
  },
  {
    icon: "hugeicons:security",
    label: t("pages.profile.menuLinks.privacyAndPolicy"),
    to: {
      path: "/" + ROUTES.PRIVAICY_CONDITIONS,
    },
  },
]);

const localesItems = computed(() => [
  {
    label: t(`pages.profile.menuLinks.locales.en`),
    type: "checkbox" as const,
    checked: locale.value === "en",
    async onSelect(e: Event) {
      e.preventDefault();

      const localizedPath = switchLocalePath("en");
      await navigateTo(localizedPath);
    },
  },
  {
    label: t(`pages.profile.menuLinks.locales.ar`),
    type: "checkbox" as const,
    checked: locale.value === "ar",
    async onSelect(e: Event) {
      e.preventDefault();

      const localizedPath = switchLocalePath("ar");
      await navigateTo(localizedPath);
    },
  },
]);

useResizeObserver(wrapperRef, async () => {
  if (!isMdScreen.value) {
    await navigateTo({
      path: ROUTES.PROFILE__MY_ORDERS,
      query: {
        [ROUTER_QUERIES.PROFILE_ORDERS]: PROFILE_ORDER_SECTIONS.PREVIOUS,
      },
    });
  }
});

onBeforeMount(async () => {
  if (!isMdScreen.value) {
    await navigateTo({
      path: ROUTES.PROFILE__MY_ORDERS,
      query: {
        [ROUTER_QUERIES.PROFILE_ORDERS]: PROFILE_ORDER_SECTIONS.PREVIOUS,
      },
    });
  }
});
</script>
