import React from "react";
import SvgComponent  from "./NotFound.Elements";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          height: 700,
          clear: "both",
          paddingTop: 20,
          textAlign: "center",
        }}
      >
        <h1>Page Not Found</h1>
          <span>
            <SvgComponent />
          </span>
      </div>
    </>
  );
};

export default NotFound;
