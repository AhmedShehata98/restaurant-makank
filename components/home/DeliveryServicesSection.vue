<template>
  <section
    class="mt-[80px] hidden lg:flex flex-wrap items-center justify-between w-full h-fit"
  >
    <div
      class="flex flex-col lg:flex-row items-center justify-between app-container gap-28"
    >
      <div class="w-full lg:w-2/3 flex flex-col items-start justify-start">
        <HighlightingHeading
          main-text-color-class-name="text-app-text-default"
          marked-text-color-class-name="text-app-primary-500"
          :title="headingTitle.title"
          :words="headingTitle.words"
          class="text-[44px] font-bold !text-start !justify-start"
        />
        <ul class="grid w-full grid-rows-1 gap-5 mt-10">
          <li
            class="text-app-text-default text-lg font-semibold bg-app-third-200 rounded-full w-fit px-4 py-1.5"
          >
            {{ t("pages.home.sections.deliveryServices.services.delivery") }}
          </li>
          <li
            class="text-app-text-default text-lg font-semibold bg-app-third-200 rounded-full w-fit px-4 py-1.5"
          >
            {{
              t("pages.home.sections.deliveryServices.services.deliveryTiming")
            }}
          </li>
          <li
            class="text-app-text-default text-lg font-semibold bg-app-third-200 rounded-full w-fit px-4 py-1.5"
          >
            {{ t("pages.home.sections.deliveryServices.services.fees") }}
          </li>
          <li
            class="text-app-text-default text-lg font-semibold bg-app-third-200 rounded-full w-fit px-4 py-1.5"
          >
            {{
              t("pages.home.sections.deliveryServices.services.deliveryType")
            }}
          </li>
        </ul>
        <div class="mt-8 flex items-center justify-start gap-4">
          <button class="btn btn-primary text-lg font-bold !px-10">
            {{ t("pages.home.sections.deliveryServices.primaryButton") }}
          </button>
          <button class="btn text-lg font-bold text-app-text-default !px-10">
            {{ t("pages.home.sections.deliveryServices.secondaryButton") }}
          </button>
        </div>
      </div>
      <div class="w-full lg:w-1/3 h-fit flex items-center justify-center">
        <div id="wrapper" class="relative">
          <img
            src="~/public/images/hand-illustrator.svg"
            alt="hand-illustrator.svg"
            class="absolute size-44 -right-14 z-[5] top-8 rounded-full"
            width="84"
            height="84"
          />
          <figure
            class="relative bg-app-primary-500 px-5 w-[427px] flex items-center justify-center overflow-hidden h-[531px] rounded-[250px]"
          >
            <div
              class="absolute size-44 -left-14 top-10 bg-app-primary-600 rounded-full"
            />
            <img
              src="~/public/images/delivery-services-image.webp"
              alt="delivery-services-image.webp"
              class="w-full h-full object-cover isolate"
            />
            <div
              class="absolute size-36 -right-14 bottom-10 bg-app-primary-600 rounded-full"
            />
          </figure>
          <img
            class="absolute size-36 -left-12 bottom-10 z-[5] rounded-full"
            src="~/public/images/shopping-cart.svg"
            alt="shopping-cart.svg"
            width="84"
            height="84"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { t, tm } = useI18n();
const headingTitle = ref({
  words: Array.isArray(tm("pages.home.sections.hero.titleHighlightWords"))
    ? (
        tm("pages.home.sections.deliveryServices.highlightedWords") as any[]
      ).map((i) => i.loc.source)
    : [],
  title: t("pages.home.sections.deliveryServices.title"),
});
</script>
