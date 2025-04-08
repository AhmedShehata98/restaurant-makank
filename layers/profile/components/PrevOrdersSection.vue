<template>
    <div class="w-full flex flex-col">
        <!-- Order Tracker -->
        <OrderSummeryCard
            order-no="#1102400"
            order-date="02 فبراير, 2025"
            :is-open="isOpen"
            :is-shown-status="false"
            tracker-bg-color="bg-app-secondary-500"
            @toggle="() => console.log('toggle: ', (isOpen = !isOpen))"
            @on-navigate-order-details="
                $router.push({
                    path: ROUTES.PROFILE__ORDER_DETAILS,
                    query: { 'order-section': 'prev-orders' },
                })
            "
        />
        <div class="w-full md:w-[75%] flex flex-col">
            <!-- Reviews -->
            <div
                class="flex items-center justify-self-start gap-3 mt-5 w-full max-w-full"
            >
                <button
                    type="button"
                    class="btn btn-primary shrink-0 text-base font-bold"
                >
                    {{
                        t(
                            "pages.profile.ordersContent.previousOrdersContent.reOrderAllBtn",
                        )
                    }}
                </button>
                <div
                    class="bg-app-background-600/50 flex items-center gap-3 rounded-xl max-w-full"
                >
                    <button
                        class="size-9 bg-green-default text-white rounded-xl cursor-pointer"
                        @click="isOpenRatingModal = true"
                    >
                        <UIcon name="fe:edit" />
                    </button>
                    <span
                        class="flex items-center justify-center gap-2 max-w-full"
                    >
                        <span class="flex items-center">
                            <p class="pe-2">3.2</p>
                            <StarRating :rating="2" />
                        </span>
                        <p
                            class="text-sm max-md:hidden font-semibold text-text-color-default max-w-full truncate overflow-hidden"
                        >
                            الأطباق شهية جدا بارك الله فيكم وان شاء الله تكولون
                            بنفس الجودة وراح اطل..
                        </p>
                    </span>
                    <button
                        type="button"
                        class="text-app-secondary-500 max-md:hidden text-sm font-semibold px-3 py-2"
                    >
                        {{
                            t(
                                "pages.profile.ordersContent.previousOrdersContent.more",
                            )
                        }}
                    </button>
                </div>
            </div>
            <div
                class="flex flex-col gap-1 mt-5 border-b border-app-background-700 pb-4 md:hidden"
            >
                <p class="text-sm font-bold">
                    {{ $t("pages.profile.mobile.orderDetails.notes") }}
                </p>
                <p class="text-sm font-semibold">
                    الأطباق شهية جدا بارك الله فيكم وان شاء الله تكولون بنفس
                    الجودة وراح اطل..
                </p>
            </div>
            <!-- Order summery -->
            <OrderDetails
                class="mt-5"
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
            <!-- previous Order Items -->
            <ul class="mt-6 mb-10 grid grid-flow-row-dense gap-y-7 w-full">
                <OrderItem v-for="item of cartItems" :item>
                    <template #actionButton>
                        <button
                            type="button"
                            class="bg-black text-white rounded-xl px-3 py-2 max-md:mx-5 flex items-center justify-center gap-2"
                        >
                            <p class="max-md:hidden">
                                {{
                                    t(
                                        "pages.profile.ordersContent.previousOrdersContent.reOrderBtn",
                                    )
                                }}
                            </p>
                            <UIcon name="ion:refresh" />
                        </button>
                    </template>
                </OrderItem>
            </ul>
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
    </div>
</template>
<script setup lang="ts">
import { ROUTES } from "~/constants/routes";

const formattedTotalPrice = useFormatPrice(2799);
const { t } = useI18n();
const isOpen = ref(false);
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
