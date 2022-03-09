import React from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem = ({ text, handleTask }) => {
  return (
    <li className={classes.item} onClick={handleTask}>
      <p>{text}</p>
    </li>
  );
};

export default ToDoItem;
