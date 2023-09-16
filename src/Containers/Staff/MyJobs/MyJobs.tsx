import React from "react";
import { useGetJobs } from "service/hooks/jobs.hooks";
import MyJobsCard from "./components/MyJobsCard";

const MyJobs = () => {
  const { data: jobList } = useGetJobs({
    variables: {
      id: "1",
    },
  });
  console.log("🚀 ~ file: MyJobs.tsx:6 ~ MyJobs ~ data:", jobList);
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
                  {jobList?.getJobs.map((job) => {
                    return (
                      <MyJobsCard
                        title={job.title}
                        place={`${job.location.state},${job.location.country}`}
                        jobCreated={job.createdAt}
                        Applicants={job.applicants}
                        status={job.status}
                      />
                    );
                  })}
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
