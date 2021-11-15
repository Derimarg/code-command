import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../containers/home/Data";
import { InfoSection, Pricing } from "../../components";
import Auth from "../../utils/auth";
import Courses from "../../pages/Courses/Courses";

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
        </>
      );
    }
  }

  return <div>{ShowHomePage()}</div>;
}
