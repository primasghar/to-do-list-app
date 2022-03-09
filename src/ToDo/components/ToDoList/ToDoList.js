import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = ({ tasks, handleTask }) => {
  return (
    <ul className={classes.list}>
      {!tasks.length && "No tasks"}
      {tasks.map((task, index) => (
        <ToDoItem
          text={task.text}
          key={index}
          handleTask={() => handleTask(tasks, task)}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
