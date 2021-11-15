import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  ProfileWraper,
  Img,
} from "./InfoSection.elements";

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightTopLine2,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  role,
  location
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <ProfileWraper lightTopLine2={lightTopLine2}>{role}</ProfileWraper>
                <ProfileWraper lightTopLine2={lightTopLine2}>{location}</ProfileWraper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

                <Link to="/signup">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
                
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
