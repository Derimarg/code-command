import React from "react";
import { InfoSection } from "..";
import {
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
  review8,
  review9,
  review10,
} from "../../containers/testimonials/Data";

export default function ServicesSec() {
  return (
    <>
      <InfoSection {...review1} />
      <InfoSection {...review2} />
      <InfoSection {...review3} />
      <InfoSection {...review4} />
      <InfoSection {...review5} />
      <InfoSection {...review6} />
      <InfoSection {...review7} />
      <InfoSection {...review8} />
      <InfoSection {...review9} />
      <InfoSection {...review10} />
    </>
  );
}
