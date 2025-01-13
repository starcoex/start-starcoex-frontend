"use client";

import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
      email
      password
      phone_number
    }
  }
`;
