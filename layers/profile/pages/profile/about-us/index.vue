<template>
    <section class="flex flex-col app-container">
        <span class="flex items-center justify-start w-full py-3">
            <button
                type="button"
                class="cursor-pointer"
                @click="$router.back()"
            >
                <UIcon name="mdi:chevron-right" size="24" />
            </button>
            <p class="mx-auto text-sm font-semibold pe-7">
                {{ $t("pages.about.title") }}
            </p>
        </span>
        <div class="flex flex-col gap-3 mt-14">
            <span class="flex items-start justify-start gap-2">
                <p
                    class="font-semibold text-xs text-text-color-default/50 shrink-0"
                >
                    <UIcon name="material-symbols-light:map-outline-sharp" />
                    {{ $t("pages.about.location") }}:
                </p>
                <p class="font-semibold text-xs text-text-color-default">
                    الأمير فيصل، السليمانية، الرياض 11545، المملكة العربية
                    السعودية
                </p>
            </span>
            <span class="flex items-start justify-start gap-2">
                <p
                    class="font-semibold text-xs text-text-color-default/50 shrink-0"
                >
                    <UIcon
                        name="material-symbols-light:phone-android-outline"
                    />
                    {{ $t("pages.about.phoneNumber") }}:
                </p>
                <p class="font-semibold text-xs text-text-color-default">
                    +966 123 456 7899
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
                        },
                    )
                "
            >
                <img
                    src="/images/hero.jpeg"
                    class="object-cover overflow-hidden rounded-full"
                    alt="hero.jpeg"
                    style="aspect-ratio: 1 / 1"
                />
            </figure>
        </div>
        <div class="flex w-full flex-col gap-5 mt-5">
            <LazyHighlightingHeading
                :title="$t('pages.about.firstSection.heading')"
                :words="[
                    $t('pages.about.firstSection.headingHilightWords.wordOne'),
                    $t('pages.about.firstSection.headingHilightWords.wordTwo'),
                ]"
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
                :title="$t('pages.about.secondSection.heading')"
                :words="[
                    $t('pages.about.secondSection.headingHilightWords.wordOne'),
                    $t('pages.about.secondSection.headingHilightWords.wordTwo'),
                ]"
                class="font-bold text-xl"
                main-text-color-class-name="text-text-color"
                marked-text-color-class-name="text-app-primary-500"
            />
            <ul class="grid w-full grid-rows-1 gap-5 mt-10">
                <li
                    class="text-app-text-default text-xs font-semibold bg-app-third-200 rounded-full w-full px-4 py-1.5"
                >
                    {{ $t("pages.about.secondSection.points.locations") }}
                </li>
                <li
                    class="text-app-text-default text-xs font-semibold bg-app-third-200 rounded-full w-full px-4 py-1.5"
                >
                    {{ $t("pages.about.secondSection.points.delivery") }}
                </li>
                <li
                    class="text-app-text-default text-xs font-semibold bg-app-third-200 rounded-full w-full px-4 py-1.5"
                >
                    {{ $t("pages.about.secondSection.points.shippingFees") }}
                </li>
                <li
                    class="text-app-text-default text-xs font-semibold bg-app-third-200 rounded-full w-full px-4 py-1.5"
                >
                    {{ $t("pages.about.secondSection.points.ordering") }}
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
                    src="~/public/images/delivery-services-image.webp"
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
const isOpenRestaurant = ref(false);
</script>
