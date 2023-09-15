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

const REGISTER_EMPLOYEE = gql`
  mutation employeeSignUp(
    $name: String!
    $email: String!
    $role: [String]!
    $password: String!
    $experience: Int!
  ) {
    employeeSignUp(
      input: {
        name: $name
        email: $email
        role: $role
        password: $password
        experience: $experience
      }
    ) {
      id
      name
      email
      role
      password
    }
  }
`;

const LOGGED_IN_USERDETAILS = gql`
  query getLoggedInUser {
    getLoggedInUser {
      id
      email
      groups
      name
    }
  }
`;
export {
  PASSWORD_LOGIN,
  REGISTER_CANDIDATE,
  LOGGED_IN_USERDETAILS,
  REGISTER_EMPLOYEE,
};
