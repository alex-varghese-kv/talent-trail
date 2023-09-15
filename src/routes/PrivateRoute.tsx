import { Navbar } from "Components/Navbar/Navbar";
import { pages } from "config/pages";
import React, { FC, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

const PrivateRoute: FC = () => {
  const [showSideNav, setshowSideNav] = useState(true);

  return (
    <div>
      <Navbar isOpen={showSideNav} setIsOpen={setshowSideNav} />
      {
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {pages.map((page) => {
              return (
                <Route
                  key={page?.title}
                  path={page.path}
                  element={page?.Component}
                />
              );
            })}
          </Routes>
        </Suspense>
      }
      <div>Footer</div>
    </div>
  );
};

export default PrivateRoute;
