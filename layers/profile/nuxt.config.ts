export default defineNuxtConfig({
  imports: {
    dirs: ["composables", "components", "public", "constants", "stores"],
    autoImport: true,
  },
  components: true,
});
