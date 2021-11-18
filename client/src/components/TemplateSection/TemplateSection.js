import React from "react";
// import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  LastUpdate,
  Title,
  Paragraph,
} from "./Template.elements";

function InfoSection({
  lightBg,
  lastUpdate,
  lightLastUpdate,
  lightText,
  lightText1,
  lightText2,
  lightTextDesc1,
  lightTextDesc2,
  lightTextDesc3,
  lightTextDesc4,
  lightTextDesc5,
  lightTextDesc6,
  headline,
  title,
  title2,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
}) {
  return (
    <>
      <Container lightBg={lightBg}>
        <Heading lightText={lightText}>{headline}</Heading>
        <LastUpdate lightLastUpdate={lightLastUpdate}>{lastUpdate}</LastUpdate>
        <Title lightText1={lightText1}>{title}</Title>
        <Paragraph lightTextDesc1={lightTextDesc1}>{paragraph1}</Paragraph>
        <Paragraph lightTextDesc2={lightTextDesc2}>{paragraph2}</Paragraph>
        <Paragraph lightTextDesc3={lightTextDesc3}>{paragraph3}</Paragraph>
        <Paragraph lightTextDesc4={lightTextDesc4}>{paragraph4}</Paragraph>
        <Title lightText2={lightText2}>{title2}</Title>
        <Paragraph lightTextDesc5={lightTextDesc5}>{paragraph5}</Paragraph>
        <Paragraph lightTextDesc6={lightTextDesc6}>{paragraph6}</Paragraph>
      </Container>
    </>
  );
}

export default InfoSection;
