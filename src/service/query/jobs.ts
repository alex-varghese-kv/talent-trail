import { gql } from "@apollo/client";

const GET_JOBS = gql`
  query {
    getJobs {
      id
      title
      description
      location{
        country
        state
      }
      info
    }
  }
`;

const GET_JOB = gql`
  query ($id: ID!) {
    getJob(id: $id) {
      id
      title
      description
      location
      info
    }
  }
`;

const GET_CANDIDATES = gql`
  query ($id: ID!) {
    getCandidate(id: $id) {
      id
      name
      age
      email
      phone
      info
    }
  }
`;

export { GET_JOBS, GET_CANDIDATES };
