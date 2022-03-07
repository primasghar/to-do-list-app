import React from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem = ({ para }) => {
  return (
    <li className={classes.unit}>
      <div>
        <p>{para}</p>
      </div>
    </li>
  );
};

export default ToDoItem;
