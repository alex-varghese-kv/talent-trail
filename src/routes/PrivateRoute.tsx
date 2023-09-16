import React, { FC, Suspense, useState } from 'react';
import { Navbar } from 'Components/Navbar/Navbar';
import { pages } from 'config/pages';
import { Route, Routes, redirect } from 'react-router-dom';
import { TopNavbar } from 'Components/TopNavbar/TopNavbar';

const PrivateRoute: FC = (): any => {
  const [showSideNav, setshowSideNav] = useState(false);
  const [showTopNav, setshowTopNav] = useState(true);
  const token = localStorage.getItem('token');
  if (!token) {
    // return redirect("/login");
  }
  return (
    <div>
      <div className="h-screen w-full flex">
        {/* <TopNavbar isOpen={showSideNav} setIsOpen={setshowSideNav} /> */}
        <Navbar isOpen={showTopNav} setIsOpen={setshowTopNav} />
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
