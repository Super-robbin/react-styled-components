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

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
`;
// IMPORTANT: These components, which we build with styled dot,
// do not just use the children prop so that we can wrap them around content like this texture.
// But in addition, they also forward all props we're setting on this styled component
// to the underlying built-in JSX element. So the built-in <label> in this case here.

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  color: #374151;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
          <Label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Email
          </Label>
          {/* 
          We can use the above approach to always have label, but also have invalid if emailNotValid is truthy
          */}
          <Input
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
          <Label className={`label ${passwordNotValid ? "invalid" : ""}`}>
            Password
          </Label>
          <Input
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
