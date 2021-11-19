import React from "react";
import { Link } from "react-router-dom";
import { ReviewContainer, Button } from "../../globalStyles";
import {
  ReviewSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  ProfileWraper,
  Img,
} from "../InfoSection/InfoSection.elements";

export default function ReviewSection({
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
}) {
  return (
    <>
      <ReviewSec lightBg={lightBg}>
        <ReviewContainer>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
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
        </ReviewContainer>
      </ReviewSec>
    </>
  );
}
