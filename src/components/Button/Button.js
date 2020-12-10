import React from "react";

import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#4dc6e4")};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "#4dc6e4"};
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;

  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;

  padding: 7px 55px;

  transition: opacity 0.4s;

  &:hover {
    opacity: 0.7;
  }
`;

const Button = ({ label, onClick, ...rest }) => {
  return (
    <ButtonWrapper onClick={onClick} {...rest}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
