<template>
  <li
    class="relative [&:nth-child(3)>img]:flex [&:nth-child(1)>span]:bg-app-primary-500 [&:nth-child(2)>span]:bg-app-secondary-600 [&:nth-child(2)>button]:!border-app-secondary-600 [&:nth-child(2)>button]:!text-app-secondary-600 [&:nth-child(3)>button]:!border-neutral-800 [&:nth-child(3)>button]:!text-neutral-800 [&:nth-child(3)>span]:bg-neutral-800 overflow-hidden bg-gradient-to-t [&:nth-child(1)]:from-app-primary-500 [&:nth-child(1)]:to-app-primary-700 [&:nth-child(2)]:from-app-secondary-500 [&:nth-child(2)]:to-app-secondary-700 [&:nth-child(3)]:from-neutral-700 [&:nth-child(3)]:to-neutral-900 p-8 rounded-full shadow-lg text-white text-center flex flex-col justify-center items-center"
  >
    <h2 v-if="offer.headingTitle" class="text-2xl font-bold mb-2 z-10 pt-4">
      {{ offer.headingTitle }}
    </h2>
    <button
      v-if="offer.cta"
      class="btn btn-primary-outline transition duration-300 z-10 mt-auto mb-2"
    >
      {{ offer.cta }}
    </button>
    <span
      class="w-3/4 h-3/4 border-2 border-dashed border-gray-100 rounded-full absolute -bottom-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2"
    ></span>
    <img
      src="~/public/images/telephone-img.svg"
      alt="telephone-img.svg"
      class="hidden z-10 mt-auto mb-2"
    />
  </li>
</template>
<script setup lang="ts">
defineProps<{
  offer: {
    headingTitle: string;
    cta?: string | null;
  };
}>();
</script>
