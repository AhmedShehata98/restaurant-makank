<template>
  <NuxtLayout name="profile">
    <template #header>
      <CustomBreadcrumb :items="breadcrumb" is-last-link-active />
    </template>
    <!-- <LazyProfileCover
      username="user 1555405"
      avatar-img="https://picsum.photos/800/768"
      cover-img="https://picsum.photos/1200/764"
    />
    <LazySectionsNavButtons /> -->
    <span class="flex md:hidden items-center justify-start w-full py-3">
      <button
        type="button"
        class="cursor-pointer flex items-center justify-center"
        @click="$router.back()"
      >
        <UIcon name="mdi:chevron-right" size="24" />
      </button>
      <p class="me-auto ps-3 text-sm font-semibold">
        {{ $t("pages.profile.mobile.editName.title") }}
      </p>
      <LazyUDropdownMenu
        :items="filterItems"
        :content="{ align: 'start' }"
        :ui="{ content: 'w-28' }"
        class="md:hidden"
      >
        <UButton
          :label="ORDER_FILTERS_LIST[ordersFilterValue]"
          color="neutral"
          variant="soft"
          class="rounded-lg"
          icon="i-lucide-chevron-down"
        />
      </LazyUDropdownMenu>
    </span>
    <!-- Tabs -->
    <div class="w-full flex items-center justify-between gap-3 mt-4 md:mt-10">
      <UTabs
        v-model="activeTab"
        color="primary"
        variant="link"
        :content="false"
        :items="tabsItems"
        :dir="pageDir"
        class="w-full"
        :ui="{
          trigger: 'max-md:w-1/2',
        }"
      />

      <UDropdownMenu
        :items="filterItems"
        :content="{ align: 'start' }"
        :ui="{ content: 'w-28' }"
        class="max-md:hidden"
      >
        <UButton
          :label="ORDER_FILTERS_LIST[ordersFilterValue]"
          color="neutral"
          variant="subtle"
          class="rounded-lg"
          icon="i-lucide-chevron-down"
        />
      </UDropdownMenu>
    </div>
    <CurrentOrdersSection
      v-if="
        $route.query[ROUTER_QUERIES.PROFILE_ORDERS] ===
        PROFILE_ORDER_SECTIONS.CURRENT
      "
    />
    <PrevOrdersSection
      v-if="
        $route.query[ROUTER_QUERIES.PROFILE_ORDERS] ===
        PROFILE_ORDER_SECTIONS.PREVIOUS
      "
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ROUTES } from "@/constants/routes";
import {
  PROFILE_ORDER_SECTIONS,
  ROUTER_QUERIES,
} from "~/layers/base-layer/constants/router-queries";

const pageDir = usePageDir();

const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const activeTab = computed({
  get: () =>
    route.query[ROUTER_QUERIES.PROFILE_ORDERS] ||
    PROFILE_ORDER_SECTIONS.CURRENT,
  set: (val) => {
    if (route.query[ROUTER_QUERIES.PROFILE_ORDERS] !== val) {
      router.replace({
        query: {
          ...route.query,
          [ROUTER_QUERIES.PROFILE_ORDERS]: val,
        },
      });
    }
  },
});

const ORDER_FILTERS = {
  LAST_SIX_MONTH: "lastSixMonth",
  LAST_MONTH: "lastMonth",
  LAST_WEEK: "lastWeek",
  LAST_DAY: "lastDat",
};
const ORDER_FILTERS_LIST = {
  [ORDER_FILTERS.LAST_SIX_MONTH]: t(
    "pages.profile.ordersFilters.lastSixMounth"
  ),
  [ORDER_FILTERS.LAST_MONTH]: t("pages.profile.ordersFilters.lastMonth"),
  [ORDER_FILTERS.LAST_WEEK]: t("pages.profile.ordersFilters.lastWeek"),
  [ORDER_FILTERS.LAST_DAY]: t("pages.profile.ordersFilters.lastDay"),
};

const ordersFilterValue = ref(ORDER_FILTERS.LAST_SIX_MONTH);
const breadcrumb = computed(() => [
  {
    label: t("layouts.header.nav.home"),
    to: ROUTES.HOME,
  },
  {
    label: t("layouts.header.nav.orders"),
    to: ROUTES.PROFILE__MY_ORDERS,
  },
]);

const tabsItems = computed(() => [
  {
    label: t("pages.profile.tabs.currentOrders"),
    value: PROFILE_ORDER_SECTIONS.CURRENT,
  },
  {
    label: t("pages.profile.tabs.prevOrders"),
    value: PROFILE_ORDER_SECTIONS.PREVIOUS,
  },
]);
const filterItems = computed(() => [
  {
    label: ORDER_FILTERS_LIST[ORDER_FILTERS.LAST_SIX_MONTH],
    type: "checkbox" as const,
    checked: ordersFilterValue.value === ORDER_FILTERS.LAST_SIX_MONTH,
    onSelect(e: Event) {
      e.preventDefault();
      ordersFilterValue.value = ORDER_FILTERS.LAST_SIX_MONTH;
    },
  },
  {
    label: ORDER_FILTERS_LIST[ORDER_FILTERS.LAST_MONTH],
    type: "checkbox" as const,
    checked: ordersFilterValue.value === ORDER_FILTERS.LAST_MONTH,
    onSelect(e: Event) {
      e.preventDefault();
      ordersFilterValue.value = ORDER_FILTERS.LAST_MONTH;
    },
  },
  {
    label: ORDER_FILTERS_LIST[ORDER_FILTERS.LAST_WEEK],
    type: "checkbox" as const,
    checked: ordersFilterValue.value === ORDER_FILTERS.LAST_WEEK,
    onSelect(e: Event) {
      e.preventDefault();
      ordersFilterValue.value = ORDER_FILTERS.LAST_WEEK;
    },
  },
  {
    label: ORDER_FILTERS_LIST[ORDER_FILTERS.LAST_DAY],
    type: "checkbox" as const,
    checked: ordersFilterValue.value === ORDER_FILTERS.LAST_DAY,
    onSelect(e: Event) {
      e.preventDefault();
      ordersFilterValue.value = ORDER_FILTERS.LAST_DAY;
    },
  },
]);
</script>
