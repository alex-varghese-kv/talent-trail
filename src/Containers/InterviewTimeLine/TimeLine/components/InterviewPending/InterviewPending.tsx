import React, { FC } from "react";

interface Prop {
  message: string;
  id: string;
}

const InterviewPending: FC<Prop> = ({ message }) => {
  return (
    <div className="w-full">
      <p>{message}</p>
      <div className="flex w-full justify-end">
        <button className="py-2 px-3 bg-[#dc3545] text-white rounded-lg">
          Reject
        </button>
        <button className="py-2 px-3 bg-[#29a745] text-white ml-1 rounded-lg">
          Accept
        </button>
      </div>
    </div>
  );
};

export default InterviewPending;
