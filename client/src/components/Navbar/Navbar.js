import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
} from "./Navbar.elements";

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            NEW APP
          </NavLogo>
          <MobileIcon></MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Something</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Something</NavLinks>
            </NavItem>
            <NavItemBtn></NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}
