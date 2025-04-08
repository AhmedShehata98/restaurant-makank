<template>
    <ul
        class="w-full md:grid max-md:flex max-md:flex-col md:grid-cols-2 gap-5 mt-3"
    >
        <!-- Order Card -->
        <li class="flex flex-col">
            <h4 class="text-app-primary-500 text-base font-bold mb-3">
                {{
                    t(
                        "pages.profile.ordersContent.currentOrdersContent.orderDetails.orderData.title",
                    )
                }}
            </h4>
            <span class="flex items-center justify-start gap-1.5 mb-1">
                <p class="text-base font-medium text-text-color-default">
                    {{
                        t(
                            "pages.profile.ordersContent.currentOrdersContent.orderDetails.orderData.orderDate",
                        )
                    }}:
                </p>
                <p class="text-base font-medium text-text-color-default">
                    {{ order.orderDate }}
                </p>
            </span>
            <span class="flex items-center justify-start gap-1.5 mb-1">
                <p class="text-base font-medium text-text-color-default">
                    {{
                        t(
                            "pages.profile.ordersContent.currentOrdersContent.orderDetails.orderData.ShippingToHome",
                        )
                    }}:
                </p>
            </span>
            <span class="flex items-center justify-start gap-1.5 mb-1">
                <p class="text-base font-medium text-text-color-default">
                    {{
                        t(
                            "pages.profile.ordersContent.currentOrdersContent.orderDetails.orderData.orderNo",
                        )
                    }}:
                </p>
                <p class="text-base font-medium text-text-color-default">
                    {{ "#" + order.orderNo }}
                </p>
            </span>
        </li>

        <!-- User data -->
        <li class="flex flex-col">
            <h4 class="text-app-primary-500 text-base font-bold mb-3">
                {{
                    t(
                        "pages.profile.ordersContent.currentOrdersContent.orderDetails.meData.title",
                    )
                }}
            </h4>
            <span class="flex items-center justify-start gap-1.5 mb-1">
                <p class="text-base font-medium text-text-color-default">
                    {{ user.name }}
                </p>
            </span>
            <span class="flex items-center justify-start gap-1.5 mb-1">
                <p class="text-base font-medium text-text-color-default">
                    {{ user.phoneNumber }}
                </p>
            </span>
            <span class="flex items-center justify-start gap-1.5 mb-1">
                <p class="text-base font-medium text-text-color-default">
                    {{ user.address }}
                </p>
            </span>
        </li>

        <!-- Payments data -->
        <li class="flex flex-col col-span-2 w-full">
            <h4 class="text-app-primary-500 text-base font-bold mb-3">
                {{
                    t(
                        "pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.title",
                    )
                }}
            </h4>
            <div
                class="flex md:items-center justify-between flex-col md:flex-row rounded-lg gap-1.5 mb-1 md:bg-app-background-600 py-1 px-2"
            >
                <p class="text-base font-medium text-text-color-default">
                    {{ order.payment }}
                </p>
                <span class="w-full md:w-1/2 flex items-center justify-between">
                    <p class="text-base font-medium text-text-color-default">
                        {{
                            t(
                                "pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.total",
                            )
                        }}
                    </p>
                    <p class="text-base font-medium text-app-primary-500">
                        {{ order.total }}
                    </p>
                </span>
            </div>
        </li>
        <!-- Order Pricing Summery -->
        <ul
            class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 col-span-2"
        >
            <li>
                <CheckoutOrderInfoItem
                    class="w-full"
                    :label="
                        t(
                            'pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.delivery',
                        )
                    "
                    size="normal"
                    :price="order.deliveryCoast"
                />
            </li>
            <li>
                <CheckoutOrderInfoItem
                    class="w-full"
                    :label="
                        t(
                            'pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.ordersTotal',
                        )
                    "
                    size="normal"
                    :price="order.total"
                />
            </li>
            <li>
                <CheckoutOrderInfoItem
                    class="w-full"
                    :label="
                        t(
                            'pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.discount',
                        )
                    "
                    size="normal"
                    :price="order.discount"
                />
            </li>
            <li>
                <CheckoutOrderInfoItem
                    class="w-full"
                    :label="
                        t(
                            'pages.profile.ordersContent.currentOrdersContent.orderDetails.paymentData.tax',
                        )
                    "
                    size="normal"
                    :price="order.tax"
                />
            </li>
        </ul>
    </ul>
</template>
<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
    user: {
        name: string;
        address: string;
        phoneNumber: string;
    };
    order: {
        orderDate: string;
        orderNo: string;
        deliveryMetod: string;
        payment: string | null;
        total: number;
        tax: number;
        deliveryCoast: number;
        discount: number;
    };
}>();
</script>
