import { LoginMutation, PasswordLoginDetails } from "types/login.type";
import { useIsLoggedIn } from "service/auth/authToken";
import { UsegraphQlLazyQuery, UseGraphQlMutation, UseGraphQlQuery } from "./hooks";
import { LOGGED_IN_USERDETAILS, PASSWORD_LOGIN, REGISTER_CANDIDATE } from "service/query/auth";

const defaultConfig = {};

export const PasswordLogin: LoginMutation = (config = defaultConfig) => {
  const [, setIsLoggedIn] = useIsLoggedIn();

  return UseGraphQlMutation(PASSWORD_LOGIN, {
    ...config,
    onCompleted: (data: PasswordLoginDetails) => {
      setIsLoggedIn(!!data);
    },
  });
};

export const SignUp: LoginMutation = (config = defaultConfig) => {
  const [, setIsLoggedIn] = useIsLoggedIn();

  return UseGraphQlMutation(REGISTER_CANDIDATE, {
    ...config,
    onCompleted: (data: PasswordLoginDetails) => {
      setIsLoggedIn(!!data.passwordLogin.accessToken);
    },
  });
};

export const LoggedInUserDetails = (config = defaultConfig) => {
  const [, setIsLoggedIn] = useIsLoggedIn();

  return UsegraphQlLazyQuery(LOGGED_IN_USERDETAILS, {
    ...config,
    onCompleted: (data: PasswordLoginDetails) => {
      setIsLoggedIn(!!data.passwordLogin.accessToken);
    },
  });
};
