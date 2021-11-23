import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  StyledTextarea,
  StatusMsg,
} from "./ContactSection.Elements";
import {
  InputContainer,
  StyledInput,
  Status,
  ContactBtn,
} from "../../containers/login/Input";
import emailjs from "emailjs-com";
import { validateEmail } from "../../utils/helpers";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, subject, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ztht0tl",
        "template_bebrtdg",
        form.current,
        "user_ZqoXtIt7uzOc1O05qKbej"
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrorMessage("Message sent!");
        },
        (error) => {
          console.log(error.text);
          setErrorMessage(
            "Your message couldn't be sent. Please email directly at derimargray@gmail.com"
          );
        }
      );
  }

  return (
    <>
      <Container id="contact">
        <Form ref={form} onSubmit={sendEmail}>
          <h3>Let's Get In Touch</h3>
          <InputContainer>
            <StyledInput
              placeholder="Full Name"
              name="name"
              type="text"
              id="name"
              defaultValue={name}
              onBlur={handleChange}
              required
              autocomplete="off"
            />
            <Status />
          </InputContainer>
          <InputContainer>
            <StyledInput
              placeholder="Subject"
              name="subject"
              type="subject"
              id="subject"
              defaultValue={subject}
              onBlur={handleChange}
              required
              autocomplete="off"
            />
            <Status />
          </InputContainer>
          <InputContainer>
            <StyledInput
              placeholder="Email Address"
              name="email"
              type="email"
              id="email"
              defaultValue={email}
              onBlur={handleChange}
              required
              autocomplete="off"
            />
            <Status />
          </InputContainer>
          <InputContainer>
            <StyledTextarea
              placeholder="Message"
              name="message"
              type="message"
              id="message"
              defaultValue={message}
              onBlur={handleChange}
              required
              autocomplete="off"
              rows="5"
            />
            <StatusMsg />
          </InputContainer>
          {errorMessage && (
            <div id="submitErrorMessage">
              <div>{errorMessage}</div>
            </div>
          )}
          <InputContainer>
            <ContactBtn type="submit">Send Message</ContactBtn>
          </InputContainer>
          <h4 style={{marginLeft: "-1.5rem"}}>
            New to Code Command?
            <Link to="/signup">
              <span>Register</span>
            </Link>
          </h4>
        </Form>
      </Container>
    </>
  );
}
