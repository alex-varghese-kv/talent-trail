import {
  useQuery,
  useMutation,
  useLazyQuery,
  MutationHookOptions,
  DefaultContext,
  ApolloCache,
  TypedDocumentNode,
  DocumentNode,
  QueryResult,
  QueryHookOptions,
  MutationTuple,
  OperationVariables,
} from "@apollo/client";

import { queryCallbacks } from "service/api/request";
import {
  UseGraphQlQuery as UseGraphQlQueryType,
  UseGraphQlMutation as UseGraphQlMutationType,
  Query,
  LazyQueryConfig,
  UseGraphQlLazyQuery,
} from "types/hooks";

/**
 * Function to get sample data
 * @param {DocumentNode | TypedDocumentNode} query query
 * @param {QueryHookOptions=} config query options (Optional)
 * @returns {QueryResult}
 */
export const UseGraphQlQuery: UseGraphQlQueryType = (query, config) => {
  return useQuery(query, {
    ...queryCallbacks(),
    ...config,
  });
};

export const UseGraphQlMutation: UseGraphQlMutationType = (query, config) => {
  console.log("config", config);
  return useMutation(query, {
    ...queryCallbacks(),
    ...config,
  });
};

export const UseGraphQlMutationWithTpes = <
  TData,
  TVariables,
  TContext = DefaultContext
>(
  query: Query<TData, TVariables>,
  config?: MutationHookOptions<TData, TVariables, TContext>
): MutationTuple<TData, TVariables, TContext, ApolloCache<any>> => {
  return useMutation(query, {
    ...queryCallbacks(),
    ...config,
  });
};

export const UsegraphQlLazyQuery = <
  TData,
  TVariables extends OperationVariables
>(
  query: Query<TData, TVariables>,
  config?: LazyQueryConfig<TData, TVariables>
): UseGraphQlLazyQuery<TData, TVariables> => {
  return useLazyQuery<TData, TVariables>(query, {
    ...queryCallbacks,
    ...config,
  });
};

export const UseGraphQlQueryWithTypes = <
  TData,
  TVariables extends OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  config?: QueryHookOptions<TData, TVariables>
): QueryResult<TData, TVariables> => {
  return useQuery<TData, TVariables>(query, {
    ...queryCallbacks(),
    ...config,
  });
};
