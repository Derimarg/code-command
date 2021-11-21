import React, { useState } from "react";
import Pages from "./Conditionals";
import AnimatedLoad from "./AnimatedLoad";

export default function Loading() {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 1000);

  return redirect ? <Pages /> : <AnimatedLoad />;
}
