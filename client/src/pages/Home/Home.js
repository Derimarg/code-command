import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../containers/home/Data";
// import { InfoSec } from "../../components/InfoSection/InfoSection.elements";
import { InfoSection, Pricing } from "../../components";
import Auth from "../../utils/auth";
import Courses from "../../pages/Courses/Courses";
// import Cartbar from "../../containers/cart/Cartbar";

export default function Home(lightBg) {
  function ShowHomePage() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Courses />
        </>
      );
    } else {
      return (
        <>
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjFour} />
          <InfoSection {...homeObjThree} />
          <Pricing />
          <InfoSection {...homeObjTwo} />
          {/* <Cartbar /> */}
          {/* <InfoSec lightBg={lightBg} /> */}
        </>
      );
    }
  }

  return <div>{ShowHomePage()}</div>;
}
