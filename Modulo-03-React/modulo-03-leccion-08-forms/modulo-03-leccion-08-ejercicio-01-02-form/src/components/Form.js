import React from "react";
import Card from "./Card";

class Form extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      lang: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ name: event.currentTarget.value });
  }
  handleTextareaChange(event) {
    this.setState({ description: event.currentTarget.value });
  }
  handleSelectChange(event) {
    this.setState({ lang: event.currentTarget.value });
  }

  render() {
    return (
      <>
        <form>
          <label className="form__label" htmlFor="name">
            Nombre:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label className="form__label" htmlFor="description">
            Descripción:
          </label>
          <textarea
            id="description"
            type="text"
            rows="10"
            cols="30"
            value={this.state.description}
            onChange={this.handleTextareaChange}
          />
          <label className="form__label" htmlFor="lang">
            Idioma:
          </label>
          <select id="lang" name="lang" onChange={this.handleSelectChange}>
            <option value="Español" name="lang">
              Español
            </option>
            <option value="Inglés" name="lang">
              Inglés
            </option>
            <option value="Francés" name="lang">
              Francés
            </option>
          </select>
        </form>
        <Card
          name={this.state.name}
          description={this.state.description}
          lang={this.state.lang}
        />
      </>
    );
  }
}

export default Form;
