import React from "react";

const numbers = [1, 4, 6, 8, 45, 89];

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderNumbers: numbers.map((number) => {
        return <li key={number}>{number}</li>;
      }),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {}

  render() {
    return (
      <>
        <ul>{this.state.renderNumbers}</ul>
        <form>
          <label className="form__label" htmlFor="number">
            Introduce un número:
          </label>
          <input type="number" id="number" onChange={this.handleChange} />
          <label className="form__label" htmlFor="evenNumber">
            <input
              id="evenNumber"
              type="checkbox"
              value="chooseseat"
              name="evenNumber"
            />
            Filtra por números pares:
          </label>
        </form>
      </>
    );
  }
}

export default Numbers;
