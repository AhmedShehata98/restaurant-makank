export default defineNuxtConfig({
  components: true, // Enable auto-import for components
  imports: {
    dirs: ["composables"],
    autoImport: true,
  },
});
