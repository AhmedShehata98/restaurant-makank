<template>
  <section class="app-container">
    <CustomBreadcrumb :items="breadcrumb" is-last-link-active />
    <div class="relative mt-10 shadow">
      <!-- Maps -->
      <div class="max-w-full max-h-full">
        <LazyLMap
          ref="mapRef"
          :center="[selectLocation.lat, selectLocation.lng]"
          :use-global-leaflet="true"
          :inertia="true"
          :zoom="6"
          class="!h-[32rem] xl:!h-[36rem]"
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
      <form
        class="w-11/12 bg-app-background-500 absolute z-[400] top-14 left-1/2 -translate-x-1/2 focus-within:border-primary-500 border border-transparent"
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
            class="grid grid-flow-row gap-1 w-full p-1 absolute top-full bg-app-background-500 left-0 opacity-0 pointer-events-none -translate-y-6 transition-all duration-500 max-h-72 overflow-y-auto"
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
      <div class="flex items-center justify-start gap-4 py-3 px-4">
        <button type="button" class="btn btn-black">
          {{ t("pages.profile.addressContent.addressConfirmBtn") }}
        </button>
        <span class="flex items-center justify-start gap-1.5">
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
    <LazyAddressForm class="mt-10 mb-12">
      <template #actionBtn>
        <button
          type="button"
          class="btn btn-primary col-span-2 justify-self-end mt-8"
        >
          {{ t("pages.profile.addressContent.addBtn") }}
        </button>
      </template>
    </LazyAddressForm>
  </section>
</template>
<script setup lang="ts">
import clsx from "clsx";
import { onWatcherCleanup } from "vue";
import { ROUTES } from "~/constants/routes";

type LocationType = { lat: number; lng: number };

const { coords } = useGeolocation();

const searchQuery = ref("");
const mapRef = ref(null);
const userMapOperation = ref<"SEARCHING" | "MARKER_UPDATE">("MARKER_UPDATE");

const searchMapResult = ref<SearchResultType[] | []>([]);
const { t } = useI18n();
const selectLocation = ref({
  name: "",
  lat: 0,
  lng: 0,
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
