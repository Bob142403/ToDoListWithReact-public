import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./create-task.css";
import { addTodo } from "../../../../store/todo-reducer";

function CreateTask() {
  let [title, settitle] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="create">
      <input
        type="text"
        placeholder="Title..."
        className="input"
        value={title}
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />
      <div
        className="create-task"
        onClick={() => {
          dispatch(addTodo(title));
          settitle("");
        }}
      >
        Add Item
      </div>
    </div>
  );
}

export default CreateTask;

