import { DefaultApolloClient } from "@vue/apollo-composable";
import { defineNuxtPlugin } from "#app";
import { apolloClient, createApolloClient } from "~/lib/apollo.config";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  // const httpLink = createHttpLink({
  //   uri: "http://makanak.afqalryiada.com/graphql",
  // });

  // // console.log(runtimeConfig.apollo?.clientConfigs?.default?.httpEndpoint);
  console.clear();
  console.log(
    "runtimeConfig: ",
    runtimeConfig.apollo?.clientConfigs.default.httpEndpoint
  );
  // // Cache implementation
  // const cache = new InMemoryCache();

  // // Create the apollo client
  // const apolloClient = new ApolloClient({
  //   link: httpLink,
  //   cache,
  // });
  const apolloClient = createApolloClient(
    "token-gust-here",
    runtimeConfig.apollo?.clientConfigs.default.httpEndpoint
  );

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
