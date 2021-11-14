import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { capitalizeFirstLetter, validateEmail } from "../../utils/helpers";

function Contact() {
  const [links] = useState([
    {
      link: "contact",
    },
  ]);

  const [currentSection] = useState(links[0]);

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
    <section className="page-section bg-dark" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h1
              className="mt-0 text-white font-weight-bold"
              data-testid="h1tag"
            >
              {capitalizeFirstLetter(currentSection.link)}
              <hr className="divider" />
            </h1>
            <div className="page-skill bg-dark" id="contact"></div>
            <h3
              className="mt-0 text-muted font-weight-bold"
              data-testid="h3tag"
            >
              Have a question, or comment?
              <hr />
              Holler!!
            </h3>
            <hr />
          </div>
          <hr />
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form id="contactForm" ref={form} onSubmit={sendEmail}>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Future tech mogul"
                  onBlur={handleChange}
                />
                <label htmlFor="name">Full name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="subject"
                  type="subject"
                  name="subject"
                  defaultValue={subject}
                  onBlur={handleChange}
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="frank.smith@fakemail.com"
                  onBlur={handleChange}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  name="message"
                  defaultValue={message}
                  onBlur={handleChange}
                  rows="5"
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              {errorMessage && (
                <div id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    {errorMessage}
                  </div>
                </div>
              )}

              <div className="d-grid">
                <button
                  data-testid="button"
                  className="btn btn-primary btn-xl"
                  id="submitButton"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;