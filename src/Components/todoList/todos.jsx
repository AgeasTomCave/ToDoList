import React from "react";
import "./todo.scss";

const ToDos = ({ todos, editTodos, deleteTodos, completeToDos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="c-todo__item" key={todo.id}>
          <p className={`c-complete--${todo.complete}`}>{todo.content}</p>
          <button
            onClick={() => {
              editTodos(todo.id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteTodos(todo.id);
            }}
          >
            Remove
          </button>
          <input
            type="checkbox"
            onClick={() => {
              completeToDos(todo);
            }}
          ></input>
        </div>
      );
    })
  ) : (
    <p>You've completed all of your todos</p>
  );
  return <div className="c-todo">{todoList}</div>;
};

export default ToDos;
