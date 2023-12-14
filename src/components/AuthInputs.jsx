import { useState } from "react";
import { styled } from "styled-components";

import Button from "./Button";
import CustomInput from "./Input";

// Styled in styled-components is an object where we can access the HTML elements.
// The syntax below is called tagged template. We copy the style from CSS file inside ``.
// It will give us a React component that automatically returns a <div>
// that has these styles applied to it. It will be a div that internally also uses the special children prop
// so that it can be wrapped around other content.
// Finally, we replace the <div> below with the ControlContainer component.

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <CustomInput
          type="email"
          // style={{
          //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
          // }}
          // We can use inline style above to dynamically change the backgroundColor based on the emailNotValid condition
          label="Email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <CustomInput
          type="password"
          label="Password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
