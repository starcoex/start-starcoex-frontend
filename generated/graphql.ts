import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Avatars = {
  __typename?: 'Avatars';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  public_id: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type CardInput = {
  cvc: Scalars['String']['input'];
  expMonth: Scalars['Float']['input'];
  expYear: Scalars['Float']['input'];
  number: Scalars['String']['input'];
};

export type CreateChargeInput = {
  amount: Scalars['Float']['input'];
  card: CardInput;
};

export type CreatePaymentInput = {
  impUid?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReservationInput = {
  endDate: Scalars['DateTime']['input'];
  payment: CreateChargeInput;
  startDate: Scalars['DateTime']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation?: InputMaybe<Scalars['String']['input']>;
  phone_number: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPayment: Payment;
  createReservation: Reservation;
  createUser: User;
  removePayment: Payment;
  removeReservation: Reservation;
  removeUser: User;
  updatePayment: Payment;
  updateReservation: Reservation;
  updateUser: User;
  updateUserPassword: User;
};


export type MutationCreatePaymentArgs = {
  createPaymentInput: CreatePaymentInput;
};


export type MutationCreateReservationArgs = {
  createReservationInput: CreateReservationInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemovePaymentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveReservationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdatePaymentArgs = {
  updatePaymentInput: UpdatePaymentInput;
};


export type MutationUpdateReservationArgs = {
  updateReservationInput: UpdateReservationInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserPasswordArgs = {
  updateUserInput: UpdateUserInput;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  impUid?: Maybe<Scalars['String']['output']>;
  merchantUid: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  paidAt: Scalars['DateTime']['output'];
  paymentStatus: PaymentStatus;
};

export enum PaymentStatus {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Paid = 'PAID',
  Ready = 'READY'
}

export type Query = {
  __typename?: 'Query';
  payment: Payment;
  payments: Array<Payment>;
  reservation: Reservation;
  reservations: Array<Reservation>;
  user: User;
  users: Array<User>;
};


export type QueryPaymentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReservationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Reservation = {
  __typename?: 'Reservation';
  created_at: Scalars['DateTime']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  startDate: Scalars['DateTime']['output'];
  timestamp: Scalars['DateTime']['output'];
  updated_at: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type UpdatePaymentInput = {
  id: Scalars['Int']['input'];
  impUid?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReservationInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Int']['input'];
  payment?: InputMaybe<CreateChargeInput>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  passwordConfirmation?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatars?: Maybe<Avatars>;
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  passwordConfirmation?: Maybe<Scalars['String']['output']>;
  phone_number: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Scalars['String']['output']>>;
  updated_at: Scalars['DateTime']['output'];
};

export type CCreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CCreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', name: string, email: string, password: string, phone_number: string } };


export const CCreateUserDocument = gql`
    mutation CCreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    name
    email
    password
    phone_number
  }
}
    `;
export type CCreateUserMutationFn = Apollo.MutationFunction<CCreateUserMutation, CCreateUserMutationVariables>;

/**
 * __useCCreateUserMutation__
 *
 * To run a mutation, you first call `useCCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cCreateUserMutation, { data, loading, error }] = useCCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CCreateUserMutation, CCreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CCreateUserMutation, CCreateUserMutationVariables>(CCreateUserDocument, options);
      }
export type CCreateUserMutationHookResult = ReturnType<typeof useCCreateUserMutation>;
export type CCreateUserMutationResult = Apollo.MutationResult<CCreateUserMutation>;
export type CCreateUserMutationOptions = Apollo.BaseMutationOptions<CCreateUserMutation, CCreateUserMutationVariables>;