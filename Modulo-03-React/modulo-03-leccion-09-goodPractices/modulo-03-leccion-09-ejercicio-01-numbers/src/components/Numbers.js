import React from "react";

const numbers = [1, 4, 6, 8, 45, 89];

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {}

  render() {
    return (
      <>
        <ul className="list"></ul>
        <form>
          <label className="form__label" htmlFor="number">
            Number:
          </label>
          <input type="number" id="number" onChange={this.handleChange} />
        </form>
      </>
    );
  }
}

export default Numbers;
