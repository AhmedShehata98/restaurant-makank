<template>
  <div
    class="w-full md:px-16 md:py-11 flex-col flex items-start justify-start min-h-[231px] md:bg-primary-500 relative mt-3 rounded-lg"
  >
    <h3
      class="font-bold text-2xl capitalize text-text-color-default md:text-white"
    >
      {{ $t("pages.orders.signinTitle") }}
    </h3>
    <NuxtImg
      src="../../images/cart-image.webp"
      alt="cart-image.webp"
      class="w-[231px] absolute left-1/4 bottom-0 max-md:hidden"
    />
    <form
      action=""
      class="flex w-full flex-col md:flex-row items-end justify-between gap-5 isolate mt-8 md:mt-auto"
    >
      <span class="w-full flex flex-col items-start justify-start gap-2">
        <p class="text-text-color-default md:text-white">
          {{ $t("pages.orders.singinForm.title") }}
        </p>
        <span
          class="flex w-full items-center justify-start rounded-lg overflow-hidden bg-app-background-500"
        >
          <PhoneInput />
        </span>
      </span>
      <button
        type="button"
        class="min-w-full md:min-w-48 btn btn-black shrink-0 py-2.5"
      >
        {{ $t("pages.orders.singinForm.submitBtn") }}
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
const phoneCountryCodes = [
  {
    label: "Algeria",
    flag: "https://flagcdn.com/w320/dz.png",
    value: "+213",
  },
  {
    country: "Bahrain",
    flag: "https://flagcdn.com/w320/bh.png",
    phoneCode: "+973",
  },
  {
    country: "Comoros",
    flag: "https://flagcdn.com/w320/km.png",
    phoneCode: "+269",
  },
  {
    country: "Djibouti",
    flag: "https://flagcdn.com/w320/dj.png",
    phoneCode: "+253",
  },
  {
    country: "Egypt",
    flag: "https://flagcdn.com/w320/eg.png",
    phoneCode: "+20",
  },
  {
    country: "Iraq",
    flag: "https://flagcdn.com/w320/iq.png",
    phoneCode: "+964",
  },
  {
    country: "Jordan",
    flag: "https://flagcdn.com/w320/jo.png",
    phoneCode: "+962",
  },
  {
    country: "Kuwait",
    flag: "https://flagcdn.com/w320/kw.png",
    phoneCode: "+965",
  },
  {
    country: "Lebanon",
    flag: "https://flagcdn.com/w320/lb.png",
    phoneCode: "+961",
  },
  {
    country: "Libya",
    flag: "https://flagcdn.com/w320/ly.png",
    phoneCode: "+218",
  },
  {
    country: "Mauritania",
    flag: "https://flagcdn.com/w320/mr.png",
    phoneCode: "+222",
  },
  {
    country: "Morocco",
    flag: "https://flagcdn.com/w320/ma.png",
    phoneCode: "+212",
  },
  {
    country: "Oman",
    flag: "https://flagcdn.com/w320/om.png",
    phoneCode: "+968",
  },
  {
    country: "Palestine",
    flag: "https://flagcdn.com/w320/ps.png",
    phoneCode: "+970",
  },
  {
    country: "Qatar",
    flag: "https://flagcdn.com/w320/qa.png",
    phoneCode: "+974",
  },
  {
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/w320/sa.png",
    phoneCode: "+966",
  },
  {
    country: "Somalia",
    flag: "https://flagcdn.com/w320/so.png",
    phoneCode: "+252",
  },
  {
    country: "Sudan",
    flag: "https://flagcdn.com/w320/sd.png",
    phoneCode: "+249",
  },
  {
    country: "Syria",
    flag: "https://flagcdn.com/w320/sy.png",
    phoneCode: "+963",
  },
  {
    country: "Tunisia",
    flag: "https://flagcdn.com/w320/tn.png",
    phoneCode: "+216",
  },
  {
    country: "United Arab Emirates",
    flag: "https://flagcdn.com/w320/ae.png",
    phoneCode: "+971",
  },
  {
    country: "Yemen",
    flag: "https://flagcdn.com/w320/ye.png",
    phoneCode: "+967",
  },
];
const phoneCode = shallowRef(
  phoneCountryCodes.find((p) => p.country === "Saudi Arabia")
);
</script>
