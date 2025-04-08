<template>
  <header
    class="flex items-center z-(--header-z-index) justify-center lg:fixed top-0 w-full min-h-[64px]"
    :class="
      clsx(
        {
          'bg-app-primary-500': settingsStore.isColoredAppHeader,
        },
        {
          'bg-app-background-500 shadow-md':
            !settingsStore.isColoredAppHeader && y >= 64,
        }
      )
    "
  >
    <!-- Desktop header bar -->
    <div
      class="relative app-container w-[var(--container-width)] hidden lg:flex items-center justify-between"
    >
      <div class="w-16">
        <appLogo
          :logo-theme="settingsStore.isColoredAppHeader ? 'LIGHT' : 'DEFAULT'"
        />
      </div>
      <nav class="flex items-center justify-center gap-5">
        <NuxtLinkLocale
          v-for="link of NAV_LIST"
          :key="link.href"
          :to="link.href"
          :class="
            clsx(
              link.isActive
                ? navLinkColors.activeColor
                : navLinkColors.inActiveColor
            )
          "
          >{{ link.title }}</NuxtLinkLocale
        >
      </nav>
      <!-- Control Buttons -->
      <div class="flex items-center justify-start gap-8">
        <!-- Locales Select Menu -->
        <select
          id="lang"
          name="lang"
          class="bg-inherit focus:outline-none py-1 text-app-text-default text-app-text-default accent-app-primary-500"
          :class="
            clsx(
              settingsStore.isColoredAppHeader
                ? 'text-white'
                : 'text-app-text-default'
            )
          "
          @change="
            switchLocale(
              ($event?.target as HTMLSelectElement)?.value as typeof locale
            )
          "
        >
          <option
            v-for="locale of locales"
            :key="locale.code"
            :value="locale.code"
            class="text-app-text-default accent-app-primary-500"
          >
            {{ t(`layouts.header.localesMenu.${locale.iso}`) }}
          </option>
        </select>
        <!-- Notification List -->
        <button
          type="button"
          class="text-3xl relative cursor-pointer"
          :class="
            clsx(
              settingsStore.isColoredAppHeader
                ? 'text-white'
                : 'text-app-text-default'
            )
          "
          @click="isOpenNotificationsMenu = true"
        >
          <span
            class="absolute -top-2 -right-2 w-6 z-10 h-6 text-center flex items-center justify-center rounded-full text-sm text-white bg-slate-900"
          >
            4</span
          >
          <UIcon name="iconamoon:notification" />
        </button>
        <!-- Orders List -->
        <NuxtLinkLocale
          :to="ROUTES.ORDERS"
          class="text-3xl relative"
          :class="
            clsx(
              settingsStore.isColoredAppHeader
                ? 'text-white'
                : 'text-app-text-default'
            )
          "
        >
          <span
            class="absolute -top-2 -right-2 w-6 z-10 h-6 text-center flex items-center justify-center rounded-full text-sm text-white bg-slate-900"
          >
            15</span
          >
          <UIcon name="iconamoon:shopping-bag" />
        </NuxtLinkLocale>
        <!-- Sign-in button -->
        <!-- <button
          type="button"
          class="btn"
          :class="
            clsx(
              settingsStore.isColoredAppHeader
                ? 'btn-primary-outline'
                : 'btn-primary'
            )
          "
        >
          <p>
            {{ $t("layouts.header.userActionsMenu.login.text") }}
          </p>
        </button> -->
        <!-- Profile Buttons -->
        <span class="flex items-center justify-center gap-1">
          <UAvatar
            :icon="
              settingsStore.isColoredAppHeader
                ? 'majesticons:user-circle'
                : 'mage:user-circle'
            "
            size="lg"
            :ui="{ icon: 'text-3xl text-white' }"
            class="bg-app-primary-500"
          />
          <UDropdownMenu
            arrow
            :items="items"
            :ui="{ content: 'w-48', item: 'cursor-pointer' }"
            dir="rtl"
          >
            <UButton
              type="button"
              variant="link"
              color="tertiary"
              icon="mage:chevron-down"
              class="flex-row-reverse cursor-pointer"
            >
              <p class="">john doe</p>
            </UButton>
          </UDropdownMenu>
        </span>
      </div>
    </div>
    <!-- Notification Menu -->

    <LazyNotificationMenu
      :is-open="isOpenNotificationsMenu"
      :is-full-screen="isSmallScreen"
      @close="isOpenNotificationsMenu = false"
    />

    <!-- mobile header bar -->
    <div class="app-container w-[var(--container-width)] lg:hidden">
      <div class="flex items-center justify-between w-full">
        <button type="button" class="flex items-center justify-center w-fit">
          <HighlightingHeading
            main-text-color-class-name="text-app-text-default"
            marked-text-color-class-name="text-app-primary-500"
            :title="$t('layouts.header.userActionsMenu.login.text')"
            :words="$t('layouts.header.userActionsMenu.login.markedWords')"
            class="w-fit !gap-1"
          />
        </button>

        <appLogo
          class="!w-18 me-10"
          :logo-theme="settingsStore.isColoredAppHeader ? 'LIGHT' : 'DEFAULT'"
        />
        <button
          type="button"
          class="flex items-center justify-center rounded-xl bg-app-primary-500 size-10 relative text-white"
          @click="isOpenNotificationsMenu = true"
        >
          <span
            class="absolute -top-2 -right-2 w-6 h-6 text-center flex items-center justify-center rounded-full text-sm text-white bg-black"
          >
            15</span
          >
          <UIcon name="tdesign:notification-error" class="w-[90%]" />
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import appLogo from "~/components/AppLogo.vue";
import clsx from "clsx";
import { useSettingsStore } from "~/store/settings-store";
import { ROUTES } from "~/constants/routes";
import { useScroll } from "@vueuse/core";

const { t, locales, locale } = useI18n();
const items = [
  {
    label: t("layouts.header.userActionsMenu.profile"),
    icon: "i-lucide-user",
    to: ROUTES.PROFILE,
  },
  {
    label: t("layouts.header.userActionsMenu.logout"),
    icon: "lets-icons:sign-out-circle-light",
  },
];
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();
const isSmallScreen = useMediaQuery("(max-width:768px)");
const isOpenNotificationsMenu = ref(false);
const settingsStore = useSettingsStore();
const { y } = useScroll(window);
const navLinkColors = computed(() => {
  const activeColor: string = settingsStore.isColoredAppHeader
    ? "text-white"
    : "text-app-primary-500";
  const inActiveColor: string = settingsStore.isColoredAppHeader
    ? "text-app-third-300"
    : "text-app-subtitle-default";
  return {
    activeColor,
    inActiveColor,
  };
});

const switchLocale = async (newLocaleCode: typeof locale.value) => {
  const localizedPath = switchLocalePath(newLocaleCode);
  await router.push(localizedPath);
};

const NAV_LIST = computed(() => [
  {
    title: t("layouts.header.nav.home"),
    href: ROUTES.HOME,
    isActive: isActiveRoute({
      href: ROUTES.HOME,
      routePath: router.currentRoute.value.path,
      locale: locale.value,
    }),
  },
  {
    title: t("layouts.header.nav.menu"),
    href: ROUTES.PRODUCTS,
    isActive: isActiveRoute({
      href: ROUTES.PRODUCTS,
      routePath: router.currentRoute.value.path,
      locale: locale.value,
    }),
  },
  {
    title: t("layouts.header.nav.offers"),
    href: ROUTES.OFFERS,
    isActive: isActiveRoute({
      href: ROUTES.OFFERS,
      routePath: router.currentRoute.value.path,
      locale: locale.value,
    }),
  },
]);
</script>
