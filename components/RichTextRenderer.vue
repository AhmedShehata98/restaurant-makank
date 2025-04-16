<script setup lang="tsx">
import { ref, onMounted } from "vue";

const props = defineProps<{ htmlString: string }>();
const vueNodes = ref<VNode[]>([]);

onMounted(() => {
  vueNodes.value = htmlToVueVNodes(props.htmlString);
});
</script>

<template>
  <div class="prose w-full max-w-full">
    <h5 v-if="htmlString && typeof htmlString !== 'string'">
      Oops ,Sorry the data is not a string
    </h5>
    <template v-if="vueNodes.length >= 1">
      <template v-for="(node, index) in vueNodes" :key="index">
        <component :is="node" />
      </template>
    </template>
    <template v-else>
      <paragraphs-skeleton />
    </template>
  </div>
</template>
