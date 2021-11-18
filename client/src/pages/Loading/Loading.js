import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { settings } from "../../settings";
import Courses from "../../pages/Courses/Courses";
import Services from "../../pages/Services/Services";
import Checkout from "../../pages/Checkout/Checkout";
import Detail from "../../pages/Detail/Detail";
import Contact from "../../pages/Contact/Contact";
import OrderHistory from "../../pages/OrderHistory/OrderHistory";
import Success from "../../pages/Success/Success";
import PrivacyPage from "../../pages/Privacy/Privacy";
import Cookies from "../../pages/Cookies/Cookies";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import NotFound from "../../pages/NotFound/NotFound";
import "../Load/Load.css";

function AnimatedLoad(props) {
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
 

  switch(location.pathname){
    case "/":
      return(<div> <Home /></div>);
    case "/services":
      return(<div> <Services /></div>);
    case "/courses":
      return(<div> <Courses /></div>);
    case "/checkout":
      return(<div> <Checkout /></div>);
    case "/contact":
      return(<div> <Contact /></div>);
    case "/orderHistory":
      return(<div> <OrderHistory /></div>);
    case "/success":
      return(<div> <Success /></div>);
    case "/privacy":
      return(<div> <PrivacyPage /></div>);
    case "/cookies":
    return(<div> <Cookies /></div>);
    case "/login":
      return(<div> <Login /></div>);
    case "/signup":
      return(<div> <Signup /></div>);
    default:
      return(<div> <NotFound /></div>);
  
  }

})

export default function Loading(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 1000);

  return redirect ? (
    // <Redirect to="/courses" />
    <Pages />
  ) : (
    <AnimatedLoad theme={props.theme} />
  );
}
