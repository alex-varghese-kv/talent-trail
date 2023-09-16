import { SavedCandidatesList } from "Components/Candidate/SavedCandidatesList/SavedCandidates";
import React from "react";

const SavedCandidate = () => {
  return (
    <div className="bg-BG_GREEN  text-left dashboard-body">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="main-title text-DARK_GREEN text-left">
          Applied Candidates
        </h2>
      </div>
      <div className="flex ms-auto xs-mt-30 w-full">
        <SavedCandidatesList />
      </div>
    </div>
  );
};

export default SavedCandidate;
