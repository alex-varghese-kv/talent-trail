import { UseGraphQlQuery } from "./hooks";
import {
  GET_JOBS,
  GET_CANDIDATES,
  GET_APPLICATION,
  GET_JOB,
  GET_HOT_PROFILE,
} from "service/query/jobs";
import {
  GetApplication,
  GetCandidateQuery,
  GetCandidates,
  GetJobs,
  GetRankings,
  GetHotProfile,
} from "types/jobs";
import { GET_CANDIDATE, GET_RANKINGS } from "service/query/candidate";

const useGetJobs: GetJobs = (config) => {
  return UseGraphQlQuery(GET_JOBS, config);
};

const useGetJob: GetJobs = (config) => {
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

const useGetCandidate: GetCandidateQuery = (config) => {
  return UseGraphQlQuery(GET_CANDIDATE, config);
};

const useGetRankings: GetRankings = (config) => {
  return UseGraphQlQuery(GET_RANKINGS, config);
};
export {
  useGetJobs,
  useGetCandidates,
  getApplication,
  useGetCandidate,
  getHotProfiles,
  useGetRankings,
};
