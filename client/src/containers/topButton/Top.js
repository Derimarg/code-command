import React from "react";
import { TopIcon, IconWrap } from "./Top.Elements";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // crolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  };

  return (
    <>
      <IconWrap onClick={TopEvent} id="topButton" title="Go to top">
        <TopIcon aria-hidden="true"></TopIcon>
      </IconWrap>
    </>
  );
}
