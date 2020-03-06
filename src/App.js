import React, { Component } from "react";
import Todos from "./Components/todoList/todos.jsx";
import AddToDo from "./Components/addTodo/addToDo.jsx";
import Heading from "./Components/heading/heading.jsx";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  completeToDo = todo => {
    todo.complete = !todo.complete;
    this.setState({
      todo
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
    return (
      <div className="App">
        <Heading />
        <AddToDo addTodo={this.addToDo} previousTodos={this.state.todos} />
        <Todos
          todos={this.state.todos}
          deleteTodos={this.deleteToDo}
          completeToDos={this.completeToDo}
        />
      </div>
    );
  }
}

export default App;
