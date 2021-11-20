import React from "react";
import { Github, Slack, Discord, StackOverflow } from "./Footer.elements";

export const aboutDB = [
  {
    title: "About Us",
    details: [
      { route: "/testimonials", des: "Testimonials" },
      { route: "/privacy", des: "Privacy Policy" },
      { route: "/terms", des: "Terms of Service" },
      { route: "/cookies", des: "Cookies Policy" },
    ],
  },
  {
    title: "Contact Us",
    details: [{ route: "/contact", des: "Contact Us" }],
  },
];

export const socialDB = [
  {
    name: "Github",
    href: "https://github.com/Derimarg/code-command",
  },
  {
    name: "Slack",
    href: "http://kuvirtbofsfpt-che6386.slack.com/",
  },
  {
    name: "Discord",
    href: "https://discord.gg/KVS3HdU3",
  },
  {
    name: "StackOverFlow",
    href: "https://stackoverflow.com/users/17421889/code-command",
  },
];

export const iconsDB = [
  {
    name: "Github",
    href: "https://github.com/Derimarg/code-command",
    element: <Github />,
  },
  {
    name: "Slack",
    href: "http://kuvirtbofsfpt-che6386.slack.com/",
    element: <Slack />,
  },
  {
    name: "Discord",
    href: "https://discord.gg/KVS3HdU3",
    element: <Discord />,
  },
  {
    name: "StackOverFlow",
    href: "https://stackoverflow.com/users/17421889/code-command",
    element: <StackOverflow />,
  },
];
