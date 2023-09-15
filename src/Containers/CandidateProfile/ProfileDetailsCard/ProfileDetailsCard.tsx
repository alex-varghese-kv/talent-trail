import ActionButton from "Components/ActionButton/ActionButton";
import { pagePaths } from "config/pages";

export const ProfileDetailsCard = () => {
  return (
    <div className="candidate-profile-card list-layout border-0 mb-25 w-full">
      <div className="d-flex">
        <div className="cadidate-avatar  position-relative d-block me-auto ms-auto">
          <a href="#" className="rounded-circle">
            <img
              alt="image"
              loading="lazy"
              width="80"
              height="80"
              decoding="async"
              data-nimg="1"
              className="lazy-img rounded-circle"
              src="/assets/profileIcon.png"
              style={{ color: "transparent", height: "auto;" }}
            ></img>
          </a>
        </div>
        <div className="right-side">
          <div className="row gx-1 align-items-center">
            <div className="col-xl-3">
              <div className="position-relative">
                <h4 className="candidate-name mb-0">
                  <a href="#" className="tran3s">
                    Julia Ark
                  </a>
                </h4>
                <div className="candidate-post">Graphic Designer</div>
                <ul className="cadidate-skills style-none d-flex align-items-center">
                  <li>Digital</li>
                  <li>Design</li>
                  <li>UI</li>
                  <li className="more">2+</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="candidate-info">
                <span>Experience</span>
                <div>7 Years</div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="candidate-info pending">
                <span>Status</span>
                <div className="job-status text-capitalize">Pending</div>
              </div>
            </div> */}
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="candidate-info">
                <span>Location</span>
                <div>California, US</div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="d-flex justify-content-md-end align-items-center">
                <a
                  href={pagePaths.interviewTimeLine}
                  className="save-btn text-center rounded-circle tran3s mt-10 fw-normal"
                >
                  <i className="bi bi-eye"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
