interface JobDetailsRowProps {
  roleDesc: string;
  date: string;
  location: string;
  showSave?: boolean;
  showApply?: boolean;
  showDate?: boolean;
  onApply?: () => void;
  onSave?: () => void;
  salary?: string;
}

export const JobDetailsRow = ({
  roleDesc,
  date,
  location,
  showSave = true,
  showApply = true,
  showDate = true,
  onApply,
  onSave,
  salary,
}: JobDetailsRowProps) => {
  return (
    <div className="job-list-one position-relative bottom-border">
      <div className="row justify-content-between align-items-center">
        <div className="col-xxl-3 col-lg-4">
          <div className="job-title d-flex align-items-center">
            <a className="logo" href="job-details-v1/1.html">
              <img
                alt="logo"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                className="lazy-img m-auto"
                style={{ color: "transparent" }}
                src="assets/media_22ab06.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Fmedia_22.142b36c3.png&amp;w=128&amp;q=75"
              />
            </a>
            <a className="title fw-500 tran3s" href="job-details-v1/1.html">
              {roleDesc}
            </a>
          </div>
        </div>
        {showDate && (
          <div className="col-lg-3 col-md-4 col-sm-6 ms-auto">
            <div className="job-date">{date}</div>
          </div>
        )}
        <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
          <div className="job-location">{location}</div>
          {!!salary && <div className="job-location">{salary}</div>}
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
            {showSave && (
              <a
                className="save-btn text-center rounded-circle tran3s me-3 cursor-pointer"
                title="Save Job"
                onClick={onSave}
              >
                <i className="bi bi-bookmark-dash"></i>
              </a>
            )}
            {showApply && (
              <a
                className="apply-btn text-center tran3s"
                href="job-details-v1/1.html"
                onClick={onApply}
              >
                APPLY
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
