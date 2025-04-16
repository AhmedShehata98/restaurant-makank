<template>
  <span class="flex flex-wrap items-center justify-center gap-2">
    <component :is="elem" v-for="(elem, idx) of titleHighlighter" :key="idx" />
  </span>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  words: string[] | string;
  markedTextColorClassName?: string;
  mainTextColorClassName?: string;
  mainTextClassName?: string;
}>();

function hasMultiWord(text: unknown) {
  const regex = /([\w\u0600-\u06FF]+(?:\s+[\w\u0600-\u06FF]+)+)/;
  return regex.test(text as string);
}

const titleHighlighter = computed(() => {
  const splittedTitle = props.title.split(/\s/);
  const newWords = hasMultiWord(props.words)
    ? props.words[0].split(/\s/)
    : props.words;

  return splittedTitle.map((word) => {
    if (newWords.includes(word)) {
      return h("mark", { class: props.markedTextColorClassName }, word);
    } else {
      return h("p", { class: props.mainTextColorClassName }, word);
    }
  });
});
</script>
<style scoped>
mark {
  background-color: initial;
}
</style>
