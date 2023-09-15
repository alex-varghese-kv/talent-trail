import { lazy, ReactElement } from "react";

const Login = lazy(() => import("../Containers/Login"));

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
};

export const pages: Array<Page> = [
  {
    title: "Login",
    path: pagePaths.dashboard,
    Component: <Login />,
    redirectTo: pagePaths.patientList,
  },
];
