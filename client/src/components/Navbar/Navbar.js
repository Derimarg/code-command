import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavIconCart,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  // NavCart,
  NavBtnLink,
} from "./Navbar.elements";
import { Button } from "../../globalStyles";
import Auth from "../../utils/auth";
// import Cartbar from "../../containers/cart/Cartbar";
// import { CheckoutMenu } from "../../components/Sidebar/SidebarElements";
// import Sidebar from "../../components/Sidebar/Index";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/orderHistory" onClick={closeMobileMenu}>
              Order History
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/courses" onClick={closeMobileMenu}>
              Courses
            </NavLinks>
          </NavItem>
          <NavItemBtn>
            {button ? (
              <NavBtnLink to="/"onClick={() => Auth.logout()}>
                <Button primary>LOGOUT</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to="/" onClick={() => Auth.logout()}>
                <Button fontBig primary onClick={closeMobileMenu}>
                  LOGOUT
                </Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
        </>
      );
    } else {
      return (
        <>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services" onClick={closeMobileMenu}>
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact" onClick={closeMobileMenu}>
              Contact Us
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/courses" onClick={closeMobileMenu}>
              Courses
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/orderHistory" onClick={closeMobileMenu}>
              Order History
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/checkout"
              onClick={(closeMobileMenu, toggle)}
              toggle={toggle}
            >
              <NavIconCart onClick={toggle} toggle={toggle} />
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/login" onClick={closeMobileMenu}>
              Login
            </NavLinks>
          </NavItem>
          <NavItemBtn>
            {button ? (
              <NavBtnLink to="/signup">
                <Button primary>Sign Up</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to="/signup">
                <Button fontBig primary onClick={closeMobileMenu}>
                  Sign Up
                </Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
        </>
      );
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon /> Code Command
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {showNavigation()}
            </NavMenu>
            {/* <CheckoutMenu isOpen={isOpen} toggle={toggle}>
              <Sidebar />
            </CheckoutMenu> */}
          </NavbarContainer>
        </Nav>
        {/* <Cartbar /> */}
      </IconContext.Provider>
    </>
  );
}
