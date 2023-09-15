import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const useAppApolloClient = () => {
  return new ApolloClient({
    uri: "https://187a-103-214-233-88.ngrok-free.app/talent-trail/api/graphql/",
    cache: new InMemoryCache(),
  });
};
