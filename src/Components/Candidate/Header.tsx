import React from "react";
import { useRecoilValue } from "recoil";
import { loginedUserDetails } from "store/atoms/authAtom";

const Header = ({
  setShowLogin,
}: {
  setShowLogin: (show: boolean) => void;
}) => {
  const loginedDetails = useRecoilValue(loginedUserDetails);
  return (
    <header className="theme-main-menu menu-overlay sticky-menu ">
      <div className="inner-content position-relative">
        <div className="top-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="right-widget ms-auto ms-lg-0 order-lg-2">
              <ul className="d-flex align-items-center style-none">
                {!loginedDetails?.id ? (
                  <>
                    <li>
                      <a
                        className=" btn fw-500 text-white "
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        onClick={() => setShowLogin(true)}
                      >
                        Login
                      </a>
                    </li>
                    <li className="d-none d-md-block ms-4">
                      <a className="btn-five" href="/register">
                        Register
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="d-none d-md-block ms-4">
                    <a className="btn-five" href="/register">
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <nav className="navbar navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-1">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className=" navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle !text-white"
                      href="/home"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle !text-white"
                      href="/jobList"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Job
                    </a>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle !text-white"
                      href="/about"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle !text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Applied Jobs
                    </a>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle !text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Saved Jobs
                    </a>
                  </li>
                  <li className="d-md-none mt-5">
                    <a className="btn-five w-100" href="/register">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
