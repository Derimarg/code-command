import React from "react";
import NavContainer from "./containers/navbar/NavContainer";
import Cartbar from "./containers/cart/Cartbar";
import { Footer } from "./components";
import Cookies from "./components/Cookies/Cookies";

export const routesData = [
  { route: "/" },
  { route: "/login" },
  { route: "/signup" },
  { route: "/courses" },
  { route: "/checkout" },
  { route: "/contact" },
  { route: "/orderHistory" },
  { route: "/success" },
  { route: "/privacy" },
  { route: "/cookies" },
  { route: "/terms" },
  { route: "/testimonials" },
];

export const navbarObj = { element: <NavContainer /> };
export const cartObj = { element: <Cartbar /> };
export const footerObj = { element: <Footer /> };
export const cookieObj = { element: <Cookies /> };
