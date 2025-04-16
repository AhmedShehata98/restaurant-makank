
import type { UseFetchOptions, AsyncData } from "#app"

// Define GraphQL response structure
interface GraphQLResponse<T> {
  data?: T
  errors?: Array<{ message: string }> | unknown
}

export const useGraphQL = <T = unknown, E = Error, D = T>(
  query: string,
  variables: Record<string, unknown> = {},
  options: UseFetchOptions<GraphQLResponse<T>, E> = {}
): AsyncData<D | null, E | null> => {
  // Define the GraphQL endpoint - you can move this to .env or config
  const config = useRuntimeConfig()
  const graphqlEndpoint = config.public?.graphql?.clients?.default?.httpEndpoint || '/api/graphql'

  // Prepare the request body
  const body = {
    query,
    variables
  }

  // Create a proper type for our transform function
  const defaultTransform = (response: GraphQLResponse<T>): T | undefined => {
    if (response.errors) {
      throw new Error(
        Array.isArray(response.errors)
          ? response.errors.map((e: unknown) => e.message).join(', ')
          : 'GraphQL Error'
      )
    }
    return response.data
  }

  // Merge default options with user-provided options
  const fetchOptions: UseFetchOptions<GraphQLResponse<T>, E> = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
    ...options
  }

  // Handle transform function properly
  const originalTransform = options.transform
  if (originalTransform) {
    fetchOptions.transform = (response: GraphQLResponse<T>) => {
      const transformedData = defaultTransform(response)
      return originalTransform(transformedData as unknown) as unknown
    }
  } else {
    fetchOptions.transform = defaultTransform as unknown
  }

  // Execute the fetch request
  return useFetch<GraphQLResponse<T>, E, D>(graphqlEndpoint, fetchOptions)
}
