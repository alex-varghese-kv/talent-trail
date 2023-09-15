import {
  QueryHookOptions,
  MutationHookOptions,
  QueryResult,
  MutationTuple,
  OperationVariables,
  DefaultContext,
  ApolloCache,
  LazyQueryHookOptions,
  QueryTuple,
} from "@apollo/client";
// eslint-disable-next-line import/no-unresolved
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DocumentNode } from "graphql";

export interface UseGraphQlQuery {
  (
    query: DocumentNode | TypedDocumentNode,
    config?: QueryHookOptions
  ): QueryResult;
}

export interface UseGraphQlMutation {
  (
    mutation: DocumentNode | TypedDocumentNode,
    config?: MutationHookOptions
  ): MutationTuple<any, OperationVariables, DefaultContext, ApolloCache<any>>;
}

export type Query<TData, TVariables> =
  | DocumentNode
  | TypedDocumentNode<TData, TVariables>;

export type LazyQueryConfig<
  TData,
  TVariables extends OperationVariables
> = LazyQueryHookOptions<TData, TVariables>;

export type UseGraphQlLazyQuery<
  TData,
  TVariables extends OperationVariables
> = QueryTuple<TData, TVariables>;

export type UseGrphQlMutationReturnType<
  TData,
  TVariables,
  TContext,
  TCache extends ApolloCache<any> = ApolloCache<any>
> = MutationTuple<TData, TVariables, TContext, TCache>;

export interface UseQueryType<TData> {
  (config?: QueryHookOptions): QueryResult<TData>;
}

export interface useMutationType<TData, TVariables> {
  (config?: MutationHookOptions): MutationTuple<TData, TVariables>;
}
