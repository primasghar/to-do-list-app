import React, { useState } from "react";

import AddForm from "./components/AddForm/AddForm";
import ToDoList from "./components/ToDoList/ToDoList";

import classes from "./ToDo.module.css";

const DUMMY_TASKS = [
  { para: "Practice React" },
  { para: "Learn Finnish" },
  { para: "Improve drawing skills" },
];

function ToDo() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const saveTaskHandler = (enteredTaskData) => {
    setTasks((prevTasks) => {
      return [enteredTaskData, ...prevTasks];
    });
  };
  return (
    <main className={classes.wrapper}>
      <h1 className={classes.heading}>To-Do-list</h1>
      <AddForm onSaveTask={saveTaskHandler} />
      <h2>Open Tasks </h2>
      <ToDoList tasks={tasks} />
      <h2>Done Tasks</h2>
      <ToDoList tasks={[]} />
    </main>
  );
}

export default ToDo;
