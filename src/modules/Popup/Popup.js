import React from "react";

import styled from "styled-components";

import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";

const PopupWrapper = styled.div`
  width: 410px;
  max-width: 100%;
  padding: 10px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: #7c9cac;
  transition: opacity 0.4s;
  transition-delay: 0.2s;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? "1" : "0")};
`;

const PopupTitle = styled.div`
  font-family: "Saira Extra Condensed", sans-serif;
  font-weight: 400;
  font-size: 38px;
  color: #fff;
`;

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PopupRow = styled.div`
  margin-bottom: 10px;

  &::last-child {
    margin-bottom: 0;
  }
`;

const PopupCloseButton = styled.button`
  color: #fff;
  font-size: 25px;
`;

const Popup = ({ active, setIsPopupActive }) => {
  return (
    <PopupWrapper active={active}>
      <PopupHeader>
        <PopupTitle>Send</PopupTitle>
        <PopupCloseButton onClick={() => setIsPopupActive(false)}>
          x
        </PopupCloseButton>
      </PopupHeader>
      <PopupRow>
        <Input placeholder="Your name" />
      </PopupRow>
      <PopupRow>
        <Input placeholder="Your email" />
      </PopupRow>
      <PopupRow>
        <Input placeholder="Your Contact Number" />
      </PopupRow>
      <PopupRow>
        <Textarea placeholder="Your Contact Number" />
      </PopupRow>
    </PopupWrapper>
  );
};

export default Popup;
