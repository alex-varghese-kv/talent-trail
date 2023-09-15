import { LoginMutation, PasswordLoginDetails } from "types/login.type";
import { useIsLoggedIn } from "service/auth/authToken";
import { UseGraphQlMutation } from "./hooks";
import { PASSWORD_LOGIN } from "service/query/auth";

const defaultConfig = {};

export const PasswordLogin: LoginMutation = (config = defaultConfig) => {
  const [, setIsLoggedIn] = useIsLoggedIn();

  return UseGraphQlMutation(PASSWORD_LOGIN, {
    ...config,
    onCompleted: (data: PasswordLoginDetails) => {
      setIsLoggedIn(!!data.passwordLogin.accessToken);
    },
  });
};
