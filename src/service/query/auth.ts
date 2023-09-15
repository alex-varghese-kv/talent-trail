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
const REGISTER_CANDIDATE = gql`
mutation candidateSignUp($name: String!,
  $age: Int!,
  $email: String!,
  $phone: String!,
  $password: String!) {
    candidateSignUp(input: { name: $name, age: $age,email: $email, phone: $phone, password: $password }) {
      id
      name
      age
      email
      phone
  }
}
`;
export { PASSWORD_LOGIN, REGISTER_CANDIDATE };
