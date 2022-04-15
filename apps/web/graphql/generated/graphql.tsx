import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime custom scalar type */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type FindAccountInput = {
  id: Scalars['Int'];
};

export type FindUserInput = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  user?: Maybe<User>;
};


export type MutationUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  hello?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userAccounts: Array<Account>;
};


export type QueryAccountArgs = {
  input: FindAccountInput;
};


export type QueryUserArgs = {
  input: FindUserInput;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SayHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type SayHelloQuery = { __typename?: 'Query', hello?: string | null };


export const SayHelloDocument = gql`
    query SayHello {
  hello
}
    `;

/**
 * __useSayHelloQuery__
 *
 * To run a query within a React component, call `useSayHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useSayHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSayHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useSayHelloQuery(baseOptions?: Apollo.QueryHookOptions<SayHelloQuery, SayHelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SayHelloQuery, SayHelloQueryVariables>(SayHelloDocument, options);
      }
export function useSayHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SayHelloQuery, SayHelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SayHelloQuery, SayHelloQueryVariables>(SayHelloDocument, options);
        }
export type SayHelloQueryHookResult = ReturnType<typeof useSayHelloQuery>;
export type SayHelloLazyQueryHookResult = ReturnType<typeof useSayHelloLazyQuery>;
export type SayHelloQueryResult = Apollo.QueryResult<SayHelloQuery, SayHelloQueryVariables>;