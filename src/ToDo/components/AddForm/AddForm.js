import React, { useState } from "react";
import classes from "./AddForm.module.css";
import Button from "../../../Shared/Button/Button";

const AddForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const onInputChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      para: enteredTask,
    };
    props.onSaveTask(taskData);
    setEnteredTask("");
  };

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <label htmlFor="task">Enter task</label>
      <input
        type="text"
        id="task"
        className={classes.task}
        onChange={onInputChange}
        value={enteredTask}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddForm;
