import React, { useState } from "react";

import AddForm from "./components/AddForm/AddForm";
import ToDoList from "./components/ToDoList/ToDoList";

import classes from "./ToDo.module.css";

function ToDo() {
  const [openTasks, setOpenTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTaskToOpen = (openTask) => {
    setOpenTasks((prevTasks) => {
      return [openTask, ...prevTasks];
    });
  };

  const addTaskToDone = (doneTask) => {
    setDoneTasks((prevTasks) => {
      return [doneTask, ...prevTasks];
    });
  };

  const handleOpenTask = (openTasks, doneTask) => {
    const doneTaskIndex = openTasks.findIndex((task) => task === doneTask);

    const filteredOpenTasks = openTasks.filter(
      (task, index) => index !== doneTaskIndex
    );

    // reset the Open Tasks list after removing the done tasks
    setOpenTasks(filteredOpenTasks);

    //Adding the task to the Done Task list
    addTaskToDone(doneTask);
  };

  const handleDoneTask = (doneTasks, taskToOpen) => {
    const taskIndex = doneTasks.findIndex((task) => task === taskToOpen);

    const filteredDoneTasks = doneTasks.filter(
      (task, index) => index !== taskIndex
    );

    setDoneTasks(filteredDoneTasks);

    // reset the open tasks after removing the done tasks
    addTaskToOpen(taskToOpen);
  };

  const saveTaskHandler = (enteredTaskData) => addTaskToOpen(enteredTaskData);

  return (
    <main className={classes.wrapper}>
      <h1 className={classes.heading}>To-Do-list</h1>
      <AddForm onSaveTask={saveTaskHandler} />
      <h2>Open Tasks </h2>
      <ToDoList tasks={openTasks} handleTask={handleOpenTask} />
      <h2>Done Tasks</h2>
      <ToDoList tasks={doneTasks} handleTask={handleDoneTask} />
    </main>
  );
}

export default ToDo;
