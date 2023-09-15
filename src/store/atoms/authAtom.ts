import { atom } from "recoil";

import { LoginedUser } from "types/login.type";

import {
  ATOMS,
  defaultApplicationData,
  defaultLoginedDetails,
} from "./constants";
import { Application } from "types/jobs";

export const loginedUserDetails = atom<LoginedUser>({
  key: ATOMS.LOGINED_USER_DETAILS_ATOM,
  default: defaultLoginedDetails,
});
export const interviewDetails = atom<any>({
  key: ATOMS.LOGINED_USER_DETAILS_ATOM,
  default: defaultApplicationData,
});
