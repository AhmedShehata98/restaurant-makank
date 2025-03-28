export default defineNuxtConfig({
  components: true, // Enable auto-import for components
  imports: {
    dirs: ["composables", "components", "public", "constants", "stores"], // Auto-import composables
    autoImport: true,
  },
});
