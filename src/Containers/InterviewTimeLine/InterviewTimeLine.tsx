import CandidateProfileCard from "Components/Candidate/CandidateProfileCard/CandidateProfileCard";
import TimeLine from "./TimeLine/TimeLine";
import { useRecoilValue } from "recoil";
import { interviewDetails } from "store/atoms/authAtom";

const InterviewTimeLine = () => {
  const application = useRecoilValue(interviewDetails);
  return (
    <div className="bg-BG_GREEN  text-left dashboard-body">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="main-title text-DARK_GREEN text-left">Time Line</h2>
      </div>
      <div className="flex ms-auto xs-mt-30 w-full">
        <CandidateProfileCard
          application={application}
          candidate={application?.candidate}
        />
      </div>
      <TimeLine timeLine={application?.timeline} />
    </div>
  );
};

export default InterviewTimeLine;
