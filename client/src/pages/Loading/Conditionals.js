import React from "react";
import { withRouter } from "react-router-dom";
import Courses from "../Courses/Courses";
import Checkout from "../Checkout/Checkout";
import Contact from "../Contact/Contact";
import OrderHistory from "../OrderHistory/OrderHistory";
import Success from "../Success/Success";
import PrivacyPage from "../Privacy/Privacy";
import Cookies from "../Cookies/Cookies";
import Terms from "../Terms/Terms";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import NotFound from "../NotFound/NotFound";
import Testimonials from "../Testimonials/Testimonials";
import CodeEditor from "../CodeEditor/CodeEditor";

const Pages = withRouter(({ location }) => {
  switch (location.pathname) {
    case "/":
      return <Home />;
    case "/courses":
      return <Courses />;
    case "/checkout":
      return <Checkout />;
    case "/contact":
      return <Contact />;
    case "/order-history":
      return <OrderHistory />;
    case "/success":
      return <Success />;
    case "/privacy":
      return <PrivacyPage />;
    case "/cookies":
      return <Cookies />;
    case "/terms":
      return <Terms />;
    case "/login":
      return <Login />;
    case "/signup":
      return <Signup />;
    case "/testimonials":
      return <Testimonials />;
    case "/code-editor":
      return <CodeEditor />;
    default:
      return <NotFound />;
  }
});

export default Pages;
