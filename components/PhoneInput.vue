<template>
  <div
    class="w-full flex items-center justify-center divide-x-2 divide-app-background-600 py-2 border rounded-lg border-app-background-700"
  >
    <USelectMenu
      v-model="phoneCode"
      :items="transformedArabicCountries || []"
      class="w-28 rounded-[inherit] rounded-e-none"
      dir="rtl"
      :ui="{
        base: 'ring-transparent',
      }"
    >
      <template #leading="{ modelValue }">
        <NuxtImg
          :src="modelValue?.avatar"
          :alt="modelValue?.label"
          width="24"
          height="24"
        />
      </template>
      <!-- <template #leading="{ modelValue, ui }">
        <span class="flex items-center justify-start gap-2">
          <UAvatar
            v-if="modelValue"
            :src="getCountryFlag(modelValue as string)"
            :size="ui.leadingAvatarSize()"
            :class="ui.leadingAvatar()"
          />
          <p>{{ getCountryCode(modelValue as string) }}</p>
        </span>
      </template> -->
      <template #item-leading="{ item }">
        <span class="flex items-center justify-start gap-2">
          <NuxtImg
            :src="item.avatar"
            :alt="item.label"
            width="24"
            height="24"
          />
        </span>
      </template>
      <template #item-label="{ item }">
        <p class="text-text-color-default">{{ item.value }}</p>
      </template>
    </USelectMenu>
    <UInput
      v-model="phoneNumber"
      class="flex-1 rounded-none"
      :ui="{
        base: 'ring-transparent',
      }"
      placeholder="+1233456789"
    />
  </div>

  <!-- Validation Message -->
  <p v-if="phoneNumber && !isValidPhone" class="text-red-500 text-sm mt-1">
    Invalid phone number
  </p>
</template>
<script setup lang="ts">
import arabicCountries from "~/constants/countries-codes";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const transformedArabicCountries = computed(() =>
  arabicCountries.map((c) => ({ label: c.name, value: c.code, avatar: c.flag }))
);
function getCountryFlag(value: string) {
  return (
    transformedArabicCountries.value?.find((country) => country.value === value)
      ?.avatar || ""
  );
}
function getCountryCode(value: string) {
  return (
    transformedArabicCountries.value?.find((country) => country.value === value)
      ?.value || ""
  );
}
const selectedCountry = ref(transformedArabicCountries.value[0]);
const phoneCode = ref("");
const phoneNumber = ref("");

console.log("phoneCode: ", phoneCode);
const fullPhoneNumber = computed(
  () => `${selectedCountry.value.value}${phoneNumber.value}`
);
const isValidPhone = computed(() => {
  try {
    const parsed = parsePhoneNumberFromString(fullPhoneNumber.value);
    return parsed ? parsed.isValid() : false;
  } catch {
    return false;
  }
});
</script>
