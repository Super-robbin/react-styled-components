import { styled } from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.invalid ? "#f87171" : "#6b7280")};
`;

// Above, we conditionally set the color by using a function that takes props (set inside the component below as invalid),
// then accessing it as an object props.invalid.

// IMPORTANT: These components, which we build with styled dot,
// do not just use the children prop so that we can wrap them around content like this texture.
// But in addition, they also forward all props we're setting on this styled component
// to the underlying built-in JSX element. So the built-in <label> in this case here.

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: 1px solid ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const CustomInput = ({ label, invalid, ...props }) => {
  return (
    <p>
      <Label $invalid={invalid} >
        {label}
        {/* 
          We can use the above dollar sign so that our invalid won't clash with the invalid built-in prop
          */}
      </Label>
      <Input $invalid={invalid} {...props} />
    </p>
  );
};

export default CustomInput;
