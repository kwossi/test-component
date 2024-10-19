import styled from "styled-components";
import "./Button.module.css";

const StyledButton = styled.button`
  background-color: ${(props) => props.color || "blue"};
`;

const Button = (props) => (
  <StyledButton color={props.color} onClick={props.onClick} style={props.style}>
    {props.children}
  </StyledButton>
);

export default Button;
