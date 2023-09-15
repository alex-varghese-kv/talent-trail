import { FC, Fragment, ReactElement } from 'react';
import cx from 'classnames';
import { navbarItems } from './Navbar.config';
import { Link, useLocation } from 'react-router-dom';
import { pagePaths } from 'config/pages';

interface NavbarProps {
  setIsOpen(type: boolean): void;
  isOpen: boolean;
}

export const Navbar: FC<NavbarProps> = ({ setIsOpen, isOpen }) => {
  const location = useLocation();

  const renderNavItem = (navItem: any, key: string | number): ReactElement => (
    <Fragment>
      <Link
        to={navItem.path}
        className={cx(
          `flex justify-between p-2 mb-2 rounded-lg text-lg hover:bg-BG_GREEN hover:text-DARK_GREEN cursor-pointer items-center break-normal navBar ${
            navItem.customClass ? navItem.customClass : ''
          }`,
          {
            'bg-PRIMARY text-DARK_GREEN navBar-selected':
              location.pathname.includes(navItem.path),
          }
        )}
      >
        <button className="w-full">
          {typeof navItem.title === 'string' ? (
            <div className="flex items-center">
              {navItem.icon && <navItem.icon className="mr-4 w-5 h-5" />}
              <span className="md:text-17px xxs:text-sm text-left">
                {navItem.title}
              </span>
            </div>
          ) : (
            <>{navItem.title}</>
          )}
        </button>
      </Link>
    </Fragment>
  );

  return (
    <>
      {/* <div
        className={cx(
          'absolute md:static md:z-5 inset-0 transform ease-in-out h-screen overflow-hidden z-50 md:border-r-1 md:border-CORE_GRAY',
          {
            'duration-1000 translate-x-0 h-full w-60 ': isOpen,
            'transition-all duration-1000 -translate-x-full  md:w-0  ': !isOpen,
          }
        )}
      >
        <div className="flex h-full ">
          <div className="flex flex-col justify-between bg-GRAY5 text-DEFAULT_TEXT w-264px md:min-w-60 md:max-w-max md:mt-14">
            <div className="h-full flex flex-col">
              <div className="mt-4 md:px-4 xxs:px-6 h-full flex flex-col">
                {navbarItems.map((navItem, index) =>
                  renderNavItem(navItem, index)
                )}
                <div className="flex-1 border-b my-4 border-CORE_GRAY" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <aside className="dash-aside-navbar ">
        <div className="position-relative">
          <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
            <a href="/admin">
              <img
                alt="logo"
                width="119"
                height="42"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_01.64e60fc1.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_01.64e60fc1.png&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_01.64e60fc1.png&amp;w=256&amp;q=75"
              />
            </a>
            <button className="close-btn d-block d-md-none">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="user-data">
            <div className="user-avatar online position-relative rounded-circle">
              <img
                alt="avatar"
                loading="lazy"
                width="76"
                height="76"
                decoding="async"
                data-nimg="1"
                className="lazy-img"
                style={{ color: 'transparent;height:auto' }}
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_03.f35eb58b.jpg&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_03.f35eb58b.jpg&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_03.f35eb58b.jpg&amp;w=256&amp;q=75"
              />
            </div>
            <div className="user-name-data user-name text-center">
              {/* <button
                className="user-name dropdown-toggle"
                type="button"
                id="profile-dropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              > */}
              John Doe
              {/* </button> */}
              {/* <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/dashboard/employ-dashboard/profile"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="18"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: 'transparent' }}
                      src="/_next/static/media/icon_23.569a9456.svg"
                    />
                    <span className="ms-2 ps-1">Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/dashboard/employ-dashboard/profile"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="21"
                      height="22"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: 'transparent' }}
                      src="/_next/static/media/icon_24.0ace9f1a.svg"
                    />
                    <span className="ms-2 ps-1">Account Settings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width="19"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: 'transparent' }}
                      src="/_next/static/media/icon_25.b0559e8f.svg"
                    />
                    <span className="ms-2 ps-1">Notification</span>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <nav className="dasboard-main-nav">
            <ul className="style-none">
              {navbarItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="d-flex w-100 align-items-center "
                    href={item.path}
                  >
                    <img
                      alt=""
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      className="lazy-img"
                      style={{ color: 'transparent' }}
                      src={item.icon}
                    />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
              {/* <li>
                <a
                  className="d-flex w-100 align-items-center "
                  href="/dashboard/employ-dashboard/profile"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="20"
                    height="25"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: 'transparent' }}
                    src="/_next/static/media/icon_2.bb2a8c78.svg"
                  />
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex w-100 align-items-center "
                  href={pagePaths.createJob}
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="20"
                    height="22"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: 'transparent' }}
                    src="/_next/static/media/icon_3.1dfe15d1.svg"
                  />
                  <span>My Jobs</span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex w-100 align-items-center "
                  href="/dashboard/employ-dashboard/messages"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="21"
                    height="19"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: 'transparent' }}
                    src="/_next/static/media/icon_4.7fb6e150.svg"
                  />
                  <span>Messages</span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex w-100 align-items-center active"
                  href={pagePaths.createJob}
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="20"
                    height="22"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: 'transparent' }}
                    src="/_next/static/media/icon_39_active.084f5967.svg"
                  />
                  <span>Submit Job</span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex w-100 align-items-center "
                  href="/dashboard/employ-dashboard/saved-candidate"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="18"
                    height="22"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: 'transparent' }}
                    src="/_next/static/media/icon_6.70ec5244.svg"
                  />
                  <span>Saved Candidate</span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex w-100 align-items-center "
                  href="/dashboard/employ-dashboard/membership"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="22"
                    height="22"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: 'transparent' }}
                    src="/_next/static/media/icon_40.5ae84fe9.svg"
                  />
                  <span>Membership</span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex w-100 align-items-center "
                  href="/dashboard/employ-dashboard/setting"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="23"
                    height="25"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: 'transparent' }}
                    src="/_next/static/media/icon_7.9db14e45.svg"
                  />
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex w-100 align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="21"
                    height="23"
                    decoding="async"
                    data-nimg="1"
                    className="lazy-img"
                    style={{ color: 'transparent' }}
                    src="/_next/static/media/icon_8.1d18804d.svg"
                  />
                  <span>Delete Account</span>
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="profile-complete-status">
            <div className="progress-value fw-500">87%</div>
            <div className="progress-line position-relative">
              <div className="inner-line" style={{ width: '80%' }}></div>
            </div>
            <p>Profile Complete</p>
          </div>
          <a href="#" className="d-flex w-100 align-items-center logout-btn">
            <img
              alt="icon"
              loading="lazy"
              width="23"
              height="22"
              decoding="async"
              data-nimg="1"
              className="lazy-img"
              style={{ color: 'transparent' }}
              src="/_next/static/media/icon_9.69f19313.svg"
            />
            <span>Logout</span>
          </a>
        </div>
      </aside>
    </>
  );
};
