import { atom } from "recoil";

import { LoginedUser } from "types/login.type";

import { ATOMS, defaultCandidateDetails, defaultLoginedDetails } from "./constants";

export const loginedUserDetails = atom<LoginedUser>({
  key: ATOMS.LOGINED_USER_DETAILS_ATOM,
  default: defaultLoginedDetails,
});

export const getCandidateDetails = atom<any>({
  key: ATOMS.LOGINED_USER_DETAILS_ATOM,
  default: defaultCandidateDetails,
});