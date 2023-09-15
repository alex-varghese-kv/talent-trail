import React from "react";

const MyJobs = () => {
  return (
    <div className="bg-BG_GREEN h-screen text-left dashboard-body">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="main-title text-DARK_GREEN text-left">My Jobs</h2>
        <div className="flex ms-auto xs-mt-30">
          <div
            className="nav nav-tabs tab-filter-btn me-4"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active h-10"
              data-bs-toggle="tab"
              data-bs-target="#a1"
              type="button"
              role="tab"
              aria-selected="true"
            >
              All
            </button>
            <button
              className="nav-link  h-10 w-14"
              data-bs-toggle="tab"
              data-bs-target="#a2"
              type="button"
              role="tab"
              aria-selected="false"
            >
              New
            </button>
          </div>
          <div className="short-filter d-flex align-items-center ms-auto">
            <div className="text-dark fw-500 me-2">Short by:</div>
            <div className="nice-select  false" role="button">
              <span className="current">Active</span>
              <ul className="list" role="menubar">
                <li
                  data-value="Active"
                  className="option selected focus"
                  role="menuitem"
                >
                  Active
                </li>
                <li
                  data-value="Pending"
                  className="option false"
                  role="menuitem"
                >
                  Pending
                </li>
                <li
                  data-value="Expired"
                  className="option false"
                  role="menuitem"
                >
                  Expired
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white card-box border-20">
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="a1" role="tabpanel">
            <div className="table-responsive">
              <table className="table job-alert-table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Job Created</th>
                    <th scope="col">Applicants</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  <tr className="active">
                    <td>
                      <div className="job-name fw-500">
                        Brand &amp; Producr Designer
                      </div>
                      <div className="info1">Fulltime . Spain</div>
                    </td>
                    <td>05 Jun, 2023</td>
                    <td>130 Applications</td>
                    <td>
                      <div className="job-status text-capitalize">active</div>
                    </td>
                    <td>
                      <div className="action-dots float-end">
                        <button
                          className="action-btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="#">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="17"
                                height="14"
                                decoding="async"
                                data-nimg="1"
                                className="lazy-img"
                                src="/_next/static/media/icon_18.0f7046f3.svg"
                                style={{ color: "transparent;" }}
                              />{" "}
                              View
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="16"
                                height="13"
                                decoding="async"
                                data-nimg="1"
                                className="lazy-img"
                                src="/_next/static/media/icon_19.b2f1576b.svg"
                                style={{ color: "transparent;" }}
                              />{" "}
                              Share
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="14"
                                height="14"
                                decoding="async"
                                data-nimg="1"
                                className="lazy-img"
                                src="/_next/static/media/icon_20.e619462a.svg"
                                style={{ color: "transparent;" }}
                              />{" "}
                              Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="14"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                className="lazy-img"
                                src="/_next/static/media/icon_21.1bede725.svg"
                                style={{ color: "transparent;" }}
                              />{" "}
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
