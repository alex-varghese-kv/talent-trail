import React from "react";
import CandidateProfileCard from "../CandidateProfileCard/CandidateProfileCard";
import { getApplication, useGetCandidates } from "service/hooks/jobs.hooks";
import { Application, Candidate } from "types/jobs";

export const SavedCandidatesList = () => {
  // const { data: candidateList } = useGetCandidates({
  //   variables: {
  //     id: "1111",
  //   },
  // });
  const { data: candidateList } = getApplication();

  console.log(
    "🚀 ~ file: SavedCandidates.tsx:11 ~ SavedCandidatesList ~ candidateList:",
    candidateList
  );

  const renderCandidateList = (applications: Application[]) => {
    return applications.map((applications: Application) => {
      return (
        <CandidateProfileCard
          candidate={applications.candidate}
          application={applications}
        />
      );
    });
  };
  return (
    <div className="w-full">
      {renderCandidateList(candidateList?.findApplications || [])}
    </div>
  );
};
