import React from "react";

import styled from "styled-components";

import TasksItem from "./TasksItem";
import Button from "../Button/Button";

import x1 from "../../assets/1.png";
import x2 from "../../assets/2.png";
import x3 from "../../assets/3.png";
import x4 from "../../assets/4.png";

const TasksListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const TasksListButtons = styled.div`
  text-align: right;
  margin-top: 25px;
`;

const TasksList = (props) => {
  const list = [
    {
      id: 1,
      bgColor: "#f6f9fc",
      img: x1,
      title: "VocalIP",
      main_title: `Website design & code`,
      description: "description 1",
    },
    {
      id: 2,
      bgColor: "",
      img: x2,
      title: "LOGICOM",
      main_title: `Website design & code`,
      description: "description 2",
    },
    {
      id: 3,
      bgColor: "#F6F9FC",
      img: x3,
      title: "Coral Coalition",
      main_title: `Website design & code`,
      description: "description 3",
    },
    {
      id: 4,
      bgColor: "#fff7f6",
      img: x4,
      title: "goodbodi",
      main_title: `Website design & code`,
      description: "description 4",
    },
  ];

  return (
    <>
      <TasksListWrapper>
        {list.map(({ id, img, bgColor, ...rest }) => (
          <TasksItem key={id} id={id} bg={img} bgColor={bgColor} {...rest} />
        ))}
      </TasksListWrapper>
      <TasksListButtons>
        <Button
          onClick={() => props.setIsPopupActive(true)}
          label="See more projects"
        />
      </TasksListButtons>
    </>
  );
};

export default TasksList;
