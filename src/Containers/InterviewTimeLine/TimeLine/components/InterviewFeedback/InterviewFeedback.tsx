import React, { FC } from "react";
import ColorRating from "../ColorRating/ColorRating";

interface Prop {
  message: string;
  readonly?: boolean;
  id: string;
  data?: any;
}

const InterviewFeedback: FC<Prop> = ({ readonly = false, data }) => {
  return (
    <div className="mt-3 w-full">
      <ColorRating
        label={"Technical"}
        ratingInfo={data?.aptitude_rating as number}
      />
      <ColorRating
        label={"Communication"}
        ratingInfo={data?.soft_skills_rating as number}
      />
      <ColorRating
        label={"Attitude "}
        ratingInfo={data?.technical_skills_rating as number}
      />
      <div className=" mt-3 flex flex-col w-full">
        <label>feedback</label>
        {!readonly ? (
          <textarea
            className="w-full border-2  h-auto "
            placeholder=""
          ></textarea>
        ) : (
          <>
            <p>{data?.aptitude_feedback}</p>
            <p>{data?.soft_skills_feedback}</p>
            <p>{data?.technical_skills_feedback}</p>
          </>
        )}
      </div>
      {!readonly && (
        <div className="flex w-full justify-end mt-3">
          <button className="py-2 px-3 bg-[#ffc107] text-white rounded-lg">
            Hold
          </button>
          <button className="py-2 px-3 bg-[#dc3545] text-white rounded-lg ml-1">
            Reject
          </button>
          <button className="py-2 px-3 bg-[#29a745] text-white ml-1 rounded-lg">
            Accept
          </button>
        </div>
      )}
    </div>
  );
};

export default InterviewFeedback;
