import { FC, lazy } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { pagePaths } from "config/pages";

import PrivateRoutes from "./PrivateRoute";
import { CandidateDashboard } from "Containers/CandidateDashboard/CandidateDashboard";
import { CandidateJobList } from "Containers/CandidateJobList/CandidateJobList";

const Login = lazy(() => import("Containers/Login"));

const rootLayout: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={pagePaths.login} element={<Login />} />
        <Route path={pagePaths.home} element={<CandidateDashboard />} />
        <Route path={pagePaths.jobList} element={<CandidateJobList />} />
        <Route path="*" element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
};

export default rootLayout;
