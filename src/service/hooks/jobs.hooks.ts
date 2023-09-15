import { GetApplication, GetCandidateQuery, GetCandidates, GetJobs } from "types/jobs";
import { UseGraphQlQuery } from "./hooks";
import { GET_JOBS, GET_CANDIDATES, GET_APPLICATION } from "service/query/jobs";
import { GET_CANDIDATE } from "service/query/candidate";

const useGetJobs: GetJobs = (config) => {
  return UseGraphQlQuery(GET_JOBS, config);
};
const useGetCandidates: GetCandidates = (config) => {
  return UseGraphQlQuery(GET_CANDIDATES, config);
};
const getApplication: GetApplication = (config) => {
  return UseGraphQlQuery(GET_APPLICATION, config);
};

const useGetCandidate: GetCandidateQuery = (config) => {
  return UseGraphQlQuery(GET_CANDIDATE, config);
};

export { useGetJobs, useGetCandidates, getApplication, useGetCandidate };
