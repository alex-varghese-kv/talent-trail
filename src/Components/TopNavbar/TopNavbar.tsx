interface Props {
  setIsOpen(type: boolean): void;
  isOpen: boolean;
}

export const TopNavbar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <header className="dashboard-header">
      <div className="d-flex align-items-center justify-content-end">
        <button className="dash-mobile-nav-toggler d-block d-md-none me-auto">
          <span></span>
        </button>
        <form action="#" className="search-form">
          <input placeholder="Search here.." type="text" />
          <button>
            <img
              alt="search"
              loading="lazy"
              width="16"
              height="17"
              decoding="async"
              data-nimg="1"
              className="lazy-img m-auto"
              src="/media/icon_10.35c41a63.svg"
              style={{ color: ' transparent' }}
            />
          </button>
        </form>
        <div className="profile-notification ms-2 ms-md-5 me-4">
          <button
            className="noti-btn dropdown-toggle"
            type="button"
            id="notification-dropdown"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <img
              alt="Notification"
              loading="lazy"
              width="21"
              height="24"
              decoding="async"
              data-nimg="1"
              className="lazy-img"
              src="/media/icon_11.32f89e94.svg"
              style={{ color: ' transparent' }}
            />
            <div className="badge-pill"></div>
          </button>
          <ul className="dropdown-menu" aria-labelledby="notification-dropdown">
            <li>
              <h4>Notification</h4>
              <ul className="style-none notify-list">
                <li className="d-flex align-items-center unread">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img icon"
                    src="media/icon_36.d044b698.svg"
                    style={{ color: ' transparent' }}
                  />
                  <div className="flex-fill ps-2">
                    <h6>You have 3 new mails</h6>
                    <span className="time">3 hours ago</span>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img icon"
                    src="/media/icon_37.34c12156.svg"
                    style={{ color: ' transparent' }}
                  />
                  <div className="flex-fill ps-2">
                    <h6>You have 5 new mails</h6>
                    <span className="time">6 hours ago</span>
                  </div>
                </li>
                <li className="d-flex align-items-center unread">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img icon"
                    src="media/icon_38.2db06cc7.svg"
                    style={{ color: ' transparent' }}
                  />
                  <div className="flex-fill ps-2">
                    <h6>You have 7 new mails</h6>
                    <span className="time">9 hours ago</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <a
            className="job-post-btn tran3s"
            href="/dashboard/employ-dashboard/submit-job"
          >
            Post a Job
          </a>
        </div>
      </div>
    </header>
  );
};
