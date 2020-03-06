import React from "react";

const ToDos = ({ todos, deleteTodos, completeToDos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="c-todo__item" key={todo.id}>
          <p>{todo.content}</p>
          <button
            onClick={() => {
              deleteTodos(todo.id);
            }}
          >
            Delete todo
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
