import { RatingBar } from "./RatingBar";

export const HotProfileCard = ({ profile }: any) => {
  return (
    <div
      data-index="1"
      className="slick-slide slick-active"
      tabIndex={-1}
      aria-hidden="false"
      style={{ outline: "none", width: " 6.666666666666667%" }}
    >
      <div>
        <div
          className="item"
          tabIndex={-1}
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="job-list-two style-two position-relative">
            <button
              className="save-btn text-center rounded-circle tran3s cursor-pointer"
              title="Save Job"
            >
              {profile?.id}
            </button>
            <a className="title fw-500 tran3s">{profile?.name}</a>
            <div className="job-location  my-1">{profile?.phone}</div>
            <div className="job-salary my-4"> Age {profile?.age}</div>
            <RatingBar rating={profile?.leetcode * 10} title="leetcode" />
            <RatingBar rating={profile?.github * 10} title="github" />
            <div className="d-flex align-items-center justify-content-between mt-2">
              <div className="job-location">
                <a href="6.html">
                  {profile?.location?.country}, {profile?.location?.state}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
