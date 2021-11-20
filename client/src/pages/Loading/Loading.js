import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Courses from "../../pages/Courses/Courses";
import Checkout from "../../pages/Checkout/Checkout";
import Contact from "../../pages/Contact/Contact";
import OrderHistory from "../../pages/OrderHistory/OrderHistory";
import Success from "../../pages/Success/Success";
import PrivacyPage from "../../pages/Privacy/Privacy";
import Cookies from "../../pages/Cookies/Cookies";
import Terms from "../../pages/Terms/Terms";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import NotFound from "../../pages/NotFound/NotFound";
import Testimonials from "../../pages/Testimonials/Testimonials";

import "./Load.css";

function AnimatedLoad() {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
    </div>
  );
}
const Pages = withRouter(({ location }) => {
  switch (location.pathname) {
    case "/":
      return (
        <>
          <Home />
        </>
      );
    case "/courses":
      return (
        <>
          <Courses />
        </>
      );
    case "/checkout":
      return (
        <>
          <Checkout />
        </>
      );
    case "/contact":
      return (
        <>
          <Contact />
        </>
      );
    case "/orderHistory":
      return (
        <>
          <OrderHistory />
        </>
      );
    case "/success":
      return (
        <>
          <Success />
        </>
      );
    case "/privacy":
      return (
        <>
          <PrivacyPage />
        </>
      );
    case "/cookies":
      return (
        <>
          <Cookies />
        </>
      );
    case "/terms":
      return (
        <div>
          <Terms />
        </div>
      );
    case "/login":
      return (
        <>
          <Login />
        </>
      );
    case "/signup":
      return (
        <>
          <Signup />
        </>
      );
    case "/testimonials":
      return (
        <>
          <Testimonials />
        </>
      );

    default:
      return (
        <>
          <NotFound />
        </>
      );
  }
});

export default function Loading() {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 1000);

  return redirect ? <Pages /> : <AnimatedLoad />;
}
