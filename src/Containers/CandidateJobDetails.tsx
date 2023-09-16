import { SuggestedCandidates } from "Components/SuggestedCandidates/SuggestedCandidates";
import { Link } from "react-router-dom";

export const CandidateJobDetails = () => {
  return (
    <div className="bg-BG_GREEN  text-left dashboard-body">
      <section className="job-details pt-100 lg-pt-80 pb-130 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8">
              <div className="details-post-data me-xxl-5 pe-xxl-4">
                <div className="post-date">18 Jul 2024</div>
                <h3 className="post-title">
                  Developer &amp; expert in java c++
                </h3>

                <div className="post-block border-style mt-50 lg-mt-30">
                  <div className="d-flex align-items-center">
                    <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                      1
                    </div>
                    <h4 className="block-title">Overview</h4>
                  </div>
                  <p>
                    When team members told us they needed more flexibility
                    around where and how they worked, we acted, creating two
                    options to accommodate two different styles of work. One
                    non-negotiable principle along the way? We had to retain our
                    deep culture of collaboration, both among ourselves and with
                    our clients. Introducing Work From Near and Work From
                    Anywhere at WillowTree. Please indicate which location(s)
                    you&#x27;re interested.
                  </p>
                </div>
                <div className="post-block border-style mt-30">
                  <div className="d-flex align-items-center">
                    <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                      2
                    </div>
                    <h4 className="block-title">Job Description</h4>
                  </div>
                  <p>
                    As a <a href="#">Product Designer</a> at WillowTree, you’ll
                    give form to ideas by being the voice and owner of product
                    decisions. You’ll drive the design direction, and then make
                    it happen!
                  </p>
                  <p>
                    We understand our responsibility to create a diverse,
                    equitable, and inclusive place within the tech industry,
                    while pushing to make our industry more representative.
                  </p>
                </div>
                <div className="post-block border-style mt-40 lg-mt-30">
                  <div className="d-flex align-items-center">
                    <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                      3
                    </div>
                    <h4 className="block-title">Responsibilities</h4>
                  </div>
                  <ul className="list-type-one style-none mb-15">
                    <li>
                      Collaborate daily with a multidisciplinary team of
                      Software Engineers, Researchers, Strategists, and Project
                      Managers.
                    </li>
                    <li>
                      Co-lead ideation sessions, workshops, demos, and
                      presentations with clients on-site
                    </li>
                    <li>
                      Push for and create inclusive, accessible design for all
                    </li>
                    <li>
                      Maintain quality of the design process and ensure that
                      when designs are translated into code they accurately
                      reflect the design specifications.
                    </li>
                    <li>
                      Sketch, wireframe, build IA, motion design, and run
                      usability tests
                    </li>
                    <li>
                      Design pixel perfect responsive UI’s and understand that
                      adopting common interface pattern is better for UX than
                      reinventing the wheel
                    </li>
                    <li>
                      Ensure content strategy and design are perfectly in-sync
                    </li>
                    <li>
                      Give and receive design critique to help constantly refine
                      and push our work
                    </li>
                  </ul>
                </div>
                <div className="post-block border-style mt-40 lg-mt-30">
                  <div className="d-flex align-items-center">
                    <div className="block-numb text-center fw-500 text-white rounded-circle me-2">
                      4
                    </div>
                    <h4 className="block-title">Required Skills:</h4>
                  </div>
                  <ul className="list-type-two style-none mb-15">
                    <li>
                      You’ve been designing digital products for 2+ years.
                    </li>
                    <li>
                      A portfolio that exemplifies strong visual design and a
                      focus on defining the user experience.
                    </li>
                    <li>
                      You’ve proudly shipped and launched several products.
                    </li>
                    <li>
                      You have some past experience working in an agile
                      environment – Think two-week sprints.
                    </li>
                    <li>
                      Experience effectively presenting and communicating your
                      design decisions to clients and team members
                    </li>
                    <li>
                      Up-to-date knowledge of design software like Figma, Sketch
                      etc.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4">
              <div className="job-company-info ms-xl-5 ms-xxl-0 lg-mt-50">
                <Link
                  to={"/admin/rankings"}
                  className="bg-[#31795a]  text-white rounded-3xl w-full p-2 flex text-center items-center justify-center"
                >
                  Viewed applied candidates
                </Link>
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
