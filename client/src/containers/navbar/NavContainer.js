import React from "react";
import Navbar from "../../components/Navbar/Navbar";

export default function NavContainer(props) {
  return (
    <div>
      <Navbar theme={props.theme} setTheme={props.setTheme} />
    </div>
  );
}
