import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_GATEWAY_URL } from "@/app/constants/apt";

const client = new ApolloClient({
  uri: `${API_GATEWAY_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
