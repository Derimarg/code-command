import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: hsl(204, 100%, 40%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! 45% off on all courses</Container>;
};

export default Announcement;
