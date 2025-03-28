<template>
  <div class="flex flex-col p-5">
    <span class="flex items-center justify-between gap-3.5">
      <h3 class="text-lg font-bold">{{ t("modals.rating.title") }}</h3>
      <button
        type="button"
        class="cursor-pointer hover:text-red-500"
        @click="$emit('close')"
      >
        <UIcon name="iconamoon:close" size="24" />
      </button>
    </span>
    <span class="flex items-center self-center justify-center py-3">
      <StarRating v-model="reviewRating" :rating="0" :max-stars="5" />
    </span>
    <div class="flex w-full flex-col mb-4">
      <h4 class="mb-3 font-semibold text-sm">{{ t("modals.rating.notes") }}</h4>
      <textarea
        v-model="reviewText"
        :rows="6"
        :placeholder="t('modals.rating.notes')"
        class="w-full p-3 border rounded-md border-app-background-600 focus:outline-app-primary-500"
      />
    </div>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
      <button type="button" class="btn bg-amber-500">
        {{ t("modals.rating.actions.submit") }}
      </button>
      <button
        type="button"
        class="btn bg-app-background-600"
        @click="$emit('close')"
      >
        {{ t("modals.rating.actions.cancel") }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const reviewText = ref("");
const reviewRating = ref(0);
defineEmits(["close"]);
</script>
