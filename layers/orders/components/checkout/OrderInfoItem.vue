<template>
  <span class="flex items-center justify-between gap-3.5">
    <p
      class="font-semibold text-text-color-default text-start"
      :class="clsx(size === 'normal' ? 'text-[14px]' : 'text-[18px]')"
    >
      {{ label }}
    </p>
    <p
      class="font-semibold text-text-color-default text-end"
      :class="clsx(size === 'normal' ? 'text-[14px]' : 'text-[18px]')"
    >
      {{ formattedPrice }}
    </p>
  </span>
</template>
<script setup lang="ts">
import clsx from "clsx";

const props = defineProps<{
  price: number;
  label: string;
  size: "normal" | "large";
}>();
const formattedPrice = useFormatPrice(props.price);
</script>
