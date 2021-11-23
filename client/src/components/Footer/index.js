import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLink2,
} from "./Footer.elements";
import { iconsDB, aboutDB, socialDB } from "./Data";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          {aboutDB.map((x, index) => (
            <>
              <FooterLinkItems key={index}>
                <FooterLinkTitle>{x.title}</FooterLinkTitle>
                {x.details.map((a, index) => (
                  <FooterLink2 to={a.route} key={index}>
                    {a.des}
                  </FooterLink2>
                ))}
                <FooterLink2></FooterLink2>
              </FooterLinkItems>
            </>
          ))}
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            {socialDB.map((y, index) => (
              <FooterLink
                key={index}
                href={y.href}
                target="_blank"
                aria-label={y.name}
              >
                {y.name}
              </FooterLink>
            ))}
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            CC
          </SocialLogo>
          <WebsiteRights>
            Learn to code interactively &copy; code app
            {new Date().getFullYear()}{" "}
            <span style={{ fontSize: "18px" }}>|</span>
            <Link to="privacy" style={{ color: "#4B59F7" }}>
              All rights reserved.
            </Link>
          </WebsiteRights>
          <SocialIcons>
            {iconsDB.map((i, index) => (
              <SocialIconLink
                key={index}
                href={i.href}
                target="_blank"
                aria-label={i.name}
              >
                {i.element}
              </SocialIconLink>
            ))}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}
