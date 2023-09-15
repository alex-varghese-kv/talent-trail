import { Navbar } from 'Components/Navbar/Navbar';
import { TopNavbar } from 'Components/TopNavbar/TopNavbar';
import { pages } from 'config/pages';
import React, { FC, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const PrivateRoute: FC = () => {
  const [showSideNav, setshowSideNav] = useState(false);
  const [showTopNav, setshowTopNav] = useState(true);

  return (
    <div>
      <div className="h-screen w-full flex">
        {/* <TopNavbar isOpen={showSideNav} setIsOpen={setshowSideNav} /> */}
        {/* <Navbar isOpen={showTopNav} setIsOpen={setshowTopNav} /> */}
        <div
          className="flex-1 mt-14 relative  overflow-auto h-max-content "
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
