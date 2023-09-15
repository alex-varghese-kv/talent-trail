import { useCookies } from "react-cookie";

const LOGGED_IN_KEY = "isLoggedIn";

export const useIsLoggedIn = () => {
  const [cookies, setCookie, removeCookie] = useCookies([LOGGED_IN_KEY]);

  const setIsLoggedIn = (isLoggedIn: boolean) =>
    setCookie(LOGGED_IN_KEY, isLoggedIn, { path: "/" });

  const removeIsLoggedIn = () => {
    removeCookie(LOGGED_IN_KEY, { path: "/" });
  };

  return [cookies[LOGGED_IN_KEY], setIsLoggedIn, removeIsLoggedIn];
};
