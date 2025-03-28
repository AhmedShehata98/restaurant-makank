<template>
  <footer class="app-container flex flex-col pt-[40px]">
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
    >
      <div class="flex flex-col gap-6">
        <div class="w-20">
          <AppLogo logo-theme="DEFAULT" />
        </div>
        <p class="font-semibold text-base text-start text-app-text-default">
          {{ $t("layouts.footer.description") }}
        </p>
        <ul class="w-full flex items-center justify-start gap-3">
          <li class="flex items-center justify-center">
            <NuxtLink>
              <img src="/icons/x-icon.svg" alt="x-icon.svg" />
            </NuxtLink>
          </li>
          <li class="flex items-center justify-center">
            <NuxtLink>
              <img src="/icons/telegram-icon.svg" alt="telegram-icon.svg" />
            </NuxtLink>
          </li>
          <li class="flex items-center justify-center">
            <NuxtLink>
              <img src="/icons/facebook-icon.svg" alt="facebook-icon.svg" />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-3">
        <h4 class="text-[24px] font-medium text-app-text-default">
          {{ $t("layouts.footer.websiteLinks.title") }}
        </h4>
        <ul>
          <li
            class="flex items-center justify-start gap-3 text-app-subtitle-default"
          >
            <UIcon
              name="material-symbols:keyboard-arrow-down-rounded"
              class="rotate-90"
            />
            <p>{{ $t("layouts.footer.websiteLinks.links.home") }}</p>
          </li>
          <li
            class="flex items-center justify-start gap-3 text-app-subtitle-default"
          >
            <UIcon
              name="material-symbols:keyboard-arrow-down-rounded"
              class="rotate-90"
            />
            <p>{{ $t("layouts.footer.websiteLinks.links.contactUs") }}</p>
          </li>
          <li
            class="flex items-center justify-start gap-3 text-app-subtitle-default"
          >
            <UIcon
              name="material-symbols:keyboard-arrow-down-rounded"
              class="rotate-90"
            />
            <p>{{ $t("layouts.footer.websiteLinks.links.menu") }}</p>
          </li>
          <li
            class="flex items-center justify-start gap-3 text-app-subtitle-default"
          >
            <UIcon
              name="material-symbols:keyboard-arrow-down-rounded"
              class="rotate-90"
            />
            <p>{{ $t("layouts.footer.websiteLinks.links.offers") }}</p>
          </li>
          <li
            class="flex items-center justify-start gap-3 text-app-subtitle-default"
          >
            <UIcon
              name="material-symbols:keyboard-arrow-down-rounded"
              class="rotate-90"
            />
            <p>{{ $t("layouts.footer.websiteLinks.links.privacyPolicy") }}</p>
          </li>
          <li
            class="flex items-center justify-start gap-3 text-app-subtitle-default"
          >
            <UIcon
              name="material-symbols:keyboard-arrow-down-rounded"
              class="rotate-90"
            />
            <p>{{ $t("layouts.footer.websiteLinks.links.cart") }}</p>
          </li>
          <li
            class="flex items-center justify-start gap-3 text-app-subtitle-default"
          >
            <UIcon
              name="material-symbols:keyboard-arrow-down-rounded"
              class="rotate-90"
            />
            <p>{{ $t("layouts.footer.websiteLinks.links.featuredDishes") }}</p>
          </li>
          <li
            class="flex items-center justify-start gap-3 text-app-subtitle-default"
          >
            <UIcon
              name="material-symbols:keyboard-arrow-down-rounded"
              class="rotate-90"
            />
            <p>{{ $t("layouts.footer.websiteLinks.links.aboutUs") }}</p>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-3">
        <h4 class="text-[24px] font-medium text-app-text-default">
          {{ $t("layouts.footer.websiteLinks.title") }}
        </h4>
        <ul class="w-full grid grid-cols-2 gap-[14px]">
          <NuxtLink
            v-for="(dish, idx) of menuList"
            :key="idx"
            class="relative flex item-center justify-center h-16 rounded-full overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gray-700/30"
          >
            <img
              :src="dish.thumbnail"
              class="absolute left-0 top-0 w-full h-full bg-cover"
            />
            <!-- <span
              class="absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-40"
            ></span> -->
            <h4
              class="text-[18px] md:text-[20px] 2xl:text-[32px] text-center font-bold text-white justify-items-center self-center isolate"
            >
              {{ dish.title }}
            </h4>
          </NuxtLink>
        </ul>
      </div>
    </section>
    <br class="border-b-2 border-slate-400" />
    <section
      class="flex items-center justify-between gap-4 bg-app-ms-default py-5"
    >
      <p class="text-app-text-default font-semibold text-sm">
        {{ $t("layouts.footer.copyright") }}
      </p>
      <p class="text-app-text-default font-semibold text-sm">
        {{ $t("layouts.footer.termsAndConditions") }}
      </p>
    </section>
  </footer>
</template>
<script setup>
const menuList = computed(() => [
  {
    id: 1,
    title: "المشويات",
    thumbnail:
      "https://copon5sm.com/wp-content/uploads/2023/06/%D8%A7%D9%81%D8%B6%D9%84-%D9%85%D8%B7%D8%A7%D8%B9%D9%85-%D9%85%D8%B4%D9%88%D9%8A%D8%A7%D8%AA-%D9%81%D9%8A-%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9-1-620x300.jpg",
  },
  {
    id: 2,
    title: " آسيوي",
    thumbnail:
      "https://shamlola.s3.amazonaws.com/Shamlola_Images/11/src/9ca3f51813a3d410f303431e252d844647d309c4.jpg",
  },
  {
    id: 3,
    title: "مقبلات",
    thumbnail:
      "https://cdn.img.sarabic.ae/img/103252/76/1032527671_22:0:1899:1056_1920x0_80_0_0_5c968eabd60a72c37d6b31245493ba66.jpg",
  },
  {
    id: 4,
    title: " سوري",
    thumbnail: "https://kalamalqahira.com/app/uploads//2019/09/edfgea.png",
  },
  {
    id: 5,
    title: "برجر",
    thumbnail: "https://kalamalqahira.com/app/uploads//2019/09/edfgea.png",
  },
]);
</script>
