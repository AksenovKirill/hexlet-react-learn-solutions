import get from "lodash/get";
import uniqueId from "lodash/uniqueId";
import React from "react";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [], btn: { value: 0, id: "" } };
  }

  handleIncrement = () => {
    this.setState(() => ({
      ...this.state.btn,
      value: (this.state.btn.value += 1),
    }));
    this.setState(() =>
      this.state.values.push({ ...this.state.btn, id: uniqueId() })
    );
  };

  handleDecrement = () => {
    this.setState(() => ({
      ...this.state.btn,
      value: (this.state.btn.value -= 1),
    }));
    this.setState(() =>
      this.state.values.push({ ...this.state.btn, id: uniqueId() })
    );
  };

  handleDeleteLog = (value) => (e) => {
    this.setState(() => ({
      ...this.state,
      values: [...this.state.values.filter((val) => val.value !== value)],
    }));
  };

  render() {
    const { values } = this.state;
    const btns = values
      .map((btn) => (
        <button
          key={btn.id}
          onClick={this.handleDeleteLog(btn.value)}
          type="button"
          className="list-group-item list-group-item-action"
        >
          {btn.value}
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
        {!!this.state.values.length && <div className="list-group">{btns}</div>}
      </div>
    );
  }
}
