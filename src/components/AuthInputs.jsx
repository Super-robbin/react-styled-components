import { useState } from "react";
import { styled } from "styled-components";

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
        <p>
          <label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Email
          </label>
          {/* 
          We can use the above approach to always have label, but also have invalid if emailNotValid is truthy
          */}
          <input
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
            // }}
            // We can use inline style above to dynamically change the backgroundColor based on the emailNotValid condition
            className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={`label ${passwordNotValid ? "invalid" : ""}`}>
            Password
          </label>
          <input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
