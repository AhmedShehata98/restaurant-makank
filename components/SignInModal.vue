<template>
  <div
    class="w-full h-full flex items-center z-30 justify-center fixed top-0 left-0 bg-app-background-500/65 max-sm:px-4"
  >
    <!-- <LazyAuthSigninPhoneNumberForm @close="$emit('close')" /> -->
    <!-- <LazyAuthConfirmationOtpForm @close="$emit('close')" /> -->
    <LazyAuthSignUpNameForm @close="$emit('close')" />
  </div>
</template>
<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

const target = useTemplateRef<HTMLElement>("target");

onClickOutside(target, (_event) => emits("close"));

const emits = defineEmits(["close"]);

const toggleScrollLock = (shouldLock: boolean) => {
  if (shouldLock) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
};

onMounted(() => {
  toggleScrollLock(true);
});
onUnmounted(() => {
  toggleScrollLock(false);
});
</script>
