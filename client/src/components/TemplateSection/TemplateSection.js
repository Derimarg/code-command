import React from "react";
// import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  LastUpdate,
  Title,
  Paragraph,
  Address
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
  lightTextDesc7,
  lightTextDesc8,
  lightTextDesc9,
  headline,
  title,
  title2,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
  paragraph7,
  paragraph8,
  paragraph9,
  address1,
  address2,
  address3,
  address4, 
  title3,
  paragraph10,
  paragraph11,
  title4,
  paragraph15,
  paragraph16,
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
        <Paragraph lightTextDesc7={lightTextDesc7}>{paragraph7}</Paragraph>
        <Paragraph lightTextDesc8={lightTextDesc8}>{paragraph8}</Paragraph>
        <Paragraph lightTextDesc9={lightTextDesc9}>{paragraph9}</Paragraph>
        <Address lightTextDesc1={lightTextDesc1}>{address1}</Address>
        <Address lightTextDesc1={lightTextDesc1}>{address2}</Address>
        <Address lightTextDesc1={lightTextDesc1}>{address3}</Address>
        <Address lightTextDesc1={lightTextDesc1}>{address4}</Address>
        <Paragraph lightTextDesc1={lightTextDesc1}>{paragraph10}</Paragraph>
        <Title lightText1={lightText1}>{title3}</Title>
        <Paragraph lightTextDesc1={lightTextDesc1}>{paragraph11}</Paragraph>
      </Container>
    </>
  );
}

export default InfoSection;
