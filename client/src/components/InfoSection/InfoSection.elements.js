import styled from "styled-components";
import { Link } from "react-router-dom";

// background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")}; dark blue
// background: ${({ lightBg }) => (lightBg ? "#fff" : "#1D1D1D")}; matte black

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#202a45")};
`;

export const ReviewSec = styled.div`
  color: #fff;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#202a45")};
`;

export const InfoSec2 = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#202a45" : "#fff")};
  padding: 60px 0;
  margin-bottom: 1rem;

  background: ${({ lightBg }) => (lightBg ? "#fff" : "#1d1d1d")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 380px) {
    font-size: 1.5rem;
    margin:auto;
    width: 100%;
  }
`;

export const BtnLink = styled(Link)`
  font-size: 13px;
  text-align: center;
  @media screen and (max-width: 400px) {
    width: 90%;
    font-size: 13px;
    text-align: center;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  
  }
  
`;

export const InfoRow2 = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 380px) {
    font-size: 1.5rem;
    margin-left: 10rem;
    width: 100%;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 380px) {
    font-size: 1.5rem;
    margin-left: 10rem;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }

  @media only screen and (max-width: 380px) {
    font-size: 1.5rem;
    margin-left: 10rem;
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Role = styled.h3`
  color: black;
`;

export const ProfileWraper = styled.div`
  color: ${({ lightTopLine2 }) => (lightTopLine2 ? "#f2f2f2" : "#737373")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  @media only screen and (max-width: 380px) {
    font-size: 1.5rem;
    margin-left: 10rem;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;
