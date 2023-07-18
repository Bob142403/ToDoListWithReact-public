import { useSelector } from "react-redux";

import CreateTask from "./components/create-task/create-task.js";
import TaskItem from "./components/task-item/task-item.js";
import "./task-list.css";

function TaskList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      <div className="title">To Do</div>
      <CreateTask />
      {todos.map((elem) => {
        return <TaskItem key={elem.id} id={elem.id} title={elem.title} />;
      })}
    </>
  );
}

export default TaskList;
