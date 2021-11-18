import React from "react";
import { Fade } from "react-reveal";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../containers/home/Data";
import { InfoSection, Pricing } from "../../components";
import Auth from "../../utils/auth";
import Courses from "../../pages/Courses/Courses";
import { SliderData } from "../../components/Carousel/SliderData";
import ImageSlider from "../../components/Carousel/ImageSlider";
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
            <ImageSlider slides={SliderData} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjTwo} />
          </>
        </Fade>
      );
    }
  }

  return <div>{ShowHomePage()}</div>;
}
