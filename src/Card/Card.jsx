import React from "react";

const Title = ({ children }) => <h4 className="card-title">{children}</h4>;
const Text = ({ children }) => <p className="card-text">{children}</p>;
const Body = ({ children }) => <div className="card-body">{children}</div>;

export default class Card extends React.Component {
  static Body = Body;

  static Title = Title;

  static Text = Text;

  render() {
    const { children } = this.props;
    return <div className="card">{children}</div>;
  }
}
