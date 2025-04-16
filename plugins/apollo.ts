import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
type NuxtApolloClient = ApolloClient<unknown>;

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const httpLink = new HttpLink({
    uri: config.public.apollo?.clients?.default?.httpEndpoint,
  });

  const cache = new InMemoryCache();
  const apolloClient: NuxtApolloClient = new ApolloClient({
    link: httpLink,
    cache,
    ssrMode: import.meta.server,
  });

  nuxtApp.provide("apolloClient", apolloClient as NuxtApolloClient);
});
