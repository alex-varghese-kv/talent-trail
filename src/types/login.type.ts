import {
  ApolloCache,
  DefaultContext,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
} from "@apollo/client";

export interface PasswordLogin {
  accessToken: string;
  refreshToken?: string;
}

export interface PasswordLoginDetails {
  passwordLogin: PasswordLogin;
}

export interface LoginMutation {
  (config?: MutationHookOptions): MutationTuple<
    PasswordLoginDetails,
    OperationVariables,
    DefaultContext,
    ApolloCache<any>
  >;
}
export interface LoginedUser {
  id: Number;
  email: String;
  groups: String[];
}
