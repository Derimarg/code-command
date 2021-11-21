import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/page-turner-2.svg";
import Loginbar from "../../containers/login/Loginbar";
import Message from "../../containers/login/Message";

export default function Login() {
  const Container = styled.div`
    background: #eefcff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `;

  const Wrapper = styled.div`
    background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
  `;

  return (
    <Container>
      <Wrapper>
        <Message />
        <Loginbar />
      </Wrapper>
    </Container>
  );
}
