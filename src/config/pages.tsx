import { CandidateAboutUs } from 'Containers/CandidateAboutUs';
import { CandidateDashboard } from 'Containers/CandidateDashboard';
import { lazy, ReactElement } from 'react';

const Login = lazy(() => import('../Containers/Login'));
const CreateJob = lazy(() => import('../Containers/CreateJob'));

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
  login: '/login',
  home: '/home',
  about: '/about',
  createJob: '/admin/post-a-new-job',
  savedCandidate: '/admin/saved-candidate',
};

export const pages: Array<Page> = [
  {
    title: 'Login',
    path: pagePaths.dashboard,
    Component: <Login />,
    redirectTo: pagePaths.patientList,
  },
  {
    title: 'Home',
    path: pagePaths.home,
    Component: <CandidateDashboard />,
  },

  {
    title: 'About us',
    path: pagePaths.about,
    Component: <CandidateAboutUs />,
  },
  {
    title: 'Post a New Job',
    path: pagePaths.createJob,
    Component: <CreateJob />,
    // redirectTo: pagePaths.cre,
  },
  // {
  //   title: 'Saved candidates',
  //   path: pagePaths.csavedCandidate,
  //   Component: <CreateJob />,
  //   // redirectTo: pagePaths.cre,
  // },
];
