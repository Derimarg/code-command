import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjThree } from "./Data";

function ServicesSec() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default ServicesSec;
