import React from "react";

import styled from "styled-components";

const InputWrapper = styled.input`
  background-color: #fff;
  width: 100%;

  font-family: "Lato";
  font-weight: 400;
  font-size: 14px;
  color: #c4c4c4;
  padding: 10px 5px;

  ::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

const Input = ({ placeholder }) => {
  return <InputWrapper placeholder={placeholder}></InputWrapper>;
};

export default Input;
