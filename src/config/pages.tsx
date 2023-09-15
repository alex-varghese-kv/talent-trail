import { CandidateAboutUs } from "Containers/CandidateAboutUs";
import { CandidateDashboard } from "Containers/CandidateDashboard/CandidateDashboard";
import SavedCandidate from "Containers/SavedCandidate/SavedCandidate";
import { lazy, ReactElement } from "react";

const Login = lazy(() => import("../Containers/Login"));
const CreateJob = lazy(() => import("../Containers/CreateJob"));
const MyJobs = lazy(() => import("../Containers/Staff/MyJobs/MyJobs"));

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
  myJobs: "/admin/my-jobs",
  savedCandidate: "/admin/saved-candidate",
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
];
