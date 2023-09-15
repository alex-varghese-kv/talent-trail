import { gql } from "@apollo/client";

export const GET_FILE_UPLOAD_URL = gql`
  query GetDocumentUploadUrl(
    $key: String!

  ) {
    getDocumentUploadUrl(
      key: $key
    ) {
      url
      key
      extension
    }
  }
`;

export const CREATE_DOCUMENTS = gql`
  mutation CreateDocument(
  $input:CreateDocumentInput
  ) {
    createDocument(
      input:$input
    ) {
      id
      url
      key
      entityId
   
    }
  }
`;

export const GET_CANDIDATE = gql`
  query GetCandidate(
    $id: Int!

  ) {
    getCandidate(
      id: $id
    ) {
      id
      name
      age
      email
      phone
      info
      onboardingInfo
    }
  }
`;