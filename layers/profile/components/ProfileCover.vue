<template>
  <div
    class="hidden tablet:flex flex-col relative rounded-lg mt-6 overflow-hidden"
  >
    <div
      :style="{ backgroundImage: `url(${coverImg})` }"
      class="h-44 lg:h-32 w-full"
    />
    <div
      class="absolute w-full bottom-0 flex flex-wrap justify-between gap-4 items-center bg-app-background-500 px-3 py-2"
    >
      <span class="flex items-center relative ps-6">
        <figure
          class="absolute -top-1/2 -translate-y-1/2 flex items-center justify-center bg-app-primary-500 text-white rounded-full size-20 lg:size-14 border-4 border-white"
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
        <span class="ps-24 flex items-center justify-start gap-2">
          <p>{{ username }}</p>
          <button
            type="button"
            class="cursor-pointer"
            @click="isOpenEditModal = true"
          >
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
    <UModal
      :open="isOpenEditModal"
      :ui="{
        overlay: 'bg-app-background-600/50',
        content: 'tablet:w-1/4',
      }"
    >
      <template #content>
        <div class="flex flex-col p-4">
          <span class="flex items-center justify-between gap-3 mb-4">
            <h4 class="text-text-color-default font-bold text-lg">
              {{ $t("modals.profileChangeNameModal.title") }}
            </h4>
            <button
              type="button"
              class="text-gray-500 cursor-pointer"
              @click="isOpenEditModal = false"
            >
              <UIcon name="mdi:close" />
            </button>
          </span>
          <span class="flex flex-col gap-1.5">
            <label for="name">
              {{ $t("modals.profileChangeNameModal.label") }}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              :placeholder="$t('modals.profileChangeNameModal.label')"
              class="px-3 py-2.5 rounded-xl border border-app-background-600/90 placeholder:text-input-hint-default"
            />
          </span>
          <button
            type="button"
            class="btn bg-green-default text-white font-bold py-3 mt-5"
          >
            {{ $t("modals.profileChangeNameModal.saveBtn") }}
          </button>
        </div>
      </template>
    </UModal>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const isOpenEditModal = ref(false);
defineProps<{
  coverImg: string;
  avatarImg: string;
  username: string;
}>();
</script>
