"use client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/app/lib/apolloClient";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default Provider;
