import ActionButton from "Components/ActionButton/ActionButton";
import React, { useState } from "react";
import { ProfileDetailsCard } from "./ProfileDetailsCard/ProfileDetailsCard";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const CandidateProfileDetails = () => {
  return (
    <div className="bg-BG_GREEN  text-left dashboard-body">
      <div className="flex ms-auto xs-mt-30 w-full">
        <ProfileDetailsCard />
      </div>
      <ProfileInfo />
    </div>
  );
};
