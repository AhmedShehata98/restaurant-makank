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
                {{ $t("pages.profile.mobile.orderDetails.title") }}
            </p>
        </span>
        <!-- Delivery Detials -->
        <div
            class="flex flex-col gap-2 px-5 py-3 rounded-xl border border-app-third-500"
        >
            <span class="flex items-center justify-between gap-4">
                <p class="text-app-secondary-500 text-xs font-semibold">
                    سيارة جيب صغيرة
                </p>
                <span class="flex items-center justify-center gap-2">
                    <p class="text-xs font-semibold text-text-color-default/50">
                        {{
                            $t("pages.profile.mobile.orderDetails.plateNumber")
                        }}
                    </p>
                    <p class="text-xs font-semibold text-text-color-default">
                        145 ع ف ي
                    </p>
                </span>
            </span>
            <div class="flex items-center justify-between gap-4 w-full">
                <figure
                    class="bg-black rounded-full size-12 flex items-center justify-center"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.4616 2.46143V13.9989C17.4616 15.2681 16.4233 16.3064 15.1541 16.3064H2.46289V7.07643C2.46289 4.52664 4.5281 2.46143 7.07789 2.46143H17.4616Z"
                            stroke="white"
                            stroke-width="1.73063"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M25.5379 16.3061V19.7674C25.5379 21.6826 23.9919 23.2286 22.0766 23.2286H20.9229C20.9229 21.9595 19.8845 20.9211 18.6154 20.9211C17.3463 20.9211 16.3079 21.9595 16.3079 23.2286H11.6929C11.6929 21.9595 10.6545 20.9211 9.38539 20.9211C8.11627 20.9211 7.07789 21.9595 7.07789 23.2286H5.92414C4.00892 23.2286 2.46289 21.6826 2.46289 19.7674V16.3061H15.1541C16.4233 16.3061 17.4616 15.2677 17.4616 13.9986V5.92236H19.5845C20.4152 5.92236 21.1767 6.37234 21.5921 7.08766L23.565 10.5374H22.0766C21.4421 10.5374 20.9229 11.0566 20.9229 11.6911V15.1524C20.9229 15.7869 21.4421 16.3061 22.0766 16.3061H25.5379Z"
                            stroke="white"
                            stroke-width="1.73063"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.38563 25.5364C10.66 25.5364 11.6931 24.5033 11.6931 23.2289C11.6931 21.9545 10.66 20.9214 9.38563 20.9214C8.11123 20.9214 7.07812 21.9545 7.07812 23.2289C7.07812 24.5033 8.11123 25.5364 9.38563 25.5364Z"
                            stroke="white"
                            stroke-width="1.73063"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M18.6161 25.5364C19.8905 25.5364 20.9236 24.5033 20.9236 23.2289C20.9236 21.9545 19.8905 20.9214 18.6161 20.9214C17.3417 20.9214 16.3086 21.9545 16.3086 23.2289C16.3086 24.5033 17.3417 25.5364 18.6161 25.5364Z"
                            stroke="white"
                            stroke-width="1.73063"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M25.5388 13.9988V16.3063H22.0776C21.443 16.3063 20.9238 15.7872 20.9238 15.1526V11.6913C20.9238 11.0568 21.443 10.5376 22.0776 10.5376H23.5659L25.5388 13.9988Z"
                            stroke="white"
                            stroke-width="1.73063"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </figure>
                <span class="flex flex-col gap-2 w-fit me-auto">
                    <p class="text-text-color-default font-semibold text-sm">
                        محمود أحمد البديري
                    </p>
                    <p class="text-text-color-default/50 font-medium text-xs">
                        +965 92298313
                    </p>
                </span>
                <span
                    class="flex items-center justify-center gap-2 w-fit justify-self-start"
                >
                    <NuxtLink href="#" class="size-8">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="-0.000976562"
                                width="32"
                                height="32"
                                rx="16"
                                fill="#027A48"
                            />
                            <g clip-path="url(#clip0_2160_5915)">
                                <path
                                    d="M16.0025 5.99902H15.9975C10.4838 5.99902 6.00001 10.484 6.00001 15.999C5.99659 18.1053 6.66332 20.158 7.90376 21.8603L6.65751 25.5753L10.5013 24.3465C12.1317 25.4282 14.0459 26.0032 16.0025 25.999C21.5163 25.999 26 21.5128 26 15.999C26 10.4853 21.5163 5.99902 16.0025 5.99902ZM21.8213 20.1203C21.58 20.8015 20.6225 21.3665 19.8588 21.5315C19.3363 21.6428 18.6538 21.7315 16.3563 20.779C13.4175 19.5615 11.525 16.5753 11.3775 16.3815C11.2363 16.1878 10.19 14.8003 10.19 13.3653C10.19 11.9303 10.9188 11.2315 11.2125 10.9315C11.4538 10.6853 11.8525 10.5728 12.235 10.5728C12.3588 10.5728 12.47 10.579 12.57 10.584C12.8638 10.5965 13.0113 10.614 13.205 11.0778C13.4463 11.659 14.0338 13.094 14.1038 13.2415C14.175 13.389 14.2463 13.589 14.1463 13.7828C14.0525 13.9828 13.97 14.0715 13.8225 14.2415C13.675 14.4115 13.535 14.5415 13.3875 14.724C13.2525 14.8828 13.1 15.0528 13.27 15.3465C13.44 15.634 14.0275 16.5928 14.8925 17.3628C16.0088 18.3565 16.9138 18.674 17.2375 18.809C17.4788 18.909 17.7663 18.8853 17.9425 18.6978C18.1663 18.4565 18.4425 18.0565 18.7238 17.6628C18.9238 17.3803 19.1763 17.3453 19.4413 17.4453C19.7113 17.539 21.14 18.2453 21.4338 18.3915C21.7275 18.539 21.9213 18.609 21.9925 18.7328C22.0625 18.8565 22.0625 19.4378 21.8213 20.1203Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2160_5915">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                        transform="translate(6 5.99902)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </NuxtLink>
                    <NuxtLink href="#" class="size-8">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.35"
                                y="0.349023"
                                width="31.3"
                                height="31.3"
                                rx="15.65"
                                fill="white"
                            />
                            <rect
                                x="0.35"
                                y="0.349023"
                                width="31.3"
                                height="31.3"
                                rx="15.65"
                                stroke="#D6D6D6"
                                stroke-width="0.7"
                            />
                            <path
                                d="M15.2077 18.4572L13.666 19.9989C13.341 20.3239 12.8243 20.3239 12.491 20.0072C12.3993 19.9155 12.3077 19.8322 12.216 19.7405C11.3577 18.8739 10.5827 17.9655 9.89102 17.0155C9.20768 16.0655 8.65768 15.1155 8.25768 14.1739C7.86602 13.2239 7.66602 12.3155 7.66602 11.4489C7.66602 10.8822 7.76602 10.3405 7.96602 9.84053C8.16602 9.33219 8.48268 8.86553 8.92435 8.44886C9.45768 7.92386 10.041 7.66553 10.6577 7.66553C10.891 7.66553 11.1243 7.71553 11.3327 7.81553C11.5493 7.91553 11.741 8.06553 11.891 8.28219L13.8243 11.0072C13.9743 11.2155 14.0827 11.4072 14.1577 11.5905C14.2327 11.7655 14.2743 11.9405 14.2743 12.0989C14.2743 12.2989 14.216 12.4989 14.0993 12.6905C13.991 12.8822 13.8327 13.0822 13.6327 13.2822L12.9993 13.9405C12.9077 14.0322 12.866 14.1405 12.866 14.2739C12.866 14.3405 12.8743 14.3989 12.891 14.4655C12.916 14.5322 12.941 14.5822 12.9577 14.6322C13.1077 14.9072 13.366 15.2655 13.7327 15.6989C14.1077 16.1322 14.5077 16.5739 14.941 17.0155C15.0243 17.0989 15.116 17.1822 15.1993 17.2655C15.5327 17.5905 15.541 18.1239 15.2077 18.4572Z"
                                fill="black"
                            />
                            <path
                                d="M24.3083 21.2742C24.3083 21.5076 24.2667 21.7492 24.1833 21.9826C24.1583 22.0492 24.1333 22.1159 24.1 22.1826C23.9583 22.4826 23.775 22.7659 23.5333 23.0326C23.125 23.4826 22.675 23.8076 22.1667 24.0159C22.1583 24.0159 22.15 24.0242 22.1417 24.0242C21.65 24.2242 21.1167 24.3326 20.5417 24.3326C19.6917 24.3326 18.7833 24.1326 17.825 23.7242C16.8667 23.3159 15.9083 22.7659 14.9583 22.0742C14.6333 21.8326 14.3083 21.5909 14 21.3326L16.725 18.6076C16.9583 18.7826 17.1667 18.9159 17.3417 19.0076C17.3833 19.0242 17.4333 19.0492 17.4917 19.0742C17.5583 19.0992 17.625 19.1076 17.7 19.1076C17.8417 19.1076 17.95 19.0576 18.0417 18.9659L18.675 18.3409C18.8833 18.1326 19.0833 17.9742 19.275 17.8742C19.4667 17.7576 19.6583 17.6992 19.8667 17.6992C20.025 17.6992 20.1917 17.7326 20.375 17.8076C20.5583 17.8826 20.75 17.9909 20.9583 18.1326L23.7167 20.0909C23.9333 20.2409 24.0833 20.4159 24.175 20.6242C24.2583 20.8326 24.3083 21.0409 24.3083 21.2742Z"
                                fill="black"
                            />
                        </svg>
                    </NuxtLink>
                </span>
            </div>
        </div>
        <!-- Notes -->
        <div class="flex flex-col gap-1 mt-5">
            <p class="text-sm font-bold">
                {{ $t("pages.profile.mobile.orderDetails.notes") }}
            </p>
            <p class="text-sm font-semibold">
                الأطباق شهية جدا بارك الله فيكم وان شاء الله تكولون بنفس الجودة
                وراح اطل..
            </p>
        </div>
        <!-- Review Order -->
        <div
            class="flex items-center justify-start gap-3 bg-app-third-200/50 mt-4 w-full px-1.5 py-2 rounded-lg"
        >
            <p
                v-if="
                    $route.query[ROUTER_QUERIES.PROFILE_ORDERS] ===
                    PROFILE_ORDER_SECTIONS.CURRENT
                "
                class="text-sm font-semibold"
            >
                {{ $t("pages.profile.mobile.orderDetails.review") }}
            </p>
            <span
                v-if="
                    $route.query[ROUTER_QUERIES.PROFILE_ORDERS] ===
                    PROFILE_ORDER_SECTIONS.PREVIOUS
                "
                class="flex items-center justify-center gap-3"
            >
                <button
                    type="button"
                    class="flex items-center justify-center px-3 py-2.5 rounded-lg bg-green-default text-white text-2xl"
                    @click="isOpenRatingModal = true"
                >
                    <UIcon name="iconamoon:edit-light" />
                </button>
                <p>3.5</p>
            </span>
            <LazyStarRating v-model="rating" />
        </div>
        <!-- Order summery -->
        <OrderDetails
            :user="{
                name: 'ahmed shehata',
                address: 'الاسكندرية ,مصر',
                phoneNumber: '+201096019665',
            }"
            :order="{
                total: 1700,
                tax: 50,
                payment: '************5887',
                orderNo: '4864441',
                orderDate: '10 April 2024',
                discount: 100,
                deliveryMetod: 'توصيل للمنزل',
                deliveryCoast: 75,
            }"
        />

        <!-- Current Order Items -->
        <span class="flex items-center justify-between gap-3 mt-3">
            <p class="text-sm font-medium text-text-color-default">
                {{
                    $t(
                        "pages.profile.ordersContent.previousOrdersContent.orderDetails.paymentData.total",
                    )
                }}
            </p>
            <p class="text-app-primary-500 text-sm font-semibold">
                {{ formattedTotalPrice }}
            </p>
        </span>
        <ul class="mt-6 mb-10 grid grid-flow-row-dense gap-y-7 w-full">
            <LazyOrderItem v-for="item of cartItems" :item />
        </ul>
        <div class="w-full pb-8 pt-2 flex items-center justify-between gap-3">
            <button
                v-if="
                    $route.query[ROUTER_QUERIES.PROFILE_ORDERS] ===
                    PROFILE_ORDER_SECTIONS.PREVIOUS
                "
                type="button"
                class="btn bg-primary-500 w-full py-3 text-white font-semibold"
            >
                {{ $t("pages.profile.mobile.orderDetails.reOrderAll") }}
            </button>
            <button
                type="button"
                class="btn bg-green-default w-full py-3 text-white font-semibold"
            >
                {{ $t("pages.profile.mobile.orderDetails.customerService") }}
            </button>
        </div>
        <UModal
            :open="isOpenRatingModal"
            :ui="{
                overlay: 'bg-app-background-500/60',
                content: 'rounded-3xl',
            }"
        >
            <template #content>
                <OrderRatingModal
                    @close="() => (isOpenRatingModal = !isOpenRatingModal)"
                />
            </template>
        </UModal>
    </section>
</template>
<script setup lang="ts">
import {
    PROFILE_ORDER_SECTIONS,
    ROUTER_QUERIES,
} from "~/layers/base-layer/constants/router-queries";

const formattedTotalPrice = useFormatPrice(2799);
const rating = ref(0);
const isOpenRatingModal = ref(false);
const cartItems = [
    {
        id: 101,
        thumbnail: "https://picsum.photos/200/300",
        name: "طبق المشاوي المشكلة مع الأرز والسلطات",
        extraQuantity: 2,
        extraItemPrice: 10,
        price: 150,
        category: "المشويات",
    },
    {
        id: 102,
        thumbnail: "https://picsum.photos/200/301",
        name: "بيتزا مارغريتا الإيطالية بالجبنة الطازجة",
        extraQuantity: 3,
        extraItemPrice: 5,
        price: 90,
        category: "البيتزا",
    },
    {
        id: 103,
        thumbnail: "https://picsum.photos/200/302",
        name: "شوربة العدس الساخنة مع الخبز المحمص",
        extraQuantity: 1,
        extraItemPrice: 7,
        price: 40,
        category: "الشوربات",
    },
];
</script>
