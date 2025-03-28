<template>
  <div class="flex flex-col relative rounded-lg mt-6 overflow-hidden">
    <div :style="{ backgroundImage: `url(${coverImg})` }" class="h-32 w-full" />
    <div
      class="absolute w-full bottom-0 flex justify-between gap-4 items-center bg-app-background-500 px-3 py-2"
    >
      <span class="flex items-center relative ps-6">
        <figure
          class="absolute -top-1/2 -translate-y-1/2 flex items-center justify-center bg-app-primary-500 text-white rounded-full size-14 border-4 border-white"
        >
          <NuxtImg
            v-if="avatarImg"
            :src="avatarImg"
            :alt="username"
            width="64"
            height="64"
            class="rounded-full max-w-full"
          />
          <UIcon v-if="!avatarImg" name="si:user-alt-2-duotone" size="60" />
        </figure>
        <span class="ps-16 flex items-center justify-start gap-2">
          <p>{{ username }}</p>
          <button type="button" class="cursor-pointer">
            <UIcon name="iconamoon:edit" class="text-green-default" />
          </button>
        </span>
      </span>
      <span
        class="flex items-center justify-center gap-1.5 text-base font-bold"
      >
        <p class="text-text-color-default">
          {{ t("pages.profile.helpText") }}
        </p>
        <NuxtLink class="text-app-primary-500"
          >{{ t("pages.profile.helpBtn") }}
          <UIcon name="uil:headphones" />
        </NuxtLink>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
defineProps<{
  coverImg: string;
  avatarImg: string;
  username: string;
}>();
</script>
