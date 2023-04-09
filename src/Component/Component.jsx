import get from "lodash/get";
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
    this.setState((state) => ({ value: state.value + 1 }));
    this.setState((state) => ({
      values: [...state.values, { value: state.value, id: uniqueId() }],
    }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ value: state.value - 1 }));
    this.setState((state) => ({
      values: [...state.values, { value: state.value, id: uniqueId() }],
    }));
  };

  handleDelete = (value) => (event) => {
    event.preventDefault();
    console.log(typeof value);
    this.setState((state) => ({
      values: state.values.filter((elem) => value !== elem.value),
    }));
  };
  render() {
    const { values } = this.state;
    const items = values
      .map((item) => (
        <button
          key={item.id}
          onClick={this.handleDelete(item.value)}
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
        {!!this.state.values.length && (
          <div className="list-group">{items}</div>
        )}
      </div>
    );
  }
}
