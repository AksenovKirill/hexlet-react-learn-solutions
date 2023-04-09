import React, { Component } from "react";

export default class TodoBox extends Component {
  render() {
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex">
            <div className="me-3">
              <input
                type="text"
                value=""
                required=""
                className="form-control"
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
