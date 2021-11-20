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
import { Fade } from "react-reveal";

function InfoSection(
  {
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightTopTitle,
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
    location,
    title,
    route,
  }
) {


  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <Fade right>
                <TextWrapper>
                  <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                  <TopLine lightTopTitle={lightTopTitle}>{title}</TopLine>
                  <ProfileWraper lightTopLine2={lightTopLine2}>
                    {role}
                  </ProfileWraper>
                  <ProfileWraper lightTopLine2={lightTopLine2}>
                    {location}
                  </ProfileWraper>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle lightTextDesc={lightTextDesc}>
                    {description}
                  </Subtitle>

                  <Link to={route}>
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Link>
                </TextWrapper>
              </Fade>
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
