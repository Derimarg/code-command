import React, { useEffect } from "react";
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
import Aos from "aos";

export default function Home(lightBg) {
  function ShowHomePage() {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

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
            <InfoSection
              data-aos="fade-right"
              data-aos-duration="4000"
              {...homeObjOne}
            />
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
