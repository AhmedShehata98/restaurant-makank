<template>
  <li class="card">
    <p v-if="offer.title" class="text-white text-sm lg:text-2xl font-bold mb-3">
      {{ offer.title }}
    </p>
    <p
      v-if="offer.description"
      class="text-white text-xs lg:text-base text-opacity-70 font-semibold mb-3"
    >
      {{ offer.description }}
    </p>
    <div
      class="absolute z-[1] bottom-3 left-0 px-6 w-full flex items-center justify-between"
    >
      <button
        v-if="offer.action"
        type="button"
        class="btn text-base btn-primary-outline"
      >
        {{ offer.action }}
      </button>
      <img
        v-if="offer.action_image"
        :src="withImageSrc(offer.action_image.id)"
        alt="telephone.svg"
        width="24"
        height="24"
        class="w-10 mt-8 hidden"
      />
      <img
        v-if="offer.image"
        :src="withImageSrc(offer.image.id)"
        alt="offer-img"
        width="100"
        height="100"
        class="w-20 ms-auto max-md:w-18 object-cover"
      />
    </div>
    <span
      class="size-[12vw] flex border-2 border-dashed bg-app-primary-500 border-white absolute top-[65%] -left-[18%] rounded-full aspect-square"
    />
  </li>
</template>
<script setup lang="ts">
import type { HeroCard } from "~/types/hero.types";

const { withImageSrc } = useImageSrc();
defineProps<{
  offer: HeroCard;
}>();
</script>
<style scoped lang="css">
.card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-bottom: 112px;
  height: 220px;
  overflow: hidden;
}
@media screen and (max-width: 991px) {
  .card {
    border-radius: 8px;
    height: 188px;
  }
}
.card.secondary-card > div > button {
  border-color: var(--secondary-color-600) !important;
  color: var(--secondary-color-600) !important;
}

/* Third child button */
.card.third-card > button {
  border-color: #333 !important;
  color: #333 !important;
}

/* Background gradient */
.card {
  background: linear-gradient(
    to bottom left,
    var(--primary-color-500),
    var(--primary-color-700)
  );
}
.card.secondary-card {
  background: linear-gradient(
    to bottom left,
    var(--secondary-color-500),
    var(--secondary-color-700)
  );
}
.card.third-card {
  background: linear-gradient(to bottom left, #444, #111);
}

/* Third child div > img */
.card.third-card > div > img {
  display: flex !important;
}

/* Last span inside first child */
.card > span:last-child {
  background-color: var(--primary-color-500);
}

/* Last span inside second child */
.card.secondary-card > span:last-child {
  background-color: var(--secondary-color-500);
}

.card.third-card > span:last-child {
  background-color: #333;
}

@media screen and (max-width: 991px) {
  .card > span:last-child {
    width: 70%;
    height: 70%;
  }
}
.card {
  --from-color: var(--primary-color-500);
  --to-color: var(--primary-color-700);
}
</style>
