import get from "lodash/get";
import uniqueId from "lodash/uniqueId";
import React from "react";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [], value: 0 };
  }
  handleIncrement = () => {
    this.setState((state) => [...state.values, { value: (state.value += 1) }]);
  };
  render() {
    const { values } = this.state;
    console.log(this.state);
    // const items = values
    //   .map((item) => (
    //     <button
    //       key={item.id}
    //       onClick={this.handleDeleteLog(item.value)}
    //       type="button"
    //       className="list-group-item list-group-item-action"
    //     >
    //       {item.value}
    //     </button>
    //   ))
    //   .reverse();

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
        {/* {!!this.state.values.length && (
          <div className="list-group">{items}</div>
        )} */}
      </div>
    );
  }
}
