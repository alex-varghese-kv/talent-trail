import React from "react";
import CandidateProfileCard from "../CandidateProfileCard/CandidateProfileCard";
import { useGetCandidates } from "service/hooks/jobs.hooks";

export const SavedCandidatesList = () => {
  const { data: candidateList } = useGetCandidates({
    variables: {
      id: "1111",
    },
  });

  console.log(
    "🚀 ~ file: SavedCandidates.tsx:11 ~ SavedCandidatesList ~ candidateList:",
    candidateList
  );

  return (
    <div className="w-full">
      <CandidateProfileCard />
      <CandidateProfileCard />
      <CandidateProfileCard />
      <CandidateProfileCard />
      <CandidateProfileCard />
      <CandidateProfileCard />
    </div>
  );
};
