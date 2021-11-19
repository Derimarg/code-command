import React from "react";
import { InfoSection } from "../../components";
import { whoWeAreObj } from "./Data";

export default function whoWeAreSection() {
  return (
    <>
      <InfoSection {...whoWeAreObj} />
    </>
  );
}
