import { SuggestedCandidates } from "Components/SuggestedCandidates/SuggestedCandidates";
import { useGetJob } from "service/hooks/jobs.hooks";

export const CandidateJobDetails = () => {
  const { data } = useGetJob({
    fetchPolicy: "network-only",
    variables: { id: 1 },
  });
  console.log(">>", data);
  return (
    <div className="bg-BG_GREEN  text-left dashboard-body">
      <section className="job-details pt-100 lg-pt-80 pb-130 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8">
              <div className="details-post-data me-xxl-5 pe-xxl-4">
                <div className="post-date">18 Jul 2024</div>
                <h3 className="post-title">{data?.getJob?.title}</h3>

                <div className="post-block border-style mt-50 lg-mt-30">
                  <div className="d-flex align-items-center">
                    <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                      1
                    </div>
                    <h4 className="block-title">Overview</h4>
                  </div>
                  <p>{data?.getJob?.description}</p>
                </div>

                <div className="post-block border-style mt-40 lg-mt-30">
                  <div className="d-flex align-items-center">
                    <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                      2
                    </div>
                    <h4 className="block-title">Responsibilities</h4>
                  </div>
                  <ul className="list-type-one style-none mb-15">
                    {data?.getJob?.info?.responsibilities.length > 0 &&
                      data?.getJob?.info?.responsibilities?.map(
                        (item: string) => <li>{item}</li>
                      )}
                  </ul>
                </div>
                <div className="post-block border-style mt-40 lg-mt-30">
                  <div className="d-flex align-items-center">
                    <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                      3
                    </div>
                    <h4 className="block-title">Qualifications:</h4>
                  </div>
                  <ul className="list-type-one style-none mb-15">
                    {data?.getJob?.info?.qualifications.length > 0 &&
                      data?.getJob?.info?.qualifications?.map(
                        (item: string) => <li>{item}</li>
                      )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4">
              <div className="job-company-info ms-xl-5 ms-xxl-0 lg-mt-50">
                <button className="bg-[#31795a]  text-white rounded-3xl w-full p-2">
                  Viewed applied candidates
                </button>
                <div className="border-top mt-40 pt-40">
                  <ul className="job-meta-data row style-none">
                    <li className="col-xl-7 col-md-4 col-sm-6">
                      <span>Location</span>
                      <div>Spain, Bercelona</div>
                    </li>
                    <li className="col-xl-5 col-md-4 col-sm-6">
                      <span>Job Type</span>
                      <div>Fulltime</div>
                    </li>
                    <li className="col-xl-7 col-md-4 col-sm-6">
                      <span>Date</span>
                      <div>18 Jul 2024 </div>
                    </li>
                    <li className="col-xl-5 col-md-4 col-sm-6">
                      <span>Experience</span>
                      <div>Fresher</div>
                    </li>
                  </ul>
                  <div className="job-tags d-flex flex-wrap pt-15">
                    <a href="#">java</a>
                    <a href="#">developer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SuggestedCandidates />
    </div>
  );
};
