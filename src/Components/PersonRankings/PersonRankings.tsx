type Props = {
  name: string;
  email: string;
  location: string;
  score: number;
  experience: string;
};

export const PersonRankings = ({
  email,
  experience,
  location,
  name,
  score,
}: Props) => {
  return (
    <div className="mt-30 candidate-profile-card list-layout border-0 mb-25 w-full">
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
              style={{ color: 'transparent', height: 'auto;' }}
            ></img>
          </a>
        </div>
        <div className="right-side">
          <div className="row gx-1 align-items-center">
            <div className="col-xl-3 mt-3">
              <div className="position-relative float-left">
                <h4 className="candidate-name mb-0">
                  {/* <a href="#" className="tran3s"> */}
                  {name}
                  {/* </a> */}
                </h4>
                <span>{email}</span>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="candidate-info">
                <span>Experience</span>
                <div>{experience}</div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="candidate-info">
                <span>Location</span>
                <div>{location}</div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6 flex space-x-12">
              <div className="candidate-info">
                <span>Score</span>
                <div>{score}</div>
              </div>
              <button className="bg-YELLOW_GREEN rounded-full py-2 px-3">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
