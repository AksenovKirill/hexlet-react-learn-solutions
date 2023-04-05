import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
      isRules: false,
      isSubmit: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((state) => ({ ...state, isSubmit: true }));
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState((state) => ({ ...state, isSubmit: false }));
  };

  handleCHhange = ({ target }) => {};

  handleChange = (e, id) => {
    switch (id) {
      case "email":
        this.setState((state) => ({ ...state, email: e.target.value }));
        break;
      case "password":
        this.setState((state) => ({ ...state, password: e.target.value }));
        break;
      case "address":
        this.setState((state) => ({ ...state, address: e.target.value }));
        break;
      case "city":
        this.setState((state) => ({ ...state, city: e.target.value }));
        break;
      case "country":
        this.setState((state) => ({ ...state, country: e.target.value }));
        break;
      case "rules":
        this.setState((state) => ({ ...state, isRules: e.target.checked }));
        break;
      default:
        "no";
        break;
    }
  };
  render() {
    const { email, password, address, city, country, isRules, isSubmit } =
      this.state;

    const form = (
      <form onSubmit={this.handleSubmit} name="myForm">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            onChange={(event) => this.handleChange(event, "email")}
            value={email}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="col-form-label">
            Password
          </label>
          <input
            onChange={(event) => this.handleChange(event, "password")}
            value={password}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">
            Address
          </label>
          <textarea
            onChange={(event) => this.handleChange(event, "address")}
            value={address}
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">
            City
          </label>
          <input
            onChange={(event) => this.handleChange(event, "city")}
            value={city}
            type="text"
            className="form-control"
            name="city"
            id="city"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">
            Country
          </label>
          <select
            onChange={(event) => this.handleChange(event, "country")}
            value={country}
            id="country"
            name="country"
            className="form-control"
          >
            <option value="">Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                onChange={(event) => this.handleChange(event, "rules")}
                checked={isRules}
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );

    const table = (
      <div>
        <button
          onClick={this.handleClick}
          type="button"
          className="btn btn-primary"
        >
          Back
        </button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{String(isRules)}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return isSubmit ? table : form;
  }
}
