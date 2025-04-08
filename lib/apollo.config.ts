import { InMemoryCache } from "@apollo/client/cache";
import { ApolloClient, createHttpLink } from "@apollo/client/core";
import fetch from "cross-fetch";
import { setContext } from "@apollo/client/link/context";

// const runtimeConfig = useAppConfig();

export const createApolloClient = (token: string, uri: string) => {
  const httpLink = createHttpLink({
    //   uri: "http://makanak.afqalryiada.com/graphql",
    uri,
    fetch,
  });

  // auth
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        // authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    ssrMode: typeof window === "undefined",
  });
};
