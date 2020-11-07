import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    if (ev.currentTarget.value.includes("cebolla")) {
      alert("No me gusta la cebolla!!");
    }
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
