import { FC, Fragment, ReactElement } from 'react';
import cx from 'classnames';
import { navbarItems } from './Navbar.config';
import { Link, useLocation } from 'react-router-dom';

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
      <div
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
      </div>
    </>
  );
};
