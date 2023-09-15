import { gql } from "@apollo/client";

//TODO:to be implemented, this is a sample file
const PASSWORD_LOGIN = gql`
  mutation passwordLogin($email: String!, $password: String!) {
    passwordLogin(input: { email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;
export { PASSWORD_LOGIN };
