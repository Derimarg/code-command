import React from "react";
import Products from "../../components/Products";
import { productData } from "../../components/Products/data";

export default function Product() {
  var coursesHeader = [
    {
      heading: "Time to practice and learn",
      desc: "This page contains all available courses on coding app, however, if you're a beginner, the recommended way to learn on coding app is through a learning path. ",
      buttonLabel: "Visit Full Stack Web Developer Learning Path",
    },
  ];

  return (
    <>
      {coursesHeader.map((a) => (
        <Products
          heading={a.heading}
          description={a.desc}
          buttonLabel={a.buttonLabel}
          data={productData}
        />
      ))}
    </>
  );
}
