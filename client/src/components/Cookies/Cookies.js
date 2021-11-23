import React from "react";
import CookieConsent from "react-cookie-consent";
import { CookieLink } from "../../globalStyles";

export default function Cookies() {
  return (
    <>
      <CookieConsent
        // debug={true}
        style={{ background: "rgba(16,21,34,0.78)", textAlign: "left" }}
        cookieName="myAwesomeCookie"
        buttonStyle={{
          color: "#fff",
          background: "#4B59F7",
          fontSize: "24px",
          borderRadius: "4px",
        }}
        buttonText={"I understand!"}
        buttonClasses="btn btn-primary"
        expires={150}
      >
        This site use cookies. See our{" "}
        <CookieLink to="/cookies">privacy policy</CookieLink> for more.
      </CookieConsent>
    </>
  );
}
