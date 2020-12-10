import React, { useState } from "react";

import styled from "styled-components";

import Popup from "./modules/Popup/Popup";

import Container from "./components/Container/Container";

import TasksList from "./components/Tasks/TasksList";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);

  return (
    <AppWrapper>
      <Container>
        <TasksList setIsPopupActive={setIsPopupActive} />
        <Popup active={isPopupActive} setIsPopupActive={setIsPopupActive} />
      </Container>
    </AppWrapper>
  );
};

export default App;
