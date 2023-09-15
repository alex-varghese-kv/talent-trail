import { QueryHookOptions, QueryResult } from "@apollo/client";

interface Jobs {
  id: string;
  title: string;
  description: string;
  location: string;
  info: any;
}
export interface GetJobList {
  getJob: Jobs[];
}

interface Candidate {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  info: any;
}
export interface GetCandidate {
  getCandidate: Candidate[];
}
export interface GetJobs {
  (config?: QueryHookOptions): QueryResult<GetJobList>;
}

export interface GetCandidates {
  (config?: QueryHookOptions): QueryResult<GetJobList>;
}
