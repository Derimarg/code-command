import styled from "styled-components";
// import { Link } from "react-router-dom";

export const TemplateContainer = styled.div`
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "202A45")};
`;

export const Container = styled.div`
    height: 700,
    clear: "both",
    paddingTop: 20,
    textAlign: "center",
    max-width: 1200px;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
`;

export const Heading = styled.h1`
  text-align: Center;
  margin: 2rem;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;
export const LastUpdate = styled.div`
  color: ${({ lightLastUpdate }) => (lightLastUpdate ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const Title = styled.h2`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  margin: 2rem;
  line-height: 1.25;
  text-align: Center;
  font-weight: bold;
`;

export const Subtitle = styled.h3`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  margin: 5px 0px -15px 20px;
  line-height: 1.25;
  border-bottom: solid;
  width: fit-content;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 20px 0;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const Address = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
`;

// export const StyledLink = styled.a`
//   color: Blue;
//   margin: 20px 0;
// `;