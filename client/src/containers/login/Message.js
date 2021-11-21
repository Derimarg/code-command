import React, { useContext } from "react";
import styled from "styled-components";
import { MouseContext } from "../../context/mouse-context";

const Message = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <Container
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      <h1>
        Welcome Back <br />
        Team
      </h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Message;
