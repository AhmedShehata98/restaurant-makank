<template>
  <form
    ref="target"
    class="w-full flex flex-col md:w-[40%] lg:w-[30%] xl:w-[25%] bg-app-background-500 rounded-xl overflow-hidden p-5 text-start"
    style="box-shadow: 0px 5px 25px 0px #00000029"
  >
    <div class="flex items-start justify-between gap-3">
      <span class="flex flex-col">
        <h4 class="text-lg font-bold text-start text-text-color-default">
          {{ t("modals.signIn.otpView.title") }}
        </h4>
        <p
          class="text-sm font-medium text-start text-text-color-default/80 mt-1"
        >
          {{ t("modals.signIn.otpView.description") }}
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
    <span class="flex flex-col mt-5">
      <UPinInput
        v-model="otp"
        otp
        size="xl"
        class="justify-self-center self-center my-3"
      />
      <button
        type="button"
        class="flex gap-1 items-center justify-center py-2 text-sm font-medium"
      >
        <p class="text-text-color-default">
          {{ t("modals.signIn.otpView.resendBtn") }}
        </p>
        <p class="text-app-subtitle-default">: 5:00</p>
      </button>
    </span>
    <button type="button" class="btn btn-primary mt-5">
      {{ t("modals.signIn.otpView.submitBtn") }}
    </button>
  </form>
</template>
<script setup lang="ts">
const { t } = useI18n();
defineEmits(["close"]);
const otp = ref([]);
</script>
