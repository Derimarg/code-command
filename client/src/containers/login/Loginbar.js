import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import logo from "../../assets/code-solid.svg";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import {
  Container,
  LogoWrapper,
  Form,
  ErrorMsg,
  InputContainer,
  StyledInput,
  Status,
} from "./Input";

function Loginbar(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h3>
          Code <span>Command</span>
        </h3>
      </LogoWrapper>
      <Form onSubmit={handleFormSubmit}>
        <h3>Login</h3>
        <InputContainer>
          <StyledInput
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            required
            autocomplete="off"
          />
          <Status />
        </InputContainer>
        <InputContainer>
          <StyledInput
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            required
            autocomplete="off"
          />
          <Status />
        </InputContainer>
        {error ? (
          <>
            <ErrorMsg>
              The credentials you provided are incorrect, please try again
            </ErrorMsg>
          </>
        ) : null}
        <button type="submit">Login</button>
        <h4>
          Don't have an account?
          <Link to="/signup">
            <span>Register</span>
          </Link>
        </h4>
      </Form>
    </Container>
  );
}
export default Loginbar;
