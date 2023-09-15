import React, { FC, useState } from "react";
interface Props {
  message: string;
  id: string;
}

const AcceptInterviewSchedule: FC<Props> = ({ message }) => {
  const [isRejected, setIsRejected] = useState(false);

  return (
    <div className="w-full">
      <p>{message}</p>
      {isRejected ? (
        <div className="flex flex-col w-full">
          <label>Rejection reason</label>
          <textarea className="w-full border-2 " placeholder=""></textarea>
        </div>
      ) : (
        <div className="flex w-full justify-end">
          <button
            className="py-2 px-3 bg-[#dc3545] text-white rounded-lg"
            onClick={() => setIsRejected(true)}
          >
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

export default AcceptInterviewSchedule;
