import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://metaphysics-production.artsy.net/v2",
  cache: new InMemoryCache(),
});

export default client;
