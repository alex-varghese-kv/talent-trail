import React, { FC } from "react";
import cx from "classnames";
import ActionButton from "Components/ActionButton/ActionButton";

interface Props {
  title: string;
  place: string;
  jobCreated: string;
  Applicants: number;
  status: string;
}
const MyJobsCard: FC<Props> = ({
  title,
  place,
  jobCreated,
  Applicants,
  status,
}) => {
  const getState = (state: string) => (
    <div className="text-capitalize flex justify-center items-center">
      <div
        className={cx("w-3 h-3 text-center items-center mr-1 rounded-full", {
          "bg-[green]": state === "ACTIVE",
          "bg-[red]": state === "EXPIRED",
        })}
      ></div>
      <div>{state}</div>
    </div>
  );
  return (
    <tr className="active">
      <td>
        <div className="job-name fw-500">{title}</div>
        <div className="info1">{place}</div>
      </td>
      <td>{new Date(jobCreated).toLocaleDateString()}</td>
      <td>{Applicants} Applications</td>
      <td>
        <div className="text-capitalize">{getState(status)}</div>
      </td>
      <td>
        <ActionButton />
      </td>
    </tr>
  );
};

export default MyJobsCard;
