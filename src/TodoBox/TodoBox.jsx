import { uniqueId } from "lodash";
import React, { Component } from "react";
import Item from "./Item";
export default class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: "",
    };
  }
  handleChange = (event) => {
    this.setState(() => ({ value: event.target.value }));
  };
  handleAddItem = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      tasks: [...state.tasks, { value: state.value, id: uniqueId() }],
      value: "",
    }));
  };
  handleRemove = (id) => (event) => {
    event.preventDefault();
    console.log("aaa");
    this.setState((state) => ({
      tasks: state.tasks.filter((elem) => elem.id !== id),
    }));
  };
  render() {
    const { value, tasks } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form className="d-flex">
            <div className="me-3">
              <input
                type="text"
                value={value}
                required=""
                className="form-control"
                placeholder="I am going..."
                onChange={this.handleChange}
              />
            </div>
            <button
              onClick={this.handleAddItem}
              type="submit"
              className="btn btn-primary"
            >
              add
            </button>
          </form>
        </div>
        {tasks.map((task) => (
          <Item key={task.id} task={task} onRemove={this.handleRemove} />
        ))}
      </div>
    );
  }
}
