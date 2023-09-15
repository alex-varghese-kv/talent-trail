import { gql } from "@apollo/client";

//TODO:to be implemented, this is a sample file
const PASSWORD_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password })
  }
`;
const REGISTER_CANDIDATE = gql`
  mutation candidateSignUp(
    $name: String!
    $age: Int!
    $email: String!
    $phone: String!
    $password: String!
  ) {
    candidateSignUp(
      input: {
        name: $name
        age: $age
        email: $email
        phone: $phone
        password: $password
      }
    ) {
      id
      name
      age
      email
      phone
    }
  }
`;

const LOGGED_IN_USERDETAILS = gql`
  query getLoggedInUser {
    getLoggedInUser {
      id
      email
      groups
    }
  }
`;
export { PASSWORD_LOGIN, REGISTER_CANDIDATE, LOGGED_IN_USERDETAILS };
