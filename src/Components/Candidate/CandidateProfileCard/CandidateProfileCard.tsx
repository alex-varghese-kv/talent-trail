import ActionButton from "Components/ActionButton/ActionButton";
import { pagePaths } from "config/pages";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { interviewDetails } from "store/atoms/authAtom";
import { Candidate } from "types/jobs";

interface Prop {
  candidate?: Candidate;
  application?: any;
}
const CandidateProfileCard: FC<Prop> = ({ candidate, application }) => {
  const setInterviewDetails = useSetRecoilState(interviewDetails);
  let navigate = useNavigate();
  const handleOnClick = () => {
    setInterviewDetails(application);
    navigate(pagePaths.interviewTimeLine);
  };
  return (
    <button onClick={handleOnClick} className="w-full cursor-pointer">
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
              <div className="col-xl-3 text-left">
                <div className=" flex flex-col float-left">
                  <h4 className="candidate-name mb-0 ">{candidate?.name}</h4>
                  <div className="candidate-post">
                    {application?.job?.title}
                  </div>
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
                    href="#"
                    className="save-btn text-center rounded-circle tran3s mt-10 fw-normal"
                  >
                    <i className="bi bi-eye"></i>
                  </a>
                  <ActionButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CandidateProfileCard;
