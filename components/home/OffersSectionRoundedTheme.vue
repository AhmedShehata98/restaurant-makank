<template>
  <section class="bg-app-background-500 min-h-fit flex flex-col gap-8 pt-8">
    <ul
      class="app-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6 pt-6"
    >
      <OfferRoundedCard
        v-for="(offer, idx) of offersList"
        :key="idx"
        :offer="offer"
        class="basis-full h-[320px] sm:h-[380px] p-[calc(320px/6)] sm:p-[calc(380px/6)] md:h-[320px] sm:md:p-[calc(320px/6)]"
      />
    </ul>
    <div
      class="flex items-center justify-center flex-wrap gap-6 bg-app-third-200 py-2"
    >
      <span class="flex items-center justify-center gap-2">
        <img src="~/public/icons/gmap.svg" alt="gmap.svg" class="opacity-70" />
        <p class="text-app-text-default opacity-70">
          {{ $t("pages.home.sections.offers.infos.location") }}
        </p>
        <p class="text-app-text-default">
          الأمير فيصل، السليمانية، الرياض 11545، المملكة العربية السعودية
        </p>
      </span>
      <span class="flex items-center justify-center gap-2">
        <img
          src="~/public/icons/mobile.svg"
          alt="mobile.svg"
          class="opacity-70"
        />
        <p class="text-app-text-default opacity-70">
          {{ $t("pages.home.sections.offers.infos.phone") }}
        </p>
        <p class="text-app-text-default">+966 9200 12026</p>
      </span>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  offersList: any[];
}>();
</script>
