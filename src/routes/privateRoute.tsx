import { pages } from "config/pages";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const privateRoute = () => {
  return (
    <div>
      <div>Header</div>
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

export default privateRoute;
