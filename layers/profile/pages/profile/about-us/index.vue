<template>
  <section class="flex flex-col app-container">
    <span class="flex items-center justify-start w-full py-3">
      <button type="button" class="cursor-pointer" @click="$router.back()">
        <UIcon name="mdi:chevron-right" size="24" />
      </button>
      <p class="mx-auto text-sm font-semibold pe-7">
        {{ $t("pages.about.title") }}
      </p>
    </span>
    <div class="flex flex-col gap-3 mt-14">
      <span class="flex items-start justify-start gap-2">
        <p class="font-semibold text-xs text-text-color-default/50 shrink-0">
          <UIcon name="material-symbols-light:map-outline-sharp" />
          {{ $t("pages.about.location") }}:
        </p>
        <p class="font-semibold text-xs text-text-color-default">
          {{ data?.global_config.restaurant_address }}
        </p>
      </span>
      <span class="flex items-start justify-start gap-2">
        <p class="font-semibold text-xs text-text-color-default/50 shrink-0">
          <UIcon name="material-symbols-light:phone-android-outline" />
          {{ $t("pages.about.phoneNumber") }}:
        </p>
        <p class="font-semibold text-xs text-text-color-default">
          {{ data?.global_config.restaurant_phone }}
        </p>
      </span>
    </div>
    <div
      class="flex items-center justify-center w-10/12 md:w-[40%] self-center mt-5"
    >
      <figure
        class="relative w-[calc(100%-23px)] p-[23px] h-[calc(100%-23px)] overflow-hidden rounded-full border-2 border-dashed"
        :class="
          clsx(
            {
              'border-app-primary-500': isOpenRestaurant,
            },
            {
              'inactive-hero': !isOpenRestaurant,
            }
          )
        "
      >
        <img
          v-if="data?.hero.image"
          :src="withImageSrc(data?.hero.image.id)"
          class="object-cover overflow-hidden rounded-full"
          alt="hero.jpeg"
          style="aspect-ratio: 1 / 1"
        />
      </figure>
    </div>
    <div class="flex w-full flex-col gap-5 mt-5">
      <LazyHighlightingHeading
        v-if="headingTitle.title"
        :title="headingTitle.title"
        :words="headingTitle.words"
        class="font-bold text-xl"
        main-text-color-class-name="text-text-color"
        marked-text-color-class-name="text-app-primary-500"
      />
      <p class="text-center">
        {{ $t("pages.about.firstSection.description") }}
      </p>
    </div>
    <div class="w-full flex px-10 mt-5 items-center justify-start">
      <img
        src="~/public/images/hand-illustrator.svg"
        alt="hand-illustrator.svg"
        class="size-24 md:size-36 rounded-full"
        width="84"
        height="84"
      />
    </div>
    <div class="flex w-full flex-col gap-5 mt-5">
      <LazyHighlightingHeading
        v-if="headingTitleAboutUs.title"
        :title="headingTitleAboutUs.title"
        :words="headingTitleAboutUs.words"
        class="font-bold text-xl"
        main-text-color-class-name="text-text-color"
        marked-text-color-class-name="text-app-primary-500"
      />
      <ul class="grid w-full grid-rows-1 gap-5 mt-10">
        <li
          v-for="(feature, idx) of data?.about.features"
          :key="idx"
          class="text-app-text-default text-xs font-semibold bg-app-third-200 rounded-full w-full px-4 py-1.5"
        >
          {{ feature }}
        </li>
      </ul>
    </div>
    <div
      id="wrapper"
      class="relative mt-12 w-11/12 overflow-x-hidden md:w-1/2 self-center max-md:pt-20"
    >
      <img
        src="~/public/images/shopping-cart.svg"
        alt="hand-illustrator.svg"
        class="absolute size-28 -left-2 md:-left-16 z-[5] top-0 md:-top-7 rounded-full"
        width="84"
        height="84"
      />
      <figure
        class="relative bg-app-primary-500 px-5 w-full md:w-[427px] flex items-center justify-center overflow-hidden h-[581px] rounded-[250px]"
      >
        <div
          class="absolute size-44 -left-14 top-10 bg-app-primary-600 rounded-full"
        />
        <img
          :src="withImageSrc(data?.about.about_image.id)"
          alt="delivery-services-image.webp"
          class="w-full h-full object-cover isolate"
        />
        <div
          class="absolute size-36 -right-14 bottom-10 bg-app-primary-600 rounded-full"
        />
      </figure>
    </div>
  </section>
</template>
<script setup lang="ts">
import clsx from "clsx";
import { aboutUsPageQuery } from "~/api/graphql/queries/about";
import { QUERIES_KEYS } from "~/constants/queries-keys";
import type { AboutSection } from "~/types/about";
import type { GlobalConfig } from "~/types/global-config";
import type { HeroSection } from "~/types/hero.types";
const isOpenRestaurant = ref(false);
const { withImageSrc } = useImageSrc();
const { data, status } = await useGraphQL<{
  about: Omit<AboutSection, "primary_action" | "secondary_action">;
  hero: Omit<HeroSection, "title" | "action" | "pattern_image">;
  global_config: Omit<
    GlobalConfig,
    "restaurant_logo" | "description" | "terms" | "social_links"
  >;
}>(aboutUsPageQuery, {
  key: QUERIES_KEYS.ABOUT_US_PAGE,
});

const headingTitle = computed(() => {
  if (status.value !== "success")
    return {
      words: [],
      title: "",
    };

  return {
    words: [
      ...(data.value?.hero.subtitle?.matchAll(/<start>(.*?)<\/end>/g) ?? []),
    ]?.map((m) => m[1].trim()),
    title: data.value?.hero.subtitle.replaceAll(/<\/?start>|<\/?end>/g, " "),
  };
});
const headingTitleAboutUs = computed(() => {
  if (status.value !== "success" && !data.value?.about?.description)
    return {
      words: [],
      title: "",
    };

  return {
    words: [
      ...(data.value?.about.description?.matchAll(/<start>(.*?)<\/end>/g) ??
        []),
    ]?.map((m) => m[1].trim()),
    title: data.value?.about.description.replaceAll(/<\/?start>|<\/?end>/g, ""),
  };
});
</script>
