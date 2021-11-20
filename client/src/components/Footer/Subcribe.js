import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Subscribe() {
    const  [formState, setFormState] = useState({
        email: "",
    });

    const { email } = formState;

    const handlechange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
        } if (!isValid) {
            setErrorMessage("Your email is invalid")
        } else {
            setErrorMessage("");
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
        };

        const form = useRef();

        function sendEmail(e) {
            e.preventDefault();

            emailjs
                .sendFrom(
                    "service_ztht0tl",
                    "template_bebrtdg",
                    form.current,
                    "user_ZqoXtIt7uzOc1O05qKbej"
                )
                .then(
                    (result) => {
                      console.log(result.text);
                      setErrorMessage("Subscribed Successfuly!");
                    },
                    (error) => {
                        console.log(error.text);
                        setErrorMessage(
                          "Your message couldn't be sent. Please email directly at email@test.com"
                        );
                    }
                )
        }
    }
}

export default Subscribe;