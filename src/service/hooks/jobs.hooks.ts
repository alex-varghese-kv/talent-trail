import { GetCandidates, GetJobs } from "types/jobs";
import { UseGraphQlQuery } from "./hooks";
import { GET_JOBS, GET_CANDIDATES } from "service/query/jobs";

const useGetJobs: GetJobs = (config) => {
  return UseGraphQlQuery(GET_JOBS, config);
};
const useGetCandidates: GetCandidates = (config) => {
  return UseGraphQlQuery(GET_CANDIDATES, config);
};

export { useGetJobs, useGetCandidates };
