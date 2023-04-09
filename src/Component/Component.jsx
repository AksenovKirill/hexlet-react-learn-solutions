import uniqueId from "lodash/uniqueId";
import React from "react";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      value: 0,
    };
  }
  handleIncrement = () => {
    this.setState((state) => ({
      value: state.values.length ? state.value : 0,
    }));
    this.setState((state) => ({
      value: (state.value += 1),
      values: [...state.values, { value: state.value, id: uniqueId() }],
    }));
  };

  handleDecrement = () => {
    if (this.state.value !== 0) {
      this.setState((state) => ({
        value: (state.value -= 1),
        values: [...state.values, { value: state.value, id: uniqueId() }],
      }));
    }
  };

  handleDelete = (id) => (event) => {
    event.preventDefault();

    this.setState((state) => ({
      values: state.values.filter((elem) => id !== elem.id),
    }));
  };
  render() {
    const { values } = this.state;
    console.log(this.state);
    const items = values
      .map((item) => (
        <button
          key={item.id}
          onClick={this.handleDelete(item.id)}
          type="button"
          className="list-group-item list-group-item-action"
        >
          {item.value}
        </button>
      ))
      .reverse();

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            onClick={this.handleIncrement}
            type="button"
            className="btn btn-outline-success"
          >
            +
          </button>
          <button
            onClick={this.handleDecrement}
            type="button"
            className="btn btn-outline-danger"
          >
            -
          </button>
        </div>
        {!!values.length && <div className="list-group">{items}</div>}
      </div>
    );
  }
}
