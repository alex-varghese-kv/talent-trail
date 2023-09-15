import { QueryHookOptions, QueryResult } from "@apollo/client";

interface Jobs {
  id: string;
  title: string;
  description: string;
  location: string;
  info: any;
}
export interface GetJobList {
  getJobs: Jobs[];
}

export interface Candidate {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  info: any;
}
export interface GetCandidatesData {
  getCandidates: Candidate[];
}
export interface GetJobs {
  (config?: QueryHookOptions): QueryResult<GetJobList>;
}

export interface GetCandidates {
  (config?: QueryHookOptions): QueryResult<GetCandidatesData>;
}

export interface Job {
  title: string;
}

export interface Application {
  id: string;
  timeline: JSON;
  job: Job;
  candidate: Candidate;
}
export interface GetApplications {
  findApplications: Application[];
}
export interface GetApplication {
  (config?: QueryHookOptions): QueryResult<GetApplications>;
}
