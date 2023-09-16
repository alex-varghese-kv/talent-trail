import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  from,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://187a-103-214-233-88.ngrok-free.app/talent-trail/api/graphql/",
  // uri: "https://a51b-103-181-238-106.ngrok-free.app/talent-trail/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

export const useAppApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
};
