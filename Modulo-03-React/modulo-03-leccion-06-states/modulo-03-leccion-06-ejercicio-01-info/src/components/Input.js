import React from "react";

class Input extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { mensaje: "" };
  }

  handleChange(ev) {
    this.setState({ mensaje: ev.currentTarget.value });
  }

  render() {
    return (
      <>
        <label className="label">Escribe algo en el input</label>
        <input className="input" type="text" onKeyUp={this.handleChange} />
        <p>{this.state.mensaje}</p>
      </>
    );
  }
}

export default Input;
