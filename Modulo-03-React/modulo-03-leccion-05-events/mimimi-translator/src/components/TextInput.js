import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const input = event.currentTarget.value;
    return this.props.handleChange(input);
  }
  render() {
    console.log(this.props);
    return (
      <form className="form">
        <label className="form__label">Cuéntame más</label>
        <textarea
          id="textarea"
          name="textarea"
          className="textarea"
          rows="20"
          cols="60"
          onChange={this.handleInputChange}
        ></textarea>
      </form>
    );
  }
}

export default TextInput;
