import React from "react";
import CoursesSection from "../../components/CoursesSection/CoursesSection";

export default function Courses() {
  var coursesHeader = [
    {
      heading: "Time to practice and learn",
      desc: "This page contains all available courses on Code Command, however, if you're a beginner, the recommended way to learn here is through a learning path. ",
    },
  ];

  return (
    <>
      {coursesHeader.map((a) => (
        <CoursesSection heading={a.heading} description={a.desc} />
      ))}
    </>
  );
}
