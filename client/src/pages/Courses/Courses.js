import React from "react";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
// import Products from "../../components/Products";
import { productData } from "../../components/Products/data";

export default function Courses() {
  var coursesHeader = [
    {
      heading: "Time to practice and learn",
      desc: "This page contains all available courses on Code Command, however, if you're a beginner, the recommended way to learn here is through a learning path. ",
      buttonLabel: "Visit Full Stack Web Developer Learning Path",
    },
  ];

  return (
    <>
      {coursesHeader.map((a) => (
        <CoursesSection
          heading={a.heading}
          description={a.desc}
          buttonLabel={a.buttonLabel}
          data2={productData}
        />
      ))}
    </>
  );
}
