<template>
    <NuxtLinkLocale
        to="#"
        class="flex items-start justify-start gap-4 shadow-lg p-2 rounded-2xl"
    >
        <NuxtImg
            :src="item.thumbnail"
            width="96"
            height="96"
            class="aspect-square object-cover rounded-lg max-md:size-17"
        />
        <div class="flex items-center justify-between flex-1">
            <span class="flex flex-col items-start justify-start">
                <p class="text-app-secondary-500 text-xs font-medium">
                    {{ item.category }}
                </p>
                <h4
                    class="text-sm md:text-xl font-semibold text-text-color-default mb-3"
                >
                    {{ item.name }}
                </h4>
                <span class="flex items-center gap-5">
                    <span
                        class="text-app-primary-500 text-xs md:text-base font-bold"
                        >{{ formattedPrice }}</span
                    >
                    <span
                        class="ml-2 text-app-secondary-500 font-bold text-xs md:text-sm"
                        >( {{ item.extraQuantity }} x
                        {{ item.extraPrice }} )</span
                    >
                </span>
            </span>
            <slot :item="item" name="actionButton" />
        </div>
    </NuxtLinkLocale>
</template>
<script setup lang="ts">
const props = defineProps<{
    item: {
        id: number;
        name: string;
        price: number;
        category: string;
        thumbnail: string;
        extraQuantity: number;
        extraPrice: number;
    };
}>();
const formattedPrice = useFormatPrice(props.item.price);
</script>
