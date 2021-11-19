import React from "react";
import { Fade } from "react-reveal";
import {
  homeObjOne,
  homeObjTwo,
  // homeObjThree,
  homeObjFour,
  homeObj7,
  homeObj8,
} from "../../containers/home/Data";
import { InfoSection, Pricing } from "../../components";
import Auth from "../../utils/auth";
import Courses from "../../pages/Courses/Courses";
// import Carousel from "../../components/Carousel/Carousel";
// import ReviewSlide from "../../components/ReviewSlide/ReviewSlide";

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
        <Fade top duration={2000} distance="80px">
          <>
            {/* <Carousel /> */}
            <InfoSection {...homeObjOne} />
            <Pricing />
            <InfoSection {...homeObjFour} />
            {/* <InfoSection {...homeObjThree} /> */}
            {/* <ReviewSlide /> */}
            <InfoSection {...homeObj7} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObj8} />
          </>
        </Fade>
      );
    }
  }

  return <div>{ShowHomePage()}</div>;
}
