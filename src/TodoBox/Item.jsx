import React from "react";

export default class Item extends React.Component {
  render() {
    const { task, onRemove } = this.props;

    return (
      <div>
        <div class="row">
          <div class="col-auto">
            <button
              onClick={onRemove(task.id)}
              type="button"
              className="btn btn-primary btn-sm"
            >
              -
            </button>
          </div>
          <div className="col">{task.value}</div>
        </div>
        <hr />
      </div>
    );
  }
}
