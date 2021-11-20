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

export const loadinDB = [
  { route: "/", element: <Home /> },
  { route: "login", element: <Login /> },
  { route: "signup", element: <Signup /> },
  { route: "/courses", element: <Courses /> },
  { route: "checkout", element: <Checkout /> },
  { route: "/contact", element: <Contact /> },
  { route: "orderHistory", element: <OrderHistory /> },
  { route: "/success", element: <Success /> },
  { route: "/privacy", element: <PrivacyPage /> },
  { route: "cookies", element: <Cookies /> },
  { route: "/terms", element: <Terms /> },
  { route: "testimonials", element: <Testimonials /> },
  { route: "", element: <NotFound /> },
];
