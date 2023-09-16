import { gql } from "@apollo/client";

const GET_JOBS = gql`
  query {
    getJobs {
      id
      title
      description
      location {
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

const GET_HOT_PROFILE = gql`
  query {
    getHotProfiles {
      id
      name
      age
      email
      phone
      location{
        country
        state
      }
      leetcode
      github
    }
  }
`;

export { GET_JOBS, GET_CANDIDATES, GET_APPLICATION, GET_JOB, GET_HOT_PROFILE };
