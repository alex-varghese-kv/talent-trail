import { LoginMutation, PasswordLoginDetails } from "types/login.type";
import { useIsLoggedIn } from "service/auth/authToken";
import { UseGraphQlMutation } from "./hooks";
import { PASSWORD_LOGIN, REGISTER_CANDIDATE } from "service/query/auth";

const defaultConfig = {};

export const PasswordLogin: LoginMutation = (config = defaultConfig) => {
  const [, setIsLoggedIn] = useIsLoggedIn();

  return UseGraphQlMutation(REGISTER_CANDIDATE, {
    ...config,
    onCompleted: (data: PasswordLoginDetails) => {
      setIsLoggedIn(!!data.passwordLogin.accessToken);
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


