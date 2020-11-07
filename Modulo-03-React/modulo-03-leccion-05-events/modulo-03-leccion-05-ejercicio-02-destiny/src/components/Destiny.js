import React from "react";

class Destiny extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    if (ev.currentTarget.value === "Buenos Aires") {
      alert("Tu destino es viajar a " + ev.currentTarget.value);
    } else if (ev.currentTarget.value === "Sydney") {
      alert("Tu destino es viajar a " + ev.currentTarget.value);
    } else if (ev.currentTarget.value === "Praga") {
      alert("Tu destino es viajar a " + ev.currentTarget.value);
    } else if (ev.currentTarget.value === "Boston") {
      alert("Tu destino es viajar a " + ev.currentTarget.value);
    } else if (ev.currentTarget.value === "Tokio") {
      alert("Tu destino es viajar a " + ev.currentTarget.value);
    }
  }
  render() {
    return (
      <form>
        <label> Introduce tu destino:</label>
        <select name="select" onChange={this.handleChange}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
      </form>
    );
  }
}

export default Destiny;
