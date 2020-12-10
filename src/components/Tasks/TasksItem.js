import React, { useState } from "react";

import styled from "styled-components";

import TasksButton from "./TasksButton";

import Button from "../Button/Button";

const TasksItemWrapper = styled.li`
  width: 50%;
  height: 476px;
  position: relative;
  overflow: hidden;
  padding: 20px;
  background: url(${(props) => props.bg}) 50% 50% no-repeat;
  background-size: ${(props) => (props.id == 2 ? "auto" : "cover")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
`;

const TasksItemTitle = styled.div`
  font-family: "Rubik";
  font-size: 32px;
  font-weight: 500;
  color: #466d8a;
  transition: all 0.4s;
  text-align: right;
`;

const TasksItemMainTitle = styled.div`
  font-family: "Rubik";
  font-size: 48px;
  line-height: 48px;
  font-weight: 500;

  color: #fff;
`;

const TasksItemDescription = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  text-align: right;
  margin-top: 10px;
`;

const TasksItemContentHidden = styled.div`
  position: absolute;
  top: ${(props) => (props.active ? "0" : "-100%")};
  left: 0;
  transition: top 0.5s;
  width: 100%;
  height: 100%;
  background-color: rgba(166, 204, 69, 0.7);
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${TasksItemTitle} {
    color: #fff;
  }

  ${TasksItemMainTitle} {
    text-align: center;
  }
`;

const TasksItemContentHiddenHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const TasksItemContentHiddenButton = styled.div`
  text-align: center;
`;

const TasksItem = (props) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  console.log(props.bg);
  return (
    <TasksItemWrapper id={props.id} bg={props.bg} bgColor={props.bgColor}>
      <TasksButton active={active} onClick={onClick} />

      <TasksItemTitle active={active}>{props.title}</TasksItemTitle>

      <TasksItemContentHidden active={active}>
        <TasksItemContentHiddenHeader>
          <TasksItemTitle active={active}>{props.title}</TasksItemTitle>
          <TasksItemDescription>{props.description}</TasksItemDescription>
        </TasksItemContentHiddenHeader>
        <TasksItemMainTitle>{props.main_title}</TasksItemMainTitle>
        <TasksItemContentHiddenButton>
          <Button
            label="Visit project"
            borderColor="#fff"
            bg="transparent"
            onClick={onClick}
          />
        </TasksItemContentHiddenButton>
      </TasksItemContentHidden>
    </TasksItemWrapper>
  );
};

export default TasksItem;
