import { CandidateAboutUs } from "Containers/CandidateAboutUs/CandidateAboutUs";
import { CandidateDashboard } from "Containers/CandidateDashboard/CandidateDashboard";
import SavedCandidate from "Containers/SavedCandidate/SavedCandidate";
import { CandidateJobList } from "Containers/CandidateJobList/CandidateJobList";
import { lazy, ReactElement } from "react";
import { JobDetails } from "Containers/JobDetails.tsx/JobDetails";
import { CandidateProfileDetails } from "Containers/CandidateProfile/CandidateProfileDetails";

const Login = lazy(() => import("../Containers/Login"));
const CreateJob = lazy(() => import("../Containers/CreateJob"));
const MyJobs = lazy(() => import("../Containers/Staff/MyJobs/MyJobs"));
const InterviewTimeLine = lazy(
  () => import("../Containers/InterviewTimeLine/InterviewTimeLine")
);

interface Page {
  title: string;
  path: string;
  Component: ReactElement;
  permission?: string;
  redirectTo?: string;
}

interface PagePaths {
  [path: string]: string;
}

export const pagePaths: PagePaths = {
  login: "/login",
  home: "/home",
  about: "/about",
  createJob: "/admin/post-a-new-job",
  interviewTimeLine: "/admin/status",
  myJobs: "/admin/my-jobs",
  savedCandidate: "/admin/saved-candidate",
  jobList: "/jobList",
  register: "/register",
  jobDetails: "/jobDetails",
  profile: "/admin/profile"
};

export const pages: Array<Page> = [
  {
    title: "Login",
    path: pagePaths.dashboard,
    Component: <Login />,
    redirectTo: pagePaths.patientList,
  },
  {
    title: "Home",
    path: pagePaths.home,
    Component: <CandidateDashboard />,
  },
  {
    title: "About us",
    path: pagePaths.about,
    Component: <CandidateAboutUs />,
  },
  {
    title: "My Jobs",
    path: pagePaths.myJobs,
    Component: <MyJobs />,
  },
  {
    title: "Post a New Job",
    path: pagePaths.createJob,
    Component: <CreateJob />,
  },
  {
    title: "Saves Candidates",
    path: pagePaths.savedCandidate,
    Component: <SavedCandidate />,
  },
  // {
  //   title: 'Saved candidates',
  //   path: pagePaths.csavedCandidate,
  //   Component: <CreateJob />,
  //   // redirectTo: pagePaths.cre,
  // },
  {
    title: "Job Listing",
    path: pagePaths.jobList,
    Component: <CandidateJobList />,
  },
  {
    title: "Job Timeline",
    path: pagePaths.interviewTimeLine,
    Component: <InterviewTimeLine />,
  },
  {
    title: "Job Details",
    path: pagePaths.jobDetails,
    Component: <JobDetails />,
  },
  {
    title: "Job Details",
    path: pagePaths.profile,
    Component: <CandidateProfileDetails />,
    
  }
];
