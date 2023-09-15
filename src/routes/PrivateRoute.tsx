import { Navbar } from "Components/Navbar/Navbar";
import { pages } from "config/pages";
import React, { FC, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

const PrivateRoute: FC = () => {
  const [showSideNav, setshowSideNav] = useState(true);

  return (
    <div>
      <div className="max-h-screen w-full">Header</div>
      <div className="h-screen w-full flex">
        <Navbar isOpen={showSideNav} setIsOpen={setshowSideNav} />
        <div
          className="flex-1 mt-14 relative h-max-content"
          id="modal-container"
        >
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
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default PrivateRoute;
