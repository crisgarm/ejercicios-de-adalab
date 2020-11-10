import React from "react";
import "../stylesheets/App.css";

class Square extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { color: "blue" };
  }
  handleClick() {
    this.setState((prevState) => {
      let newSquare;
      if (prevState.color !== "blue") {
        console.log("Entro en if");
        newSquare = "blue";
      } else {
        newSquare = "red";
        console.log("Entro en else");
      }
      return { color: newSquare };
    });
  }
  render() {
    return <div className={this.state.color} onClick={this.handleClick}></div>;
  }
}

export default Square;
