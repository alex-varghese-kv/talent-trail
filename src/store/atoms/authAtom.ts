import { atom } from "recoil";

import { LoginedUser } from "types/login.type";

import {
  ATOMS,
  defaultApplicationData,
  defaultCandidateDetails,
  defaultLoginedDetails,
} from "./constants";
import { Application } from "types/jobs";

export const loginedUserDetails = atom<LoginedUser>({
  key: ATOMS.LOGINED_USER_DETAILS_ATOM,
  default: defaultLoginedDetails,
});

export const getCandidateDetails = atom<any>({
  key: ATOMS.CANDIDATE_DETAILS_ATOM,
  default: defaultCandidateDetails,
});
export const interviewDetails = atom<any>({
  key: ATOMS.LOGINED_USER_DETAILS_ATOM,
  default: defaultApplicationData,
});
