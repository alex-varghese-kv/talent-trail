import React from "react";

const Header = () => {
  return (
    <header className="theme-main-menu menu-overlay sticky-menu">
      <div className="inner-content position-relative">
        <div className="top-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <a className="d-flex align-items-center" href="index.html">
                <img
                  alt="logo"
                  width="119"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="src/assets/logo_047ea5.png"
                />
              </a>
            </div>
            <div className="right-widget ms-auto ms-lg-0 order-lg-2">
              <ul className="d-flex align-items-center style-none">
                <li>
                  <a
                    href="#"
                    className="fw-500 text-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </a>
                </li>
                <li className="d-none d-md-block ms-4">
                  <a className="btn-five" href="register.html">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
