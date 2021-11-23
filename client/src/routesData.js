import React from "react";
import NavContainer from "./containers/navbar/NavContainer";
import Cartbar from "./containers/cart/Cartbar";
import { Footer } from "./components";
import Cookies from "./components/Cookies/Cookies";

export const routes = [
  { path: "/"},
  { path: "/login" },
  { path: "/signup" },
  { path: "/courses" },
  { path: "/checkout" },
  { path: "/contact" },
  { path: "/order-history" },
  { path: "/success" },
  { path: "/privacy" },
  { path: "/cookies" },
  { path: "/terms" },
  { path: "/testimonials" },
  { path: "/code-editor" },
];

export const navbarObj = { element: <NavContainer /> };
export const cartObj = { element: <Cartbar /> };
export const footerObj = { element: <Footer /> };
export const cookieObj = { element: <Cookies /> };
