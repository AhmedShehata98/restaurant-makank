<template>
  <section class="app-container flex flex-col">
    <CustomBreadcrumb :items="breadcrumb" is-last-link-active />
    <span class="flex md:hidden items-center justify-start w-full py-3 mb-9">
      <button type="button" class="cursor-pointer" @click="$router.back()">
        <UIcon name="mdi:chevron-right" size="24" />
      </button>
      <p class="mx-auto text-sm font-semibold pe-7">
        {{ t("pages.termsOfPrivacy.title") }}
      </p>
    </span>
    <h3 class="font-bold hidden md:inline-block text-[32px] mb-5 mt-10">
      {{ t("pages.termsOfPrivacy.title") }}
    </h3>

    <template v-if="status === 'pending'">
      <ParagraphsSkeleton />
    </template>
    <RichTextRenderer
      v-if="status === 'success' && data?.global_config.terms"
      class="mb-10"
      :html-string="data?.global_config.terms"
    />
  </section>
</template>
<script setup lang="ts">
import { termsAndConditionsOfPrivacyQuery } from "~/api/graphql/queries/global-config";
import { QUERIES_KEYS } from "~/constants/queries-keys";
import { ROUTES } from "~/constants/routes";
import type { GlobalConfig } from "~/types/global-config";

const { data, status } = await useGraphQL<{ global_config: GlobalConfig }>(
  termsAndConditionsOfPrivacyQuery,undefined,
  { key: QUERIES_KEYS.TERMS_AND_PRIVACY }
);
const { t } = useI18n();

const breadcrumb = computed(() => [
  {
    label: t("layouts.header.nav.home"),
    to: ROUTES.HOME,
  },
  {
    label: t("layouts.header.nav.termsOfPrivacy"),
    to: ROUTES.PRIVAICY_CONDITIONS,
  },
]);
</script>
