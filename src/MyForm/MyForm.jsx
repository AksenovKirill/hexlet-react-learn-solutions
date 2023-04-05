import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
        address: "",
        city: "",
        country: "",
        acceptRules: false,
      },
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

  handleChange = ({ target }) => {
    const { form } = this.state;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ form: { ...form, [target.name]: value } });
  };

  render() {
    const { form, isSubmit } = this.state;
    const renderRows = () =>
      Object.entries(form)
        .sort()
        .map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{typeof value === "boolean" ? value.toString() : value}</td>
          </tr>
        ));

    const formData = (
      <form onSubmit={this.handleSubmit} name="myForm">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            onChange={this.handleChange}
            value={form.email}
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
            onChange={this.handleChange}
            value={form.password}
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
            onChange={this.handleChange}
            value={form.address}
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
            onChange={this.handleChange}
            value={form.city}
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
            onChange={this.handleChange}
            value={form.country}
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
                onChange={this.handleChange}
                checked={form.acceptRules}
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
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    );

    return isSubmit ? table : formData;
  }
}
