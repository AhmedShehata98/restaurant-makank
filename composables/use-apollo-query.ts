import type { OperationVariables } from "@apollo/client/core";
import type { DocumentNode } from "graphql";

export default function useApolloQuery<T = unknown, V = unknown>(
  {
    query,
    variables,
  }: {
    query: DocumentNode;
    variables?: Record<string, V>;
  },
  options?: {
    fetchPolicy?:
      | "cache-first"
      | "network-only"
      | "cache-only"
      | "no-cache"
      | "standby";
  }
) {
  const { $apolloClient } = useNuxtApp();
  const data = ref<T | null>(null);
  const loading = ref(true);
  const error = ref<Error | null>(null);
  const isError = ref<boolean>(false);

  $apolloClient
    .query<T, OperationVariables>({
      query,
      variables,
      fetchPolicy: options?.fetchPolicy || "cache-first",
    })
    .then((result) => {
      loading.value = true;
      isError.value = false;
      data.value = result.data;
    })
    .catch((err) => {
      error.value =
        err instanceof Error ? err : new Error("Failed to fetch data");
      isError.value = true;
    })
    .finally(() => {
      loading.value = false;
    });

  return {
    data,
    error,
    loading,
    isError,
  };
}
