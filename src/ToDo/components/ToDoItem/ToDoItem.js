import React from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem = ({ para }) => {
  return (
    <li className={classes.item}>
      <form>
        <input className={classes.checkbox} id="checker" type="checkbox" />
        <label htmlFor="checker">{para}</label>
      </form>
    </li>
  );
};

export default ToDoItem;
