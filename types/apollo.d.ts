import type { ApolloClient } from '@apollo/client/core'

export type ApolloClientType = ApolloClient<unknown>

declare module '#app' {
    interface NuxtApp {
      $apolloClient: ApolloClientType
    }
  }
  
  declare module 'nuxt/schema' {
    interface NuxtApp {
      $apolloClient: ApolloClientType
    }
  }
  
  export {}