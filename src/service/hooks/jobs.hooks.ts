import {
  GetApplication,
  GetCandidates,
  GetHotProfile,
  GetJob,
  GetJobs,
} from "types/jobs";
import { UseGraphQlQuery } from "./hooks";
import {
  GET_JOBS,
  GET_CANDIDATES,
  GET_APPLICATION,
  GET_JOB,
  GET_HOT_PROFILE,
} from "service/query/jobs";

const useGetJobs: GetJobs = (config) => {
  return UseGraphQlQuery(GET_JOBS, config);
};

const useGetJob: GetJob = (config) => {
  return UseGraphQlQuery(GET_JOB, config);
};

const useGetCandidates: GetCandidates = (config) => {
  return UseGraphQlQuery(GET_CANDIDATES, config);
};
const getApplication: GetApplication = (config) => {
  return UseGraphQlQuery(GET_APPLICATION, config);
};

const getHotProfiles: GetHotProfile = (config) => {
  return UseGraphQlQuery(GET_HOT_PROFILE, config);
};

export {
  useGetJobs,
  useGetCandidates,
  getApplication,
  useGetJob,
  getHotProfiles,
};
