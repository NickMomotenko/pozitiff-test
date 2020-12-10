import React from "react";

import styled from "styled-components";

const TextareaWrapper = styled.textarea`
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

const Textarea = ({ placeholder }) => {
  return <TextareaWrapper placeholder={placeholder}></TextareaWrapper>;
};

export default Textarea;
