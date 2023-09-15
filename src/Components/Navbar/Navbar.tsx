import { FC, Fragment, ReactElement } from "react";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";
import { pagePaths } from "config/pages";
import { navbarItems } from "./Navbar.config";
import { useResetRecoilState } from "recoil";
import { loginedUserDetails } from "store/atoms/authAtom";

interface NavbarProps {
  setIsOpen(type: boolean): void;
  isOpen: boolean;
}

export const Navbar: FC<NavbarProps> = ({ setIsOpen, isOpen }) => {
  const filterReset = useResetRecoilState(loginedUserDetails);
  const handleLogout = () => {
    filterReset();
  };

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
                style={{ color: "transparent", width: "150px" }}
                src="/assets/logo.png"
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
                src="/assets/john_honai.png"
              />
            </div>
            <div className="user-name-data user-name text-center">
              John Honai
            </div>
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
              <button className="flex" onClick={handleLogout}>
                <img
                  alt="icon"
                  loading="lazy"
                  width="23"
                  height="22"
                  decoding="async"
                  data-nimg="1"
                  className="lazy-img mr-1"
                  style={{ color: "transparent" }}
                  src="/media/icon_9.69f19313.svg"
                />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
