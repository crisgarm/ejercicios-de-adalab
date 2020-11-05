import React from "react";
import "../stylesheets/App.css";

class HalfPage extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="half-page">{this.props.children}</div>;
  }
}

export default HalfPage;
