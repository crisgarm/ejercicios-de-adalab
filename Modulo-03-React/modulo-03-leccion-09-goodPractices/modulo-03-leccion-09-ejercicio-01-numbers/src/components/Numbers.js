import React from "react";

const numbers = [1, 4, 6, 8, 45, 89, 999, 1200, 13498];

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      checked: false,
    };
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCheckInput = this.handleCheckInput.bind(this);
  }

  handleTextInput(ev) {
    this.setState({
      number: ev.target.value,
    });
  }

  handleCheckInput(ev) {
    this.setState({
      checked: ev.target.checked,
    });
  }

  renderNumbers() {
    const stateNumber =
      this.state.number === "" ? -Infinity : parseInt(this.state.number);
    const newNumbers = numbers
      .filter((number) => number > stateNumber)
      .filter((number) => {
        if (this.state.checked === true) {
          return number % 2 === 0;
        } else {
          return true;
        }
      });

    return (
      <ul>
        {newNumbers.map((number) => (
          <div>{number}</div>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <>
        <ul>{this.state.renderNumbers}</ul>
        <form>
          <label className="form__label" htmlFor="number">
            Introduce un número:
          </label>
          <input type="number" id="number" onChange={this.handleTextInput} />
          <label className="form__label" htmlFor="evenNumber">
            <input
              id="evenNumber"
              type="checkbox"
              value="evenNumber"
              name="evenNumber"
              onChange={this.handleCheckInput}
            />
            Filtra por números pares:
          </label>
        </form>
        {this.renderNumbers()}
      </>
    );
  }
}

export default Numbers;
