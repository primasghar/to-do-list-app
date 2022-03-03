import AddToDo from "./components/AddForm/AddForm";
import ToDoList from "./components/ToDoList/ToDoList";

import classes from "./ToDo.module.css";

function ToDo() {
  return (
    <main>
      <h1 className={classes.heading}>ToDo app</h1>
      <AddToDo />
      <h1>To do</h1>
      <ToDoList />
      <h1>Done</h1>
      <ToDoList />
    </main>
  );
}

export default ToDo;
