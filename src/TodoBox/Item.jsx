import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-auto">
            <button type="button" class="btn btn-primary btn-sm">
              -
            </button>
          </div>
          <div class="col">second</div>
        </div>
        <hr />
      </div>
    );
  }
}
