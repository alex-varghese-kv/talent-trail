import { FC, Fragment, ReactElement } from "react";
import cx from "classnames";
import { navbarItems } from "./Navbar.config";
import { Link, useLocation } from "react-router-dom";
import { pagePaths } from "config/pages";

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
            navItem.customClass ? navItem.customClass : ""
          }`,
          {
            "bg-PRIMARY text-DARK_GREEN navBar-selected":
              location.pathname.includes(navItem.path),
          }
        )}
      >
        <button className="w-full">
          {typeof navItem.title === "string" ? (
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
      <aside className="dash-aside-navbar ">
        <div className="position-relative h-full">
          <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
            <a href="/admin">
              <img
                alt="logo"
                width="119"
                height="42"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
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
                style={{ color: "transparent;height:auto" }}
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_03.f35eb58b.jpg&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_03.f35eb58b.jpg&amp;w=256&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_03.f35eb58b.jpg&amp;w=256&amp;q=75"
              />
            </div>
            <div className="user-name-data user-name text-center">John Doe</div>
          </div>
          <div
            className="flex flex-col justify-between"
            style={{ height: "calc(100% - 300px)" }}
          >
            <nav className="dasboard-main-nav">
              <ul className="style-none">
                {navbarItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      key={index}
                      className="d-flex w-100 align-items-center "
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img"
                        style={{ color: "transparent" }}
                        src={item.icon}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-10">
              <a
                href="#"
                className="d-flex w-100 align-items-center logout-btn"
              >
                <img
                  alt="icon"
                  loading="lazy"
                  width="23"
                  height="22"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img"
                  style={{ color: "transparent" }}
                  src="media/icon_9.69f19313.svg"
                />
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
