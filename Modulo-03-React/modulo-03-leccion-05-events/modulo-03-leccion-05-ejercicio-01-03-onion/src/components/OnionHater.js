import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isHating = false;
  }

  handleChange(ev) {
    const appDiv = document.querySelector(".App");
    if (ev.currentTarget.value.includes("cebolla")) {
      this.isHating = true;
      appDiv.classList.add("red");
    } else {
      this.isHating = false;
      appDiv.classList.remove("red");
    }
    this.forceUpdate();
  }

  render() {
    return (
      <textarea
        id="textarea"
        name="textarea"
        rows="12"
        cols="30"
        onChange={this.handleChange}
      >
        Cosas que no me gustan: la coliflor, las acelgas,
      </textarea>
    );
  }
}

export default OnionHater;
