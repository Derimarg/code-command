import React from "react";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
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
  Discord,
  Slack,
  Github,
  StackOverflow,
  FooterLink2,
} from "./Footer.elements";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink2 to="/testimonials">Testimonials</FooterLink2>
            <FooterLink2 to="/privacy">Privacy Policy</FooterLink2>
            <FooterLink2 to="/terms">Terms of Service</FooterLink2>
            <FooterLink2 to="/cookies">Cookies Policy</FooterLink2>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink2 to="/contact">Contact</FooterLink2>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink
              href="https://github.com/Derimarg/code-command"
              target="_blank"
              aria-label="Github"
            >
              Github
            </FooterLink>
            <FooterLink
              href="http://kuvirtbofsfpt-che6386.slack.com/"
              target="_blank"
              aria-label="Slack"
            >
              Slack
            </FooterLink>
            <FooterLink
              href="https://discord.gg/KVS3HdU3"
              target="_blank"
              aria-label="Discord"
            >
              Discord
            </FooterLink>
            <FooterLink
              href="https://stackoverflow.com/users/17421889/code-command"
              target="_blank"
              aria-label="StackOverFlow"
            >
              Stack Overflow
            </FooterLink>
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
            Learn to code interactively &copy; code app{" "}
            {new Date().getFullYear()}{" "}
            <span style={{ fontSize: "20px" }}>|</span> All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/Derimarg/code-command"
              target="_blank"
              aria-label="Github"
            >
              <Github />
            </SocialIconLink>
            <SocialIconLink
              href="http://kuvirtbofsfpt-che6386.slack.com/"
              target="_blank"
              aria-label="Slack"
            >
              <Slack />
            </SocialIconLink>
            <SocialIconLink
              href="https://discord.gg/KVS3HdU3"
              target="_blank"
              aria-label="Discord"
            >
              <Discord />
            </SocialIconLink>
            <SocialIconLink
              href="https://stackoverflow.com/users/17421889/code-command"
              target="_blank"
              aria-label="StackOverFlow"
            >
              <StackOverflow />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}
