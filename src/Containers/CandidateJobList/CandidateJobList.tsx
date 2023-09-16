import Header from "Components/Candidate/Header";
import { JobDetailsRow } from "Components/JobDetailsRow";
import { LoginPage } from "Components/Login/LoginPage";
import { useState } from "react";
import { useGetJobs } from "service/hooks/jobs.hooks";

export const CandidateJobList = () => {
  const jobListData = [
    {
      roleDesc: "Developer &amp; expert in java c++",
      date: "18 Jul 2024",
      location: "Spain, Bercelona",
      salary: "$900 / Monthly ",
    },
    {
      roleDesc: "Animator & Expert in maya 3D",
      date: "18 Jul 2024",
      location: "UK,London",
      salary: "$900 / Monthly ",
    },
    {
      roleDesc: "Marketing Specialist in SEO & SMM",
      date: "18 Jul 2024",
      location: "USA,New York",
      salary: "$900 / Monthly ",
    },
    {
      roleDesc: "Developer & Expert in javascript c+",
      date: "10 Feb 2024",
      location: "USA,Alaska",
      salary: "$900 / Monthly ",
    },
    {
      roleDesc: "Developer &amp; expert in java c++",
      date: "18 Jul 2024",
      location: "USA,California",
      salary: "$900 / Monthly ",
    },
  ];
  const [filters, setFilters] = useState([]);

  const { data, loading } = useGetJobs({
    fetchPolicy: "network-only",
    variables: {
      filter: { ...filters },
    },
  });

  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="main-page-wrapper">
      <Header setShowLogin={setShowLogin} />
      <LoginPage showLogin={showLogin} setShowLogin={setShowLogin} />

      <div className="inner-banner-one position-relative">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-xl-6 m-auto text-center">
                <div className="title-two">
                  <h2 className="text-white">Job Listing</h2>
                </div>
                <ul className="style-none d-flex justify-content-center page-pagination mt-15">
                  <li>We delivered blazing fast & striking work solution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="shape"
          loading="lazy"
          width="83"
          height="94"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes shape_01"
          style={{ color: "transparent" }}
          src="media/shape_02.e6196842.svg"
        />
        <img
          alt="shape"
          loading="lazy"
          width="141"
          height="57"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes shape_02"
          style={{ color: "transparent" }}
          src="media/shape_03.746a3d0c.svg"
        />
      </div>
      <section className="job-listing-three pt-110 lg-pt-80 pb-160 xl-pb-150 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <button
                type="button"
                className="filter-btn w-100 pt-2 pb-2 h-auto fw-500 tran3s d-lg-none mb-40"
                data-bs-toggle="offcanvas"
                data-bs-target="#filteroffcanvas"
              >
                <i className="bi bi-funnel"></i>Filter
              </button>
              <div
                className="filter-area-tab offcanvas offcanvas-start"
                id="filteroffcanvas"
              >
                <button
                  type="button"
                  className="btn-close text-reset d-lg-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
                <div className="main-title fw-500 text-dark">Filter By</div>
                <div className="light-bg border-20 ps-4 pe-4 pt-25 pb-30 mt-20">
                  <div className="filter-block bottom-line pb-25">
                    <a
                      className="filter-title fw-500 text-dark"
                      data-bs-toggle="collapse"
                      href="#collapseLocation"
                      role="button"
                      aria-expanded="false"
                    >
                      Location
                    </a>
                    <div className="" id="collapseLocation">
                      <div className="main-body">
                        <div
                          className="nice-select false"
                          role="button"
                          tabIndex={0}
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
                  </div>
                  <div className="filter-block bottom-line pb-25 mt-25">
                    <a
                      className="filter-title fw-500 text-dark"
                      data-bs-toggle="collapse"
                      href="#collapseExp"
                      role="button"
                      aria-expanded="false"
                    >
                      Experience
                    </a>
                    <div className=" " id="collapseExp">
                      <div className="main-body">
                        <ul className="style-none filter-input">
                          <li>
                            <input
                              type="checkbox"
                              value="Fresher"
                              name="Fresher"
                            />
                            <label>
                              Fresher<span>6</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              value="Intermediate"
                              name="Intermediate"
                            />
                            <label>
                              Intermediate<span>4</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              value="No-Experience"
                              name="No-Experience"
                            />
                            <label>
                              No-Experience<span>6</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              value="Internship"
                              name="Internship"
                            />
                            <label>
                              Internship<span>6</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              value="Expert"
                              name="Expert"
                            />
                            <label>
                              Expert<span>6</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="filter-block bottom-line pb-25 mt-25">
                    <a
                      className="filter-title fw-500 text-dark collapsed"
                      data-bs-toggle="collapse"
                      href="#collapseCategory"
                      role="button"
                      aria-expanded="false"
                    >
                      Category
                    </a>
                    <div className="" id="collapseCategory">
                      <div className="main-body">
                        <ul className="style-none filter-input">
                          <li>
                            <input
                              type="checkbox"
                              name="Developer"
                              value="Developer"
                            />
                            <label>
                              Developer
                              <span>6</span>
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="Coder" value="Coder" />
                            <label>
                              Coder
                              <span>2</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="Finance"
                              value="Finance"
                            />
                            <label>
                              Finance
                              <span>6</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="Accounting"
                              value="Accounting"
                            />
                            <label>
                              Accounting
                              <span>4</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="Design"
                              value="Design"
                            />
                            <label>
                              Design
                              <span>2</span>
                            </label>
                          </li>
                        </ul>
                        <div className="more-btn">
                          <i className="bi bi-dash"></i> Show More
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-block bottom-line pb-25 mt-25">
                    <a
                      className="filter-title fw-500 text-dark collapsed"
                      data-bs-toggle="collapse"
                      href="#collapseTag"
                      role="button"
                      aria-expanded="false"
                    >
                      Tags
                    </a>
                    <div className="" id="collapseTag">
                      <div className="main-body">
                        <ul className="style-none d-flex flex-wrap justify-space-between radio-filter mb-5">
                          <li>
                            <input type="checkbox" name="tags" value="java" />
                            <label>java</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="developer"
                            />
                            <label>developer</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="finance"
                            />
                            <label>finance</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="accounting"
                            />
                            <label>accounting</label>
                          </li>
                          <li>
                            <input type="checkbox" name="tags" value="design" />
                            <label>design</label>
                          </li>
                          <li>
                            <input type="checkbox" name="tags" value="seo" />
                            <label>seo</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="javascript"
                            />
                            <label>javascript</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="designer"
                            />
                            <label>designer</label>
                          </li>
                          <li>
                            <input type="checkbox" name="tags" value="web" />
                            <label>web</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="frontend"
                            />
                            <label>frontend</label>
                          </li>
                          <li>
                            <input type="checkbox" name="tags" value="data" />
                            <label>data</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="analytics"
                            />
                            <label>analytics</label>
                          </li>
                          <li>
                            <input type="checkbox" name="tags" value="ui" />
                            <label>ui</label>
                          </li>
                          <li>
                            <input type="checkbox" name="tags" value="ux" />
                            <label>ux</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="marketing"
                            />
                            <label>marketing</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="management"
                            />
                            <label>management</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="software"
                            />
                            <label>software</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="engineering"
                            />
                            <label>engineering</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="writing"
                            />
                            <label>writing</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="blogging"
                            />
                            <label>blogging</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="graphic"
                            />
                            <label>graphic</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="illustration"
                            />
                            <label>illustration</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name="tags"
                              value="product"
                            />
                            <label>product</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button className="btn-ten fw-500 text-white w-100 text-center tran3s mt-30">
                    Reset Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="job-post-item-wrapper ms-xxl-5 ms-xl-3">
                <div className="upper-filter d-flex justify-content-between align-items-center mb-20">
                  <div className="total-job-found">
                    All <span className="text-dark">{data?.getJobs?.length || 0}</span> jobs found
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="short-filter d-flex align-items-center">
                      <div className="text-dark fw-500 me-2">Short:</div>
                      <div
                        className="nice-select false"
                        role="button"
                        tabIndex={0}
                      >
                        <span className="current">Price Short</span>
                        <ul className="list" role="menubar">
                          <li
                            data-value=""
                            className="option selected focus"
                            role="menuitem"
                          >
                            Price Short
                          </li>
                          <li
                            data-value="price-low-to-high"
                            className="option false"
                            role="menuitem"
                          >
                            low to high
                          </li>
                          <li
                            data-value="price-high-to-low"
                            className="option false"
                            role="menuitem"
                          >
                            High to low
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <button
                      className="style-changer-btn text-center rounded-circle tran3s ms-2 list-btn"
                      title="Active List"
                    >
                      <i className="bi bi-list"></i>
                    </button>
                    <button
                      className="style-changer-btn text-center rounded-circle tran3s ms-2 grid-btn active"
                      title="Active Grid"
                    >
                      <i className="bi bi-grid"></i>
                    </button> */}
                  </div>
                </div>
                <div className="accordion-box list-style show">
                  {data?.getJobs?.length
                    ? data?.getJobs?.map((job) => (
                        <JobDetailsRow
                          key={job?.id}
                          roleDesc={job?.title}
                          location={job?.location}
                        />
                      ))
                    : `No jobs available`}
                </div>
                <div className="accordion-box grid-style">
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-one">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row">
              <div className="col-lg-2 col-md-3 footer-intro mb-15">
                <div className="logo mb-15">
                  <a className="d-flex align-items-center" href="index.html">
                    <img
                      alt="logo"
                      width="119"
                      height="42"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      srcSet="
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_03.c3596e56.png&amp;w=128&amp;q=75 1x,
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_03.c3596e56.png&amp;w=256&amp;q=75 2x
                      "
                      src="src/assets/logo_03ec82.png?url=%2F_next%2Fstatic%2Fmedia%2Flogo_03.c3596e56.png&amp;w=256&amp;q=75"
                    />
                  </a>
                </div>
                <img
                  alt="shape"
                  loading="lazy"
                  width="53"
                  height="53"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img mt-80 sm-mt-30 sm-mb-20"
                  style={{ color: "transparent" }}
                  src="src/assets/static/media/shape_28.761e9e53.svg"
                />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 mb-20">
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
              <div className="col-lg-2 col-md-3 col-sm-4 mb-20">
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
              <div className="col-lg-2 col-md-3 col-sm-4 mb-20">
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
              <div className="col-lg-4 mb-20 footer-newsletter">
                <h5 className="footer-title">Newsletter</h5>
                <p className="">Join &amp; get important new regularly</p>
                <form className="d-flex" action="#">
                  <input type="email" placeholder="Enter your email*" />
                  <button>Send</button>
                </form>
                <p className="note">
                  We only send interesting and relevant emails.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer undefined">
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
                <p className="text-center mb-15">Copyright @ 2023 jobi inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
