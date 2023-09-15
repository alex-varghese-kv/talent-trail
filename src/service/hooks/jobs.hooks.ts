import { GetApplication, GetCandidates, GetJobs } from "types/jobs";
import { UseGraphQlQuery } from "./hooks";
import { GET_JOBS, GET_CANDIDATES, GET_APPLICATION } from "service/query/jobs";

const useGetJobs: GetJobs = (config) => {
  return UseGraphQlQuery(GET_JOBS, config);
};
const useGetCandidates: GetCandidates = (config) => {
  return UseGraphQlQuery(GET_CANDIDATES, config);
};
const getApplication: GetApplication = (config) => {
  return UseGraphQlQuery(GET_APPLICATION, config);
};

export { useGetJobs, useGetCandidates, getApplication };
