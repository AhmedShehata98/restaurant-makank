// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "restaurant-makanak",
      // URL to the GraphQL API
      url: process.env.QRAPH_QL_HOST,
    },
    // Files processed by the extension
    includes: [
      "app.vue",
      "pages/**/*.vue",
      "components/**/*.js",
      "utils/**/*.js",
      "composables/**/*.js",
    ],
  },
};
