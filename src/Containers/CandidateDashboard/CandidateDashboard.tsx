import { Footer } from "Components/Candidate/Footer";
import Header from "Components/Candidate/Header";
import CandidateLanding from "Components/Candidate/CandidateLanding/CandidateLanding";
import Search from "Components/Candidate/Search/Search";
import { JobDetailsRow } from "Components/JobDetailsRow";

export const CandidateDashboard = () => {
  const jobListData = [
    {
      roleDesc: "Developer &amp; expert in java c++",
      date: "18 Jul 2024",
      location: "Spain, Bercelona",
    },
    {
      roleDesc: "Animator & Expert in maya 3D",
      date: "18 Jul 2024",
      location: "UK,London",
    },
    {
      roleDesc: "Marketing Specialist in SEO & SMM",
      date: "18 Jul 2024",
      location: "USA,New York",
    },
    {
      roleDesc: "Developer & Expert in javascript c+",
      date: "10 Feb 2024",
      location: "USA,Alaska",
    },
    {
      roleDesc: "Developer &amp; expert in java c++",
      date: "18 Jul 2024",
      location: "USA,California",
    },
  ];
  return (
    <div className="main-page-wrapper">
      <Header />
      <CandidateLanding />
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
                    src="media/icon_63.772e8f20.svg"
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
                    src="media/icon_64.35fa6b78.svg"
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
                    src="media/icon_65.718cba66.svg"
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
                    src="media/icon_68.41869509.svg"
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
                    src="media/icon_66.64f36c76.svg"
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
                    src="media/icon_67.569964fa.svg"
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
                    src="assets/screen_14b368.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_14.b5f13d3e.png&amp;w=828&amp;q=75"
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
            {jobListData.map((job) => (
              <JobDetailsRow
                roleDesc={job?.roleDesc}
                date={job?.date}
                location={job?.location}
              />
            ))}
          </div>
          <div className="text-center mt-40 d-lg-none">
            <a className="btn-six" href="job-list-v1.html">
              Explore all jobs
            </a>
          </div>
          {/* <div className="text-center mt-80 lg-mt-30 wow fadeInUp">
            <div className="btn-eight fw-500">
              Do you want to post a job for your company?
              <span>We can help.</span> <a href="register.html">Click here</a>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
      
    </div>
  );
};
