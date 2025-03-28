<template>
  <div class="star-rating">
    <span
      v-for="star in maxStars"
      :key="star"
      class="star"
      :class="{ filled: star <= hoverRating || star <= rating }"
      @mouseover="setHover(star)"
      @mouseleave="resetHover"
      @click="updateRating(star)"
    >
      ★
    </span>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  modelValue: Number, // Current rating passed from parent
  maxStars: { type: Number, default: 5 },
});

const emit = defineEmits(["update:modelValue"]);

const rating = ref(props.modelValue); // Local reactive rating
const hoverRating = ref(0); // Temporary hover effect

// Watch for external changes to modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    rating.value = newValue;
  }
);

const setHover = (value) => {
  hoverRating.value = value;
};

const resetHover = () => {
  hoverRating.value = 0;
};

const updateRating = (value) => {
  rating.value = value;
  emit("update:modelValue", value); // Send updated rating to parent
};
</script>

<style scoped>
.star-rating {
  display: flex;
  gap: 5px;
  font-size: 30px;
  cursor: pointer;
}

.star {
  color: #ddd;
  transition: color 0.2s;
}

.star.filled {
  color: gold;
}
</style>
