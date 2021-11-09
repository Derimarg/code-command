import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/opencart-brands.svg";
import Input from "./Input";

const Loginbar = () => {
  return (
    <Container>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <h3>
          New <span>App</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Login</h3>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <button>Login</button>
        <h4>
          Don't have an account? <span>Register</span>
        </h4>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #4b59f7;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 4rem;
  }

  h3 {
    color: #4b59f7;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #0099ff;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 500px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #0099ff;
      cursor: pointer;
    }
  }
`;

export default Loginbar;
