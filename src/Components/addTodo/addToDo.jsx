import React, { Component } from "react";
import "./addToDo.scss";

class AddToDo extends Component {
  state = {
    content: "",
    errors: []
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: []
    });
    const errors = [];
    const newTodo = this.state.content;

    if (newTodo === "") {
      errors.push("Value can't be empty");
    }

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add a new todo:</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <button type="submit" value="Submit">
          Add
        </button>
        {this.state.errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
      </form>
    );
  }
}

export default AddToDo;
