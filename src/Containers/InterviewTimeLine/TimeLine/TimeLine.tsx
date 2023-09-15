import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "react-vertical-timeline-component/style.min.css";
import events from "./event.json";
import { INTERVIEW_STATUS, STATUS_LABEL } from "../../../constants";
import InterviewPending from "./components/InterviewPending/InterviewPending";
import AcceptInterviewSchedule from "./components/AcceptInterviewSchedule/AcceptInterviewSchedule";
import InterviewFeedback from "./components/InterviewFeedback/InterviewFeedback";

const TimeLine = () => {
  const getTImeLineDetails = (
    status = "",
    actionItem: string,
    event: string
  ) => {
    console.log("🚀 ~ file: TimeLine.tsx:20 ~ TimeLine ~ status:", status);
    switch (status) {
      case INTERVIEW_STATUS.HR_PENDING:
        return <InterviewPending message={event} id={"123"} />;
      case INTERVIEW_STATUS.PENDING_INTERVIEWER_CONFIRMATION:
        return <AcceptInterviewSchedule message={event} id={"123"} />;
      case INTERVIEW_STATUS.PENDING_INTERVIEW_FEEDBACK:
        return <InterviewFeedback message={event} id={"123"} />;
      default:
        return <p>{event}</p>;
    }
  };
  return (
    <div className="App">
      <VerticalTimeline layout="1-column-left">
        {events.map((event) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(49,121,90)", color: "#fff" }}
          >
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full border-b-2 ">
                <h4 className="text-sm">
                  {STATUS_LABEL[`${event?.status}`] || ""}
                </h4>
                <h4 className="text-sm">July 8</h4>
              </div>
              <div className="flex text-left break-all">
                {getTImeLineDetails(event?.status, "", event.event)}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
