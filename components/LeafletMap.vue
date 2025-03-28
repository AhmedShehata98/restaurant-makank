<template>
  <div style="height: 100vh; width: 100vw">
    <LMap
      ref="mapRef"
      zoom="zoom"
      :center
      :use-global-leaflet="false"
      :inertia="true"
      @ready="onMapReady"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <slot name="addons" :center />
    </LMap>
  </div>
</template>

<script setup lang="ts">
const mapRef = ref(null);
const mapInstance = ref(null);

const onMapReady = (map) => {
  console.log(map);
};

defineProps<{
  zoom: number;
  center: [number, number];
}>();

defineExpose({
  mapObject: mapInstance,
});
</script>
