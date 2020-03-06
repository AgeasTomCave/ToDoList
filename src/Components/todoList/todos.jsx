import React from "react";
import "./todo.scss";

const ToDos = ({ todos, deleteTodos, completeToDos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="c-todo__item" key={todo.id}>
          <div className={`c-complete--${todo.complete}`}>
            <p className="c-todo__label">{todo.content}</p>
          </div>
          <button
            className="c-button--remove"
            onClick={() => {
              deleteTodos(todo.id);
            }}
          >
            Remove
          </button>
          <label className="c-container">
            <input
              type="checkbox"
              onClick={() => {
                completeToDos(todo);
              }}
            ></input>
            <span className="c-checkmark"></span>
          </label>
        </div>
      );
    })
  ) : (
    <p>You've completed all of your todos</p>
  );
  return <div className="c-todo">{todoList}</div>;
};

export default ToDos;
