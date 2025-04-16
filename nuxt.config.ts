import tailwindcss from "@tailwindcss/vite";
import typography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "مطعم مكانك",
      htmlAttrs: {
        dir: "rtl",
        lang: "ar",
      },
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-swiper",
    "compodium",
    "@vueuse/nuxt",
    "@nuxtjs/leaflet",
    "@nuxtjs/apollo",
  ],
  
  runtimeConfig: {
    public: {
      apollo: {
        clients: {
          default: {
            // httpEndpoint: 'https://spacex-production.up.railway.app'
            httpEndpoint: process.env.QRAPH_QL_HOST,
          },
        },
      },
      graphql: {
        clients: {
          default: {
            httpEndpoint: process.env.QRAPH_QL_HOST,
            tokenKey: "graphql-token",
          },
        },
      },
      apiBaseUrl: process.env.API_BASE_URL,
      isRestaurantTemplate: process.env.IS_RESTAURANT_TEMPLATE,
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.QRAPH_QL_HOST,
      },
    },
  },

  ui: {
    colorMode: false,
    fonts: true,

    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },

  i18n: {
    locales: [
      { code: "ar", iso: "ar-SA", file: "ar.json", dir: "rtl" },
      { code: "en", iso: "en-US", file: "en.json", dir: "ltr" },
    ],
    defaultLocale: "ar",
    defaultDirection: "rtl",
    strategy: "prefix",
    langDir: "locales/",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      redirectOn: "root",
      fallbackLocale: "ar",
    },
  },
  extends: ["./layers/base-layer", "./layers/products", "./layers/orders"],
  plugins: ["./plugins/dynamic-text-color.ts",'./plugins/graphql-fetch.ts'],
  alias: {
    "@/assets": "./assets",
    "@/utils": "./utils",
    "@/constants": "./constants",
    "@/public": "./public",
    "@/types": "./types",
    "@/composables": "./composables",
    "@/middleware": "./middleware",
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  // ssr: false,
});
