<template>
  <form
    ref="target"
    class="w-full flex flex-col md:w-[40%] lg:w-[30%] xl:w-[25%] bg-app-background-500 rounded-xl overflow-hidden p-5 text-start"
    style="box-shadow: 0px 5px 25px 0px #00000029"
  >
    <div class="flex items-start justify-between gap-3">
      <span class="flex flex-col">
        <h4 class="text-lg font-bold text-start text-text-color-default">
          {{ t("modals.signIn.createAccountView.title") }}
        </h4>
        <p
          class="text-sm font-medium text-start text-text-color-default/80 mt-1"
        >
          {{ t("modals.signIn.createAccountView.description") }}
        </p>
      </span>
      <button
        type="button"
        class="hover:text-red-400 cursor-pointer"
        @click="$emit('close')"
      >
        <UIcon name="mdi:close" />
      </button>
    </div>
    <span class="flex flex-col mt-5 gap-2">
      <label
        for="phone-number"
        class="text-sm font-semibold text-start text-text-color-default"
      >
        {{ t("modals.signIn.createAccountView.form.label") }}
      </label>
      <UInput
        v-model="name"
        size="lg"
        class="placeholder:!text-app-subtitle-default"
        :placeholder="t('modals.signIn.createAccountView.form.placeholder')"
      />
    </span>
    <button type="button" class="btn btn-primary mt-5">
      {{ t("modals.signIn.createAccountView.submitBtn") }}
    </button>
  </form>
</template>
<script setup lang="ts">
const { t } = useI18n();
const name = ref("");
defineEmits(["close"]);
</script>
