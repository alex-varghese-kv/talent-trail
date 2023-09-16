import { gql } from "@apollo/client";

const GET_JOBS = gql`
  query {
    getJobs {
      id
      title
      description
      applicants
      location {
        country
        state
      }
      createdAt
      info
      status
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
  query {
    getCandidates {
      id
      name
      age
      email
      phone
      info
    }
  }
`;

const GET_APPLICATION = gql`
  query {
    findApplications {
      id
      timeline
      job {
        title
      }
      candidate {
        id
        name
        age
        email
        phone
      }
    }
  }
`;

export { GET_JOBS, GET_CANDIDATES, GET_APPLICATION };
