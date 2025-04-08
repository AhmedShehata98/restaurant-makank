<template>
  <section class="w-full flex flex-col gap-1 max-sm:min-h-screen">
    <CustomBreadcrumb
      :items="breadcrumb"
      is-last-link-active
      class="app-container"
    />
    <span
      class="flex md:hidden items-center justify-start w-full py-3 px-(--container-padding)"
    >
      <button type="button" class="cursor-pointer" @click="$router.back()">
        <UIcon name="mdi:chevron-right" size="24" />
      </button>
      <p class="mx-auto text-sm font-semibold pe-7">
        {{ $t("pages.profile.mobile.address.title") }}
      </p>
    </span>
    <div class="flex flex-col relative md:mt-10 shadow mb-5">
      <!-- Maps -->
      <div
        class="max-md:order-2 md:w-(--container-width) md:mx-auto max-h-screen"
      >
        <!-- LeafLet map element -->
        <div class="w-full h-[calc(100vh-26rem)] md:h-[calc(100vh-15rem)]">
          <LazyLMap
            ref="mapRef"
            :center="[selectLocation.lat, selectLocation.lng]"
            :use-global-leaflet="false"
            :zoom="6"
          >
            <LazyLTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              layer-type="base"
              name="OpenStreetMap"
            />
            <LazyLFeatureGroup>
              <LazyLMarker
                :lat-lng="[selectLocation.lat, selectLocation.lng]"
                :draggable="true"
                @update:lat-lng="(val:LocationType) => {
                   handleUpdateLocation({
                       lat: val.lat,
                       lng: val.lng,
                       name: `${val.lat.toFixed(4)}, ${val.lng.toFixed(4)}`,
                   })
                  }"
              >
                <LazyLIcon>
                  <LazyUIcon
                    name="mdi:map-marker"
                    class="text-5xl text-app-secondary-500 drop-shadow-lg"
                  />
                </LazyLIcon>
              </LazyLMarker>
            </LazyLFeatureGroup>
          </LazyLMap>
        </div>
      </div>
      <form
        class="max-md:order-1 max-md:mx-(--container-padding) md:w-[calc(var(--container-width)-6.5rem)] bg-app-background-500 md:absolute md:z-[400] md:top-14 md:left-1/2 md:-translate-x-1/2 focus-within:border-primary-500 border border-transparent mb-5 md:mb-0"
      >
        <div class="relative flex items-center justify-start py-3.5 px-3.5">
          <label
            for="search-location"
            class="w-full flex items-center justify-start gap-2"
          >
            <UIcon
              name="lucide:map-pin"
              size="24"
              class="text-app-subtitle-default"
            />
            <input
              id="search-location"
              v-model="searchQuery"
              type="search"
              name="search-location"
              :placeholder="
                t('pages.profile.addressContent.form.searchPlaceholder')
              "
              class="px-2 h-full w-full focus:outline-none"
            />
          </label>
          <ul
            class="z-[1000] grid grid-flow-row gap-1 w-full p-1 absolute top-full bg-app-background-500 left-0 opacity-0 pointer-events-none -translate-y-6 transition-all duration-500 max-h-72 overflow-y-auto"
            :class="
              clsx({
                '!opacity-100 !pointer-events-auto !-translate-y-0':
                  searchMapResult && searchMapResult.length > 0,
              })
            "
          >
            <li
              v-for="data of searchMapResult"
              :key="`${data.latitude}__${data.longitude}`"
              class="flex items-center justify-start gap-4 px-3 py-2.5 hover:bg-app-background-600 transition-colors cursor-pointer"
              @click="
                handleSelectLocation({
                  lat: data.latitude,
                  lng: data.longitude,
                  name: data.displayName,
                })
              "
            >
              <UIcon
                name="ic:round-location-on"
                size="32"
                class="text-app-subtitle-default"
              />
              <span class="flex flex-col gap-1.5">
                <h5
                  class="text-text-color-default font-semibold text-sm md:text-base"
                >
                  {{ data.name }}
                </h5>
                <p
                  v-if="data.displayName"
                  class="text-app-subtitle-default font-medium text-xs md:text-sm"
                >
                  {{ data.displayName }}
                </p>
              </span>
            </li>
          </ul>
        </div>
      </form>
      <div
        class="max-md:order-3 w-(--container-width) mx-auto flex flex-col-reverse max-md:w-full md:flex-row items-center justify-start gap-4 py-5 px-4"
      >
        <button
          type="button"
          class="btn btn-black max-md:w-full"
          @click="isSmallScreen ? (shownConfirmAddressModal = true) : null"
        >
          {{ t("pages.profile.addressContent.addressConfirmBtn") }}
        </button>
        <span class="flex max-md:w-full items-center justify-start gap-1.5">
          <UIcon
            name="mdi:map-marker"
            class="text-text-color-default text-2xl"
          />
          <p class="text-base font-semibold text-text-color-default">
            {{ selectLocation.name }}
          </p>
        </span>
      </div>
    </div>
    <LazyAddressForm class="mt-10 mb-12 max-md:hidden app-container">
      <template #actionBtn>
        <button
          type="button"
          class="btn btn-primary col-span-2 justify-self-end mt-8"
        >
          {{ t("pages.profile.addressContent.addBtn") }}
        </button>
      </template>
    </LazyAddressForm>
    <!-- Confirm add address Modal -->
    <UModal
      :open="shownConfirmAddressModal"
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
              @click="shownConfirmAddressModal = false"
            >
              <UIcon name="mdi:chevron-right" size="24" />
            </button>
            <p class="mx-auto text-sm font-semibold pe-7">
              {{ $t("pages.profile.addressContent.editHeadingTitle") }}
            </p>
          </span>
          <AddressForm class="w-full flex flex-col [&>*]:w-full">
            <template #actionBtn>
              <button
                type="button"
                class="btn btn-primary col-span-2 justify-self-end mt-8"
              >
                {{ t("pages.profile.addressContent.form.confirmBtn") }}
              </button>
            </template>
          </AddressForm>
        </div>
      </template>
    </UModal>
  </section>
</template>
<script setup lang="ts">
import clsx from "clsx";
import { onWatcherCleanup } from "vue";
import { ROUTES } from "~/constants/routes";
// import { useLatLong } from "~/composables";
import { useGeolocation } from "@vueuse/core";

type LocationType = { lat: number; lng: number };

const { coords } = useGeolocation({
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 5000,
});
const isSmallScreen = useMediaQuery("(max-width: 768px)");
const searchQuery = ref("");
const mapRef = ref(null);
const userMapOperation = ref<"SEARCHING" | "MARKER_UPDATE">("MARKER_UPDATE");
const shownConfirmAddressModal = ref(false);
const searchMapResult = ref<SearchResultType[] | []>([]);
const { t } = useI18n();
const selectLocation = ref({
  name: "",
  lat: 30.0355,
  lng: 31.223,
});
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
    label: t("layouts.header.nav.addingAddress"),
    to: ROUTES.PROFILE__ADDRESS__ADD,
  },
]);

const handleSelectLocation = (data: LocationType & { name: string }) => {
  if (userMapOperation.value === "MARKER_UPDATE") return;
  userMapOperation.value = "SEARCHING";
  selectLocation.value = { lat: data.lat, lng: data.lng, name: data.name };
  searchMapResult.value = [];
};

const handleUpdateLocation = (data: LocationType & { name: string }) => {
  if (userMapOperation.value === "SEARCHING") return;
  userMapOperation.value = "MARKER_UPDATE";
  selectLocation.value = { lat: data.lat, lng: data.lng, name: data.name };
};

watch(
  coords,
  (newCoords) => {
    if (newCoords.latitude === Infinity || newCoords.longitude === Infinity)
      return;
    selectLocation.value.lat = newCoords.latitude;
    selectLocation.value.lng = newCoords.longitude;
    selectLocation.value.name = `${newCoords.latitude.toFixed(
      4
    )}, ${newCoords.longitude.toFixed(4)}`;
  },
  { once: true }
);

watch(searchQuery, async (newSearchQuery) => {
  userMapOperation.value = "SEARCHING";
  if (!newSearchQuery) {
    searchMapResult.value = [];
    return;
  }
  const controller = new AbortController();
  const timeout = setTimeout(async () => {
    const data = await searchMap(newSearchQuery, controller.signal);
    searchMapResult.value = data;
  }, 600);

  onWatcherCleanup(() => {
    clearTimeout(timeout);
    controller.abort();
  });
});
</script>
