import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import logo from "../../assets/code-solid.svg";
import {
  Container,
  LogoWrapper,
  Form,
  Terms,
  InputContainer,
  StyledInput,
  Status,
} from "./Input";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { signupObj } from "./Data";

export default function Signupbar(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
          <img src={logo} alt="logo brand" />
        </Link>
        <h3>
          Code <span>Command</span>
        </h3>
      </LogoWrapper>
      <Form onSubmit={handleFormSubmit}>
        <h3>Sign Up</h3>
        <div>
          {signupObj.map((x) => (
            <InputContainer>
              <StyledInput
                placeholder={x.placeholder}
                name={x.name}
                type={x.type}
                id={x.id}
                onChange={handleChange}
                required
                autocomplete="off"
              />
              <Status />
            </InputContainer>
          ))}
        <button type="submit">Sign Up</button>
        </div>
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
