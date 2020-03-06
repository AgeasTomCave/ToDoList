import React, { Component } from "react";
// import TodoList from "./Components/todoList/todoList.jsx";
import AddToDo from "./Components/addTodo/addToDo.jsx";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "Buy food" }]
  };

  render() {
    return (
      <div className="App">
        <addToDo />
      </div>
    );
  }
}

export default App;
