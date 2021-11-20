import React from "react";
import { Fade } from "react-reveal";
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
          <Fade top duration={2000} distance="80px">
            <InfoSection {...homeObjOne} />
          </Fade>
          <Pricing />
          <InfoSection {...homeObjFour} />
          <InfoSection {...homeObj7} />
          <InfoSection {...homeObjTwo} />
          <InfoSection {...homeObj8} />
        </>
      );
    }
  }

  return <div>{ShowHomePage()}</div>;
}
