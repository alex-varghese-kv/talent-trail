export enum REQUEST_METHODS {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export enum INTERVIEW_STATUS {
  APPLIED = "APPLIED",
  HR_PENDING = "HR_PENDING",
  HR_ACCEPTED = "HR_ACCEPTED",
  HR_REJECTED = "HR_REJECTED",
  PENDING_TIMESLOT_SUBMISSION = "PENDING_TIMESLOT_SUBMISSION",
  PENDING_INTERVIEWER_CONFIRMATION = "PENDING_INTERVIEWER_CONFIRMATION",
  INTERVIEW_SCHEDULED = "INTERVIEW_SCHEDULED",
  PENDING_INTERVIEW_FEEDBACK = "INTERVIEW_ROUND",
  INTERVIEWER_REJECTED = "INTERVIEWER_REJECTED",
  INTERVIEW_FEEDBACK_SUBMITTED = "INTERVIEW_FEEDBACK_SUBMITTED",
  CANDIDATE_ACCEPTED = "CANDIDATE_ACCEPTED",
  CANDIDATE_REJECTED = "CANDIDATE_REJECTED",
}

export const STATUS_LABEL: Record<string, string> = {
  APPLIED: "Applied",
  HR_PENDING: "HR Pending",
  HR_ACCEPTED: "HR Accepted",
  HR_REJECTED: "HR Rejected",
  TIMESLOT_SUBMITTED: "Time slot submited",
  PENDING_TIMESLOT_SUBMISSION: "Candidate waiting to be submit time slot",
  PENDING_INTERVIEWER_CONFIRMATION: "Waiting for interviewer confirmation",
  INTERVIEW_SCHEDULED: "Interview Scheduled",
  INTERVIEW_ROUND: "Interview feedback for round 1",
  INTERVIEWER_REJECTED: "Rejected",
  INTERVIEW_FEEDBACK_SUBMITTED: "Interview feedback submitted",
  CANDIDATE_ACCEPTED: "Candidate accepted",
  CANDIDATE_REJECTED: "Candidate rejected",
};
