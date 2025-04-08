<template>
  <form
    action=""
    class="w-full md:px-16 md:py-11 flex-col flex items-start justify-start min-h-[231px] md:bg-primary-500 relative mt-3 rounded-lg"
  >
    <div class="w-full flex items-center justify-between gap-3">
      <span class="flex flex-col">
        <h3
          class="font-bold text-2xl capitalize text-text-color-default md:text-white max-md:hidden"
        >
          {{ t("pages.orders.singinForm.confirmTitle") }}
        </h3>
        <p
          class="text-text-color-default max-md:text-lg md:text-white/70 max-md:font-bold"
        >
          {{ t("pages.orders.singinForm.confirmDescription") }}
        </p>
      </span>
      <button
        type="button"
        class="flex items-center justify-center gap-2 max-md:hidden"
        @click="isStartedTimer = !isStartedTimer"
      >
        <p>
          {{ t("pages.orders.singinForm.reSendHint") }}
        </p>
        <p class="text-white">{{ currentTime }}</p>
      </button>
    </div>

    <NuxtImg
      src="../../images/cart-image.webp"
      alt="cart-image.webp"
      class="w-[231px] absolute left-1/4 bottom-0 max-md:hidden"
    />

    <!-- OTP form -->
    <form
      action=""
      class="flex w-full flex-col md:flex-row items-end justify-between gap-5 isolate mt-8 md:mt-auto"
    >
      <span class="w-full flex flex-col items-start justify-start gap-2">
        <span
          class="flex w-full items-center justify-center md:justify-start rounded-lg overflow-hidden"
        >
          <UPinInput v-model="otp" placeholder="○" size="xl" />
        </span>
      </span>
      <button
        type="button"
        class="flex items-center justify-center gap-2 text-center max-md:self-center"
        @click="isStartedTimer = !isStartedTimer"
      >
        <p>
          {{ t("pages.orders.singinForm.reSendHint") }}
        </p>
        <p class="text-white">{{ currentTime }}</p>
      </button>
      <button
        type="button"
        class="btn bg-black text-white md:btn-black shrink-0 py-2.5 min-w-full md:min-w-48"
      >
        {{ t("pages.orders.singinForm.confirmBtn") }}
      </button>
    </form>
  </form>
</template>
<script setup lang="ts">
const isFinishedTimer = ref(false);
const isStartedTimer = ref(false);

const { currentTime } = useCountdown({
  callback: () => (isFinishedTimer.value = true),
  mins: 5,
  isStartTime: isStartedTimer,
});
const { t } = useI18n();
const otp = shallowRef([]);
</script>
