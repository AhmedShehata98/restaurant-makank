<template>
  <section class="flex flex-col gap-1 app-container">
    <LazyProfileCover
      username="user 1555405"
      avatar-img="https://picsum.photos/800/768"
      cover-img="https://picsum.photos/1200/764"
    />
    <LazySectionsNavButtons />
    <slot />
  </section>
</template>
<script setup lang="ts"></script>
