import React, { FC } from "react";
import ColorRating from "../ColorRating/ColorRating";

interface Prop {
  message: string;
  id: string;
}

const InterviewFeedback: FC<Prop> = () => {
  return (
    <div className="mt-3 w-full">
      <ColorRating label={"Technical"} />
      <ColorRating label={"Communication"} />
      <ColorRating label={"Attitude "} />
      <div className=" mt-3 flex flex-col w-full">
        <label>feedback</label>
        <textarea
          className="w-full border-2  h-auto "
          placeholder=""
        ></textarea>
      </div>
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
    </div>
  );
};

export default InterviewFeedback;
