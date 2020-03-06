import React, { Component } from "react";
import "./addToDo.scss";

class AddToDo extends Component {
  state = {
    content: "",
    complete: false,
    errors: []
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = [];
    const newTodo = this.state.content;

    if (newTodo === "") {
      errors.push("Please enter a value");
    }

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    this.setState({
      errors: []
    });

    this.props.addTodo(this.state);

    /**
     * Reset the input to be empty
     */
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <form className="c-add-form" onSubmit={this.handleSubmit}>
        <input
          className="c-add-form__input"
          type="text"
          placeholder="Add a todo"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <button
          className="c-add-form__button c-button--add"
          type="submit"
          value="Submit"
        >
          Add
        </button>
        {this.state.errors.map(error => (
          <p className="c-error" key={error}>
            {error}
          </p>
        ))}
      </form>
    );
  }
}

export default AddToDo;
