import React, { Component } from "react";
import Todos from "./Components/todoList/todos.jsx";
import AddToDo from "./Components/addTodo/addToDo.jsx";

import "./App.scss";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy food" },
      { id: 2, content: "Buy beer" }
    ]
  };

  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addToDo = todo => {
    let todos = [...this.state.todos, todo];

    todo.id = todo.content;
    this.setState({
      todos
    });
  };

  render() {
    const currentTodos = this.state.todos;
    console.log(currentTodos);
    return (
      <div className="App">
        <AddToDo addTodo={this.addToDo} />
        <Todos todos={this.state.todos} deleteTodos={this.deleteToDo} />
      </div>
    );
  }
}

export default App;
