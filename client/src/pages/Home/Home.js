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

export default function Home(lightBg, props) {
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
          <InfoSection {...homeObjOne} theme={props.theme} />
        </Fade>
        <Pricing theme={props.theme} />
        <InfoSection {...homeObjFour} theme={props.theme} />
        <InfoSection {...homeObj7} theme={props.theme} />
        <InfoSection {...homeObjTwo} theme={props.theme} />
        <InfoSection {...homeObj8} theme={props.theme} />
      </>
    );
  }
}
