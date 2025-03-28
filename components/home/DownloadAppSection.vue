<template>
  <section
    class="w-full flex items-center justify-center relative min-h-[351px] mt-[60px] max-lg:py-8"
  >
    <img
      src="~/public/images/download-app-bg.webp"
      alt="download-app-bg.webp"
      class="w-full object-cover absolute top-0 left-0 h-full"
    />
    <span class="bg-slate-200/65 absolute inset-0" />
    <div
      class="app-container flex flex-col md:flex-row items-center justify-between gap-4 isolate"
    >
      <div class="flex flex-col gap-2 w-full md:w-3/5">
        <h2
          class="text-3xl text-center lg:text-start md:text-[44px] font-bold text-app-primary-500"
        >
          {{ $t("pages.home.sections.downloadApp.title") }}
        </h2>
        <p
          class="text-lg md:text-xl text-center lg:text-start font-semibold text-app-text-default"
        >
          {{ $t("pages.home.sections.downloadApp.description") }}
        </p>
        <span
          class="flex items-center justify-center lg:justify-start gap-4 max-lg:mt-6"
        >
          <NuxtLink to="">
            <img src="~/public/images/app-store.svg" alt="app-store.svg" />
          </NuxtLink>
          <NuxtLink to="">
            <img src="~/public/images/play-store.svg" alt="play-store.svg" />
          </NuxtLink>
        </span>
      </div>
      <div class="flex items-center justify-center w-full md:w-2/5">
        <img src="~/public/images/smart-phones.svg" alt="smart-phones.svg" />
      </div>
    </div>
  </section>
</template>
