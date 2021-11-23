import React from "react";
import { withRouter } from "react-router-dom";

export const BarTemplate = withRouter(({ location, element }) => {
  return (
    <>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/privacy" &&
        location.pathname !== "/cookies" &&
        location.pathname !== "/code-editor" &&
        location.pathname !== "/terms" && <>{element}</>}
    </>
  );
});
