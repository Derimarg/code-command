import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/code-solid.svg";
import Input from "./Input";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function Signupbar() {
  const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const { data } = await addUser({
    //     variables: {
    //       firstName: formState.firstName,
    //       lastName: formState.lastName,
    //       email: formState.email,
    //       password: formState.password,
    //     },
        
    //   });
    //   console.log({data});
    //   const token = data.addUser.token;
    //   Auth.login(token);
    // } catch (error) {
    //   console.log(error);
    // }
console.log(formState);
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    console.log();
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="logo brand" />
        </Link>
        <h3>
          Code <span>Command</span>
        </h3>
      </LogoWrapper>
      <Form onSubmit={handleFormSubmit}>
        <h3>Sign Up</h3>
        <Input
          placeholder="First Name"
          name="firstName"
          type="firstName"
          id="firstName"
          onChange={handleChange}
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          type="lastName"
          id="lastName"
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          id="pwd"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account?
          <Link to="/login">
            <span>Sign In</span>
          </Link>
        </h4>
      </div>
    </Container>
  );
}

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

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
    margin-left: 2rem;
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
      text-decoration: none !important;
      color: #0099ff;
      cursor: pointer;
      padding-left: 0.5rem;
    }
  }
`;

export default Signupbar;
