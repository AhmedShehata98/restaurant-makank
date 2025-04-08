<template>
  <UForm
    class="grid grid-cols-1 md:grid-cols-2 w-full items-start justify-start gap-4"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <slot name="header" />
    <UFormField
      :label="t('pages.profile.addressContent.form.addressName')"
      name="addressName"
    >
      <UInput
        v-model="state.addressName"
        :ui="{ base: 'placeholder:text-app-subtitle-default' }"
        class="w-full"
        size="xl"
      />
    </UFormField>
    <UFormField
      :label="t('pages.profile.addressContent.form.street')"
      name="street"
    >
      <UInput
        v-model="state.street"
        :placeholder="t('pages.profile.addressContent.form.streetPlaceholder')"
        :ui="{ base: 'placeholder:text-app-subtitle-default' }"
        class="w-full"
        size="xl"
      />
    </UFormField>
    <div class="grid grid-cols-2 items-center justify-start gap-5">
      <UFormField
        :label="t('pages.profile.addressContent.form.country')"
        name="country"
      >
        <USelect
          v-model="state.country"
          class="w-full placeholder:text-app-subtitle-default"
          size="xl"
        />
      </UFormField>
      <UFormField
        :label="t('pages.profile.addressContent.form.city')"
        name="city"
      >
        <USelect
          v-model="state.city"
          class="w-full placeholder:text-app-subtitle-default"
          size="xl"
        />
      </UFormField>
    </div>
    <UFormField
      :label="t('pages.profile.addressContent.form.neighborhood')"
      name="neighborhood"
    >
      <UInput
        v-model="state.neighborhood"
        :placeholder="
          t('pages.profile.addressContent.form.neighborhoodPlaceholder')
        "
        :ui="{ base: 'placeholder:text-app-subtitle-default' }"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField
      :label="t('pages.profile.addressContent.form.locationInMaps')"
      name="locationInMaps"
    >
      <UInput
        v-model="state.locationInMaps"
        :placeholder="
          t('pages.profile.addressContent.form.mapLocationPlaceholder')
        "
        :ui="{ base: 'placeholder:text-app-subtitle-default' }"
        class="w-full"
        size="xl"
      />
    </UFormField>
    <UFormField
      :label="t('pages.profile.addressContent.form.nearestLandmark')"
      name="nearestLandmark"
    >
      <UInput
        v-model="state.nearestLandmark"
        :placeholder="
          t('pages.profile.addressContent.form.landmarkPlaceholder')
        "
        :ui="{ base: 'placeholder:text-app-subtitle-default' }"
        size="xl"
        class="w-full"
      />
    </UFormField>
    <slot name="actionBtn" :state />
  </UForm>
</template>
<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const props = defineProps<{ initialValues?: Schema }>();

const INITIAL_VALUES = {
  addressName: "المنزل",
  locationInMaps: "",
  neighborhood: "",
  nearestLandmark: undefined,
  city: "الرياض",
  country: "السعودية",
  street: "",
};
const schema = z.object({
  addressName: z.string(),
  locationInMaps: z.string(),
  neighborhood: z.string(),
  nearestLandmark: z.string().optional(),
  city: z.string(),
  country: z.string(),
  street: z.string(),
});

type Schema = z.infer<typeof schema>;

const state = reactive<Schema>(props.initialValues || INITIAL_VALUES);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}

const { t } = useI18n();
</script>
