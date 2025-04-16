<template>
  <section
    class="bg-app-background-500 hidden lg:flex min-h-(--hero-height) overflow-x-hidden"
    style="--hero-height: 65dvh"
  >
    <div
      id="patterm-img"
      class="bg-cover w-full h-(--hero-height) absolute -left-2 -top-2 bg-no-repeat bg-center opacity-5"
      :style="{
        backgroundImage: `url(${withImageSrc(data?.hero?.pattern_image?.id)})`,
      }"
    />
    <!-- image and heading wrapper -->
    <div
      class="app-container mt-16 min-h-(--hero-height) flex-col md:flex-row flex gap-[90px] items-center justify-between isolate"
    >
      <!-- Heading -->
      <div class="flex flex-col items-start w-full lg:w-[55%]">
        <p
          class="font-bold text-xl text-start mb-5"
          :class="
            clsx(
              {
                'text-app-subtitle-default': !isOpenRestaurant,
              },
              {
                'text-app-primary-500': isOpenRestaurant,
              }
            )
          "
        >
          {{ data?.hero.title }}
        </p>
        <HighlightingHeading
          v-if="headingTitle.title && headingTitle.words.length > 0"
          class="text-[54px] font-bold leading-[65px] text-start !justify-start mb-5"
          :title="headingTitle.title"
          :words="headingTitle.words"
          :marked-text-color-class-name="
            isOpenRestaurant
              ? 'text-app-primary-500'
              : 'text-app-subtitle-default'
          "
          :main-text-color-class-name="'text-app-text-default'"
        />
        <p class="mb-5 text-start text-app-text-default">
          {{ data?.hero.description }}
        </p>
        <span class="relative">
          <NuxtLinkLocale
            :href="ROUTES.PRODUCTS"
            class="btn btn-primary px-[38px]"
            :class="
              clsx(
                {
                  '!bg-app-primary-500': isOpenRestaurant,
                },
                {
                  '!bg-app-subtitle-default': !isOpenRestaurant,
                }
              )
            "
          >
            <p class="text-start">
              {{ data?.hero.action }}
            </p>
          </NuxtLinkLocale>
          <span
            class="size-9 border border-dashed rounded-full inline-block absolute -left-4 -bottom-2"
            :class="
              clsx(
                {
                  'border-app-primary-500': isOpenRestaurant,
                },
                {
                  'border-app-subtitle-default': !isOpenRestaurant,
                }
              )
            "
          />
        </span>
      </div>
      <!-- image -->
      <div class="flex items-center justify-center w-full lg:w-[45%]">
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
          <!-- Restaurant is closed now -->

          <div
            v-if="!isOpenRestaurant"
            class="w-[calc(100%-9rem)] h-[180px] p-1 bg-app-background-50 rounded-lg absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
          >
            <span
              class="bg-app-primary-500 size-3 rounded-full aspect-square z-[5] absolute left-2.5 top-2.5"
            />
            <span
              class="bg-app-primary-500 size-3 rounded-full aspect-square z-[5] absolute right-2.5 top-2.5"
            />
            <span
              class="bg-app-primary-500 size-3 rounded-full aspect-square z-[5] absolute left-2.5 bottom-2.5"
            />
            <div
              class="top-4 left-4 border-2 border-app-primary-500 absolute w-[calc(100%-30px)] h-[calc(100%-30px)]"
            >
              <!-- inner box content -->
              <div
                class="w-full h-full p-2 flex items-center justify-center flex-col gap-2"
              >
                <span
                  class="border-[3.5px] border-app-primary-500 border-t-app-background-50 border-l-app-background-50 rounded-br-2xl size-5 aspect-square absolute -left-0.5 -top-0.5"
                />
                <span
                  class="border-[3.5px] border-t-app-background-50 border-r-app-background-50 rounded-bl-2xl border-app-primary-500 size-5 aspect-square absolute -right-0.5 -top-0.5"
                />
                <span
                  class="border-[3.5px] border-b-app-background-50 border-l-app-background-50 rounded-tr-2xl border-app-primary-500 size-5 aspect-square absolute -left-0.5 -bottom-0.5"
                />
                <span
                  class="border-[3.5px] border-b-app-background-50 border-r-app-background-50 rounded-tl-2xl border-app-primary-500 size-5 aspect-square absolute -right-0.5 -bottom-0.5"
                />

                <h1
                  class="text-app-text-default text-[22px] 2xl:text-[32px] font-bold text-center"
                >
                  {{
                    $t("pages.home.sections.hero.restaurantState.closed.title")
                  }}
                </h1>
                <p
                  class="text-app-green-default text-[14px] 2xl:text-[20px] font-bold text-center"
                >
                  {{
                    $t(
                      "pages.home.sections.hero.restaurantState.closed.description"
                    ).concat(": 04:30 PM")
                  }}
                </p>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import clsx from "clsx";
import { contentQuery } from "~/api/graphql/queries/hero";
import { QUERIES_KEYS } from "~/constants/queries-keys";
import { ROUTES } from "~/constants/routes";
import type { HeroSection } from "~/types/hero.types";
const { withImageSrc } = useImageSrc();

const isOpenRestaurant = ref(true);

const { data, status } = await useGraphQL<{ hero: HeroSection }>(
  contentQuery,
  undefined,
  { key: QUERIES_KEYS.HERO }
);

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
</script>
<style scoped>
.hero-image-box {
  width: 200px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  border-radius: 50%; /* Makes it a circle */
  background: linear-gradient(to right, black 50%, transparent 50%) 0 0 / 10px
      2px repeat-x,
    /* top */ linear-gradient(to right, black 50%, transparent 50%) 0 100% /
      10px 2px repeat-x,
    /* bottom */ linear-gradient(to bottom, black 50%, transparent 50%) 0 0 /
      2px 10px repeat-y,
    /* left */ linear-gradient(to bottom, black 50%, transparent 50%) 100% 0 /
      2px 10px repeat-y; /* right */
  background-clip: padding-box;
  border: 2px solid transparent; /* Ensures the element has a border */
  position: relative;
  overflow: hidden;
}

.hero-image-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: white; /* Match the background color of the parent element */
  z-index: -1;
}

.inactive-hero {
  border-color: var(--subtitle-color-default);
}
.inactive-hero::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgb(51 51 51 / 48%);
  width: calc(100% - 2.75rem);
  height: calc(100% - 2.75rem);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
</style>
