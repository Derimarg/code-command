import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjFour,
  homeObj7,
  homeObj8,
} from "../../containers/home/Data";
import { InfoSection, Pricing } from "../../components";
import Auth from "../../utils/auth";
import Courses from "../../pages/Courses/Courses";

export default function Home(lightBg) {
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
        <Pricing />
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObj7} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObj8} />
      </>
    );
  }
}
