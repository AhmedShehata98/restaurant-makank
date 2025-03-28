<template>
  <section
    class="app-container flex items-center justify-center flex-col gap-3 lg:gap-14 pt-5 lg:pt-14"
  >
    <h1
      class="text-base md:text-[32px] lg:text-[40px] font-semibold md:font-bold text-center text-app-text-default"
    >
      {{ $t("pages.home.sections.offersAndDiscounts.title") }}
    </h1>
    <ul class="offers-wrapper">
      <li
        v-memo="collection"
        v-for="(item, idx) of collection"
        :key="idx"
        class="item"
      >
        <img :src="item" alt="offer-img" class="w-full object-cover" />
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  collection: string[];
}>();
</script>
<style scoped>
.offers-wrapper {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .offers-wrapper {
    gap: 20px;
  }
}

.item {
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item:nth-child(2) {
  grid-row: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire container */
}
</style>
