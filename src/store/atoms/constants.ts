export enum ATOMS {
  LOGINED_USER_DETAILS_ATOM = "LOGINED_USER_DETAILS_ATOM",
  CANDIDATE_DETAILS_ATOM = 'CANDIDATE_DETAILS_ATOM'
}

export const defaultLoginedDetails = {
  id: 0,
  email: "String",
  groups: [],
};

export const defaultApplicationData = {
  id: 0,
  timeline: [],
  job: {
    title: "",
  },
  candidate: {
    id: "",
    name: "",
    age: 0,
    email: "",
    phone: "",
  },
};
export const defaultCandidateDetails = {
  name: "",
  // age: 0,
  phone: '',
  email: '',
  skills :[],
  overview: ''
};

