import React from "react";
import Search from "../Search/Search";

const candidateLanding = () => {
  return (
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
                Jobs &amp; Job search. Find jobs in global. Executive jobs &amp;
                work.
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
                  <Search />
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
        src="assets/screen_108b9a.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_10.9b4a1e76.png&amp;w=256&amp;q=75"
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
        src="assets/screen_1138a2.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_11.a550bf48.png&amp;w=256&amp;q=75"
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
        src="assets/screen_1284c9.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_12.249998d2.png&amp;w=256&amp;q=75"
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
        src="assets/screen_136b74.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fscreen_13.c1c3ecd6.png&amp;w=256&amp;q=75"
      />
    </div>
  );
};

export default candidateLanding;
