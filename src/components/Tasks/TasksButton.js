import React from "react";

import styled from "styled-components";

const TasksButtonWrapper = styled.button`
  background-color: ${(props) => (props.active ? "transparent" : "#a6cc45")};
  height: 90px;
  width: 90px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  &:hover {
    opacity: 0.7;
  }
`;

const TasksButtonIcon = styled.span`
  display: inline-block;
  height: 25px;
  width: 25px;
  color: #fff;
  font-weight: 700;
  font-size: 25px;
`;

const TasksButton = ({ active, onClick }) => {
  return (
    <TasksButtonWrapper active={active} onClick={onClick}>
      <TasksButtonIcon>{!active ? "+" : "-"}</TasksButtonIcon>
    </TasksButtonWrapper>
  );
};

export default TasksButton;
