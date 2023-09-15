export const CandidateDashboard = () => {
  return (
    <div className="main-page-wrapper">
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
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <a className="d-block" href="index.html">
                          <img
                            alt="logo"
                            width="100"
                            height="34"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/logo_047ea5.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Flogo_04.42350b2e.png&amp;w=256&amp;q=75"
                          />
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="index.html">
                            <span>Home 1</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="home-2.html">
                            <span>Home 2</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="home-3.html">
                            <span>Home 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="home-4.html">
                            <span>Home 4</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="home-5.html">
                            <span>Home 5</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="home-6.html">
                            <span>Home 6</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="home-7.html">
                            <span>Home 7</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Job
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="job-list-v1.html">
                            <span>Job List style -1</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="job-list-v2.html">
                            <span>Job List style -2</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="job-list-v3.html">
                            <span>Job List style -3</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="job-grid-v1.html">
                            <span>Job Grid style -1</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="job-grid-v2.html">
                            <span>Job Grid style -2</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="job-grid-v3.html">
                            <span>Job Grid style -3</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="job-details-v1.html"
                          >
                            <span>Job Details v-1</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="job-details-v2.html"
                          >
                            <span>Job Details v-2</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="job-wishlist.html">
                            <span>Job Wishlist</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown mega-dropdown-sm">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Explore
                      </a>
                      <ul className="dropdown-menu">
                        <li className="row gx-1">
                          <div className="col-md-4">
                            <div className="menu-column">
                              <h6 className="mega-menu-title">Candidates</h6>
                              <ul className="style-none mega-dropdown-list">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="candidates-v1.html"
                                  >
                                    <span>Candidates V-1</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="candidates-v2.html"
                                  >
                                    <span>Candidates V-2</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="candidates-v3.html"
                                  >
                                    <span>Candidates V-3</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="candidates-v4.html"
                                  >
                                    <span>Candidates V-4</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="candidate-profile-v1.html"
                                  >
                                    <span>Candidates Details v-1</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="candidate-profile-v2.html"
                                  >
                                    <span>Candidates Details v-2</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="menu-column">
                              <h6 className="mega-menu-title">Company</h6>
                              <ul className="style-none mega-dropdown-list">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="company-v1.html"
                                  >
                                    <span>Company V-1</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="company-v2.html"
                                  >
                                    <span>Company V-2</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="company-v3.html"
                                  >
                                    <span>Company V-3</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="company-v4.html"
                                  >
                                    <span>Company V-4</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="company-details.html"
                                  >
                                    <span>Company Details</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="menu-column">
                              <h6 className="mega-menu-title">Essential</h6>
                              <ul className="style-none mega-dropdown-list">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="about-us.html"
                                  >
                                    <span>About Us</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="pricing.html"
                                  >
                                    <span>Pricing</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="faq.html">
                                    <span>FAQ</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="register.html"
                                  >
                                    <span>Register</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="blog-v1.html">
                            <span>Blog Standard</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-v2.html">
                            <span>Blog Grid</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-v3.html">
                            <span>Full width</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-details.html">
                            <span>Blog Details</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" role="button" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item dropdown dashboard-menu">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Dashboard
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard/candidate-dashboard.html"
                          >
                            <span>Candidate Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard/employ-dashboard.html"
                          >
                            <span>Employer Dashboard</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="d-md-none mt-5">
                      <a className="btn-five w-100" href="register.html">
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
      <div className="modal fade" id="loginModal" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div className="container">
            <div className="user-data-form modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="text-center">
                <h2>Hi, Welcome Back!</h2>
                <p>
                  Still do not have an account?
                  <a href="register.html">Sign up</a>
                </p>
              </div>
              <div className="form-wrapper m-auto">
                <form className="mt-10">
                  <div className="row">
                    <div className="col-12">
                      <div className="input-group-meta position-relative mb-25">
                        <label>Email*</label>
                        <input
                          type="email"
                          placeholder="james@example.com"
                          name="email"
                        />
                        <div className="help-block with-errors">
                          <div style={{ color: "red" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta position-relative mb-20">
                        <label>Password*</label>
                        <input
                          type="password"
                          placeholder="Enter Password"
                          className="pass_log_id"
                          name="password"
                        />
                        <span className="placeholder_icon">
                          <span className="passVicon">
                            <img
                              alt="icon"
                              loading="lazy"
                              width="24"
                              height="16"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="src/assets/static/media/icon_60.3d29845b.svg"
                            />
                          </span>
                        </span>
                        <div className="help-block with-errors">
                          <div style={{ color: "red" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                        <div>
                          <input type="checkbox" id="remember" />
                          <label htmlFor="remember">Keep me logged in</label>
                        </div>
                        <a href="#">Forget Password?</a>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn-eleven fw-500 tran3s d-block mt-20"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                <div className="d-flex align-items-center mt-30 mb-10">
                  <div className="line"></div>
                  <span className="pe-3 ps-3">OR</span>
                  <div className="line"></div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <a
                      href="#"
                      className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
                    >
                      <img
                        alt="google-img"
                        loading="lazy"
                        width="24"
                        height="25"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="src/assets/google9313.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fgoogle.7000043b.png&amp;w=48&amp;q=75"
                      />
                      <span className="ps-2">Login with Google</span>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="#"
                      className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
                    >
                      <img
                        alt="facebook-img"
                        loading="lazy"
                        width="22"
                        height="23"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="src/assets/facebookb710.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Ffacebook.0b9411a9.png&amp;w=48&amp;q=75"
                      />
                      <span className="ps-2">Login with Facebook</span>
                    </a>
                  </div>
                </div>
                <p className="text-center mt-10">
                  Do not have an account?
                  <a className="fw-500" href="register.html">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-banner-four position-relative pt-170 lg-pt-150 pb-300 lg-pb-150 md-pb-100">
        <div className="container">
          <div className="position-relative pb-70 sm-pb-20">
            <div className="row">
              <div className="col-xxl-7 col-lg-8 m-auto text-center">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  Find your job without any hassle.
                </h1>
                <p
                  className="text-md mt-25 mb-45 md-mb-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Jobs &amp; Job search. Find jobs in global. Executive jobs
                  &amp; work.
                </p>
              </div>
            </div>
            <div className="position-relative">
              <div className="row">
                <div className="col-xxl-8 col-xl-9 col-lg-10 m-auto">
                  <div
                    className="job-search-one style-two position-relative wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <form>
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <div className="input-box">
                            <div className="label">Job Categories</div>
                            <div
                              className="nice-select category false"
                              role="button"
                            >
                              <span className="current">Developer</span>
                              <ul className="list" role="menubar">
                                <li
                                  data-value="developer"
                                  className="option selected focus"
                                  role="menuitem"
                                >
                                  Developer
                                </li>
                                <li
                                  data-value="coder"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Coder
                                </li>
                                <li
                                  data-value="finance"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Finance
                                </li>
                                <li
                                  data-value="accounting"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Accounting
                                </li>
                                <li
                                  data-value="design"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Design
                                </li>
                                <li
                                  data-value="artist"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Artist
                                </li>
                                <li
                                  data-value="application"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Application
                                </li>
                                <li
                                  data-value="marketing"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Marketing
                                </li>
                                <li
                                  data-value="business"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Business
                                </li>
                                <li
                                  data-value="web"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Web
                                </li>
                                <li
                                  data-value="data"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Data
                                </li>
                                <li
                                  data-value="scientist"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Scientist
                                </li>
                                <li
                                  data-value="designer"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Designer
                                </li>
                                <li
                                  data-value="uxui"
                                  className="option false"
                                  role="menuitem"
                                >
                                  UX/UI
                                </li>
                                <li
                                  data-value="manager"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Manager
                                </li>
                                <li
                                  data-value="engineer"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Engineer
                                </li>
                                <li
                                  data-value="writer"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Writer
                                </li>
                                <li
                                  data-value="content"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Content
                                </li>
                                <li
                                  data-value="graphic"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Graphic
                                </li>
                                <li
                                  data-value="management"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Management
                                </li>
                                <li
                                  data-value="product"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Product
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="input-box">
                            <div className="label">Location</div>
                            <div
                              className="nice-select location false"
                              role="button"
                            >
                              <span className="current">Spain, Bercelona</span>
                              <ul className="list" role="menubar">
                                <li
                                  data-value="spain-bercelona"
                                  className="option selected focus"
                                  role="menuitem"
                                >
                                  Spain, Bercelona
                                </li>
                                <li
                                  data-value="usa-new-york"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA,New York
                                </li>
                                <li
                                  data-value="usa-alaska"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA,Alaska
                                </li>
                                <li
                                  data-value="usa-california"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA,California
                                </li>
                                <li
                                  data-value="uk-london"
                                  className="option false"
                                  role="menuitem"
                                >
                                  UK,London
                                </li>
                                <li
                                  data-value="usa-mountain-view"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA, Mountain View
                                </li>
                                <li
                                  data-value="germany-berlin"
                                  className="option false"
                                  role="menuitem"
                                >
                                  Germany, Berlin
                                </li>
                                <li
                                  data-value="usa-cupertino"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA, Cupertino
                                </li>
                                <li
                                  data-value="usa-menlo-park"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA, Menlo Park
                                </li>
                                <li
                                  data-value="usa-redmond"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA, Redmond
                                </li>
                                <li
                                  data-value="uk-cupertino"
                                  className="option false"
                                  role="menuitem"
                                >
                                  UK, Cupertino
                                </li>
                                <li
                                  data-value="usa-san-jose"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA, San Jose
                                </li>
                                <li
                                  data-value="usa-new-york"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA, New York
                                </li>
                                <li
                                  data-value="usa-palo-alto"
                                  className="option false"
                                  role="menuitem"
                                >
                                  USA, Palo Alto
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="input-box border-left">
                            <div className="label">Keywords or Title</div>
                            <input
                              type="text"
                              placeholder="Design, branding"
                              className="keyword"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 sm-mb-10 sm-mt-10">
                          <button
                            type="submit"
                            className="text-uppercase btn-five border6 tran3s m-auto"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="upload-btn position-relative d-flex align-items-center justify-content-between">
                      <span className="fw-500 text-dark me-1">
                        Upload your CV
                      </span>
                      <i className="bi bi-file-earmark-arrow-up"></i>
                      <input
                        type="file"
                        id="uploadCV"
                        accept=".doc,.docx,.pdf,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        name="uploadCV"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="screen"
          loading="lazy"
          width="114"
          height="96"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes shape_01"
          style={{ color: "transparent" }}
          src="src/assets/screen_108b9a.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_10.9b4a1e76.png&amp;w=256&amp;q=75"
        />
        <img
          alt="screen"
          loading="lazy"
          width="82"
          height="71"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes shape_02"
          style={{ color: "transparent" }}
          src="src/assets/screen_1138a2.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_11.a550bf48.png&amp;w=256&amp;q=75"
        />
        <img
          alt="screen"
          loading="lazy"
          width="78"
          height="63"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes shape_03"
          style={{ color: "transparent" }}
          src="src/assets/screen_1284c9.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_12.249998d2.png&amp;w=256&amp;q=75"
        />
        <img
          alt="screen"
          loading="lazy"
          width="108"
          height="87"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes shape_04"
          style={{ color: "transparent" }}
          src="src/assets/screen_136b74.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_13.c1c3ecd6.png&amp;w=256&amp;q=75"
        />
      </div>
      <section className="category-section-one position-relative mt-120 lg-mt-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8">
              <div className="title-three">
                <h2
                  className="wow fadeInUp fw-600 text-dark"
                  data-wow-delay="0.3s"
                >
                  Most Demanding Categories.
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-lg-end">
                <a
                  className="btn-six d-none d-lg-inline-block"
                  href="job-grid-v2.html"
                >
                  Explore all fields
                </a>
              </div>
            </div>
          </div>
          <div className="card-wrapper row justify-content-center mt-45 lg-mt-30">
            <div className="card-style-one text-center mt-20 wow fadeInUp">
              <a
                className="wrapper active"
                data-wow-delay="0.2s"
                href="job-grid-v3.html"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="21"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_63.772e8f20.svg"
                  />
                </div>
                <div className="title fw-500">UI/UX Design</div>
                <div className="total-job">12k+ Jobs</div>
              </a>
            </div>
            <div className="card-style-one text-center mt-20 wow fadeInUp">
              <a
                className="wrapper"
                data-wow-delay="0.3s"
                href="job-grid-v3.html"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="22"
                    height="15"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_64.35fa6b78.svg"
                  />
                </div>
                <div className="title fw-500">Development</div>
                <div className="total-job">7k+ Jobs</div>
              </a>
            </div>
            <div className="card-style-one text-center mt-20 wow fadeInUp">
              <a
                className="wrapper"
                data-wow-delay="0.4s"
                href="job-grid-v3.html"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="20"
                    height="21"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_65.718cba66.svg"
                  />
                </div>
                <div className="title fw-500">Telemarketing</div>
                <div className="total-job">310k+ Jobs</div>
              </a>
            </div>
            <div className="card-style-one text-center mt-20 wow fadeInUp">
              <a
                className="wrapper"
                data-wow-delay="0.5s"
                href="job-grid-v3.html"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="20"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_68.41869509.svg"
                  />
                </div>
                <div className="title fw-500">Marketing</div>
                <div className="total-job">420k+ Jobs</div>
              </a>
            </div>
            <div className="card-style-one text-center mt-20 wow fadeInUp">
              <a
                className="wrapper"
                data-wow-delay="0.6s"
                href="job-grid-v3.html"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_66.64f36c76.svg"
                  />
                </div>
                <div className="title fw-500">Editing</div>
                <div className="total-job">3k+ Jobs</div>
              </a>
            </div>
            <div className="card-style-one text-center mt-20 wow fadeInUp">
              <a
                className="wrapper"
                data-wow-delay="0.7s"
                href="job-grid-v3.html"
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="25"
                    height="25"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_67.569964fa.svg"
                  />
                </div>
                <div className="title fw-500">Accounting</div>
                <div className="total-job">150k+ Jobs</div>
              </a>
            </div>
          </div>
          <div className="text-center mt-40 d-lg-none">
            <a className="btn-six" href="job-grid-v2.html">
              Explore all fields
            </a>
          </div>
        </div>
      </section>
      <section className="fancy-banner-four mt-180 xl-mt-150 lg-mt-100">
        <div className="container">
          <div className="bg-wrapper position-relative wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 order-lg-last ms-auto">
                <div className="text-wrapper wow fadeInRight">
                  <div className="title-one mb-45 lg-mb-30">
                    <h2 className="text-white">
                      Get the job of your dreams quickly.
                    </h2>
                  </div>
                  <p className="text-white text-md mb-55 lg-mb-30">
                    Commonly used in the graphic, print publishing industris for
                    previewing visual mockups. limited social discrimination.
                  </p>
                  <a
                    className="find-job-btn d-flex align-items-center text-white"
                    href="job-list-v1.html"
                  >
                    <span className="fw-500">Find your job.</span>
                    <span className="ms-1">
                      {" "}
                      <u>Explore all</u>
                    </span>
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="img-meta me-xl-4 position-relative">
                  <img
                    alt="screen img"
                    loading="lazy"
                    width="380"
                    height="250"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img shapes screen_01"
                    style={{ color: "transparent" }}
                    src="src/assets/screen_14b368.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_14.b5f13d3e.png&amp;w=828&amp;q=75"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom pb-50 lg-pb-20 mt-110 xl-mt-80 lg-mt-30">
            <div className="row">
              <div className="col-sm-4">
                <div className="counter-block-one mt-25 text-center wow fadeInUp">
                  <div className="main-count fw-500 text-dark">
                    <span className="counter">
                      <div className="d-flex align-items-center justify-content-center">
                        <span></span>
                        <span>
                          <span>million</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="">Completed Jobs</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="counter-block-one mt-25 text-center wow fadeInUp">
                  <div className="main-count fw-500 text-dark">
                    <span className="counter">
                      <div className="d-flex align-items-center justify-content-center">
                        <span></span>
                        <span>
                          <span>k+</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="">Worldwide Client</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="counter-block-one mt-25 text-center wow fadeInUp">
                  <div className="main-count fw-500 text-dark">
                    <span className="counter">
                      <div className="d-flex align-items-center justify-content-center">
                        <span></span>
                        <span>
                          <span>billion</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="">Dollar Payout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="job-listing-one mt-180 xl-mt-150 lg-mt-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="title-one">
                <h2 className="text-dark wow fadeInUp" data-wow-delay="0.3s">
                  New job listing
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex justify-content-lg-end">
                <a
                  className="btn-six d-none d-lg-inline-block"
                  href="job-list-v1.html"
                >
                  Explore all jobs
                </a>
              </div>
            </div>
          </div>
          <div className="job-listing-wrapper border-wrapper mt-80 lg-mt-40 wow fadeInUp">
            <div className="job-list-one position-relative bottom-border">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-3 col-lg-4">
                  <div className="job-title d-flex align-items-center">
                    <a className="logo" href="job-details-v1/1.html">
                      <img
                        alt="logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img m-auto"
                        style={{ color: "transparent" }}
                        src="src/assets/media_22ab06.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_22.142b36c3.png&amp;w=128&amp;q=75"
                      />
                    </a>
                    <a
                      className="title fw-500 tran3s"
                      href="job-details-v1/1.html"
                    >
                      Developer &amp; expert in java c++
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                  <a
                    className="job-duration fw-500"
                    href="job-details-v1/1.html"
                  >
                    Fulltime
                  </a>
                  <div className="job-date">
                    18 Jul 2024 by <a href="job-details-v1/1.html">slack</a>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
                  <div className="job-location">
                    <a href="job-details-v1/1.html">Spain, Bercelona</a>
                  </div>
                  <div className="job-category">
                    <a href="#">Developer , </a>
                    <a href="#">Coder</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                    <a
                      className="save-btn text-center rounded-circle tran3s me-3 cursor-pointer"
                      title="Save Job"
                    >
                      <i className="bi bi-bookmark-dash"></i>
                    </a>
                    <a
                      className="apply-btn text-center tran3s"
                      href="job-details-v1/1.html"
                    >
                      APPLY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-list-one position-relative bottom-border">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-3 col-lg-4">
                  <div className="job-title d-flex align-items-center">
                    <a className="logo" href="job-details-v1/2.html">
                      <img
                        alt="logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img m-auto"
                        style={{ color: "transparent" }}
                        src="src/assets/media_2394bc.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_23.20c2dd37.png&amp;w=128&amp;q=75"
                      />
                    </a>
                    <a
                      className="title fw-500 tran3s"
                      href="job-details-v1/2.html"
                    >
                      Animator &amp; Expert in maya 3D
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                  <a
                    className="job-duration fw-500 part-time"
                    href="job-details-v1/2.html"
                  >
                    Part time
                  </a>
                  <div className="job-date">
                    25 Jul 2024 by <a href="job-details-v1/2.html">google</a>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
                  <div className="job-location">
                    <a href="job-details-v1/2.html">USA,New York</a>
                  </div>
                  <div className="job-category">
                    <a href="#">Finance , </a>
                    <a href="#">Accounting</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                    <a
                      className="save-btn text-center rounded-circle tran3s me-3 cursor-pointer"
                      title="Save Job"
                    >
                      <i className="bi bi-bookmark-dash"></i>
                    </a>
                    <a
                      className="apply-btn text-center tran3s"
                      href="job-details-v1/2.html"
                    >
                      APPLY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-list-one position-relative bottom-border">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-3 col-lg-4">
                  <div className="job-title d-flex align-items-center">
                    <a className="logo" href="job-details-v1/3.html">
                      <img
                        alt="logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img m-auto"
                        style={{ color: "transparent" }}
                        src="src/assets/media_248d5d.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_24.cfe1701c.png&amp;w=128&amp;q=75"
                      />
                    </a>
                    <a
                      className="title fw-500 tran3s"
                      href="job-details-v1/3.html"
                    >
                      Marketing Specialist in SEO &amp; SMM
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                  <a
                    className="job-duration fw-500 part-time"
                    href="job-details-v1/3.html"
                  >
                    Part time
                  </a>
                  <div className="job-date">
                    25 Jan 2024 by <a href="job-details-v1/3.html">pinterest</a>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
                  <div className="job-location">
                    <a href="job-details-v1/3.html">USA,Alaska</a>
                  </div>
                  <div className="job-category">
                    <a href="#">Design , </a>
                    <a href="#">Artist</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                    <a
                      className="save-btn text-center rounded-circle tran3s me-3 cursor-pointer"
                      title="Save Job"
                    >
                      <i className="bi bi-bookmark-dash"></i>
                    </a>
                    <a
                      className="apply-btn text-center tran3s"
                      href="job-details-v1/3.html"
                    >
                      APPLY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-list-one position-relative bottom-border">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-3 col-lg-4">
                  <div className="job-title d-flex align-items-center">
                    <a className="logo" href="job-details-v1/4.html">
                      <img
                        alt="logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img m-auto"
                        style={{ color: "transparent" }}
                        src="src/assets/media_2596e2.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_25.7b6a766b.png&amp;w=128&amp;q=75"
                      />
                    </a>
                    <a
                      className="title fw-500 tran3s"
                      href="job-details-v1/4.html"
                    >
                      Developer &amp; Expert in javascript c+
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                  <a
                    className="job-duration fw-500"
                    href="job-details-v1/4.html"
                  >
                    Fulltime
                  </a>
                  <div className="job-date">
                    10 Feb 2024 by <a href="job-details-v1/4.html">instagram</a>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
                  <div className="job-location">
                    <a href="job-details-v1/4.html">USA,California</a>
                  </div>
                  <div className="job-category">
                    <a href="#">Application , </a>
                    <a href="#">Marketing</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                    <a
                      className="save-btn text-center rounded-circle tran3s me-3 cursor-pointer"
                      title="Save Job"
                    >
                      <i className="bi bi-bookmark-dash"></i>
                    </a>
                    <a
                      className="apply-btn text-center tran3s"
                      href="job-details-v1/4.html"
                    >
                      APPLY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-list-one position-relative bottom-border">
              <div className="row justify-content-between align-items-center">
                <div className="col-xxl-3 col-lg-4">
                  <div className="job-title d-flex align-items-center">
                    <a className="logo" href="job-details-v1/5.html">
                      <img
                        alt="logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img m-auto"
                        style={{ color: "transparent" }}
                        src="src/assets/media_26d7e5.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_26.98d48d45.png&amp;w=128&amp;q=75"
                      />
                    </a>
                    <a
                      className="title fw-500 tran3s"
                      href="job-details-v1/5.html"
                    >
                      Lead &amp; Product Designer
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
                  <a
                    className="job-duration fw-500"
                    href="job-details-v1/5.html"
                  >
                    Fulltime
                  </a>
                  <div className="job-date">
                    15 Feb 2024 by <a href="job-details-v1/5.html">Linkedin</a>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
                  <div className="job-location">
                    <a href="job-details-v1/5.html">UK,London</a>
                  </div>
                  <div className="job-category">
                    <a href="#">Finance , </a>
                    <a href="#">Business</a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4">
                  <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                    <a
                      className="save-btn text-center rounded-circle tran3s me-3 cursor-pointer"
                      title="Save Job"
                    >
                      <i className="bi bi-bookmark-dash"></i>
                    </a>
                    <a
                      className="apply-btn text-center tran3s"
                      href="job-details-v1/5.html"
                    >
                      APPLY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-40 d-lg-none">
            <a className="btn-six" href="job-list-v1.html">
              Explore all jobs
            </a>
          </div>
          <div className="text-center mt-80 lg-mt-30 wow fadeInUp">
            <div className="btn-eight fw-500">
              Do you want to post a job for your company?
              <span>We can help.</span> <a href="register.html">Click here</a>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback-section-one pt-180 xl-pt-150 lg-pt-100">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div
                className="title-one text-center text-md-start mb-65 md-mb-50 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <h2 className="">Trusted by leading startups.</h2>
              </div>
            </div>
          </div>
          <div
            className="slick-slider row feedback-slider-one slick-initialized"
            dir="ltr"
          >
            <div className="slick-list">
              <div
                className="slick-track"
                style={{ width: "400%", left: "-100%" }}
              >
                <div
                  data-index="-2"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: "12.5%" }}
                >
                  <div>
                    <div
                      className="item"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="feedback-block-one color-two">
                        <div className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/media_288f0b.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_28.5c42659c.png&amp;w=384&amp;q=75"
                          />
                        </div>
                        <blockquote className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30 text-white">
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div className="name text-white">
                          <span className="fw-500">Mark Joge ,</span>Marketing
                          Chief
                        </div>
                        <div className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center">
                          <div className="text-md fw-500 text-white">
                            4.8 Awesome
                          </div>
                          <ul className="style-none d-flex">
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: "12.5%" }}
                >
                  <div>
                    <div
                      className="item"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="feedback-block-one color-two">
                        <div className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="239"
                            height="56"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/media_27e298.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_27.493fb16e.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30 text-white">
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div className="name text-white">
                          <span className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center">
                          <div className="text-md fw-500 text-white">
                            4.8 Excellent
                          </div>
                          <ul className="style-none d-flex">
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="0"
                  className="slick-slide slick-active slick-current"
                  aria-hidden="false"
                  style={{ outline: "none", width: "12.5%" }}
                >
                  <div>
                    <div
                      className="item"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="feedback-block-one color-two">
                        <div className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="239"
                            height="56"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/media_27e298.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_27.493fb16e.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30 text-white">
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div className="name text-white">
                          <span className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center">
                          <div className="text-md fw-500 text-white">
                            4.5 Excellent
                          </div>
                          <ul className="style-none d-flex">
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="1"
                  className="slick-slide slick-active"
                  aria-hidden="false"
                  style={{ outline: "none", width: "12.5%" }}
                >
                  <div>
                    <div
                      className="item"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="feedback-block-one color-two">
                        <div className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/media_288f0b.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_28.5c42659c.png&amp;w=384&amp;q=75"
                          />
                        </div>
                        <blockquote className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30 text-white">
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div className="name text-white">
                          <span className="fw-500">Mark Joge ,</span>Marketing
                          Chief
                        </div>
                        <div className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center">
                          <div className="text-md fw-500 text-white">
                            4.8 Awesome
                          </div>
                          <ul className="style-none d-flex">
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="2"
                  className="slick-slide"
                  aria-hidden="true"
                  style={{ outline: "none", width: "12.5%" }}
                >
                  <div>
                    <div
                      className="item"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="feedback-block-one color-two">
                        <div className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="239"
                            height="56"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/media_27e298.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_27.493fb16e.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30 text-white">
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div className="name text-white">
                          <span className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center">
                          <div className="text-md fw-500 text-white">
                            4.8 Excellent
                          </div>
                          <ul className="style-none d-flex">
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="3"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: "12.5%" }}
                >
                  <div>
                    <div
                      className="item"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="feedback-block-one color-two">
                        <div className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="239"
                            height="56"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/media_27e298.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_27.493fb16e.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30 text-white">
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div className="name text-white">
                          <span className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center">
                          <div className="text-md fw-500 text-white">
                            4.5 Excellent
                          </div>
                          <ul className="style-none d-flex">
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="4"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: "12.5%" }}
                >
                  <div>
                    <div
                      className="item"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="feedback-block-one color-two">
                        <div className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/media_288f0b.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_28.5c42659c.png&amp;w=384&amp;q=75"
                          />
                        </div>
                        <blockquote className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30 text-white">
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div className="name text-white">
                          <span className="fw-500">Mark Joge ,</span>Marketing
                          Chief
                        </div>
                        <div className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center">
                          <div className="text-md fw-500 text-white">
                            4.8 Awesome
                          </div>
                          <ul className="style-none d-flex">
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="5"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: "12.5%" }}
                >
                  <div>
                    <div
                      className="item"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="feedback-block-one color-two">
                        <div className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="239"
                            height="56"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="src/assets/media_27e298.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_27.493fb16e.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30 text-white">
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div className="name text-white">
                          <span className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center">
                          <div className="text-md fw-500 text-white">
                            4.8 Excellent
                          </div>
                          <ul className="style-none d-flex">
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star-fill"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none sm-mt-30">
            <li className="prev_b slick-arrow">
              <i className="bi bi-arrow-left"></i>
            </li>
            <li className="next_b slick-arrow">
              <i className="bi bi-arrow-right"></i>
            </li>
          </ul>
        </div>
      </section>
      <section className="text-feature-one position-relative pt-180 xl-pt-150 lg-pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last">
              <div className="ps-lg-4 wow fadeInRight">
                <div className="title-one">
                  <div className="sub-title">Looking for an expert?</div>
                  <h2 className="text-dark">Find top talents from jobi.</h2>
                </div>
                <div
                  className="accordion accordion-style-one mt-25"
                  id="accordionOne"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading-one">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-one"
                        aria-expanded="true"
                        aria-controls="collapse-one"
                      >
                        Seamless Search
                      </button>
                    </div>
                    <div
                      id="collapse-one"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading-one"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="accordion-body">
                        <p>
                          It only takes 5 minutes. Set-up is smooth and simple,
                          with fully customisable page design to reflect your
                          brand. It only takes 5 minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading-two">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-two"
                        aria-expanded="false"
                        aria-controls="collapse-two"
                      >
                        Hire top talents
                      </button>
                    </div>
                    <div
                      id="collapse-two"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading-two"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="accordion-body">
                        <p>
                          Practice what you learned on realistic lorem quis test
                          questions testing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="btn-seven border6 mt-70 lg-mt-40"
                  href="candidates-v2.html"
                >
                  Find Talents
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-8 m-auto order-lg-first">
              <div className="img-data position-relative me-xl-5 md-mt-20">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      alt="image"
                      loading="lazy"
                      width="320"
                      height="460"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img mt-35 md-mt-20 wow fadeInLeft"
                      style={{ color: "transparent" }}
                      src="src/assets/img_113078.jpg?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fimg_11.9a9b27b5.jpg&amp;w=640&amp;q=75"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      alt="image"
                      loading="lazy"
                      width="316"
                      height="383"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img mt-35 md-mt-20 wow fadeInDown"
                      style={{ color: "transparent" }}
                      src="src/assets/img_12babb.jpg?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fimg_12.02e73ce9.jpg&amp;w=640&amp;q=75"
                    />
                    <img
                      alt="image"
                      loading="lazy"
                      width="200"
                      height="219"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img mt-35 md-mt-20 wow fadeInUp"
                      style={{ color: "transparent" }}
                      src="src/assets/img_131927.jpg?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fimg_13.3ddabcd5.jpg&amp;w=640&amp;q=75"
                    />
                  </div>
                </div>
                <img
                  alt="shape"
                  loading="lazy"
                  width="47"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img shapes shape_02"
                  style={{ color: "transparent" }}
                  src="src/assets/static/media/shape_06.269d8f2d.svg"
                />
                <img
                  alt="shape"
                  loading="lazy"
                  width="54"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img shapes shape_03"
                  style={{ color: "transparent" }}
                  src="src/assets/static/media/shape_21.e6dcf307.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section position-relative mt-180 xl-mt-150 lg-mt-100 mb-150 lg-mb-100">
        <div className="container">
          <div className="title-one text-center">
            <h2 className="text-dark wow fadeInUp" data-wow-delay="0.3s">
              Questions &amp; Answers
            </h2>
          </div>
          <div className="bg-wrapper mt-60 lg-mt-40">
            <div className="accordion accordion-style-two" id="accordionTwo">
              <div className="accordion-item">
                <div className="accordion-header" id="heading-One">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-One"
                    aria-expanded="true"
                    aria-controls="collapse-One"
                  >
                    How does the free trial work?
                  </button>
                </div>
                <div
                  id="collapse-One"
                  className="accordion-collapse collapse show"
                  aria-labelledby="heading-One"
                  data-bs-parent="#accordionTwo"
                >
                  <div className="accordion-body">
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading-Two">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-Two"
                    aria-expanded="false"
                    aria-controls="collapse-Two"
                  >
                    How do you find different criteria in your process?
                  </button>
                </div>
                <div
                  id="collapse-Two"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-Two"
                  data-bs-parent="#accordionTwo"
                >
                  <div className="accordion-body">
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading-Three">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-Three"
                    aria-expanded="false"
                    aria-controls="collapse-Three"
                  >
                    What do you look for in a founding team?
                  </button>
                </div>
                <div
                  id="collapse-Three"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-Three"
                  data-bs-parent="#accordionTwo"
                >
                  <div className="accordion-body">
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading-Four">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-Four"
                    aria-expanded="false"
                    aria-controls="collapse-Four"
                  >
                    Do you recommend Pay as you go or Pre pay?
                  </button>
                </div>
                <div
                  id="collapse-Four"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-Four"
                  data-bs-parent="#accordionTwo"
                >
                  <div className="accordion-body">
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="heading-Five">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-Five"
                    aria-expanded="false"
                    aria-controls="collapse-Five"
                  >
                    What do I get for $0 with my plan?
                  </button>
                </div>
                <div
                  id="collapse-Five"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-Five"
                  data-bs-parent="#accordionTwo"
                >
                  <div className="accordion-body">
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-50 sm-mt-40 wow fadeInUp">
            <div className="btn-eight style-two fw-500">
              Don’t find the answer? We can help.
              <a href="faq.html">Click here</a>
            </div>
          </div>
        </div>
      </section>
      <section className="job-portal-intro">
        <div className="container">
          <div className="wrapper bottom-border top-border pt-60 lg-pt-40 pb-65 lg-pb-40">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div
                  className="text-center text-lg-start wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h2>Most complete job portal.</h2>
                  <p className="text-md m0 md-pb-20">
                    Signup and start find your job or talents.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <ul className="btn-group style-none d-flex justify-content-center justify-content-lg-end">
                  <li className="me-2">
                    <a className="btn-seven border6" href="job-list-v1.html">
                      Looking for job?
                    </a>
                  </li>
                  <li className="ms-2">
                    <a className="btn-five border6" href="register.html">
                      Post a job
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-one">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-3 footer-intro mb-15">
                <div className="logo mb-25">
                  <a className="d-flex align-items-center" href="index.html">
                    <img
                      alt="logo"
                      width="119"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="src/assets/logo_047ea5.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Flogo_04.42350b2e.png&amp;w=256&amp;q=75"
                    />
                  </a>
                </div>
                <a href="#" className="email fw-500">
                  jobisupport@new.com
                </a>
                <img
                  alt="shape"
                  loading="lazy"
                  width="53"
                  height="53"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img mt-50 sm-mt-30 sm-mb-20"
                  style={{ color: "transparent" }}
                  src="src/assets/static/media/shape_28.761e9e53.svg"
                />
              </div>
              <div className="col-lg-2 col-sm-4 mb-20">
                <h5 className="footer-title">Services​</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <a href="job-grid-v2.html">Browse Jobs</a>
                  </li>
                  <li>
                    <a href="company-v1.html">Companies</a>
                  </li>
                  <li>
                    <a href="candidates-v1.html">Candidates</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-4 mb-20">
                <h5 className="footer-title">Company</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <a href="about-us.html">About us</a>
                  </li>
                  <li>
                    <a href="blog-v2.html">Blogs</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ’s</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4 mb-20">
                <h5 className="footer-title">Support</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <a href="contact.html">Terms of use</a>
                  </li>
                  <li>
                    <a href="contact.html">Terms &amp; conditions</a>
                  </li>
                  <li>
                    <a href="contact.html">Privacy</a>
                  </li>
                  <li>
                    <a href="contact.html">Cookie policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 order-lg-3 mb-15">
                <ul className="style-none d-flex order-lg-last justify-content-center justify-content-lg-end social-icon">
                  <li>
                    <a href="#">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 order-lg-1 mb-15">
                <ul className="d-flex style-none bottom-nav justify-content-center justify-content-lg-start">
                  <li>
                    <a href="contact.html">Privacy &amp; Terms.</a>
                  </li>
                  <li>
                    <a href="contact.html"> Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 order-lg-2">
                <p className="text-center mb-15">
                  Copyright @ 2023 misfits inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
