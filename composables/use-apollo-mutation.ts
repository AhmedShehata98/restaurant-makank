import type { FetchResult } from '@apollo/client/core'
import type { DocumentNode } from 'graphql'

export function useApolloMutation<T = unknown, V = Record<string, unknown>>(mutation: DocumentNode) {
  const { $apolloClient } = useNuxtApp()

  const pending = ref(false)
  const error = ref<Error | null>(null)

  const mutate = async (variables?: V): Promise<{ data: T | null }> => {
    pending.value = true
    error.value = null

    try {
      const result: FetchResult<T> = await $apolloClient.mutate<T>({
        mutation,
        variables,
      })

      return { data: result.data ?? null }
    } catch (err) {
      error.value = err as Error
      return { data: null }
    } finally {
      pending.value = false
    }
  }

  return {
    mutate,
    pending,
    error,
  }
}
