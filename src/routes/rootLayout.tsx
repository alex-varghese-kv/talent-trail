import { FC, lazy } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { pagePaths } from "config/pages";

import PrivateRoutes from "./privateRoute";

const Login = lazy(() => import("Containers/Login"));

const rootLayout: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={pagePaths.login} element={<Login />} />
        <Route path="*" element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
};

export default rootLayout;
