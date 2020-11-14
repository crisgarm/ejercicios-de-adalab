import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isHating = "";
  }

  handleChange(ev) {
    if (ev.currentTarget.value.toLowerCase().includes("cebolla")) {
      this.isHating = "red";
    } else {
      this.isHating = "";
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className={`container ${this.isHating}`}>
        <textarea
          id="textarea"
          name="textarea"
          rows="12"
          cols="30"
          onChange={this.handleChange}
        >
          Cosas que no me gustan: la coliflor, las acelgas,
        </textarea>
      </div>
    );
  }
}

export default OnionHater;
