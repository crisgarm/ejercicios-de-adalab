import React from "react";
import "../stylesheets/App.css";
import Square from "./Square";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Square cuadradro="blue" />
      </div>
    );
  }
}

export default App;
