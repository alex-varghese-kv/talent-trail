import { HotProfileCard } from "Components/HotProfileCard";
import { RatingBar } from "Components/RatingBar";
import { getHotProfiles } from "service/hooks/jobs.hooks";

export const SuggestedCandidates = () => {
  const { data } = getHotProfiles({
    fetchPolicy: "network-only",
  });

  return (
    <section className="related-job-section pt-90 lg-pt-70 pb-120 lg-pb-70">
      <div className="container">
        <div className="position-relative">
          <div className="title-three text-center text-md-start mb-55 lg-mb-40">
            <h2 className="main-font">Hot Profiles</h2>
          </div>
          <div
            className="slick-slider related-job-slider slick-initialized"
            dir="ltr"
          >
            <div className="slick-list">
              <div
                className="slick-track"
                style={{
                  width: "500.00000000000006%",
                }}
              >
                {data?.getHotProfiles &&
                  data?.getHotProfiles?.length > 0 &&
                  data?.getHotProfiles.map((profile) => (
                    <HotProfileCard profile={profile} />
                  ))}
              </div>
            </div>
          </div>
          <ul className="slider-arrows slick-arrow-one color-two d-flex justify-content-center style-none sm-mt-20">
            <li className="prev_e slick-arrow">
              <i className="bi bi-arrow-left"></i>
            </li>
            <li className="next_e slick-arrow">
              <i className="bi bi-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
