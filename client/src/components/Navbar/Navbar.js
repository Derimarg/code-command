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
  MobCartLink,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Navbar.elements";
import { Button } from "../../globalStyles";
import Auth from "../../utils/auth";

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
          <MobCartLink>
            <NavItem>
              <NavLinks to="/checkout" onClick={closeMobileMenu}>
                <NavIconCart />
              </NavLinks>
            </NavItem>
          </MobCartLink>
          <NavItemBtn>
            {button ? (
              <NavBtnLink to="/" onClick={() => Auth.logout()}>
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
          <MobCartLink>
            <NavItem>
              <NavLinks to="/checkout" onClick={closeMobileMenu}>
                <NavIconCart />
              </NavLinks>
            </NavItem>
          </MobCartLink>

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
              <NavIcon /> <span>Code Command</span>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {showNavigation()}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
