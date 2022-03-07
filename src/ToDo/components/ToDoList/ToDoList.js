import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <ul className={classes.list}>
      {!props.tasks.length && "no tasks"}
      {props.tasks.map((task, index) => (
        <ToDoItem para={task.para} key={index} />
      ))}
    </ul>
  );
};

export default ToDoList;
