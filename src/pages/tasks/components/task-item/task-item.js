import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delTodo, setTodo } from "../../../../store/todo-reducer";
import "./task-item.css";

function TaskItem({ id, title }) {
  let dispatch = useDispatch();
  let [isEditing, setEditing] = useState(false);
  function renderTaskItemText() {
    return isEditing ? (
      <input
        className="edit-text-item"
        value={title}
        placeholder="Write..."
        onChange={(e) => {
          dispatch(setTodo({ id, title: e.target.value }));
        }}
      />
    ) : (
      <div className="text-item">{title}</div>
    );
  }

  
  function renderTaskItemButtons() {
    return (
      <div>
        {isEditing ? (
          <>
            <img
              src={require("../../../../assets/images/save.svg").default}
              className="img"
              onClick={() => {
                setEditing(false);
              }}
            />
            <img
              src={require("../../../../assets/images/del.svg").default}
              className="img"
              onClick={() => {
                dispatch(delTodo({ id }));
              }}
            />
          </>
        ) : (
          <>
            <img
              src={require("../../../../assets/images/edit.svg").default}
              className="img"
              onClick={() => {
                setEditing(true);
              }}
            />
            <img
              src={require("../../../../assets/images/del.svg").default}
              className="img"
              onClick={() => {
                dispatch(delTodo({ id }));
              }}
            />
          </>
        )}
      </div>
    );
  }
  return (
    <div className="item">
      {renderTaskItemText()}
      {renderTaskItemButtons()}
    </div>
  );
}

export default TaskItem;
