import React from "react";
import "../stylesheets/App.css";
import TextInput from "./TextInput";
import MIMIMITranslator from "./MIMIMITranslator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.inputValue = "";
  }
  handleChange(inputValue) {
    this.inputValue = inputValue;
    this.forceUpdate();
    console.log("ha cambiado", inputValue);
  }
  render() {
    return (
      <div className="App">
        <TextInput handleChange={this.handleChange} />
        <MIMIMITranslator text={this.inputValue} />
      </div>
    );
  }
}

export default App;
