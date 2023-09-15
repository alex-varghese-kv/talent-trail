import { atom } from "recoil";

import { LoginedUser } from "types/login.type";

import { ATOMS, defaultLoginedDetails } from "./constants";

export const loginedUserDetails = atom<LoginedUser>({
  key: ATOMS.LOGINED_USER_DETAILS_ATOM,
  default: defaultLoginedDetails,
});
