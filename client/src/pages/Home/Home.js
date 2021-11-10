import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../containers/home/Data";
// import { InfoSec } from "../../components/InfoSection/InfoSection.elements";
import { InfoSection } from "../../components";

export default function Home(lightBg) {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      {/* <InfoSec lightBg={lightBg} /> */}
    </>
  );
}
